Class Production.Operation.SaveVector Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.SQL.OutboundAdapter";

Property Adapter As EnsLib.SQL.OutboundAdapter;

Parameter INVOCATION = "Queue";

Method OnMessage(pInput As Production.Message.SaveVectorRequest, pOutput As Ens.Response) As %Status
{

    set Document = ##class(Model.Document).%New()
    set Document.Name = pInput.Name
    set Document.Path = pInput.Path
    set Document.Vector = pInput.Vector
    set Document.DateTime = $ZDT($H,3)
    set Document.Package = ##class(Model.Package).%OpenId(pInput.Package)
    set sc = Document.%Save()
    $$$LOGINFO("Onmessage "_"`"_sc)
    Quit sc
}

}
