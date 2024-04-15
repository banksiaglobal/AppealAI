Class Model.Company Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

// Property Product As array Of Model.Package;

Property UUIDFHIR As %String(MAXLEN = 300);

Index IndexName On Name;

Index IndexProduct On Product;

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
<Value>Product</Value>
</Value>
<Value name="4">
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
