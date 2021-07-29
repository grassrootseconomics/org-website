from bs4 import BeautifulSoup
import requests
import shutil


index_page = "https://www.grassrootseconomics.org/post/claims-and-currencies"
html_text = requests.get(index_page).text
soup = BeautifulSoup(html_text, 'lxml')
imgdir = "content/images/blog"
storeimg = "images/blog"

def findwriter(soup):
    authors = soup.find_all('span', class_='iYG_V user-name _4AzY3')
    for author in authors:
        tag = author.text
        out = ":author: "
        strauth = out + tag
        # print(strauth)
        return strauth

# findwriter(soup)

def findtime(soup):
    times = soup.find_all('span', class_='post-metadata__date time-ago')
    for time in times:
        tag = time.text
        out = ":date: "
        strauth = out + tag
        # print(strauth)
        return strauth


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
    return strout

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
            return strout
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
# print(tagtitle)

def findslug(title):
    words = title.replace(',','').replace("'",'').replace(":", '').replace("(",'').replace(")",'')
    words = words.split()
    first = words[0]
    second = words[1]
    slug = first + "-" + second
    slug = slug.lower()
    slugwrite = ":slug: " +slug
    return slug, slugwrite

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
        return newlinks

# changehrefs(soup)

def subtitles(soup):
    bold = soup.find_all('h2', class_= "_3f-vr _208Ie blog-post-title-font _1Hxbl _3SkfC _2QAo- _25MYV _2WrB- _1atvN public-DraftStyleDefault-block-depth0 public-DraftStyleDefault-text-ltr")
    for b in bold:
        text = b.text
        newtext = text + "\n*************************************************"
        print(newtext)
        return newtext

# subtitles(soup)

def italics(soup):
    itl = soup.find_all('em')
    for i in itl:
        text = i.text.lstrip().rstrip()
        newtext = "*"+ text + "*"
        print(newtext)
        return newtext

# italics(soup)

def bold(soup):
    boldt = soup.find_all('strong')
    for bt in boldt:
        txt = bt.text.lstrip().rstrip()
        newtxt = "**"+txt+"**"
        print(newtxt)
        return newtxt

# bold(soup)
def unorderedlist(soup):
    # content = soup.find('div', class_="_6SyeS")
    lis = []
    li = soup.find_all('li')
    for l in li:
        # li = l.find('li')
        lis.append(l.text+ "\n")
    return lis


# unorderedlist(soup)


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


def filtercontent(soup):
    maincontent = soup.find('div', class_="_6SyeS")
    title, words = findtitle(soup)
    author = findwriter(soup)
    date = findtime(soup)
    slug, slugtext = findslug(words)
    tags = findtags(soup)


    modified = findmodified(soup)
    blogpath = "content/blog/"
    filename = slug + '.rst'
    filepath = blogpath + filename
    fileobj = open(filepath, 'a')
    list = [title +"\n", author+ "\n", date+"\n", slugtext+"\n", modified+"\n", tags+"\n\n"]
    fileobj.writelines(list)
    print(filepath)

    for i, tag in enumerate(maincontent.find_all(True)):
        if tag.name == 'li':
            newlist = "\t" + "*" + " " + tag.text + "\n"
            fileobj.write(newlist)
        if tag.name == 'a':
            linktext = tag.text
            linkhref = tag['href']
            newlinks = "`" + linktext + " " + "<" + linkhref + ">" + "`" + "_" + "\t"
            # print(newlinks)
            fileobj.write(newlinks)
        if tag.name == 'span':
            spantext = "\n" + tag.text + "\n"
            fileobj.write(spantext)
        if tag.name == 'h2':
            text = tag.text
            newtext = "\n" +text + "\n*******************************************************"
            fileobj.write(newtext)
        if tag.name == 'strong':
            txt = tag.text.lstrip().rstrip()
            newtxt = "**" + txt + "**"
            fileobj.write(newtxt)
        if tag.name == 'em':
            text = tag.text.lstrip().rstrip()
            newtext = "*" + text + "*"
            fileobj.write(newtext)
        if tag.name == 'img':
            title, slugtitle = findtitle(soup)
            titletext, _ = findslug(slugtitle)
            imgsrc = tag.attrs['src']
            r = requests.get(imgsrc, stream=True)
            if r.status_code == 200:
                filename = "/" + str(titletext) + str(i + 1) + ".webp"
                pathtofile = imgdir + filename
                storedimg = storeimg + filename
                # print(pathtofile)
                with open(pathtofile, 'wb') as f:
                    r.raw.decode_content = True
                    shutil.copyfileobj(r.raw, f)
                imagrst = "\n"+".. image:: " + storedimg + "\n"
                fileobj.write(imagrst)
            else:
                print("cannot find image")

        # if tag.span['class'] == "vkIF2 public-DraftStyleDefault-ltr":
        #     text = tag.text
        #     print(text)



            # print(i)

    #         list = unorderedlist(maincontent)
    #         print(list)

        # if tag.name == 'a':
        #     print(tag)
        # print(isinstance(tag.name, str))
        # print(tag.name)
        #



filtercontent(soup)




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
