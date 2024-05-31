Class Production.Service.FhirIn Extends Ens.BusinessService
{

Method OnProcessInput(pInput As Production.Message.FhirRequest, Output pOutput As Production.Message.Response) As %Status
{
    try {  
        Set tSC = ..SendRequestSync("FhirOut", pInput, .pOutput) 
	}
	catch ex {
		set tSC = ex.AsStatus()
	}

	return tSC
}

}
