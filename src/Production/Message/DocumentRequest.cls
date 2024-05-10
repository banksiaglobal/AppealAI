Class Production.Message.DocumentRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Name As %String(MAXLEN = 200);

Property Package As %String;

Property Data As %CSP.BinaryStream;

Storage Default
{
<Data name="DocumentRequestDefaultData">
<Subscript>"DocumentRequest"</Subscript>
<Value name="1">
<Value>Path</Value>
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
<DefaultData>DocumentRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
