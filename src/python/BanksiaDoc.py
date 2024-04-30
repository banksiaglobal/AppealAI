from typing import List, Tuple, Final
from langchain_openai import OpenAIEmbeddings
import pdfplumber
import docx
import pytesseract
from PIL import Image
import os
from langchain_text_splitters import RecursiveCharacterTextSplitter

OPENAI_API_KEY: Final = os.getenv("OPENAI_API_KEY", "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")

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
        # text = "Kaiser Foundation Health Plan, Inc.\nNorthern and Southern California Regions\nA nonprofit corporation\n2024 Combined Membership Agreement,\nEvidence of Coverage, and Disclosure Form for\nKaiser Permanente for Individuals and Families\nKaiser Permanente - Gold 80 HMO\nA plan for members who enroll through Covered California or\ndirectly with Kaiser Permanente\nMember Services\n24 hours a day, seven days a week (except closed holidays)\n1‑800-464-4000 (TTY users call 711)\nkp.org\n800111-01-18-03.\n.coaccum NGF ACA p16142TABLE OF CONTENTS\nCost Share Summary ..............................................................................................................................................................1\nAccumulation Period ..........................................................................................................................................................1\nDeductibles and Out-of-Pocket Maximums .......................................................................................................................1\nCost Share Summary Tables by Benefit .............................................................................................................................1\nCARE Plan .......................................................................................................................................................................17\nIntroduction ..........................................................................................................................................................................19\nAbout Kaiser Permanente .................................................................................................................................................19\nTerm of this EOC, Renewal, and Amendment .................................................................................................................19\nDefinitions ............................................................................................................................................................................20\nPremiums, Eligibility, and Enrollment .................................................................................................................................27\nPremiums ..........................................................................................................................................................................27\nWho Is Eligible .................................................................................................................................................................27\nHow to Enroll and When Coverage Begins .....................................................................................................................30\nHow to Obtain Services ........................................................................................................................................................31\nRoutine Care .....................................................................................................................................................................31\nUrgent Care ......................................................................................................................................................................31\nNot Sure What Kind of Care You Need? .........................................................................................................................31\nYour Personal Plan Physician ..........................................................................................................................................31\nGetting a Referral .............................................................................................................................................................32\nTravel and Lodging for Certain Services .........................................................................................................................34"
        return self.embeddings.embed_documents([text])
    

def start(path: str) -> None:
    processor = DocumentProcessor(OPENAI_API_KEY)
    text_splitter = RecursiveCharacterTextSplitter(length_function=len,
    is_separator_regex=False,)
    state_of_the_union = processor._extract_text_from_pdf(path)
    
    texts = text_splitter.create_documents([state_of_the_union])
    for key, text in enumerate(texts):
        processor.embed_text(text.page_content)
        document_vector = processor.process_document(path)
        print(key)
        print(text.page_content)
    # return document_vector
    

def hello():
    return "world"

if __name__ == "__main__":
    start("/Users/m_nestes/Documents/off-gold-80-hmo-ca-en.pdf")
