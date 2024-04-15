Class Model.Company Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String;

// Property Product As array Of Model.Package;

Property UUIDFHIR As %String(MAXLEN = 300);

Index IndexName On Name;




}
