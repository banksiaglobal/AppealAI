Class Model.Document Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String(MAXLEN = 300);

Property Path As %String(MAXLEN = 300);

Property DateTime As %TimeStamp;

Property Package As Model.Package;

Index IndexName On Name [ Unique ];

// Retrieve a document by its name

ClassMethod GetDocumentByName(name) As Model.Document
{
    set Document = ""
    &SQL(SELECT ID into :id FROM Model.Document WHERE Name=:name)
    if SQLCODE=0{
       set Document = ##class(Model.Document).%OpenId(id)
    }
    Return Document
}

// Retrieve all documents belonging to a specific package

ClassMethod GetAllByPackage(packageId) As %Library.DynamicArray
{
    set documents = []
    set tStatement = ##class(%SQL.Statement).%New()
    set tStatus = tStatement.%Prepare("select * from Model.Document where Package->ID = ?")
			if ($$$ISOK(tStatus)) { 
				set tResult = tStatement.%Execute(packageId)
				if (tResult.%SQLCODE=0) {
					while tResult.%Next() {
                        set document = {}
						set document.name = tResult.Name
                        set document.createdDateTime = tResult.DateTime
                        set document.id = tResult.ID
                        set document.packageId = packageId
						do documents.%Push(document)
					}
				}
			}
            else {
                $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
            }
    return documents
}

Storage Default
{
<Data name="DocumentDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Path</Value>
</Value>
<Value name="4">
<Value>DateTime</Value>
</Value>
<Value name="5">
<Value>Package</Value>
</Value>
</Data>
<DataLocation>^Model.DocumentD</DataLocation>
<DefaultData>DocumentDefaultData</DefaultData>
<IdLocation>^Model.DocumentD</IdLocation>
<IndexLocation>^Model.DocumentI</IndexLocation>
<StreamLocation>^Model.DocumentS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
