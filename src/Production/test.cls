Class Production.test
{

// d ##class(Production.test).Hello()

ClassMethod Hello() As %Status
{
        Set sc = $$$OK
        Set sm = ##class(%SYS.Python).Import("BanksiaDoc")
        write sm.start()
        Return sc
}

}
