Class Production.Message.GetTextResponse Extends (Ens.Response, %JSON.Adaptor, %XML.Adaptor)
{

Property Text As %String(MAXLEN = "");

Storage Default
{
<Data name="GetTextResponseDefaultData">
<Subscript>"GetTextResponse"</Subscript>
<Value name="1">
<Value>Text</Value>
</Value>
</Data>
<DefaultData>GetTextResponseDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
