Class REST.Document Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/upload" Method="POST" Call="Upload" Cors="true"/>
    <Route Url="/:id" Method="DELETE" Call="Delete" Cors="true"/>
    <Route Url="/:name" Method="GET" Call="GetDocument" Cors="true"/>
    <Route Url="/info/:name" Method="GET" Call="GetDocumentInfo" Cors="true"/>
    <Route Url="/appeal" Method="POST" Call="CreateAppeal" Cors="true"/>

</Routes>
}

ClassMethod CreateAppeal() As %Status
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
        if '$ISOBJECT(Document){
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }
    
         // call  Production.Service.AppealIn        

        set requestDoc = ##class(Production.Message.AppealRequest).%New()
        set requestDoc.Path = path_data.FileName
        set requestDoc.Name = data.FileName
        set requestDoc.DocumentId = documentId
        set requestDoc.PackageId = Document.Package.%Id()
        set requestDoc.VisitId = visitId

        set statusProd = ##class(Ens.Director).IsProductionRunning("Production.AppealAIApp")

        if 'statusProd{
            do ##class(Ens.Director).StartProduction("Production.AppealAIApp")
        }
        
        set tSC = ##class(Ens.Director).CreateBusinessService("AppealIn",.tService)
        
        set response.info = tSC

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

ClassMethod Upload() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.GetMimeData("file") // %CSP.BinaryStream
    set packageId = %request.Get("package")
    set path = "/opt/irisapp/"

    try {
        Set stream=##class(%Stream.FileBinary).%New()
        Set sc=stream.LinkToFile(path_data.FileName)
        Set sc=stream.CopyFromAndSave(data)
       
        
        if 'sc  {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }

        set Package = ##class(Model.Package).%OpenId(packageId)

        if '$ISOBJECT(Package) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Package not found"))
        }

        // call  Production.Service.DocumentIn        

        set requestDoc = ##class(Production.Message.DocumentRequest).%New()
        set requestDoc.Path = path_data.FileName
        set requestDoc.Name = data.FileName
        set requestDoc.Package = packageId
        
        set statusProd = ##class(Ens.Director).IsProductionRunning("Production.AppealAIApp")

        if 'statusProd{
            do ##class(Ens.Director).StartProduction("Production.AppealAIApp")
        }
        
        set tSC = ##class(Ens.Director).CreateBusinessService("DocumentIn",.tService)
        
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

ClassMethod Delete(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    tstart
    Try {

        set Document = ##class(Model.Document).%OpenId(id)
        if '$ISOBJECT(Document){
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }
        set sc = ##class(%File).Delete(Document.Path)

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be deleted"))
        }

        set sc = ##class(Model.Document).%DeleteId(id)

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be deleted"))
        }

        tcommit
    }
    Catch ex {
        trollback
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }

    return ..Response(response, responseSC)
}

ClassMethod GetDocument(name) As %Status
{
    set response = {}
    set responseSC = $$$OK
    try {
        set Document = ##class(Model.Document).GetDocumentByName(name)
        if '$ISOBJECT(Document){
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }
        set stream=##class(%Stream.FileBinary).%New()
        set sc=stream.LinkToFile(Document.Path)
        set response = stream
        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

ClassMethod GetDocumentInfo(name) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {
        set Document = ##class(Model.Document).GetDocumentByName(name)
        if '$ISOBJECT(Document){
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }
       
        set response.id = Document.%Id()
        set response.name = Document.Name
        set response.createdDateTime = Document.DateTime
        set response.packageId = Document.Package.%Id()
        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }

    return ..Response(response, responseSC)
}

}
