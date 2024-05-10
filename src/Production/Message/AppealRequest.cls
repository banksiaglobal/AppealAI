Class Production.Message.AppealRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Name As %String(MAXLEN = 200);

Property DocumentId As %String;

Property PackageId As %String;

Property VisitId As %String;

Property Data As %CSP.BinaryStream;

Storage Default
{
<Data name="AppealRequestDefaultData">
<Subscript>"AppealRequest"</Subscript>
<Value name="1">
<Value>Path</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Document</Value>
</Value>
<Value name="4">
<Value>VisitId</Value>
</Value>
<Value name="5">
<Value>DocumentId</Value>
</Value>
<Value name="6">
<Value>PackageId</Value>
</Value>
<Value name="7">
<Value>Data</Value>
</Value>
</Data>
<DefaultData>AppealRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
