Class Model.Document Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String(MAXLEN = 300);

Property Path As %String(MAXLEN = 300);

Property DateTime As %TimeStamp;

Property Package As Model.Package;

Property TypeOfDocument As %String;

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
                        set document.typeOfDocument = tResult.TypeOfDocument
						do documents.%Push(document)
					}
				}
			}
            else {
                $$$ThrowOnError($$$ERROR($$$GeneralError, "Not found"))
            }
    return documents
}

// Save a document as a PDF using Python's reportlab library

ClassMethod SaveDocumentPDF(text, path) [ Language = python ]
{
    from reportlab.lib.pagesizes import A4
    from reportlab.pdfgen import canvas

    c = canvas.Canvas(path, pagesize=A4)
    width, height = A4

   
    lines = text.split('\n')

    y = height - 50  
    for line in lines:
        c.drawString(50, y, line)
        y -= 15 

    c.save()
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
<Value name="6">
<Value>TypeOfDocument</Value>
</Value>
</Data>
<DataLocation>^Model.DocumentD</DataLocation>
<DefaultData>DocumentDefaultData</DefaultData>
<ExtentSize>13</ExtentSize>
<IdLocation>^Model.DocumentD</IdLocation>
<IndexLocation>^Model.DocumentI</IndexLocation>
<Property name="%%CLASSNAME">
<AverageFieldSize>2</AverageFieldSize>
<OutlierSelectivity>.999999:</OutlierSelectivity>
<Selectivity>0.0001%</Selectivity>
</Property>
<Property name="%%ID">
<AverageFieldSize>3</AverageFieldSize>
<Selectivity>1</Selectivity>
</Property>
<Property name="DateTime">
<AverageFieldSize>21</AverageFieldSize>
<Selectivity>11.1111%</Selectivity>
</Property>
<Property name="Name">
<AverageFieldSize>23.08</AverageFieldSize>
<Selectivity>25.0000%</Selectivity>
</Property>
<Property name="Package">
<AverageFieldSize>3</AverageFieldSize>
<OutlierSelectivity>.999999:1</OutlierSelectivity>
<Selectivity>0.0001%</Selectivity>
</Property>
<Property name="Path">
<AverageFieldSize>36.08</AverageFieldSize>
<Selectivity>25.0000%</Selectivity>
</Property>
<Property name="TypeOfDocument">
<AverageFieldSize>8</AverageFieldSize>
<Selectivity>33.3333%</Selectivity>
</Property>
<SQLMap name="IDKEY">
<BlockCount>-4</BlockCount>
</SQLMap>
<SQLMap name="IndexName">
<BlockCount>-4</BlockCount>
</SQLMap>
<StreamLocation>^Model.DocumentS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
