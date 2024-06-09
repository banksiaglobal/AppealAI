/// 
Class Production.Process.GetFhirData Extends Ens.BusinessProcessBPL
{

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='Production.Message.GetFhirDataRequest' response='Production.Message.Response' height='2000' width='2000' >
<context>
<property name='data' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='200' yend='900' >
<call name='Get parient data from Fhir' target='FhirOut' async='0' languageOverride="objectscript" xpos='335' ypos='400' >
<request type='Production.Message.FhirRequest' >
<assign property="callrequest.Parameters" value="&quot;?_id=&quot;_request.Encounter_&quot;&amp;_revinclude=Claim:encounter&quot;" action="set" languageOverride="" />
<assign property="callrequest.Path" value="&quot;/Encounter&quot;" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="context.data" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
<assign name="Get text data of Encounter and Claim" property="response.Result" value="context.data" action="set" languageOverride="objectscript" xpos='335' ypos='700' />
</sequence>
</process>
}

Storage Default
{
<Type>%Storage.Persistent</Type>
}

}
