Class REST.Base Extends %CSP.REST
{

Parameter CHARSET = "utf-8";

Parameter CONVERTINPUTSTREAM = 1;

Parameter CONTENTTYPE = "application/json";

Parameter Version = "1.0.0";

Parameter HandleCorsRequest = 1;

// Handle the response sent back to the client

ClassMethod Response(pResponse = "", pSC = {$$$OK}) As %Status
{
    if $$$ISERR(pSC) {
        // If an error status code is encountered, set the HTTP status to internal server error
        set:(%response.Status="" || (%response.Status=..#HTTP200OK)) %response.Status = ..#HTTP500INTERNALSERVERERROR
        // Report the HTTP status code and the error
        do ..ReportHttpStatusCode(%response.Status, pSC)
        return $$$OK
    }
    if $isobject(pResponse) {
        if pResponse.%IsA("%Stream.FileBinary"){
            // If the response is a binary file stream, set content type to PDF
            Set %response.ContentType = "application/pdf"
            // Set content disposition to attachment with filename
            Do %response.SetHeader("Content-Disposition","attachment;filename="_pResponse.Filename)
            // Set NoCharSetConvert to prevent charset conversion
            Set %response.NoCharSetConvert=1
            // Set CORS header to allow access from any origin
            Set %response.Headers("Access-Control-Allow-Origin")="*"
            // Output the binary content to the device
            do pResponse.OutputToDevice()
        }
        else{
            // If the response is a dynamic object, set content type to JSON
            if pResponse.%IsA("%DynamicAbstractObject") {
                // Convert the object to JSON format and output
                set %response.ContentType = "application/json"
                do pResponse.%ToJSON()
            }
            else {
                // Otherwise, write the response as is
                write pResponse
            }
        }
        
    } else {
        // Write the response as is if it's not an object
        write pResponse
    }
    return $$$OK
}

ClassMethod OnPreDispatch(pUrl As %String, pMethod As %String, ByRef pContinue As %Boolean) As %Status
{
    // Convert incoming JSON content to a dynamic object for processing
    if $isobject(%request.Content) && (%request.Content.%IsA("%Library.DynamicObject")) {
        // Convert JSON content to UTF-8 format if needed
        set %request.Content = {}.%FromJSON($zconvert(%request.Content.%ToJSON(),"I","UTF8"))
    } else {
        set %request.Content = {}.%FromJSON(%request.Content)
    }
    return $$$OK
}

}
