Class Production.Operation.SaveVector Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.SQL.OutboundAdapter";

Property Adapter As EnsLib.SQL.OutboundAdapter;

// Create a new document object and add vector chunk

Method OnMessage(pInput As Production.Message.SaveVectorRequest, Output pOutput As Production.Message.Response) As %Status
{

    set Document = ##class(Model.Document).%New()
    set Document.Name = pInput.Name
    set Document.Path = pInput.Path
    set Document.DateTime = $ZDT($H,3)
    set Document.Package = ##class(Model.Package).%OpenId(pInput.Package)
    set Document.TypeOfDocument = pInput.TypeOfDoc
    set sc = Document.%Save()
    // Loop through each vector chunk and add it to the document
    for i=1:1:pInput.VectorChunks.Count() {
        set sc1=##class(Model.DocumentChunk).AddChunk(Document.%Id(),pInput.TextChunks.GetAt(i),[].%FromJSON(pInput.VectorChunks.GetAt(i)))
        set sc=$$$ADDSC(sc1,sc)
    }
    set pOutput = ##class(Production.Message.Response).%New() 
    set pOutput.Result = "Save error"
    if sc set pOutput.Result = "File saved"

    Quit sc
}

}
