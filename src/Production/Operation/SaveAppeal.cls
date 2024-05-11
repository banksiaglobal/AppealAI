Class Production.Operation.SaveAppeal Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.SQL.OutboundAdapter";

Property Adapter As EnsLib.SQL.OutboundAdapter;

Method OnMessage(pInput As Production.Message.SaveAppealRequest, pOutput As Production.Message.Response) As %Status
{
    set Appeal = ##class(Model.Appeal).%New()
    set Appeal.DateTime = $ZDT($H,3)
    set Appeal.Appeal = pInput.Appeal
    set Appeal.DenialText = pInput.DenialText
    set Appeal.DenialVector = ##class(%Library.Vector).DisplayToLogical([].%FromJSON(pInput.DenialVector))
    set Appeal.Prompt = pInput.Prompt
    set Appeal.Package = ##class(Model.Package).%OpenId(pInput.Package)
    set sc = Appeal.%Save()

    set pOutput = ##class(Production.Message.Response).%New()
    set pOutput.Result = "Save error"
    if sc set pOutput.Result = "Appeal saved"

    return sc
}

}
