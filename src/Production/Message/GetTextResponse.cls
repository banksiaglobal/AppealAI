Class Production.Message.GetTextResponse Extends (Ens.Response, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Text As %String(%JSONFIELDNAME = "text", MAXLEN = "");

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
