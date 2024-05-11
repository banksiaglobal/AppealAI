Class Production.Message.SaveDocumentRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Text As %String(MAXLEN = "");

Property Name As %String(MAXLEN = "");

Property Package As %String;

Property Data As %CSP.BinaryStream;

Storage Default
{
<Data name="SaveDocumentRequestDefaultData">
<Subscript>"SaveDocumentRequest"</Subscript>
<Value name="1">
<Value>Text</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Package</Value>
</Value>
<Value name="4">
<Value>Data</Value>
</Value>
</Data>
<DefaultData>SaveDocumentRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
