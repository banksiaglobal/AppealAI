Class REST.Company Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/create" Method="POST" Call="Create" Cors="true"/>
    <Route Url="/:name" Method="GET" Call="GetCompany" Cors="true"/>

</Routes>
}

ClassMethod Ping() As %Library.DynamicObject
{
    set response = {}
    s response.pong = 1
    set responseSC = $$$OK
    return ..Response(response, responseSC)
}

ClassMethod Create() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.Content

    tstart

    Try {
        set Company = ##class(InsurData.Company).%New()
        set Company.Name = data.name
        set Company.Product = "" 
        set Company.UUIDFHIR = ""
        set sc = Company.%Save()

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Company cannot be saved"))
        }
        
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

}
