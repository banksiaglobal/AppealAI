Class Production.Message.Vector.Request Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Path As %String(%JSONFIELDNAME = "path", MAXLEN = "");

Property Name As %String(%JSONFIELDNAME = "name");

Storage Default
{
<Data name="RequestDefaultData">
<Subscript>"Request"</Subscript>
<Value name="1">
<Value>Path</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DefaultData>RequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
