Class Production.Service.AppealIn Extends Ens.BusinessService
{

// Async call Production.Process.VectorSearch 

Method OnProcessInput(pInput As Production.Message.AppealRequest, Output pOutput As Ens.Response) As %Status
{
	try {
		set tSC = ..SendRequestAsync("VectorSearch", pInput)	    
	 }
	catch ex {
		set tSC = ex.AsStatus()
	}

	return tSC
}

}
