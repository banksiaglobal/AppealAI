Class Model.FhirData Extends %JSON.Adaptor
{

ClassMethod GetPaientData(fhirData) As %Library.DynamicObject
{
    set patient = {}

    set patient.id = fhirData.id
    set patient.surname = fhirData.name.%Get(0).family
    set patient.name = fhirData.name.%Get(0).given.%Get(0)
    #; set patient.prefix = fhirData.name.%Get(0).prefix.%Get(0)
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
