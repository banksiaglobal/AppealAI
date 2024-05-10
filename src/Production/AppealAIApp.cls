Class Production.AppealAIApp Extends Ens.Production
{

XData ProductionDefinition
{
<Production Name="Production.AppealAIApp" TestingEnabled="true" LogGeneralTraceEvents="false">
  <Description></Description>
  <ActorPoolSize>2</ActorPoolSize>
  <Item Name="DocumentIn" Category="" ClassName="Production.Service.DocumentIn" PoolSize="0" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="SaveVector" Category="" ClassName="Production.Operation.SaveVector" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="ConversionToVector" Category="" ClassName="Production.Process.ConversionToVector" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="GetText" Category="" ClassName="Production.Process.GetText" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="VectorSearch" Category="" ClassName="Production.Process.VectorSearch" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="AppealIn" Category="" ClassName="Production.Service.AppealIn" PoolSize="0" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="SaveDocument" Category="" ClassName="Production.Operation.SaveDocument" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
  </Item>
  <Item Name="OpenAiOut" Category="" ClassName="Banksia.OpenAi.Operation" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Adapter" Name="SSLConfig">pm.community.intersystems.com</Setting>
    <Setting Target="Adapter" Name="Credentials">user</Setting>
  </Item>
  <Item Name="FhirOut" Category="" ClassName="Production.Operation.FhirOut" PoolSize="1" Enabled="true" Foreground="false" Comment="" LogTraceEvents="false" Schedule="">
    <Setting Target="Host" Name="ServiceName">FhirService</Setting>
    <Setting Target="Host" Name="TraceOperations">*FULL*</Setting>
  </Item>
</Production>
}

}
