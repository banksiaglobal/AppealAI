Class REST.Package Extends REST.Base
{

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>

    <Route Url="/_ping" Method="GET" Call="Ping" Cors="true"/>
    <Route Url="/upload" Method="POST" Call="Upload" Cors="true"/>
    <Route Url="/delete" Method="DELETE" Call="Delete" Cors="true"/>

</Routes>
}

}
