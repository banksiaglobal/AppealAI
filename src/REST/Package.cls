Class REST.Package Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/create" Method="POST" Call="Create" Cors="true"/>
    <Route Url="/:id" Method="GET" Call="GetPackage" Cors="true"/>
    <Route Url="/all/:companyId" Method="GET" Call="GetAllPackages" Cors="true"/>

</Routes>
}

ClassMethod Create() As %Status
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.Content
    

    tstart

    Try {
        set Company = ##class(Model.Company).%OpenId(data.companyId)

        if '$ISOBJECT(Company) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Company not found"))
        }

        set Package = ##class(Model.Package).%New()
        set Package.Name = data.name
        set Package.Description = data.description
        set Package.Company = Company
        set sc = Package.%Save()

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Package cannot be saved"))
        }
        
        set response.companyId = Company.%Id()
        set response.id = Package.%Id()
        set response.name = Package.Name
        set response.description = Package.Description

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

ClassMethod GetPackage(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {

        set Package = ##class(Model.Package).%OpenId(id)
        if '$ISOBJECT(Package) {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        set response.id = Package.%Id()
        set response.name = Package.Name
        set response.description = Package.Description
        set response.companyId = Package.Company.%Id()

    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

ClassMethod GetAllPackages(companyId) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {
        set response.packages = ##class(Model.Package).GetAllByCompany(companyId)
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

}
