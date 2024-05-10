Class Production.Service.DocumentIn Extends Ens.BusinessService
{

// Async call Production.Process.ConversionToVector 

Method OnProcessInput(pInput As Production.Message.DocumentRequest, Output pOutput As Ens.Response) As %Status
{
	try {
		set tSC = ..SendRequestAsync("ConversionToVector", pInput)	    
	 }
	catch ex {
		set tSC = ex.AsStatus()
	}

	return tSC
}

}
