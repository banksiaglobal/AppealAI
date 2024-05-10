Class Model.DocumentChunk Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Document As Model.Document;

Property Vector As %Vector(LEN = 200);

Property Text As %String(MAXLEN = "");

Index IndexDocument On Document;

// Add a new chunk to the database

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
<ExtentSize>7</ExtentSize>
<IdLocation>^Model.DocumentChunkD</IdLocation>
<IndexLocation>^Model.DocumentChunkI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>2</AverageFieldSize>
<OutlierSelectivity>.999999:</OutlierSelectivity>
<Selectivity>0.0001%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>3</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="Document">
<AverageFieldSize>3</AverageFieldSize>
<OutlierSelectivity>.999999:6</OutlierSelectivity>
<Selectivity>0.0001%</Selectivity>
</Property>
<Property name="Text">
<AverageFieldSize>15921.43</AverageFieldSize>
<Selectivity>14.2857%</Selectivity>
</Property>
<Property name="Vector">
<AverageFieldSize>8516</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<SQLMap name="IDKEY">
<BlockCount>-96</BlockCount>
</SQLMap>
<SQLMap name="IndexDocument">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^Model.DocumentChunkS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
