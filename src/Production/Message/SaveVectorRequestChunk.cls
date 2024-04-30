Class Production.Message.SaveVectorRequestChunk Extends %Library.SerialObject
{

Property Vector As %DynamicArray;

Property Text As %String(MAXLEN = "");

Storage Default
{
<Data name="SaveVectorRequestChunkState">
<Value name="1">
<Value>Vector</Value>
</Value>
<Value name="2">
<Value>Text</Value>
</Value>
</Data>
<State>SaveVectorRequestChunkState</State>
<StreamLocation>^ProductionA568.SaveVectorRDEBBS</StreamLocation>
<Type>%Storage.Serial</Type>
}

}
