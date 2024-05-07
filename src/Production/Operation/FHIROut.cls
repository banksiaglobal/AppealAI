Class Production.Operation.FHIROut Extends HS.FHIRServer.Interop.HTTPOperation
{

Method DispatchRequest(pInteropRequest As HS.FHIRServer.Interop.Request, Output pInteropResponse As HS.FHIRServer.Interop.Response) As %Status
{
    set tSC = $$$OK
	
	Try {
		#dim fhirRequest As HS.FHIRServer.API.Data.Request = pInteropRequest.Request
		
		$$$ThrowOnError(pInteropRequest.NewResponse(.pInteropResponse))
		
		// ServiceName is a setting on this host, but can be overridden
		// request AdditionalInfo "ServiceName" value.
		set serviceName = fhirRequest.AdditionalInfo.GetAt("ServiceName")
		If serviceName="" {
			Set serviceName = ..ServiceName
			If serviceName="" {
				$$$ThrowStatus($$$ERROR($$$HSFHIRErrServiceNameNotSpecified))
			}
		}
		
		Set prefer = fhirRequest.Prefer
		Set sessionId = fhirRequest.AdditionalInfo.GetAt("SessionId")
		Set oauthClientName = fhirRequest.AdditionalInfo.GetAt("USER:OAuthClient")
		Set oauthToken = fhirRequest.AdditionalInfo.GetAt("USER:OAuthToken")
		Set oauthSendType = fhirRequest.AdditionalInfo.GetAt("OAuthSendType")
		
		// Parse any header info from the FHIR API request and populate it
		// into an array that the HTTP client object will understand. 
		For {
			Set itemValue = fhirRequest.AdditionalInfo.GetNext(.itemName)
			If itemName = "" Quit
			If $ZConvert($Extract(itemName, 1, 7), "U") '= "HEADER:" Continue
			Set requestHeaders($Translate($ZStrip($Extract(itemName, 8, *),"<>W"), "_", "-")) = itemValue
		}
		
		// Create the HTTP client object anew on each request, as instantiation
		// information could change between requests.
		Set httpClient = ##class(HS.FHIRServer.RestClient.HTTP).CreateInstance(serviceName, prefer, sessionId, oauthClientName, oauthToken, oauthSendType)
		
		// Set the Accept header. Charset is optional for Accept, leave it off.
		Do httpClient.SetResponseFormat(fhirRequest.ResponseFormatCode, "")
		
		If $Data(requestHeaders) {
			Do httpClient.SetOtherRequestHeaders(.requestHeaders)
		}
		
		Set pOtherRequestHeadersAPIKey("X-API-Key") = ..XApiKey
		Set pOtherRequestHeadersAPIKey("content-type") = "application/fhir+json"
		Do httpClient.SetOtherRequestHeaders(.pOtherRequestHeadersAPIKey)
		
		If pInteropRequest.QuickStreamId '= "" {
			Set quickStreamIn = ##class(HS.SDA3.QuickStream).%OpenId(pInteropRequest.QuickStreamId,, .tSC)
			$$$ThrowOnError(tSC)
			$$$HSTRACE("Request QuickStream", "quickStreamIn", quickStreamIn)
			$$$ThrowOnError(quickStreamIn.Rewind())
			// Set the Content-Type header. Required charset for FHIR content is UTF-8.
			Do httpClient.SetRequestFormat(fhirRequest.RequestFormatCode, "UTF-8")
		} Else {
			Set quickStreamIn = ""
		}
		
		Set path = fhirRequest.RequestPath
		If $Extract(path)="/" Set path = $Extract(path, 2, *)
		If $Extract(path,*)="/" Set path = $Extract(path, 1, *-1)
		Set pathLen = $Length(path, "/")
		Set pathP1 = $Piece(path, "/", 1)
		Set pathP2 = $Piece(path, "/", 2)
		Set pathP3 = $Piece(path, "/", 3)
		Set pathP4 = $Piece(path, "/", 4)
		
		If pathLen>4 {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
		} ElseIf (pathLen=4) && (pathP3'="_history") {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
		}
		
		// Leading $ indicates operation name. Must be on last piece of path.
		Set operationPos = 0
		For i = 1:1:pathLen {
			If $Extract($Piece(path, "/", i))="$" {
				If i<pathLen {
					$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidRequestPath, fhirRequest.RequestPath))
				} Else {
					Set operationPos = i
				}
			}
		}
		
		Set method = $ZConvert(fhirRequest.RequestMethod, "U")
		Set evalMethod = $Select(method="HEAD":"GET", 1:method)
		
		Set queryString = fhirRequest.QueryString
		
		// Evaluate based on request method + path. GET and HEAD considered equivalent.
		
		#dim clientResponse As HS.FHIRServer.API.Data.RestClient.Response
		
		If evalMethod="PUT" {
			// pathP2 is Resource Id
			If pathP2'="" {
				Set clientResponse = httpClient.Update(pathP1, pathP2, quickStreamIn, fhirRequest.IfMatch, queryString)
			} Else {
				Set clientResponse = httpClient.ConditionalUpdate(pathP1, quickStreamIn, queryString)
			}
			
		} ElseIf evalMethod="DELETE" {
			// pathP2 is Resource Id
			If pathP2'="" {
				Set clientResponse = httpClient.Delete(pathP1, pathP2, queryString)
			} Else {
				Set clientResponse = httpClient.ConditionalDelete(pathP1, queryString)
			}
			
		} ElseIf evalMethod="PATCH" {
			// pathP2 is Resource Id
			If pathP2'="" {
				Set clientResponse = httpClient.Patch(pathP1, pathP2, quickStreamIn, fhirRequest.IfMatch, queryString)
			} Else {
				Set clientResponse = httpClient.ConditionalPatch(pathP1, quickStreamIn, queryString)
			}
			
		} ElseIf path="metadata" {
			If evalMethod="GET" {
				Set clientResponse = httpClient.Metadata(queryString)
			}
			
		} ElseIf path="" {
			If evalMethod="POST" {
				Set clientResponse = httpClient.Batch(quickStreamIn, queryString)
			} ElseIf evalMethod="GET" {
				// Search All GET
				Set clientResponse = httpClient.Search(method, , , , queryString)
			}
			
		} ElseIf path["_history" {
			If evalMethod="GET" {
				If path="_history" {
					// History All
					Set clientResponse = httpClient.History(method, , , , , , queryString)
					
				} ElseIf pathP3="_history" {
					If pathP4'="" {
						Set clientResponse = httpClient.VRead(method, pathP1, pathP2, pathP4, queryString)
					} Else {
						// History Instance
						Set clientResponse = httpClient.History(method, pathP1, pathP2, , , , queryString)
					}
					
				} ElseIf pathP2="_history" {
					// History Type
					Set clientResponse = httpClient.History(method, pathP1, , , , , queryString)
				}
			}
						
		} ElseIf path["_search" {
			If evalMethod="POST" {
				If path="_search" {
					// Search All POST
					Set clientResponse = httpClient.Search(method, , , , quickStreamIn.Read())
					
				} ElseIf pathP2="_search" {
					// Search Type POST
					Set clientResponse = httpClient.Search(method, pathP1, , , quickStreamIn.Read())
				}
			}
			
		} ElseIf operationPos {
			If (evalMethod="GET") || (evalMethod="POST") {
				If operationPos=3 {
					Set clientResponse = httpClient.Operation(method, pathP3, pathP1, pathP2, quickStreamIn, queryString)
				} ElseIf operationPos=2 {
					Set clientResponse = httpClient.Operation(method, pathP2, pathP1, , quickStreamIn, queryString)
				} ElseIf operationPos=1 {
					Set clientResponse = httpClient.Operation(method, pathP1, , , quickStreamIn, queryString)
				}
			}
			
		} ElseIf evalMethod = "GET" {
			If pathP1'="" {
				If (pathP2'="") && (pathP3'="") {
					// Search Compartment
					Set clientResponse = httpClient.Search(method, pathP3, pathP1, pathP2, queryString)
				} ElseIf pathP2'="" {
					// Read, Conditional Read
					If (fhirRequest.IfNoneMatch="") && (fhirRequest.IfModifiedSince="") {
						Set clientResponse = httpClient.Read(method, pathP1, pathP2, queryString)
					} Else {
						Set clientResponse = httpClient.ConditionalRead(method, pathP1, pathP2, fhirRequest.IfNoneMatch, fhirRequest.IfModifiedSince, queryString)
					}
				} Else {
					// Search Type
					Set clientResponse = httpClient.Search(method, pathP1, , , queryString)
				}
			}
			
		} ElseIf evalMethod="POST" {
			If fhirRequest.IfNoneExist="" {
				Set clientResponse = httpClient.Create(pathP1, quickStreamIn, queryString)
			} Else {
				Set clientResponse = httpClient.ConditionalCreate(pathP1, quickStreamIn, fhirRequest.IfNoneExist, queryString)
			}
		}
		
		If '$IsObject($Get(clientResponse)) {
			$$$ThrowStatus($$$ERROR($$$HSFHIRErrInvalidMethodAndPath, fhirRequest.RequestMethod, fhirRequest.RequestPath))
		}
		
		Set apiResponse = ##class(HS.FHIRServer.API.Data.Response).%New()
		Set apiResponse.ETag = clientResponse.ETag
		Set apiResponse.Id = clientResponse.Id
		Set apiResponse.IsPrettyOut = clientResponse.IsPrettyOut
		Set apiResponse.LastModified = clientResponse.LastModified
		Set apiResponse.Location = clientResponse.Location
		// API response ResponseFormatCode holds a simple code such as $$$FHIRContentCodeJSON or $$$FHIRContentCodeXML.
		If clientResponse.ResponseFormat [ "application/fhir+json" {
			Set apiResponse.ResponseFormatCode = $$$FHIRContentCodeJSON
		} ElseIf clientResponse.ResponseFormat [ "application/fhir+xml" {
			Set apiResponse.ResponseFormatCode = $$$FHIRContentCodeXML
		}
		
		Set apiResponse.Status = clientResponse.Status
		Set apiResponse.VId = clientResponse.VId
		
		Set pInteropResponse.Response = apiResponse
		// RestHandler needs this CharSet value to trigger proper handling
		// of UTF-8 encoding when returning payload back over HTTP.
		Set pInteropResponse.CharSet = "UTF-8"
		Set pInteropResponse.ContentType = clientResponse.ResponseFormat
		
		If $IsObject(clientResponse.Payload) {
			Set quickStreamOut = ##class(HS.SDA3.QuickStream).%New()
			Set pInteropResponse.QuickStreamId = quickStreamOut.%Id()
			$$$ThrowOnError(quickStreamOut.CopyFrom(clientResponse.Payload))
			$$$HSTRACE("Response QuickStream", "quickStreamOut", quickStreamOut)
			$$$ThrowOnError(quickStreamOut.Rewind())
		}
	
	} Catch eException {
		Set tSC = eException.AsStatus()
		If $$$HSTRACING {
			If (($IsObject($Get(quickStreamIn))) && (quickStreamIn.%Extends("%Stream.Object"))) {	
				Do quickStreamIn.Rewind()
				$$$HSTRACEERROR("Request QuickStream", "quickStreamIn", quickStreamIn)
			}
			If (($IsObject($Get(quickStreamOut))) && (quickStreamOut.%Extends("%Stream.Object"))) {	
				Do quickStreamOut.Rewind()
				$$$HSTRACEERROR("Response QuickStream", "quickStreamOut", quickStreamOut)
			}
		}
	}
		
	Quit tSC
}

}
