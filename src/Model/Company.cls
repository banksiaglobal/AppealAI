Class Model.Company Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

Index IndexName On Name [ Unique ];

// Retrieve all companies

ClassMethod %OnDelete(oid As %ObjectIdentity) As %Status [ Private, ServerOnly = 1 ]
{
    set status = $$$OK
    set object = ..%Open(oid,,.status)
    if $$$ISERR(status) return status
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID from Model.Package where Company->ID = ?")
        if ($$$ISOK(tStatus)) { 
            set tResult = tStatement.%Execute(object.%Id())
            if (tResult.%SQLCODE=0) {
                while tResult.%Next() {
                   set status = ##class(Model.Package).%DeleteId(tResult.ID) 
                }
            }
        }
        else {
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }
    return status
}

ClassMethod GetAll() As %Library.DynamicArray
{
    
    set companies = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, Name from Model.Company")
        if ($$$ISOK(tStatus)) { 
            set tResult = tStatement.%Execute()
            if (tResult.%SQLCODE=0) {
                while tResult.%Next() {
                    set company = {}
                    set company.name = tResult.Name
                    set company.id = tResult.ID
                    do companies.%Push(company)
                }
            }
        }

    return companies
}

Storage Default
{
<Data name="CompanyDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DataLocation>^Model.CompanyD</DataLocation>
<DefaultData>CompanyDefaultData</DefaultData>
<IdLocation>^Model.CompanyD</IdLocation>
<IndexLocation>^Model.CompanyI</IndexLocation>
<StreamLocation>^Model.CompanyS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
