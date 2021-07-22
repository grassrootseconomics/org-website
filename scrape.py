from bs4 import BeautifulSoup
import requests
import shutil
import urllib.parse

index_page = "https://www.grassrootseconomics.org/post/claims-and-currencies"
html_text = requests.get(index_page).text
soup = BeautifulSoup(html_text, 'lxml')
imgdir = "content/images/blog"

def findwriter(soup):
    authors = soup.find_all('span', class_='iYG_V user-name _4AzY3')
    for author in authors:
        tag = author.text
        out = ":author: "
        strauth = out + tag
        print(strauth)

# findwriter(soup)

def findtime(soup):
    times = soup.find_all('span', class_='post-metadata__date time-ago')
    for time in times:
        tag = time.text
        out = ":date: "
        strauth = out + tag
        print(strauth)

# findtime(soup)

def findtags(soup):
    listtags = soup.find_all('li', class_='_3uJTw')
    out = ":tags: "
    apptags = []
    for lists in listtags:
        tags = lists.text
        apptags.append(tags)
    if len(apptags) > 1:
        newstr = ",".join(apptags)
        strout = out + newstr
        print(strout)
    else:
        newstr = apptags[0]
        strout = out + newstr
        print(strout)

# findtags(soup)

def findmodified(soup):
    try:
        updated = soup.find('p', class_="_2aGvg _1AZWZ")
        out = ":modified: "
        for update in updated:
            uptime = update.span
            modified = uptime.text
            modified = modified.replace('Updated:', '')
            strout = out + modified
            print(strout)
    except:
        print("no such class for modified date")

# findmodified(soup)

def findtitle(soup):
    title = soup.find('span', class_='blog-post-title-font blog-post-title-color')
    out = ':title: '
    titletext = title.text
    newtitle = out + titletext
    return newtitle, titletext

tagtitle, text = findtitle(soup)

def findslug(title):
    words = title.replace(',','').replace("'",'').replace(":", '').replace("(",'').replace(")",'')
    words = words.split()
    first = words[0]
    second = words[1]
    slug = first + "-" + second
    slug = slug.lower()
    print(slug)
# findslug(text)

def finddownloadimg(soup):
    newtitle, titletext = findtitle(soup)
    imgsinpage = []
    divwrap = soup.find_all('div', class_="_3lvoN LPH2h")
    for wrap in divwrap:
        imgtags = wrap.img
        imgsrc = imgtags.attrs['src']
        imgsinpage.append(imgsrc)

    for i, imgsrc in enumerate(imgsinpage):
        r = requests.get(imgsrc, stream=True)
        if r.status_code == 200:
            filename = "/" + "try" + str(i+1) + ".jpg"
            print(filename)
            with open(urllib.parse.urljoin(imgdir, filename), 'wb') as f:
                r.raw.decode_content = True
                shutil.copyfileobj(r.raw, f)
        else:
            print("cannot find image")






finddownloadimg(soup)
# def filtercontent(soup):
#     maincontent = soup.find('div', id="content-wrapper")
#     paragraphs = maincontent.find_all('p')
#     for par in paragraphs:
#         print(par.prettify())
#     # print(maincontent.prettify())
#
# filtercontent(soup)




# print(soup.find_all(id=True))
# for tag in soup.find_all(True):
#     print(tag.name)
# def head_of_articles(soup):
#     file = open("ge-theme/static/scrapped-text/reseasrch/article-head.txt",'a+')
#     for match in soup.find_all('div', class_='s_usaAWRichTextClickableSkin_richTextContainer'):
#         # print(match.p.text)
#         for words in match.find_all('em'):
#             text = words.text
#             file.write(text + "\n")
#
# head_of_articles(soup)
# print(isinstance(head_of_articles(soup), list))

# for match in soup.find_all('div', class_='s_usaAWRichTextClickableSkin_richTextContainer'):
#     # print(match.p.text)
#     for words in match.find_all('em'):
#         text = words.text
#         print(text)
#         print()
