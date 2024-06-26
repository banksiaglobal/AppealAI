Class REST.Document Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/upload" Method="POST" Call="Upload" Cors="true"/>
    <Route Url="/:id" Method="DELETE" Call="Delete" Cors="true"/>
    <Route Url="/:name" Method="GET" Call="GetDocument" Cors="true"/>
    <Route Url="/info/:name" Method="GET" Call="GetDocumentInfo" Cors="true"/>
    <Route Url="/all/:packageId" Method="GET" Call="GetAllDocumentOfPackage" Cors="true"/>

</Routes>
}

// Get all documents of a package

ClassMethod GetAllDocumentOfPackage(packageId) As %Status
{
    set response = {}
    set responseSC = $$$OK
    
    try {

        set response.documents = ##class(Model.Document).GetAllByPackage(packageId)
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

// Upload document

ClassMethod Upload() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK

    // Get the file data and other parameters from the form-data
    set data = %request.GetMimeData("file") 
    set packageId = %request.Get("package")

    try {

        if ('$IsObject(data)){
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError,"No file"))
        }

        set Document = ##class(Model.Document).GetDocumentByName(data.FileName)
        if $ISOBJECT(Document){
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "A document with that name already exists"))
        } 
        
        set Package = ##class(Model.Package).%OpenId(packageId)

        if '$ISOBJECT(Package) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Package not found"))
        }

        // Create a new request for Production.Service.DocumentIn
        set requestDoc = ##class(Production.Message.DocumentRequest).%New()
        set requestDoc.Name = data.FileName
        set requestDoc.Package = packageId
        set requestDoc.Data = data

        // Start production, if the it is not running
        do ##class(Production.Utils).StartProduction("Production.AppealAIApp")
        
        // Call Production.Service.DocumentIn
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

// Delete document 

ClassMethod Delete(name) As %Status
{
    set response = {}
    set responseSC = $$$OK

    tstart
    try {

        set Document = ##class(Model.Document).GetDocumentByName(name)
        if '$ISOBJECT(Document){
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        // Remove from server
        set sc = ##class(%File).Delete(Document.Path)

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be deleted"))
        }

        // Delete data
        set sc = ##class(Model.Document).%DeleteId(Document.%Id())

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be deleted"))
        }

        tcommit
    }
    catch ex {
        trollback
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }

    return ..Response(response, responseSC)
}

// Download document

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

// Get information about a document

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
