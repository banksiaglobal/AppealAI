Class Model.Document Extends (%Library.Persistent, %JSON.Adaptor)
{

Property Name As %String(MAXLEN = 300);

Property Path As %String(MAXLEN = 300);

Property DateTime As %TimeStamp;

Property Package As Model.Package;

Property TypeOfDocument As %String;

Index IndexName On Name;

ClassMethod GetDocumentByName(name) As Model.Document
{
    set Document = ""
    &SQL(SELECT ID into :id FROM Model.Document WHERE Name=:name)
    if SQLCODE=0{
       set Document = ##class(Model.Document).%OpenId(id)
    }
    Return Document
}

ClassMethod SaveDocumentPDF(text, path) [ Language = python ]
{
    from reportlab.lib.pagesizes import A4
    from reportlab.pdfgen import canvas

    c = canvas.Canvas(path, pagesize=A4)
    width, height = letter

    c.drawString(100, height-100, text)
    c.save()
}

ClassMethod SaveDocumentDOCX(text, path) [ Language = python ]
{
    from docx import Document

    doc = Document()
    doc.add_paragraph(text)
    doc.save(path)
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
<IdLocation>^Model.DocumentD</IdLocation>
<IndexLocation>^Model.DocumentI</IndexLocation>
<StreamLocation>^Model.DocumentS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
