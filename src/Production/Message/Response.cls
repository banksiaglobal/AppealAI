Class Production.Message.Response Extends (Ens.Response, %JSON.Adaptor, %XML.Adaptor)
{

Property Result As %String(MAXLEN = "");

Storage Default
{
<Data name="ResponseDefaultData">
<Subscript>"Response"</Subscript>
<Value name="1">
<Value>Result</Value>
</Value>
<Value name="2">
<Value>Path</Value>
</Value>
</Data>
<DefaultData>ResponseDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
