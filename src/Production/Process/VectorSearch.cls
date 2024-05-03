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
<process language='objectscript' request='Production.Message.AppealRequest' response='Production.Message.Response' height='2000' width='2000' >
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
</context>
<sequence xend='200' yend='1650' >
<call name='Get Text' target='GetText' async='0' languageOverride="objectscript" xpos='200' ypos='250' >
<request type='Production.Message.GetTextRequest' >
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
</request>
<response type='Production.Message.GetTextResponse' >
<assign property="context.text" value="callresponse.Text" action="set" languageOverride="" />
</response>
</call>
<code name='Get vector' languageOverride='python' xpos='200' ypos='350' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
data = embeddings.embed_documents([context.text])
context.textChunks.Insert(context.text)
context.vectorChunks.Insert(json.dumps(data[0][:200]))
context.vector = json.dumps(data[0])]]>
</code>
<call name='Save data' target='SaveVector' async='0' xpos='200' ypos='450' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.VectorChunks" value="context.vectorChunks" action="set" languageOverride="" />
<assign property="callrequest.TextChunks" value="context.textChunks" action="set" languageOverride="" />
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;rejection&quot;" action="set" languageOverride="" />
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
</request>
<response type='Ens.Response' />
</call>
<sql name='Vector search' xpos='200' ypos='550' >
<![CDATA[SELECT TOP 1 Text INTO :context.resultSearch FROM Model.DocumentChunk
WHERE Document->ID = :request.DocumentId
ORDER BY VECTOR_DOT_PRODUCT(Vector, TO_VECTOR(:context.vector, double, 200))
]]>
</sql>
<if name='The search turned up a match' condition='context.resultSearch &apos;=""' languageOverride="objectscript" xpos='200' ypos='650' xend='200' yend='1550' >
<true>
<call name='Call ai for bool' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='470' ypos='800' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.UserInput" value="&quot;give a random answer with one of these words, yes or no. no period, capital letters. &quot;" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="&quot;give a random answer with one of these words, yes or no. no period, capital letters. &quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.appealIspossible" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call ai for bool' type='all' xpos='470' ypos='900' />
<if name='An appeal is possible' condition='$ZCONVERT(context.appealIspossible, "t") = "YES"' languageOverride="objectscript" xpos='470' ypos='1000' xend='470' yend='1450' >
<true>
<call name='Call ai for appeal' target='OpenAiOut' async='1' languageOverride="objectscript" xpos='740' ypos='1150' >
<request type='Banksia.OpenAi.Msg.SimplePrompt.Request' >
<assign property="callrequest.UserInput" value="&quot;send an example of a draft of a letter of appeal against the insurance company's decision. text only&quot;" action="set" languageOverride="" />
<assign property="callrequest.Prompt" value="&quot;send an example of a draft of a letter of appeal against the insurance company's decision. text only&quot;" action="set" languageOverride="" />
<assign property="callrequest.Model" value="&quot;gpt-4-turbo&quot;" action="set" languageOverride="" />
</request>
<response type='Banksia.OpenAi.Msg.SimplePrompt.Response' >
<assign property="context.textAppeal" value="callresponse.Content" action="set" languageOverride="" />
</response>
</call>
<sync name='Wait call' calls='Call ai for appeal' type='all' xpos='740' ypos='1250' />
<call name='Save file  ' target='SaveDocument' async='0' languageOverride="objectscript" xpos='740' ypos='1350' >
<request type='Production.Message.SaveDocumentRequest' >
<assign property="callrequest.TypeOfDoc" value="&quot;appeal&quot;" action="set" languageOverride="" />
<assign property="callrequest.Package" value="1" action="set" languageOverride="" />
<assign property="callrequest.Name" value="&quot;test.pdf&quot;" action="set" languageOverride="" />
<assign property="callrequest.Text" value="context.textAppeal" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="response.Result" value="&quot;Letter created&quot;" action="set" languageOverride="" />
</response>
</call>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;A denial of insurance service cannot be challenged&quot;" action="set" languageOverride="objectscript" xpos='470' ypos='1150' />
</false>
</if>
</true>
<false>
<assign name="Set result" property="response.Result" value="&quot;No matches found&quot;" action="set" languageOverride="objectscript" xpos='200' ypos='800' />
</false>
</if>
</sequence>
</process>
}

}
