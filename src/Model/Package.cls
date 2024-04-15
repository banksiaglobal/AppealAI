Class Model.Package Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

Storage Default
{
<Data name="PackageDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
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
