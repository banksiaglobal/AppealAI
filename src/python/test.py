from langchain_openai import OpenAIEmbeddings
import requests

OPENAI_API_KEY = ""
URL = ""
# Function to fetch document from a URL
def fetch_document(url):
    response = requests.get(url)
    return response.text

# Embed the document text
def embed_text(text, api_key):
    embeddings = OpenAIEmbeddings(api_key=api_key)
    return embeddings.embed_documents([text])

def hello():
    # Create embeddings for the document
    document_text = fetch_document(URL)
    document_vector = embed_text(document_text, OPENAI_API_KEY)
    print(document_vector)


if __name__ == "__main__":
    hello()