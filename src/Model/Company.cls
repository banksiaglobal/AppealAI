Class Model.Company Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

Property UUIDFHIR As %String(MAXLEN = 300);

Index IndexName On Name [ Unique ];

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
