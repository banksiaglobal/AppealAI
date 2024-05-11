Class REST.Registry Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Map Prefix="/document" Forward="REST.Document"/>
    <Map Prefix="/company" Forward="REST.Company"/>
    <Map Prefix="/package" Forward="REST.Package"/>
    <Map Prefix="/appeal" Forward="REST.Appeal"/>

</Routes>
}

}
