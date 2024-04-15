Class Production.Message.Vector.Request Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Path As %String(%JSONFIELDNAME = "path", MAXLEN = "");

Property IdDocument As %Integer(%JSONFIELDNAME = "id");

Storage Default
{
<Data name="RequestDefaultData">
<Subscript>"Request"</Subscript>
<Value name="1">
<Value>Path</Value>
</Value>
<Value name="2">
<Value>IdDocument</Value>
</Value>
</Data>
<DefaultData>RequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
