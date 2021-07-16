from bs4 import BeautifulSoup
import requests

research = "https://www.grassrootseconomics.org/research"
html_text = requests.get(research).text
soup = BeautifulSoup(html_text, 'html.parser')
match = soup.find_all('div', class_='s_usaAWRichTextClickableSkin_richTextContainer')

print(match)