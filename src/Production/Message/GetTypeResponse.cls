Class Production.Message.GetTypeResponse Extends (Ens.Response, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Text As %String(%JSONFIELDNAME = "text", MAXLEN = "");

Storage Default
{
<Data name="GetTypeResponseDefaultData">
<Subscript>"GetTypeResponse"</Subscript>
<Value name="1">
<Value>Text</Value>
</Value>
</Data>
<DefaultData>GetTypeResponseDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
