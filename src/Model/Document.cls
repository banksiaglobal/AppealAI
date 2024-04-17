Class Model.Document Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String(MAXLEN = 300);

Property Path As %String(MAXLEN = 300);

Property Vector As %String(MAXLEN = "");

Property DateTime As %TimeStamp;

Index IndexName On Name;

Storage Default
{
<Data name="DocumentDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Path</Value>
</Value>
<Value name="4">
<Value>Vector</Value>
</Value>
<Value name="5">
<Value>DateTime</Value>
</Value>
<Value name="6">
<Value>InsurCatalog</Value>
</Value>
<Value name="7">
<Value>Company</Value>
</Value>
</Data>
<DataLocation>^Model.DocumentD</DataLocation>
<DefaultData>DocumentDefaultData</DefaultData>
<IdLocation>^Model.DocumentD</IdLocation>
<IndexLocation>^Model.DocumentI</IndexLocation>
<StreamLocation>^Model.DocumentS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}