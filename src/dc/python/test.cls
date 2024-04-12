Class dc.python.test
{

ClassMethod Hello() As %Status
{
        Set sc = $$$OK
        Set sm = ##class(%SYS.Python).Import("test")
        write sm.hello()
        Return sc
}

}
