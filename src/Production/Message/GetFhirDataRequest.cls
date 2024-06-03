Class Production.Message.GetFhirDataRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Encounter As %String(MAXLEN = "");

Storage Default
{
<Data name="GetFhirDataRequestDefaultData">
<Subscript>"GetFhirDataRequest"</Subscript>
<Value name="1">
<Value>Encounter</Value>
</Value>
</Data>
<DefaultData>GetFhirDataRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
