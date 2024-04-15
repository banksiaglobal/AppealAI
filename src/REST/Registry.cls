Class REST.Registry Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Map Prefix="/documents" Forward="REST.Document"/>

</Routes>
}

}
