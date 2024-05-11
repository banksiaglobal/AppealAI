Class Production.Operation.SaveDocument Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.File.OutboundAdapter";

Property Adapter As EnsLib.File.OutboundAdapter;

// Save document to server

Method OnMessage(pInput As Production.Message.SaveDocumentRequest, pOutput As Production.Message.Response) As %Status
{
    // Get the path where the document will be saved
    set path = ##class(%SYSTEM.Util).GetEnviron("PATH_SAVE_DOC")_"/"
    
    // Save binary data
    set stream=##class(%Stream.FileBinary).%New()
    set sc=stream.LinkToFile(path_pInput.Name)
    set sc=stream.CopyFromAndSave(pInput.Data)


    set pOutput = ##class(Production.Message.Response).%New()
    if sc set pOutput.Result = path_pInput.Name
    
    return sc
}

}
