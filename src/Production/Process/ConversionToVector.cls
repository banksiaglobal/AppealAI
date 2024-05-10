Class Production.Process.ConversionToVector Extends Ens.BusinessProcessBPL
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/*
    BPL Definition:

    Splits the text of the document into parts. 
	For each part get a vector and save the data.
*/
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='python' request='Production.Message.DocumentRequest' response='Ens.Response' height='2000' width='2000' >
<pyFromImport>
from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import json
import pytesseract
from PIL import Image
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter
</pyFromImport>
<context>
<property name='typeOfDoc' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='50' />
</parameters>
</property>
<property name='textOfDocument' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='textChunks' type='%String' collection='list' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
<property name='vectorChunks' type='%String' collection='list' instantiate='0' >
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
<sequence xend='200' yend='900' >
<call name='Save file' target='SaveDocument' async='0' languageOverride="objectscript" xpos='200' ypos='250' >
<request type='Production.Message.SaveDocumentRequest' >
<assign property="callrequest.Data" value="request.Data" action="set" languageOverride="" />
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.Package" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;document&quot;" action="set" languageOverride="" />
</request>
<response type='Production.Message.Response' >
<assign property="context.filePath" value="callresponse.Result" action="set" languageOverride="" />
</response>
</call>
<if name='The file was successfully saved' condition='context.filePath &apos;= ""' languageOverride="objectscript" xpos='200' ypos='350' xend='200' yend='800' >
<true>
<call name='Get text of file' target='GetText' async='0' languageOverride="objectscript" xpos='335' ypos='500' >
<request type='Production.Message.GetTextRequest' >
<assign property="callrequest.Path" value="context.filePath" action="set" languageOverride="" />
</request>
<response type='Production.Message.GetTextResponse' >
<assign property="context.textOfDocument" value="callresponse.Text" action="set" languageOverride="" />
</response>
</call>
<code name='Get vectors of file' languageOverride='python' xpos='335' ypos='600' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
text_splitter = RecursiveCharacterTextSplitter(length_function=len, is_separator_regex=False, chunk_size=8000,chunk_overlap=1000,)
texts = text_splitter.create_documents([context.textOfDocument])
for key, text in enumerate(texts):
    data = embeddings.embed_documents(text.page_content)
    context.textChunks.Insert(text.page_content)
    context.vectorChunks.Insert(json.dumps(data[key][:200]))
]]>
</code>
<call name='Save data' target='SaveVector' async='0' languageOverride="objectscript" xpos='335' ypos='700' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.VectorChunks" value="context.vectorChunks" action="set" languageOverride="" />
<assign property="callrequest.Path" value="context.filePath" action="set" languageOverride="" />
<assign property="callrequest.TextChunks" value="context.textChunks" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.Package" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;document&quot;" action="set" languageOverride="" />
</request>
<response type='Ens.Response' />
</call>
</true>
</if>
</sequence>
</process>
}

}
