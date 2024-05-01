/// 
Class Production.Process.GetText Extends Ens.BusinessProcessBPL
{

/// BPL Definition
XData BPL [ XMLNamespace = "http://www.intersystems.com/bpl" ]
{
<process language='objectscript' request='Production.Message.GetTextRequest' response='Production.Message.GetTextResponse' height='2000' width='2000' >
<pyFromImport>
import pdfplumber
import docx
import json
import pytesseract
from PIL import Image
import os
</pyFromImport>
<context>
<property name='Extension' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='50' />
</parameters>
</property>
<property name='TextOfFile' type='%String' instantiate='0' >
<parameters>
<parameter name='MAXLEN'  value='' />
</parameters>
</property>
</context>
<sequence xend='200' yend='800' >
<assign name="Get file extension" property="context.Extension" value="request.Path.split('.')[-1]" action="set" languageOverride="python" xpos='200' ypos='250' />
<switch xpos='200' ypos='350' xend='200' yend='600' >
<case condition='context.Extension = "pdf"' name='Extension is pdf' languageOverride='objectscript' >
<code name='PDF' languageOverride='python' xpos='335' ypos='500' >
<![CDATA[with pdfplumber.open(request.Path) as pdf:
    for page in pdf.pages:
        context. TextOfFile += page.extract_text() or '']]>
</code>
</case>
<case condition='context.Extension = "docx"' name='Extension is docx' >
<code name='DOCX' languageOverride='python' xpos='605' ypos='500' >
<![CDATA[doc = docx.Document(request.Path)
context. TextOfFile = '\n'.join([para.text for para in doc.paragraphs])]]>
</code>
</case>
<default/>
</switch>
<assign name="Set text of file" property="response.Text" value="context.TextOfFile" action="set" languageOverride="" xpos='200' ypos='700' />
</sequence>
</process>
}

Storage Default
{
<Type>%Storage.Persistent</Type>
}

}
