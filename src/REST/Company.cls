Class REST.Company Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/create" Method="POST" Call="Create" Cors="true"/>
    <Route Url="/:id" Method="GET" Call="GetCompany" Cors="true"/>
    <Route Url="/" Method="GET" Call="GetAllCompany" Cors="true"/>
    <Route Url="/:id" Method="DELETE" Call="Delete" Cors="true"/>

</Routes>
}

/// Description
ClassMethod Delete(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    tstart
    try {

        // Delete data
        set sc = ##class(Model.Company).%DeleteId(id)

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Company cannot be deleted"))
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

// Create a new company

ClassMethod Create() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.Content
    

    tstart

    try {
        set Company = ##class(Model.Company).%New()
        set Company.Name = data.name
        set sc = Company.%Save()

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Company cannot be saved"))
        }
        
        set response.id = Company.%Id()
        set response.name = Company.Name

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

// Get company details by ID

ClassMethod GetCompany(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {

        set Company = ##class(Model.Company).%OpenId(id)
        if '$ISOBJECT(Company) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        set response.id = Company.%Id()
        set response.name = Company.Name
        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

// Get details of all companies

ClassMethod GetAllCompany() As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {  
        set response.companies = ##class(Model.Company).GetAll() 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

}
