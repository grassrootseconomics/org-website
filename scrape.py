from bs4 import BeautifulSoup
import requests

research = "https://www.grassrootseconomics.org/research"
html_text = requests.get(research).text
soup = BeautifulSoup(html_text, 'html.parser')
# print(soup.find_all(id=True))
# for tag in soup.find_all(True):
#     print(tag.name)
def head_of_articles(soup):
    file = open("ge-theme/static/scrapped-text/reseasrch/article-head.txt",'a+')
    for match in soup.find_all('div', class_='s_usaAWRichTextClickableSkin_richTextContainer'):
        # print(match.p.text)
        for words in match.find_all('em'):
            text = words.text
            file.write(text + "\n")

head_of_articles(soup)
# print(isinstance(head_of_articles(soup), list))

# for match in soup.find_all('div', class_='s_usaAWRichTextClickableSkin_richTextContainer'):
#     # print(match.p.text)
#     for words in match.find_all('em'):
#         text = words.text
#         print(text)
#         print()
