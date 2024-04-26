Class Production.Message.DocumentRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Path As %String(%JSONFIELDNAME = "path", MAXLEN = "");

Property Name As %String(%JSONFIELDNAME = "name", MAXLEN = 200);

Property Package As %String(%JSONFIELDNAME = "package");

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
</Data>
<DefaultData>DocumentRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
