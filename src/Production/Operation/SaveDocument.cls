Class Production.Operation.SaveDocument Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.SQL.OutboundAdapter";

Property Adapter As EnsLib.SQL.OutboundAdapter;

Parameter INVOCATION = "Queue";

Method OnMessage(pInput As Production.Message.SaveDocumentRequest, pOutput As Production.Message.Response) As %Status
{
    
    set path = "/opt/irisapp/"
    do ##class(Model.Document).SaveDocumentPDF(pInput.Text, path_pInput.Name)
    set Document = ##class(Model.Document).%New()
    set Document.Name = pInput.Name
    set Document.Path = path_pInput.Name
    set Document.DateTime = $ZDT($H,3)
    set Document.Package = ##class(Model.Package).%OpenId(pInput.Package)
    set Document.TypeOfDocument = pInput.TypeOfDoc
    set sc = Document.%Save()
    
    Quit sc
}

}
