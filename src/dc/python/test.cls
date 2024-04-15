Class dc.python.test
{

ClassMethod Hello() As %Status
{
        Set sc = $$$OK
        Set sm = ##class(%SYS.Python).Import("banksiatest")
        write sm.hello()
        Return sc
}

}
