Class Model.Company Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

Property UUIDFHIR As %String(MAXLEN = 300);

Index IndexName On Name [ Unique ];

ClassMethod GetAll() As %Library.DynamicArray
{
    
    set packages = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, Name, UUIDFHIR from Model.Company")
        if ($$$ISOK(tStatus)) { 
            set tResult = tStatement.%Execute()
            if (tResult.%SQLCODE=0) {
                while tResult.%Next() {
                    set package = {}
                    set package.name = tResult.Name
                    set package.description = tResult.Description
                    set package.id = tResult.ID
                    set package.companyId = tResult.Company
                    do packages.%Push(package)
                }
            }
        }

    return packages
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
<Value name="3">
<Value>UUIDFHIR</Value>
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
