Class Production.Message.GetTextRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Path As %String(MAXLEN = "");

Storage Default
{
<Data name="GetTextRequestDefaultData">
<Subscript>"GetTextRequest"</Subscript>
<Value name="1">
<Value>Path</Value>
</Value>
</Data>
<DefaultData>GetTextRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
