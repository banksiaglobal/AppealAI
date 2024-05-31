Class REST.Fhir Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/encounters/:patient" Method="GET" Call="GetListEncounterByPatient" Cors="true"/>
    <Route Url="/patients" Method="GET" Call="GetListPatient" Cors="true"/>
  
</Routes>
}

ClassMethod GetListPatient() As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {

        set requestFhir = ##class(Production.Message.FhirRequest).%New()
        set requestFhir.Path = "/Patient"

        do ##class(Production.Utils).StartProduction("Production.AppealAIApp")
        
        set tSC = ##class(Ens.Director).CreateBusinessService("FhirIn",.tService)
        
        if ($ISOBJECT(tService)) {
            set tSC = tService.ProcessInput(requestFhir,.responseFhir)
        }
        
        if 'tSC {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Error Fhir connection"))
        }

        set result = {}.%FromJSON(responseFhir.Result)

        if result.total = 0 {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        set patients = []
        set iter = result.%Get("entry").%GetIterator()
		while iter.%GetNext(.key, .value ) {
            if '(value.resource.resourceType = "Patient") continue
            set patient = ##class(Model.FhirData).GetPaientData(value.resource)
            do patients.%Push(patient)
        }
        set response.patients = patients
         
        
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set response.status = tSC
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

ClassMethod GetListEncounterByPatient(patient) As %Status
{
    set response = {}
    set responseSC = $$$OK

    try {
       
        set requestFhir = ##class(Production.Message.FhirRequest).%New()
        set requestFhir.Path = "/Encounter"
        set requestFhir.Parameters = "?patient="_patient

        do ##class(Production.Utils).StartProduction("Production.AppealAIApp")
        
        set tSC = ##class(Ens.Director).CreateBusinessService("FhirIn",.tService)
        
        if ($ISOBJECT(tService)) {
            set tSC = tService.ProcessInput(requestFhir,.responseFhir)
        }
        
        if 'tSC {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Error Fhir connection"))
        }
        
        set result = {}.%FromJSON(responseFhir.Result)

        if result.total = 0 {
            set response={"error":-404}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
        }

        set encounters = []
        set iter = result.%Get("entry").%GetIterator()
		while iter.%GetNext(.key, .value ) {
            if '(value.resource.resourceType = "Encounter") continue
            set encounter = ##class(Model.FhirData).GetEncounterData(value.resource)
            do encounters.%Push(encounter)
        }
        set response.encounters = encounters 
    }
    catch ex {
        if response.error="" set response.error=-404
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set response.status = tSC
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    
    return ..Response(response, responseSC)
}

}
