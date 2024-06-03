Class REST.Appeal Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/upload" Method="POST" Call="Upload" Cors="true"/>
    <Route Url="/:id" Method="DELETE" Call="Delete" Cors="true"/>
    <Route Url="/denial/:package" Method="GET" Call="GetDenials" Cors="true"/>
    <Route Url="/letter/:package" Method="GET" Call="GetLetters" Cors="true"/>
    <Route Url="/:id" Method="GET" Call="GetAppealData" Cors="true"/>
    <Route Url="/all/:package" Method="GET" Call="GetAllAppealData" Cors="true"/>
    <Route Url="/all/denial/" Method="GET" Call="GetDenialsAll" Cors="true"/>
    <Route Url="/all/letter/" Method="GET" Call="GetLettersAll" Cors="true"/>

</Routes>
}

/// Get all denial letter in a package
ClassMethod GetLettersAll() As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.test = ##class(Model.Appeal).GetAllAppealLetter() 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

/// Get all denial letters
ClassMethod GetDenialsAll() As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.denials = ##class(Model.Appeal).GetAllDenial() 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

/// Delete appela data
ClassMethod Delete(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    tstart
    try {

        // Delete data
        set sc = ##class(Model.Appeal).%DeleteId(id)

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

/// Get all denial letter in a package
ClassMethod GetLetters(package) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.appealLetters = ##class(Model.Appeal).GetAllAppealLetterByPackage(package) 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

/// Get all denial letter in a package
ClassMethod GetDenials(package) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.denials = ##class(Model.Appeal).GetAllDenialByPackage(package) 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

/// Get all Appeal data in a package
ClassMethod GetAllAppealData(package) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.appeals = ##class(Model.Appeal).GetAllByPackage(package) 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

/// Get Appeal data
ClassMethod GetAppealData(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {

        set Appeal = ##class(Model.Appeal).%OpenId(id)
        if '$ISOBJECT(Appeal) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        set response.id = Appeal.%Id()
        set response.appeal = Appeal.Appeal
        set response.createdDateTime = Appeal.DateTime
        set response.denial = Appeal.DenialText
        set response.prompt = Appeal.Prompt
        set response.package = Appeal.Package.%Id()
        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

// Upload denial letter

ClassMethod Upload() As %Status
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.Content

    try {

        set Package = ##class(Model.Package).%OpenId(data.package)

        if '$ISOBJECT(Package) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Package not found"))
        }

        // Create a new request for Production.Service.DocumentIn
        set requestDoc = ##class(Production.Message.AppealRequest).%New()
        set requestDoc.DenialText = data.text
        set requestDoc.Package = data.package
        set requestDoc.Encounter = data.encounter
        set requestDoc.PatientName = data.patientName

        // Start production, if the it is not running
        do ##class(Production.Utils).StartProduction("Production.AppealAIApp")
        
        // Call Production.Service.AppealIn
        set tSC = ##class(Ens.Director).CreateBusinessService("AppealIn",.tService)
        
        if ($ISOBJECT(tService)) {
            set tSC = tService.ProcessInput(requestDoc,.responseDoc)
        }
        
        if 'tSC {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }
        set response.message = "The denial letter sent for processing."

    }
    catch ex {
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }

    return ..Response(response, responseSC)
}

}
