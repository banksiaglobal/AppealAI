Class Production.Message.SaveDocumentRequest Extends (Ens.Request, %JSON.Adaptor, %XML.Adaptor)
{

Parameter %JSONIGNOREINVALIDFIELD = 1;

Property Text As %String(%JSONFIELDNAME = "text", MAXLEN = "");

Property Name As %String(%JSONFIELDNAME = "name", MAXLEN = "");

Property Package As %String(%JSONFIELDNAME = "package");

Property TypeOfDoc As %String(%JSONFIELDNAME = "type");

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
<Value>TypeOfDoc</Value>
</Value>
</Data>
<DefaultData>SaveDocumentRequestDefaultData</DefaultData>
<Type>%Storage.Persistent</Type>
}

}
