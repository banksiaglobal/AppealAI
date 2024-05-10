Class Model.Package Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String(MAXLEN = 200);

Property Description As %String(MAXLEN = "");

Property Company As Model.Company;

// Retrieve all packages associated with a company

ClassMethod GetAllByCompany(id) As %Library.DynamicArray
{
    set packages = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select ID, Name, Description, Company from Model.Package where Company->ID = ?")
			if ($$$ISOK(tStatus)) { 
				set tResult = tStatement.%Execute(id)
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
            else {
                $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
            }
    return packages
}

Storage Default
{
<Data name="PackageDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Description</Value>
</Value>
<Value name="4">
<Value>Company</Value>
</Value>
</Data>
<DataLocation>^Model.PackageD</DataLocation>
<DefaultData>PackageDefaultData</DefaultData>
<IdLocation>^Model.PackageD</IdLocation>
<IndexLocation>^Model.PackageI</IndexLocation>
<StreamLocation>^Model.PackageS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
