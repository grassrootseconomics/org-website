from bs4 import BeautifulSoup
import requests
import shutil


index_page = "https://www.grassrootseconomics.org/post/recycling-debt"
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
print(tagtitle)

def findslug(title):
    words = title.replace(',','').replace("'",'').replace(":", '').replace("(",'').replace(")",'')
    words = words.split()
    first = words[0]
    second = words[1]
    slug = first + "-" + second
    slug = slug.lower()
    return slug

# print(findslug(text))

def finddownloadimg(soup):
    title, slugtitle = findtitle(soup)
    titletext = findslug(slugtitle)
    imgsinpage = []
    divwrap = soup.find_all('div', class_="_3lvoN LPH2h")
    for wrap in divwrap:
        imgtags = wrap.img
        imgsrc = imgtags.attrs['src']
        imgsinpage.append(imgsrc)

    for i, imgsrc in enumerate(imgsinpage):
        r = requests.get(imgsrc, stream=True)
        if r.status_code == 200:
            filename = "/" + str(titletext) + str(i+1) + ".webp"
            pathtofile = imgdir + filename
            # print(pathtofile)
            with open(pathtofile, 'wb') as f:
                r.raw.decode_content = True
                shutil.copyfileobj(r.raw, f)
        else:
            print("cannot find image")

# finddownloadimg(soup)

def changehrefs(soup):
    articlesection = soup.find('div', class_ = "post-content__body")

    alllinks = articlesection.find_all('a', class_="_2qJYG _2E8wo")
    for link in alllinks:
        linktext = link.text
        linkhref = link['href']
        newlinks = "`" + linktext + "<" + linkhref + ">" + "`" + "_"
        print(newlinks)

# changehrefs(soup)

def subtitles(soup):
    bold = soup.find_all('h2', class_= "_3f-vr _208Ie blog-post-title-font _1Hxbl _3SkfC _2QAo- _25MYV _2WrB- _1atvN public-DraftStyleDefault-block-depth0 public-DraftStyleDefault-text-ltr")
    for b in bold:
        text = b.text
        newtext = text + "\n*************************************************"
        print(newtext)

# subtitles(soup)

def italics(soup):
    itl = soup.find_all('em')
    for i in itl:
        text = i.text.lstrip().rstrip()
        newtext = "*"+ text + "*"
        print(newtext)

# italics(soup)

def bold(soup):
    boldt = soup.find_all('strong')
    for bt in boldt:
        txt = bt.text.lstrip().rstrip()
        newtxt = "**"+txt+"**"
        print(newtxt)

# bold(soup)


# def iframeproces(soup):
    # iframe = soup.find('iframe', id="widget2")
    # print(iframe)
    # content = soup.find_all('div', class_= "post-content__body")
    # for tag in soup.find_all(True):
    #     print(tag.name)
    # wrap = content.find('div', class_="o56NN")
    # for w in wrap.children:
    #     print(w)
    # for w in wrap:
    #     iframe = w.decendants
    #     print(iframe)

    # for frame in iframes:
    #     print(frame)

# iframeproces(soup)


# def filtercontent(soup):
#     maincontent = soup.find('div', id="content-wrapper")
#
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
