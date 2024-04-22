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
</Production>
}

}