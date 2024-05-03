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
<process language='objectscript' request='Production.Message.AppealRequest' response='Ens.StringResponse' height='2000' width='2000' >
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
<property name='result' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='200' yend='650' >
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
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY, dimensions=100)
data = embeddings.embed_documents([context.text])
context.textChunks.Insert(context.text)
context.vectorChunks.Insert(json.dumps(data[0]))
context.vector = json.dumps(data[0])]]>
</code>
<call name='Save data' target='SaveVector' async='0' xpos='200' ypos='450' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.VectorChunks" value="context.vectorChunks" action="set" languageOverride="" />
<assign property="callrequest.TextChunks" value="context.textChunks" action="set" languageOverride="" />
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;appeal&quot;" action="set" languageOverride="" />
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
</request>
<response type='Ens.Response' />
</call>
<sql name='Vector search' xpos='200' ypos='550' >
<![CDATA[SELECT TOP 1 Text INTO :context.result FROM Model.DocumentChunk
WHERE Document->ID = :DocumentId
ORDER BY VECTOR_DOT_PRODUCT(Vector, TO_VECTOR(:context.vector, double, 200)) DESC
]]>
</sql>
</sequence>
</process>
}

}
