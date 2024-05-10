Class Production.Utils
{

// Start Production 

ClassMethod StartProduction(productionName) As %Status
{
    // Check if the production is running
    set statusProd = ##class(Ens.Director).IsProductionRunning(productionName)

    // If not running, start the production
    if 'statusProd{
        do ##class(Ens.Director).StartProduction(productionName)
    }

    return $$$OK
}

}
