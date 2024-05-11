Class Production.Message.SaveAppealRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Property Package As %String;

Property DenialText As %String(MAXLEN = "");

Property DenialVector As %String(MAXLEN = "");

Property Prompt As %String(MAXLEN = "");

Property Appeal As %String(MAXLEN = "");

Storage Default
{
<Data name="SaveAppealRequestDefaultData">
<Subscript>"SaveAppealRequest"</Subscript>
<Value name="1">
<Value>Package</Value>
</Value>
<Value name="2">
<Value>DenialText</Value>
</Value>
<Value name="3">
<Value>DenialVector</Value>
</Value>
<Value name="4">
<Value>Prompt</Value>
</Value>
<Value name="5">
<Value>Appeal</Value>
</Value>
</Data>
<DefaultData>SaveAppealRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
