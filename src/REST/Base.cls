Class REST.Base Extends %CSP.REST
{

Parameter CHARSET = "utf-8";

Parameter CONVERTINPUTSTREAM = 1;

Parameter CONTENTTYPE = "application/json";

Parameter Version = "1.0.0";

Parameter HandleCorsRequest = 1;

ClassMethod Response(pResponse = "", pSC = {$$$OK}) As %Status
{
    if $$$ISERR(pSC) {
        set:(%response.Status="" || (%response.Status=..#HTTP200OK)) %response.Status = ..#HTTP500INTERNALSERVERERROR
        do ..ReportHttpStatusCode(%response.Status, pSC)
        return $$$OK
    }
    if $isobject(pResponse) {
        if pResponse.%IsA("%DynamicAbstractObject") {
            set %response.ContentType = "application/json"
            do pResponse.%ToJSON()
        }
        else {
            write pResponse
        }
    } else {
        write pResponse
    }
    return $$$OK
}

ClassMethod OnPreDispatch(pUrl As %String, pMethod As %String, ByRef pContinue As %Boolean) As %Status
{
    if $isobject(%request.Content) && (%request.Content.%IsA("%Library.DynamicObject")) {
        set %request.Content = {}.%FromJSON($zconvert(%request.Content.%ToJSON(),"I","UTF8"))
    } else {
        set %request.Content = {}.%FromJSON(%request.Content)
    }
    return $$$OK
}

}
