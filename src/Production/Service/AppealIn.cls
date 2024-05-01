Class Production.Service.AppealIn Extends Ens.BusinessService
{

Method OnProcessInput(pInput As Production.Message.AppealRequest, Output pOutput As Ens.Response) As %Status
{
	try {
		set request = ##class(Production.Message.AppealRequest).%New()
		set request = pInput
		set tSC = ..SendRequestAsync("VectorSearch", request)	    
	 }
	catch ex {
		set tSC = ex.AsStatus()
	}

	return tSC
}

}
