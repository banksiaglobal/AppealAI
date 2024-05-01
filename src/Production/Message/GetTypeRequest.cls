Class Production.Message.GetTypeRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Path As %String(%JSONFIELDNAME = "path", MAXLEN = "");

Storage Default
{
<Data name="GetTypeRequestDefaultData">
<Subscript>"GetTypeRequest"</Subscript>
<Value name="1">
<Value>Name</Value>
</Value>
<Value name="2">
<Value>Path</Value>
</Value>
</Data>
<DefaultData>GetTypeRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
