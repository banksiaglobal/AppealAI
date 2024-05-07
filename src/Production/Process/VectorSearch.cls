/// 
Class Production.Process.VectorSearch Extends Ens.BusinessProcessBPL
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='Production.Message.AppealRequest' response='Production.Message.Response' height='2600' width='2000' >
<pyFromImport>
from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import json
import pytesseract
from PIL import Image
import os
</pyFromImport>
<context>
<property name='text' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='vectorChunks' type='%String' collection='list' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='textChunks' type='%String' collection='list' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
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
<property name='filePath' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='200' yend='2350' >
<call name='Save file' target='SaveDocument' async='0' languageOverride="objectscript" xpos='200' ypos='250' >
<request type='Production.Message.SaveDocumentRequest' >
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
<assign property="callrequest.Data" value="request.Data" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;rejection&quot;" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="context.filePath" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
<if name='The file was successfully saved' condition='context.filePath &apos;=""' languageOverride="objectscript" xpos='200' ypos='350' xend='200' yend='2250' >
<true>
<call name='Get Text' target='GetText' async='0' languageOverride="objectscript" xpos='470' ypos='500' >
<request type='Production.Message.GetTextRequest' >
<assign property="callrequest.Path" value="context.filePath" action="set" languageOverride="" />
</request>
<response type='Production.Message.GetTextResponse' >
<assign property="context.text" value="callresponse.Text" action="set" languageOverride="" />
</response>
</call>
<code name='Get vector' languageOverride='python' xpos='470' ypos='600' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
data = embeddings.embed_documents([context.text])
context.textChunks.Insert(context.text)
context.vectorChunks.Insert(json.dumps(data[0][:200]))
context.vector = json.dumps(data[0])]]>
</code>
<call name='Save data' target='SaveVector' async='0' languageOverride="objectscript" xpos='470' ypos='700' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.VectorChunks" value="context.vectorChunks" action="set" languageOverride="" />
<assign property="callrequest.TextChunks" value="context.textChunks" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;rejection&quot;" action="set" languageOverride="" />
<assign property="callrequest.Path" value="context.filePath" action="set" languageOverride="" />
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' />
</call>
<sql name='Vector search' xpos='470' ypos='800' >
<![CDATA[SELECT TOP 1 Text INTO :context.resultSearch FROM Model.DocumentChunk
WHERE Document->ID = :request.DocumentId
ORDER BY VECTOR_DOT_PRODUCT(Vector, TO_VECTOR(:context.vector, double, 200)) DESC
]]>
</sql>
<if name='The search turned up a match' condition='context.resultSearch &apos;=""' languageOverride="objectscript" xpos='470' ypos='900' xend='470' yend='2150' >
<true>
<call name='Call ai for bool' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='740' ypos='1050' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.UserInput" value="&quot;The denial letter: &quot;_context.text_&quot; And  text with  insurance contract: &quot;_context.resultSearch" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="&quot;Can an appeal be filed against the insurance company's denial of compensation for medical services rendered (a Yes or No answer is required no period, capital letters), after completing the following steps:  1. Analyze the denial letter to identify the basis of the refusal. 2. Considering the basis of the denial, locate the relevant content in the insurance policy. 3. Compare whether the basis of the denial corresponds to the conditions stated in the policy. 4. If the basis of the denial does not correspond to the conditions of the policy, or if it is unclear or without reference to the policy's terms, find information in the policy about the deadlines and grounds for filing an appeal. 5. Provide an answer to the question: is filing an appeal possible? a Yes or No answer, no period, capital letters is required &quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.appealIspossible" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call ai for bool' type='all' xpos='740' ypos='1150' />
<if name='An appeal is possible' condition='$ZCONVERT(context.appealIspossible, "t") = "YES"' languageOverride="objectscript" xpos='740' ypos='1250' xend='740' yend='2050' >
<true>
<call name='Call ai for appeal' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='1010' ypos='1400' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.UserInput" value="&quot;The text of the denial letter: &quot;_context.text" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="&quot;Create an example of an appeal letter to an insurance company's decision based on the text of the denial letter. Text only in response. &quot;" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.textAppeal" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call ai for appeal' type='all' xpos='1010' ypos='1500' />
<call name='Save file  ' target='SaveDocument' async='0' languageOverride="objectscript" xpos='1010' ypos='1600' >
<request type='Production.Message.SaveDocumentRequest' >
<assign property="callrequest.TypeOfDoc" value="&quot;appeal&quot;" action="set" languageOverride="" />
<assign property="callrequest.Text" value="context.textAppeal" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
<assign property="callrequest.Name" value="&quot;Appeal-&quot;_request.Name" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="response.Result" value="&quot;Letter created&quot;" action="set" languageOverride="" />
<assign property="context.filePath" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
<if name='The file was successfully saved' condition='context.filePath &apos;=""' languageOverride="objectscript" xpos='1010' ypos='1700' xend='1010' yend='1950' >
<true>
<call name='Save data appeal' target='SaveVector' async='0' languageOverride="objectscript" xpos='1280' ypos='1850' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.Path" value="context.filePath" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;appeal&quot;" action="set" languageOverride="" />
<assign property="callrequest.Name" value="&quot;Appeal-&quot;_request.Name" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="response.Result" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;Save appeal error&quot;" action="set" languageOverride="objectscript" xpos='1010' ypos='1850' />
</false>
</if>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;A denial of insurance service cannot be challenged&quot;" action="set" languageOverride="objectscript" xpos='740' ypos='1400' />
</false>
</if>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;No matches found&quot;" action="set" languageOverride="objectscript" xpos='470' ypos='1050' />
</false>
</if>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;Save file error&quot;" action="set" languageOverride="objectscript" xpos='200' ypos='500' />
</false>
</if>
</sequence>
</process>
}

}
