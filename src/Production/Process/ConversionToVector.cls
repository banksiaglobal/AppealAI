/// 
Class Production.Process.ConversionToVector Extends Ens.BusinessProcessBPL
{

/// BPL Definition
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
<property name='vectorOfDocument' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='199' yend='1095' >
<assign name="get type of doc " property="context.typeOfDoc" value="request.Path.split('.')[-1]" action="set" languageOverride="python" xpos='200' ypos='250' />
<switch name='what type of doc ' xpos='200' ypos='350' xend='188' yend='607' >
<case condition='context.typeOfDoc = "pdf"' name='if type is pdf' languageOverride='objectscript' >
<code name='PDF' languageOverride='python' xpos='335' ypos='500' >
<![CDATA[with pdfplumber.open(request.Path) as pdf:
    for page in pdf.pages:
        context.textOfDocument += page.extract_text() or '']]>
</code>
</case>
<case condition='context.typeOfDoc = "docx"' name='if type is docx' languageOverride='objectscript' >
<code name='DOCX' languageOverride='python' xpos='605' ypos='500' >
<![CDATA[doc = docx.Document(request.Path)
context.textOfDocument = '\n'.join([para.text for para in doc.paragraphs])]]>
</code>
</case>
<case condition='context.typeOfDoc = "txt"' name='if type is txt' languageOverride='objectscript' >
<code name='TXT' languageOverride='python' xpos='875' ypos='500' >
<![CDATA[with open(request.Path, 'r', encoding='utf-8') as file:
    context.textOfDocument = file.read()]]>
</code>
</case>
</switch>
<code name='get vector' languageOverride='python' xpos='200' ypos='700' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
data = embeddings.embed_documents([context.textOfDocument])
context.vectorOfDocument = json.dumps(data)
#text_splitter = RecursiveCharacterTextSplitter(length_function=len, is_separator_regex=False,)
#texts = text_splitter.create_documents([context.textOfDocument])
#for key, text in enumerate(texts):
#    data = embeddings.embed_documents(text.page_content)
#    callresponse.vectorOfDocument(key) = json.dumps(data)
]]>
</code>
<call name='save document' target='SaveVector' async='0' xpos='200' ypos='800' >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
<assign property="callrequest.Vector" value="context.vectorOfDocument" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.Package" action="set" languageOverride="" />
</request>
<response type='Ens.Response' />
</call>
<sync calls='save document' type='all' xpos='200' ypos='900' />
</sequence>
</process>
}

Storage Default
{
<Type>%Storage.Persistent</Type>
}

}
