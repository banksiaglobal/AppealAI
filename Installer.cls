Class Installer 
{

XData setup
{
<Manifest>
  <Default Name="Namespace" Value="USER"/>
  <Default Name="database" Value="USER"/>


  <Namespace Name="${Namespace}" Code="${Namespace}" Data="${Namespace}" Create="yes" Ensemble="yes">
    <Configuration>
      <Database Name="${Namespace}" Dir="${mgrdir}${database}/data" Create="yes" Resource="%DB_${Namespace}"/>
    </Configuration>
    <Production Name="Production.AppealAIApp" AutoStart="1" />
  </Namespace>
  
</Manifest>
}

ClassMethod setup(ByRef pVars, pLogLevel As %Integer = 3, pInstaller As %Installer.Installer, pLogger As %Installer.AbstractLogger) As %Status [ CodeMode = objectgenerator, Internal ]
{
  #; Let XGL document generate code for this method. 
  quit ##class(%Installer.Manifest).%Generate(%compiledclass, %code, "setup")
}

}
