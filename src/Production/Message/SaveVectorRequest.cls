Class Production.Message.SaveVectorRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property TextChunks As list Of %String(MAXLEN = "");

Property VectorChunks As list Of %String(MAXLEN = "");

Property Path As %String(MAXLEN = "");

Property Name As %String(MAXLEN = 200);

Property Package As %String;

Storage Default
{
<Data name="SaveVectorRequestDefaultData">
<Subscript>"SaveVectorRequest"</Subscript>
<Value name="1">
<Value>TextChunks</Value>
</Value>
<Value name="2">
<Value>VectorChunks</Value>
</Value>
<Value name="3">
<Value>Path</Value>
</Value>
<Value name="4">
<Value>Name</Value>
</Value>
<Value name="5">
<Value>Package</Value>
</Value>
</Data>
<DefaultData>SaveVectorRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
