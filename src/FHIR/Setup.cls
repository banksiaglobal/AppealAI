Class FHIR.Setup Extends %RegisteredObject
{

ClassMethod SetupFHIRServer(ns) As %Status
{

    zn "%SYS"
    do ##class(Security.Users).UnExpireUserPasswords("*")
    do ##class(Security.Services).Get("%Service_CallIn",.prop)
    set prop("Enabled")=1
    set prop("AutheEnabled")=48
    do ##class(Security.Services).Modify("%Service_CallIn",.prop)

    
    set ns=$g(ns,$namespace)
    set ns="FHIRSERVER"


    zn "HSLIB"

    Do ##class(HS.HC.FHIRSQL.Utils.Setup).CreateWebApps("HSSYS",1)
    Do ##class(HS.HC.FHIRSQL.Utils.Setup).DefineDocDBs("HSSYS")

    set namespace=ns
    Set appKey = "/fhir/r4"
    Set strategyClass = "HS.FHIRServer.Storage.Json.InteractionsStrategy"
    set metadataPackages = $lb("hl7.fhir.r4.core@4.0.1")
    Set metadataConfigKey = "HL7v40"

    Do ##class(HS.Util.Installer.Foundation).Install(namespace)

    zn namespace

    do ##class(HS.FHIRServer.Installer).InstallNamespace()

    if '##class(HS.FHIRServer.ServiceAdmin).EndpointExists(appKey) {
    do ##class(HS.FHIRServer.Installer).InstallInstance(appKey, strategyClass, metadataPackages)
    }

    set strategy = ##class(HS.FHIRServer.API.InteractionsStrategy).GetStrategyForEndpoint(appKey)
    set config = strategy.GetServiceConfigData()
    set config.DebugMode = 4
    do strategy.SaveServiceConfigData(config)

    set dir=$System.Util.ManagerDirectory()_"dataFhir"
    set st=##class(HS.FHIRServer.Tools.DataLoader).SubmitResourceFiles(dir, "FHIRServer", appKey)
    if 'st write $System.Status.GetErrorText(st)


    quit st
}

}
