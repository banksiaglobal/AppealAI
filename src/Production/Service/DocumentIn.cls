Class Production.Service.DocumentIn Extends Ens.BusinessService
{

Method OnProcessInput(pInput As Production.Message.DocumentRequest, Output pOutput As Ens.Response) As %Status
{
	try {
		set request = ##class(Production.Message.DocumentRequest).%New()
		//set request = pInput
		set tSC = ..SendRequestAsync("Production.Process.ConversionToVector", pInput)	    
	 }
	catch ex {
		set tSC = ex.AsStatus()
	}
	return $$$OK
}

}
