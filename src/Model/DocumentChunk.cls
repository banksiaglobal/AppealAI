Class Model.DocumentChunk Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Document As Model.Document;

Property Vector As %Vector(LEN = 200);

Property Text As %String(MAXLEN = "");

Index IndexDocument On Document;

ClassMethod AddChunk(pDocumentId As %String, pText As %String, pVector As %DynamicObject) As %Status
{
    set NewChunk=..%New()
    set NewChunk.Document=##class(Model.Document).%OpenId(pDocumentId)
    set NewChunk.Text=pText
    set NewChunk.Vector=NewChunk.VectorDisplayToLogical(pVector)
    quit NewChunk.%Save()
}

Storage Default
{
<Data name="DocumentChunkDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Document</Value>
</Value>
<Value name="3">
<Value>Vector</Value>
</Value>
<Value name="4">
<Value>Text</Value>
</Value>
</Data>
<DataLocation>^Model.DocumentChunkD</DataLocation>
<DefaultData>DocumentChunkDefaultData</DefaultData>
<IdLocation>^Model.DocumentChunkD</IdLocation>
<IndexLocation>^Model.DocumentChunkI</IndexLocation>
<StreamLocation>^Model.DocumentChunkS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
