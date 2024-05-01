Class REST.Appeal Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/" Method="POST" Call="Create" Cors="true"/>

</Routes>
}

ClassMethod Create() As %Status
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.GetMimeData("file") // %CSP.BinaryStream
    set documentId = %request.Get("document")
    set visitId = %request.Get("visit")
    set path = "/opt/irisapp/"

    try {
        Set stream=##class(%Stream.FileBinary).%New()
        Set sc=stream.LinkToFile(path_data.FileName)
        Set sc=stream.CopyFromAndSave(data)
       
        
        if 'sc  {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }
        set Document = ##class(Model.Document).%OpenId(documentId)

        if $ISOBJECT(Document) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Document not found"))
        }
    
        // call  Production.Service.DocumentIn        

        set requestDoc = ##class(Production.Message.AppealRequest).%New()
        set requestDoc.Path = path_data.FileName
        set requestDoc.Name = data.FileName
        set requestDoc.DocumentId = Document.%Id()
        set requestDoc.PackageId = Document.Package.%Id()
        set requestDoc.TypeOfDoc = "appeal"

        set statusProd = ##class(Ens.Director).IsProductionRunning("Production.AppealAIApp")

        if 'statusProd{
            do ##class(Ens.Director).StartProduction("Production.AppealAIApp")
        }
        
        set tSC = ##class(Ens.Director).CreateBusinessService("AppealIn",.tService)
        
        if ($ISOBJECT(tService)) {
            set tSC = tService.ProcessInput(requestDoc,.responseDoc)
        }
        
        if 'tSC {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }

        set response.name = data.FileName

    }
    catch ex {
  
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    return ..Response(response, responseSC)
}

}
