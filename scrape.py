from bs4 import BeautifulSoup
import requests
import shutil
from selenium import webdriver
import time
import logging

browser = webdriver.Firefox()
browser.get("https://www.grassrootseconomics.org/blog")

browser.implicitly_wait(90)

scrollnumber = 13
for i in range(1, scrollnumber):
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(5)

gretext = "https://www.grassrootseconomics.org/post/gre-for-me"
html_text = requests.get(gretext).text
soup = BeautifulSoup(html_text, 'lxml')

mainsoup = BeautifulSoup(browser.page_source, 'lxml')
bloglinks = []

atitles = mainsoup.findAll('a', class_="_2oveR _2llBS _1e-gz _3T8tF")

for a in atitles:
    hrefs = a['href']
    bloglinks.append(hrefs)

print(len(bloglinks))

imgdir = "content/images/blog"
storeimg = "images/blog"

logging.basicConfig(filename='loginginfo.log', encoding='utf-8', level=logging.INFO)
logging.info("Running scrape")


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
    try:
        listtags = soup.find_all('li', class_='_3uJTw')
        out = ":tags: "
        apptags = []
        for lists in listtags:
            tags = lists.text
            apptags.append(tags)
        if len(apptags) > 1:
            newstr = ",".join(apptags)
            strout = out + newstr
            # print(strout)
        else:
            newstr = apptags[0]
            strout = out + newstr
            # print(strout)
        return strout
    except:
        # print("no tags found here")
        return " "

# findtags(soup)

def findmodified(soup):
    try:
        updated = soup.find('p', class_="_2aGvg _1AZWZ")
        out = ":modified: "

        uptime = updated.span
        modified = uptime.text
        modified = modified.replace('Updated:', '')
        strout = out + modified
        return strout
    except:
        # print("no such class for modified date")
        return " "

# findmodified(soup)

def findtitle(soup):
    title = soup.find('span', class_='blog-post-title-font blog-post-title-color')
    out = ':title: '
    titletext = title.text
    newtitle = out + titletext
    return newtitle, titletext

# tagtitle, text = findtitle(soup)
# print(tagtitle)

def findslug(title):
    words = title.replace(',','').replace("'",'').replace(":", '').replace("(",'').replace(")",'').replace("&",'')
    words = words.split()
    first = words[0]
    second = words[1]
    slug = first + "-" + second
    slug = slug.lower()
    slugwrite = ":slug: " +slug
    return slug, slugwrite



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
            newlinks = "\t" + "`" + linktext + " " + "<" + linkhref + ">" + "`" + "_" + "\t"
            # print(newlinks)
            fileobj.write(newlinks)

        if tag.name == 'span':
            for child in tag.children:
                if child.name == None:
                    spantext = "\n\n" + tag.text + "\n\n"
                    fileobj.write(spantext)
                if child.name == 'h2':
                    text = tag.text
                    newtext = "\n" + text + "\n*******************************************************\n\n"
                    fileobj.write(newtext)
                if child.name == 'strong':
                    txt = tag.text.lstrip().rstrip()
                    newtxt = "\t"+"**" + txt + "**"+"\t"
                    fileobj.write(newtxt)
                if child.name == 'em':
                    text = tag.text.lstrip().rstrip()
                    newtext = "\t" +"*" + text + "*" + "\n"
                    fileobj.write(newtext)

        if tag.name == 'img':
            title, slugtitle = findtitle(soup)
            titletext, _ = findslug(slugtitle)
            imgsrc = tag.attrs['data-pin-media']
            r = requests.get(imgsrc, stream=True)
            # print(f"request-details: {r.url} \nrequest-headers: {r.headers.items()}")
            # print(r)
            if r.status_code == 200:
                filename = "/" + str(titletext) + str(i + 1) + ".webp"
                pathtofile = imgdir + filename
                storedimg = storeimg + filename
                # print(pathtofile)
                with open(pathtofile, 'wb') as f:
                    r.raw.decode_content = True
                    shutil.copyfileobj(r.raw, f)
                imagrst = "\n\n"+".. image:: " + storedimg + "\n\n"
                fileobj.write(imagrst)
            else:
                logging.info(f"cannot find image here {slug}")

        if tag.name == 'iframe':
            logging.info(f"iframe found here {slug}")
# filtercontent(soup)

for links in bloglinks[:5]:
    html_text = requests.get(links).text
    soup = BeautifulSoup(html_text, 'lxml')
    filtercontent(soup)







