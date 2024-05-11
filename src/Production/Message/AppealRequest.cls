Class Production.Message.AppealRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Package As %String;

Property DenialText As %String(MAXLEN = "");

Storage Default
{
<Data name="AppealRequestDefaultData">
<Subscript>"AppealRequest"</Subscript>
<Value name="1">
<Value>PackageId</Value>
</Value>
<Value name="2">
<Value>DenialText</Value>
</Value>
<Value name="3">
<Value>Package</Value>
</Value>
</Data>
<DefaultData>AppealRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
