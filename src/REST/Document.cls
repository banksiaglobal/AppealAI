Class REST.Document Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/_ping" Method="GET" Call="Ping" Cors="true"/>
    <Route Url="/upload" Method="POST" Call="Upload" Cors="true"/>
    <Route Url="/:id" Method="DELETE" Call="Delete" Cors="true"/>
    <Route Url="/:id" Method="GET" Call="GetDocument" Cors="true"/>

</Routes>
}

ClassMethod Ping() As %Library.DynamicObject
{
    set response = {}
    s response.pong = 1
    set responseSC = $$$OK
    return ..Response(response, responseSC)
}

ClassMethod Upload() As %Library.DynamicObject
{
    #dim %request As %CSP.Request
    set response = {}
    set responseSC = $$$OK
    set data = %request.GetMimeData("file") // %CSP.BinaryStream
    set path = "/opt/irisapp/output/"

    tstart
    Try {
        set doc=##class(%Stream.FileBinary).%New()
        Set doc.Filename=path_data.FileName
        set tsc=doc.CopyFrom(data) 
        set sc=doc.%Save()
        
        if 'sc || 'tsc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }

        set Document = ##class(Model.Document).%New()
        set Document.Name = data.FileName
        set Document.Path = doc.Filename
        set Document.DateTime = $ZD($H,3)
        set sc = Document.%Save()

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be saved"))
        }

        set response.id = Document.%Id()
        set response.name = Document.Name

        tcommit
    }
    Catch ex {
        trollback
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }
    return ..Response(response, responseSC)
}

ClassMethod Delete(id) As %Status
{
    set response = {}
    set responseSC = $$$OK

    tstart
    Try {

        set sc = ##class(Model.Document).%DeleteId(id)

        if 'sc {
            set response={"error":-500}
            $$$ThrowOnError($$$ERROR($$$GeneralError, "File cannot be deleted"))
        }

        tcommit
    }
    Catch ex {
        trollback
        if response.error="" set response.error=-500
        set response.errorText=$System.Status.GetErrorText(ex.AsStatus())
        set responseSC = $System.Status.GetErrorText(ex.AsStatus())
    }

    return ..Response(response, responseSC)
}

}
