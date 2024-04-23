Class REST.Company Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/create" Method="POST" Call="Create" Cors="true"/>
    <Route Url="/:id" Method="GET" Call="GetCompany" Cors="true"/>

</Routes>
}

ClassMethod Create() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.Content
    

    tstart

    Try {
        set Company = ##class(Model.Company).%New()
        set Company.Name = data.name
        set Company.UUIDFHIR = data.uuidfhir
        set sc = Company.%Save()

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Company cannot be saved"))
        }
        
        set response.id = Company.%Id()
        set response.name = Company.Name
        set response.UUIDFHIR = Company.UUIDFHIR


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
        set response.UUIDFHIR = Company.UUIDFHIR

        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

}
