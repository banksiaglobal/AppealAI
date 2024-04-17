Class Production.Message.Vector.Response Extends (Ens.Response, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Vector As %String(%JSONFIELDNAME = "vector", MAXLEN = "");

Property Name As %String(%JSONFIELDNAME = "name");

Storage Default
{
<Data name="ResponseDefaultData">
<Subscript>"Response"</Subscript>
<Value name="1">
<Value>Vector</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DefaultData>ResponseDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
