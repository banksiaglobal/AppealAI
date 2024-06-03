Class Model.FhirData Extends %JSON.Adaptor
{

// w ##class(Model.FhirData).ObservationToText("")

ClassMethod ObservationToText(fhirData) As %String
{
    set observation = ""
    
    set result = {}.%FromJSON(fhirData)

    if '(result.total = 0) {
        
        set observation = "Observation: "

        set iter = result.%Get("entry").%GetIterator()
        while iter.%GetNext(.key, .value ) {
            if '(value.resource.resourceType = "Observation") continue
            set observation = observation _ value.resource.code.text _ ", "
            set observation = observation _ value.resource.valueQuantity.value _ value.resource.valueQuantity.unit _ ", "
            set observation = observation _ value.resource.effectiveDateTime _ "; "
        }
    
        set observation = observation _ ". "
    
    }
    
    Return observation
}

// w ##class(Model.FhirData).ClaimToText("")

ClassMethod ClaimToText(fhirData) As %String
{
    set claim = ""
    
    set result = {}.%FromJSON(fhirData)

    if '(result.total = 0) {
        
        set claim = "Claim: "

        set iter = result.%Get("entry").%GetIterator()
        while iter.%GetNext(.key, .value ) {
            if '(value.resource.resourceType = "Claim") continue
            set claim = claim _ "billable date " _ value.resource.created _ ", "
            set claim = claim _ "total check " _ value.resource.total.value _ value.resource.total.currency
        }
    
        set claim = claim _ ". "
    
    }
    
    Return claim
}

ClassMethod GetOClaimData(fhirData) As %String
{
    set observation = "Observation"

    set observation = observation _ fhirData.code.text
    set observation = observation _ fhirData.valueQuantity.value _ fhirData.valueQuantity.unit
    set observation = observation _ fhirData.effectiveDateTime _ "."
    
    Return observation
}

ClassMethod GetPaientData(fhirData) As %Library.DynamicObject
{
    set patient = {}

    set patient.id = fhirData.id
    set patient.surname = fhirData.name.%Get(0).family
    set patient.name = fhirData.name.%Get(0).given.%Get(0)
    set patient.telephone = fhirData.telecom.%Get(0).value
    set patient.gender = fhirData.gender
    set patient.birthDate = fhirData.birthDate

    return patient
}

ClassMethod GetEncounterData(fhirData) As %Library.DynamicObject
{
    set encounter = {}

    set encounter.id = fhirData.id
    set encounter.status = fhirData.status
    set encounter.type = fhirData.type.%Get(0).text
    set encounter.typeCode = fhirData.type.%Get(0).coding.%Get(0).code

    set patient = {}
    set patient.fullName = fhirData.subject.display
    set patient.id = $PIECE(fhirData.subject.reference, "/", 2)
    set encounter.patient = patient

    set participant = {}
    set participant.fullName = fhirData.participant.%Get(0).individual.display
    set participant.id = $PIECE(fhirData.participant.%Get(0).individual.reference, "/", 2)
    set encounter.participant = participant

    set encounter.period = fhirData.period

    set serviceProvider = {}
    set serviceProvider.id = $PIECE(fhirData.serviceProvider.reference, "/", 2)
    set serviceProvider.fullName = fhirData.serviceProvider.display
    set encounter.serviceProvider = serviceProvider

    return encounter
}

}
