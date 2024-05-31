Class Production.Operation.FhirOut Extends Ens.BusinessOperation
{

Parameter ADAPTER = "EnsLib.HTTP.OutboundAdapter";

Property Adapter As EnsLib.HTTP.OutboundAdapter;

/// w ##class(Production.Operation.FhirOut).Test()
ClassMethod Test() As %Status
{
    set sc = $$$OK
    set path = "/fhir/r4"
    set ResponseData = ..GetHttpRequest("/fhir/r4/Encounter?Patient=2")  
    set pInteropResponse = ##class(Production.Message.Response).%New()
    set tmp = {}.%FromJSON(ResponseData)
    Set pInteropResponse.Result = tmp.%ToJSON()
    w !, pInteropResponse.Result, !
    return sc
}

Method OnMessage(pInteropRequest As Production.Message.FhirRequest, Output pInteropResponse As Production.Message.Response) As %Status
{
    set sc = $$$OK
    set path = "/fhir/r4"
    set ResponseData = ..GetHttpRequest(path_pInteropRequest.Path_pInteropRequest.Parameters)  
    set pInteropResponse = ##class(Production.Message.Response).%New()
    set tmp = {}.%FromJSON(ResponseData)
    Set pInteropResponse.Result = tmp.%ToJSON()

    return sc
}

ClassMethod GetHttpRequest(location As %String) As %Library.DynamicObject
{
    set responseSC = $$$OK
    set HttpRequest = ##class(%Net.HttpRequest).%New()
    set HttpRequest.Server = "localhost"
    set HttpRequest.Port = 52773
    do HttpRequest.SetHeader("Accept","application/fhir+json;fhirVersion=4.0")
 
    //set HttpRequest.Location = location
    $$$ThrowOnError(HttpRequest.Get(location))
    if (HttpRequest.HttpResponse.StatusCode'=200) {
        write !, HttpRequest.HttpResponse.StatusCode
        $$$ThrowStatus($$$ERROR(HttpRequest.HttpResponse.StatusCode))
    }
    return HttpRequest.HttpResponse.Data
}

}
