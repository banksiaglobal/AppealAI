Class Production.Message.SaveVectorRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Vector As %String(%JSONFIELDNAME = "vector", MAXLEN = "");

Property Path As %String(%JSONFIELDNAME = "path", MAXLEN = "");

Property Name As %String(%JSONFIELDNAME = "name", MAXLEN = 200);

Property Package As %String(%JSONFIELDNAME = "package");

Storage Default
{
<Data name="SaveVectorRequestDefaultData">
<Subscript>"SaveVectorRequest"</Subscript>
<Value name="1">
<Value>Vector</Value>
</Value>
<Value name="2">
<Value>Path</Value>
</Value>
<Value name="3">
<Value>Name</Value>
</Value>
<Value name="4">
<Value>Package</Value>
</Value>
</Data>
<DefaultData>SaveVectorRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
