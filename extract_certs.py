import PyPDF2
import os

def extract_certificate_names():
    cert_dir = r"c:\Users\teamo\portfolio-nahum\public\certificados"
    
    for filename in os.listdir(cert_dir):
        if filename.endswith('.pdf'):
            filepath = os.path.join(cert_dir, filename)
            print(f"\n=== {filename} ===")
            
            try:
                with open(filepath, 'rb') as file:
                    pdf_reader = PyPDF2.PdfReader(file)
                    
                    # Leer primera página
                    first_page = pdf_reader.pages[0]
                    text = first_page.extract_text()
                    
                    # Mostrar primeras líneas
                    lines = text.split('\n')
                    for i, line in enumerate(lines[:10]):
                        if line.strip():
                            print(line.strip())
                    
            except Exception as e:
                print(f"Error: {e}")

if __name__ == "__main__":
    extract_certificate_names()
