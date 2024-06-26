/// 
Class Production.Process.VectorSearch Extends Ens.BusinessProcessBPL
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/*
    BPL Definition:

    Get the text of the document and the vector.
	Perform vector search.
	Compose a letter of appeal.
*/
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='Production.Message.AppealRequest' response='Production.Message.Response' height='2600' width='2000' >
<pyFromImport>
from langchain_openai import OpenAIEmbeddings
import json
import pytesseract
import os
</pyFromImport>
<context>
<property name='vector' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='resultSearch' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='appealIspossible' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='50' />
</parameters>
</property>
<property name='textAppeal' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='prompt' type='%String' initialexpression='"On behalf of the hospital, write an appeal against the refusal ("' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='patientData' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='200' yend='2000' >
<if name='If encounter is not empty' condition='request.Encounter &apos;=""' languageOverride="objectscript" xpos='200' ypos='250' xend='200' yend='600' >
<true>
<call name='Get Fhir Data of Encounter' target='GetFhirData' async='0' languageOverride="objectscript" xpos='335' ypos='400' >
<request type='Production.Message.GetFhirDataRequest' >
<assign property="callrequest.Encounter" value="request.Encounter" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="context.patientData" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
<assign name="Add patient data" property="context.patientData" value="&quot; to compensate for medical services provided to the patient defined with following FHIR  object &quot;_request.PatientName_&quot;  &quot;_context.patientData" action="set" languageOverride="objectscript" xpos='335' ypos='500' />
</true>
</if>
<code name='Get vector rejection file' languageOverride='python' xpos='200' ypos='700' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
data = embeddings.embed_documents([request.DenialText])
context.vector = json.dumps(data[0][:200])]]>
</code>
<sql name='Vector search' xpos='200' ypos='800' >
<![CDATA[SELECT TOP 1 Text INTO :context.resultSearch FROM Model.DocumentChunk
WHERE Document->Package = :request.Package
ORDER BY VECTOR_DOT_PRODUCT(Vector, TO_VECTOR(:context.vector, double, 200)) DESC
]]>
</sql>
<if name='The search a is match' condition='context.resultSearch &apos;=""' languageOverride="objectscript" xpos='200' ypos='900' xend='200' yend='1800' >
<true>
<call name='Call Ai for an analysis ' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='470' ypos='1050' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.UserInput" value="&quot;The denial letter: &quot;_request.DenialText_&quot; And  text with  insurance contract: &quot;_context.resultSearch_&quot;. &quot;_context.patientData" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="&quot;Can an appeal be filed against the insurance company's denial of compensation for medical services rendered (a Yes or No answer is required no period, capital letters), after completing the following steps: 1. Make sure that both documents presented (the denial letter and the insurance policy) in their structure and content really are a refusal letter and an insurance contract. Only if this is the case: 2. Analyze the denial letter to identify the basis of the refusal. 3. Considering the basis of the denial, locate the relevant content in the insurance policy. 4. Compare whether the basis of the denial corresponds to the conditions stated in the policy. 5. If the basis of the denial does not correspond to the conditions of the policy, or if it is unclear or without reference to the policy's terms, find information in the policy about the deadlines and grounds for filing an appeal. 6. Provide an answer to the question: is filing an appeal possible? a Yes or No answer, no period, capital letters is required &quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.appealIspossible" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call Ai for an analysis ' type='all' xpos='470' ypos='1150' />
<if name='An appeal is possible' condition='$ZCONVERT(context.appealIspossible, "t") = "YES"' languageOverride="objectscript" xpos='470' ypos='1250' xend='470' yend='1700' >
<true>
<assign name="Add denial letter to prompt" property="context.prompt" value="context.prompt_request.DenialText_&quot; ) on based on contract part &quot;_context.resultSearch_&quot;  &quot;_context.patientData" action="set" languageOverride="objectscript" xpos='740' ypos='1400' />
<call name='Call Ai for get appeal letter' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='740' ypos='1500' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.Prompt" value="&quot;You are a helpful, smart, kind, and efficient insurance claim appeal attorney. You always fulfill the user's requests to the best of your ability. &quot;" action="set" languageOverride="" />
<assign property="callrequest.UserInput" value="context.prompt" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.textAppeal" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call Ai for get appeal letter' type='all' xpos='740' ypos='1600' />
</true>
<false>
<assign name="Set result" property="context.textAppeal" value="&quot;The denial of insurance coverage cannot be contested. Currently, there are not enough reasons to initiate an appeal process.&quot;" action="set" languageOverride="objectscript" xpos='470' ypos='1400' />
</false>
</if>
</true>
<false>
<assign name="Set result" property="context.textAppeal" value="&quot;No matches have been found in the contract for the formulation of an appeal.&quot;" action="set" languageOverride="objectscript" xpos='200' ypos='1050' />
</false>
</if>
<call name='Save appeal data' target='SaveAppeal' async='0' languageOverride="objectscript" xpos='200' ypos='1900' >
<request type='Production.Message.SaveAppealRequest' >
<assign property="callrequest.Package" value="request.Package" action="set" languageOverride="" />
<assign property="callrequest.DenialText" value="request.DenialText" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="context.prompt" action="set" languageOverride="" />
<assign property="callrequest.Appeal" value="context.textAppeal" action="set" languageOverride="" />
<assign property="callrequest.DenialVector" value="context.vector" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="response.Result" value="&quot;Letter created&quot;" action="set" languageOverride="" />
</response>
</call>
</sequence>
</process>
}

/// BPL Definition

}
