/// 
Class Production.Process.VectorSearch Extends Ens.BusinessProcessBPL
{

Storage Default
{
<Type>%Storage.Persistent</Type>
}

/// This BPLError block indicates that a BPL Diagram 
/// containing errors was saved.
/// To correct this class:
/// * Open it using the Studio BPL Editor,
/// * Correct the errors, and,
/// * Save the diagram.
/// Do not edit the contents of the BPLError block
/// or you may lose your diagram.
XData BPLError
{
<diagram Name="Production.Process.VectorSearch" Width="2000" Height="2000" Layout="automatic" Language="objectscript" Request="Production.Message.AppealRequest" Response="Ens.StringResponse" LastModified="" Version="" Includes="" ShowAnnotation="0">
<pyFromImport>from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import json
import pytesseract
from PIL import Image
import os</pyFromImport>
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
<shape _index="0" _Type="start" Name="" xPos="200" yPos="150" />
<shape _index="1" _Type="call" Name="Get Text" xPos="200" yPos="250" Async="0" LanguageOverride="objectscript" Target="GetText" Timeout="" >
<request type='Production.Message.GetTextRequest' >
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
</request>
<response type='Production.Message.GetTextResponse' >
<assign property="context.text" value="callresponse.Text" action="set" languageOverride="" />
</response>
</shape>
<shape _index="2" _Type="code" Name="Get vector" xPos="200" yPos="350" LanguageOverride="python" >
<code><![CDATA[OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
embeddings = OpenAIEmbeddings(api_key=OPENAI_API_KEY, dimensions=100)
data = embeddings.embed_documents([context.text])
context.textChunks.Insert(context.text)
context.vectorChunks.Insert(json.dumps(data[0]))
context.vector = json.dumps(data[0])]]></code>
</shape>
<shape _index="3" _Type="call" Name="Save data" xPos="200" yPos="450" Async="0" LanguageOverride="" Target="SaveVector" Timeout="" >
<request type='Production.Message.SaveVectorRequest' >
<assign property="callrequest.VectorChunks" value="context.vectorChunks" action="set" languageOverride="" />
<assign property="callrequest.TextChunks" value="context.textChunks" action="set" languageOverride="" />
<assign property="callrequest.Path" value="request.Path" action="set" languageOverride="" />
<assign property="callrequest.TypeOfDoc" value="&quot;appeal&quot;" action="set" languageOverride="" />
<assign property="callrequest.Name" value="request.Name" action="set" languageOverride="" />
<assign property="callrequest.Package" value="request.PackageId" action="set" languageOverride="" />
</request>
<response type='Ens.Response' />
</shape>
<shape _index="4" _Type="sql" Name="Vector search" xPos="200" yPos="550" >
<code><![CDATA[SELECT TOP 1 Text INTO :context.result FROM Model.DocumentChunk
WHERE Document->ID = :DocumentId
]]></code>
</shape>
<shape _index="5" _Type="end" Name="" xPos="260" yPos="1175" />
<shape _index="6" _Type="if" Name="The search turned up a match" xPos="203" yPos="656" Condition="context.result '=&quot;&quot;" LanguageOverride="objectscript" />
<shape _index="7" _Type="call" Name="Save an appeal letter" xPos="660" yPos="1079" Async="1" LanguageOverride="" Target="" Timeout="" >
<request type='Ens.Request' />
<response type='Ens.Response' />
</shape>
<shape _index="8" _Type="call" Name="Call AI for appeal options" xPos="598" yPos="756" Async="0" LanguageOverride="" Target="" Timeout="" >
<request type='Ens.Request' />
<response type='Ens.Response' />
</shape>
<shape _index="9" _Type="if" Name="An appeal is possible" xPos="598" yPos="852" Condition="" LanguageOverride="" />
<shape _index="10" _Type="call" Name="Create an appeal letter" xPos="900" yPos="968" Async="0" LanguageOverride="" Target="" Timeout="" >
<request type='Ens.Request' />
<response type='Ens.Response' />
</shape>
<shape _index="11" _Type="assign" Name="" xPos="260" yPos="1076" Action="" Key="" LanguageOverride="" Property="" Value="" />
<shape _index="12" _Type="join" Name="" xPos="259" yPos="983" />
<connection _Type="connector" Name="" from="0" to="1"/>
<connection _Type="connector" Name="" from="1" to="2"/>
<connection _Type="connector" Name="" from="2" to="3"/>
<connection _Type="connector" Name="" from="3" to="4"/>
<connection _Type="connector" Name="" from="4" to="6"/>
<connection _Type="connector" Name="true" from="6" to="8" ConnectType="branch"/>
<connection _Type="connector" Name="false" from="6" to="12" ConnectType="branch"/>
<connection _Type="connector" Name="" from="7" to="12"/>
<connection _Type="connector" Name="" from="8" to="9"/>
<connection _Type="connector" Name="true" from="9" to="10" ConnectType="branch"/>
<connection _Type="connector" Name="false" from="9" to="12" ConnectType="branch"/>
<connection _Type="connector" Name="" from="10" to="7"/>
<connection _Type="connector" Name="" from="11" to="5"/>
<connection _Type="connector" Name="" from="12" to="11"/>
</diagram>
}

}
