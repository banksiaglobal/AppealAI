Class Production.Operation.FhirOut Extends HS.FHIRServer.Interop.HTTPOperation
{

Method OnMessage(pInteropRequest As HS.FHIRServer.Interop.Request, Output pInteropResponse As Production.Message.Response) As %Status
{
    set tSC=$$$OK

    try {
        #dim fhirRequest As HS.FHIRServer.API.Data.Request = pInteropRequest.Request

        // ServiceName is a setting on this host, but can be overridden
		// request AdditionalInfo "ServiceName" value.
        set serviceName = fhirRequest.AdditionalInfo.GetAt("ServiceName")
		if serviceName="" {
			set serviceName = ..ServiceName
			if serviceName="" {
				$$$ThrowStatus($$$ERROR($$$HSFHIRErrServiceNameNotSpecified))
			}
		}

        set prefer = fhirRequest.Prefer
		set sessionId = fhirRequest.AdditionalInfo.GetAt("SessionId")
		set oauthClientName = fhirRequest.AdditionalInfo.GetAt("USER:OAuthClient")
		set oauthToken = fhirRequest.AdditionalInfo.GetAt("USER:OAuthToken")
		set oauthSendType = fhirRequest.AdditionalInfo.GetAt("OAuthSendType")
		
		// Parse any header info from the FHIR API request and populate it
		// into an array that the HTTP client object will understand. 
		for {
			set itemValue = fhirRequest.AdditionalInfo.GetNext(.itemName)
			if itemName = "" Quit
			if $ZConvert($Extract(itemName, 1, 7), "U") '= "HEADER:" Continue
			set requestHeaders($Translate($ZStrip($Extract(itemName, 8, *),"<>W"), "_", "-")) = itemValue
		}

        // Create the HTTP client object anew on each request, as instantiation
		// information could change between requests.
		set httpClient = ##class(HS.FHIRServer.RestClient.HTTP).CreateInstance(serviceName, prefer, sessionId, oauthClientName, oauthToken, oauthSendType)
		
		// Set the Accept header. Charset is optional for Accept, leave it off.
		do httpClient.SetResponseFormat(fhirRequest.ResponseFormatCode, "")
		
		if $Data(requestHeaders) {
			do httpClient.SetOtherRequestHeaders(.requestHeaders)
		}

        set pOtherRequestHeaders("content-type") = "application/fhir+json"
		do httpClient.SetOtherRequestHeaders(.pOtherRequestHeaders)

		if pInteropRequest.QuickStreamId '= "" {
			set quickStreamIn = ##class(HS.SDA3.QuickStream).%OpenId(pInteropRequest.QuickStreamId,, .tSC)
			$$$ThrowOnError(tSC)
			$$$HSTRACE("Request QuickStream", "quickStreamIn", quickStreamIn)
			$$$ThrowOnError(quickStreamIn.Rewind())
			// Set the Content-Type header. Required charset for FHIR content is UTF-8.
			do httpClient.SetRequestFormat(fhirRequest.RequestFormatCode, "UTF-8")
		} else {
			set quickStreamIn = ""
		}

        set path = fhirRequest.RequestPath
		if $Extract(path)="/" Set path = $Extract(path, 2, *)
		if $Extract(path,*)="/" Set path = $Extract(path, 1, *-1)
		set pathLen = $Length(path, "/")
		set pathP1 = $Piece(path, "/", 1)
		set pathP2 = $Piece(path, "/", 2)
		set pathP3 = $Piece(path, "/", 3)
		set pathP4 = $Piece(path, "/", 4)
		
		if pathLen>4 {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
		} elseif (pathLen=4) && (pathP3'="_history") {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
		}

        // Leading $ indicates operation name. Must be on last piece of path.
		set operationPos = 0
		for i = 1:1:pathLen {
			if $Extract($Piece(path, "/", i))="$" {
				if i<pathLen {
					$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
				} else {
					set operationPos = i
				}
			}
		}

        set method = $ZConvert(fhirRequest.RequestMethod, "U")
		set evalMethod = $Select(method="HEAD":"GET", 1:method)
		
		set queryString = fhirRequest.QueryString
		
		// Evaluate based on request method + path. GET and HEAD considered equivalent.
		#dim clientResponse As HS.FHIRServer.API.Data.RestClient.Response

        if evalMethod="PUT" {
			// pathP2 is Resource Id
			If pathP2'="" {
				Set clientResponse = httpClient.Update(pathP1, pathP2, quickStreamIn, fhirRequest.IfMatch, queryString)
			} Else {
				Set clientResponse = httpClient.ConditionalUpdate(pathP1, quickStreamIn, queryString)
			}
			
		} elseif evalMethod="DELETE" {
			// pathP2 is Resource Id
			if pathP2'="" {
				set clientResponse = httpClient.Delete(pathP1, pathP2, queryString)
			} else {
				set clientResponse = httpClient.ConditionalDelete(pathP1, queryString)
			}
			
		} elseif evalMethod="PATCH" {
			// pathP2 is Resource Id
			if pathP2'="" {
				set clientResponse = httpClient.Patch(pathP1, pathP2, quickStreamIn, fhirRequest.IfMatch, queryString)
			} else {
				set clientResponse = httpClient.ConditionalPatch(pathP1, quickStreamIn, queryString)
			}
			
		} elseif path="metadata" {
			if evalMethod="GET" {
				set clientResponse = httpClient.Metadata(queryString)
			}
			
		} elseif path="" {
			if evalMethod="POST" {
				set clientResponse = httpClient.Batch(quickStreamIn, queryString)
			} elseif evalMethod="GET" {
				// Search All GET
				set clientResponse = httpClient.Search(method, , , , queryString)
			}
			
		} elseif path["_history" {
			if evalMethod="GET" {
				if path="_history" {
					// History All
					set clientResponse = httpClient.History(method, , , , , , queryString)
					
				} elseif pathP3="_history" {
					if pathP4'="" {
						set clientResponse = httpClient.VRead(method, pathP1, pathP2, pathP4, queryString)
					} else {
						// History Instance
						set clientResponse = httpClient.History(method, pathP1, pathP2, , , , queryString)
					}
					
				} elseif pathP2="_history" {
					// History Type
					set clientResponse = httpClient.History(method, pathP1, , , , , queryString)
				}
			}
						
		} elseif path["_search" {
			if evalMethod="POST" {
				if path="_search" {
					// Search All POST
					set clientResponse = httpClient.Search(method, , , , quickStreamIn.Read())
					
				} elseif pathP2="_search" {
					// Search Type POST
					set clientResponse = httpClient.Search(method, pathP1, , , quickStreamIn.Read())
				}
			}
			
		} elseif operationPos {
			if (evalMethod="GET") || (evalMethod="POST") {
				if operationPos=3 {
					set clientResponse = httpClient.Operation(method, pathP3, pathP1, pathP2, quickStreamIn, queryString)
				} elseIf operationPos=2 {
					set clientResponse = httpClient.Operation(method, pathP2, pathP1, , quickStreamIn, queryString)
				} elseif operationPos=1 {
					set clientResponse = httpClient.Operation(method, pathP1, , , quickStreamIn, queryString)
				}
			}
			
		} elseif evalMethod = "GET" {
			if pathP1'="" {
				if (pathP2'="") && (pathP3'="") {
					// Search Compartment
					set clientResponse = httpClient.Search(method, pathP3, pathP1, pathP2, queryString)
				} elseif pathP2'="" {
					// Read, Conditional Read
					if (fhirRequest.IfNoneMatch="") && (fhirRequest.IfModifiedSince="") {
						set clientResponse = httpClient.Read(method, pathP1, pathP2, queryString)
					} else {
						set clientResponse = httpClient.ConditionalRead(method, pathP1, pathP2, fhirRequest.IfNoneMatch, fhirRequest.IfModifiedSince, queryString)
					}
				} else {
					// Search Type
					set clientResponse = httpClient.Search(method, pathP1, , , queryString)
				}
			}
			
		} elseif evalMethod="POST" {
			if fhirRequest.IfNoneExist="" {
				set clientResponse = httpClient.Create(pathP1, quickStreamIn, queryString)
			} else {
				set clientResponse = httpClient.ConditionalCreate(pathP1, quickStreamIn, fhirRequest.IfNoneExist, queryString)
			}
		}
		
		if '$IsObject($Get(clientResponse)) {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidMethodAndPath, fhirRequest.RequestMethod, fhirRequest.RequestPath))
		}
		
		set apiResponse = ##class(HS.FHIRServer.API.Data.Response).%New()
		set apiResponse.ETag = clientResponse.ETag
		set apiResponse.Id = clientResponse.Id
		set apiResponse.IsPrettyOut = clientResponse.IsPrettyOut
		set apiResponse.LastModified = clientResponse.LastModified
		set apiResponse.Location = clientResponse.Location
		// API response ResponseFormatCode holds a simple code such as $$$FHIRContentCodeJSON or $$$FHIRContentCodeXML.
		if clientResponse.ResponseFormat [ "application/fhir+json" {
			set apiResponse.ResponseFormatCode = $$$FHIRContentCodeJSON
		} elseif clientResponse.ResponseFormat [ "application/fhir+xml" {
			set apiResponse.ResponseFormatCode = $$$FHIRContentCodeXML
		}
		
		set apiResponse.Status = clientResponse.Status
		set apiResponse.VId = clientResponse.VId
		
		set pInteropResponse.Result = apiResponse
		#; // RestHandler needs this CharSet value to trigger proper handling
		#; // of UTF-8 encoding when returning payload back over HTTP.
		#; set pInteropResponse.CharSet = "UTF-8"
		#; set pInteropResponse.ContentType = clientResponse.ResponseFormat
		
		#; if $IsObject(clientResponse.Payload) {
		#; 	set quickStreamOut = ##class(HS.SDA3.QuickStream).%New()
		#; 	set pInteropResponse.QuickStreamId = quickStreamOut.%Id()
		#; 	$$$ThrowOnError(quickStreamOut.CopyFrom(clientResponse.Payload))
		#; 	$$$HSTRACE("Response QuickStream", "quickStreamOut", quickStreamOut)
		#; 	$$$ThrowOnError(quickStreamOut.Rewind())
		#; }
        
    }
    catch eException {
        set tSC = eException.AsStatus()
		if $$$HSTRACING {
			if (($IsObject($Get(quickStreamIn))) && (quickStreamIn.%Extends("%Stream.Object"))) {	
				do quickStreamIn.Rewind()
				$$$HSTRACEERROR("Request QuickStream", "quickStreamIn", quickStreamIn)
			}
			#; if (($IsObject($Get(quickStreamOut))) && (quickStreamOut.%Extends("%Stream.Object"))) {	
			#; 	do quickStreamOut.Rewind()
			#; 	$$$HSTRACEERROR("Response QuickStream", "quickStreamOut", quickStreamOut)
			#; }
		}
    }
}

}
