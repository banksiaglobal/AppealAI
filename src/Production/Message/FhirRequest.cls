Class Production.Message.FhirRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Path As %String;

Property Parameters As %String(MAXLEN = 200);

Storage Default
{
<Data name="FhirRequestDefaultData">
<Subscript>"FhirRequest"</Subscript>
<Value name="1">
<Value>Path</Value>
</Value>
<Value name="2">
<Value>Parameters</Value>
</Value>
</Data>
<DefaultData>FhirRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
