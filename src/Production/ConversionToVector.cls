/// 
Class Production.ConversionToVector Extends Ens.BusinessProcessBPL
{

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='python' request='Production.Message.Vector.Request' response='Production.Message.Vector.Response' height='2000' width='2000' >
<pyFromImport>
from typing import List, Tuple, Final
from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import pytesseract
from PIL import Image
import os
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
</context>
<sequence xend='601' yend='756' >
<assign name="get type of doc " property="context.typeOfDoc" value="(request.Path).split('.')[-1]" action="set" languageOverride="python" xpos='200' ypos='250' />
<switch name='what type of doc ' xpos='200' ypos='350' xend='200' yend='600' >
<case condition='context.typeOfDoc = "pdf"' name='if type is pdf' languageOverride='objectscript' >
<code name='PDF' languageOverride='python' xpos='335' ypos='500' >
<![CDATA[textOfDocument = ''
with pdfplumber.open(request.Path) as pdf:
    for page in pdf.pages:
        textOfDocument += page.extract_text() or '']]>
</code>
</case>
<case condition='context.typeOfDoc = "docx"' name='if type is docx' languageOverride='objectscript' >
<code name='DOCX' languageOverride='python' xpos='605' ypos='500' >
<![CDATA[doc = docx.Document(request.Path)
textOfDocument = '\n'.join([para.text for para in doc.paragraphs])]]>
</code>
</case>
<case condition='context.typeOfDoc = "txt"' name='if type is txt' languageOverride='objectscript' >
<code name='TXT' languageOverride='python' xpos='875' ypos='500' >
<![CDATA[with open(request.Path, 'r', encoding='utf-8') as file:
    textOfDocument = file.read()]]>
</code>
</case>
</switch>
<code name='get vector' languageOverride='python' xpos='200' ypos='700' >
<![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY)
response.Vector = embeddings.embed_documents([textOfDocument])
]]>
</code>
</sequence>
</process>
}

}
