from typing import List, Tuple, Final
from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import pytesseract
from PIL import Image
import os

OPENAI_API_KEY: Final = os.getenv("OPENAI_API_KEY", "")

class DocumentProcessor:
    def __init__(self, api_key: str) -> None:
        self.embeddings = OpenAIEmbeddings(api_key=api_key)

    def process_document(self, document_path: str) -> List[Tuple[float]]:
        # Determine the file type and extract text accordingly
        if document_path.endswith('.pdf'):
            text = self._extract_text_from_pdf(document_path)
        elif document_path.endswith('.docx'):
            text = self._extract_text_from_docx(document_path)
        elif document_path.endswith('.txt'):
            text = self._read_text_file(document_path)
        elif document_path.endswith(('.jpg', '.png')):
            text = self._extract_text_from_image(document_path)
        else:
            raise ValueError("Unsupported file type")
        return self.embed_text(text)

    def _extract_text_from_pdf(self, pdf_path: str) -> str:
        text = ''
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ''
        return text

    def _extract_text_from_docx(self, docx_path: str) -> str:
        doc = docx.Document(docx_path)
        return '\n'.join([para.text for para in doc.paragraphs])

    def _read_text_file(self, txt_path: str) -> str:
        with open(txt_path, 'r', encoding='utf-8') as file:
            return file.read()

    def _extract_text_from_image(self, image_path: str) -> str:
        return pytesseract.image_to_string(Image.open(image_path))

    def embed_text(self, text: str) -> List[Tuple[float]]:
        return self.embeddings.embed_documents([text])
    

def start(path: str) -> None:
    processor = DocumentProcessor(OPENAI_API_KEY)
    document_vector = processor.process_document(path)
    return document_vector
    

def hello():
    return "world"
if __name__ == "__main__":
    start()
