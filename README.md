# Grassroots Pelican Webiste

A static website built with pelican.

## Instructions for building and running the website

### Pulling the website to local computer

* Clone the Webiste

`git clone https://gitlab.com/grassrootseconomics/pelican-website-ge.git`

* Navigate into the folder

`cp pelican-website-ge`

* Create Your own branch off the master branch

`git checkout -b <name_of_your_branch> master`

* Create a virtual environment and install requirements

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

* Test to see if the pull is successful. Ensure you are in the root directory grassroots-pelican then run `make devserver` or  `pelican --autoreload --listen` 
The site will be at `127.0.0.1:8000` in the browser


### Making a blog entry

* Ensure you are in the root of the working directory grassroots-pelican

* Navigate to `content/blog`  directory. You should see a list of files ending with `.rst`

* Create a new file and name it. The name should preferably be the first 3 words of your title separated by a hyphen. For example if your title is ‘Introducting  grassroots NFTS’ your filename should be introducing-grassroots-nfts.rst. No special characters or capital letters in the filename.

* Pelecan Markup Cheatsheet: https://elfnor.com/pelican-and-markdown-styling-cheat-sheet.html
* Your file must  have the title, author or authors, date and slug. For example:

```
:title: 2021 Mid Year CIC Update
:author: Will Ruddick
:date: May 11 2021
:slug: 2021-mid

```
* The date should follow the format above

* The slug should be the first two or three words of the title separated by a hyphen. No capital letters or special characters in the slug

* The file can have other additional headers like summary and tags. For example:

```
:summary: We grew from a few thousands users to over 50,000 and have seen roughly 3 Million USD worth of trade between users for basic needs.
:tags: update

```

* The summary is the summary of the blog that appears in the blog feed

* The tags are the tags of the blog

* Ensure there is at least two lines of space between you headers and content

* Subtitles can be written like this

```
Back to Basics
******************
```

* Note that the length of the asterisks MUST be longer than the length of the title

* Ensure you skip a line after the subtitle before writing any further content

* Links can be written like this 

```
`research data <http://grassrootseconomics.org/research>`_

```
* Research data will appear as the clickable text. Notice the space between data and `<http` . The link must be structured this way to avoid errors

* Paragraphs are written like normal text .To separate two paragraphs, skip a line between them.

#### Adding images

* For an image to appear in the blog feed, The first image in the blog must be named slug1.jpg/webp/png. For this example, the first image is stored as 2021-mid1.webp and linked like this:

`.. image:: images/blog/2021-mid1.webp`

* Images are stored in the images/blog directory

* DON’T have any indented content below the  .. image tag. Start all content from beginning of file

#### Adding videos

* To add youtube embedded videos, right click on the video on youtube then select copy embedded code then insert it under `.. raw:: html `                   
Example:

```
.. raw:: html

   <iframe width="740" height="416" src="https://www.youtube.com/embed/mlcov4Gy_mI" title="YouTube video player" frameborder="0"    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
* Notice the indentation before `<iframe>` . Ensure the rest of the content after iframe tag start at the beginning of the file -- no indentation.

* The rst documentation can be found here https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html

* Any changes made to the `content/Blog` directory should be seen in the Blog page when you run `make devserver` or `pelican --autoreload --listen` in the root of your directory. Ensure you have activated your python environment. 

### Pushing your changes

Once you are satisfied with the build in your local computer, you can push your changes

```
git checkout <your-branch-name>
git add .
git commit -m "new blog entry"
git push -u origin <your-branch-name>

```
Once this is complete, create a merge request on gitlab for your latest commit and merge it to the master branch.

You should see your changes on the deployed site at https://grassecon.net/

Note: Always ensure you pull from master first before making any changes

```
git checkout <name-of-your-branch>
git pull origin master
```



### Standalone Deploy (Devops)
 
__On a new or existing droplet (requires docker and docker-compose)__

```sh
# Make sure the A name choosen point to the droplet IP
# Replace domain name init-cert.sh (line 8)  and data/nginx.conf (lines 3,16,20,21)

$ cd standalone-deploy && bash init-cert.sh
$ docker build -t ge-blog -f Dockerfile ../
$ docker run -d -p 80:80 -p 443:443 -v $(pwd)/data/certbot/conf:/etc/letsencrypt -v $(pwd)/data/certbot/www:/var/www/certbot ge-blog

# Check if http->https redirect works https://httpstatus.io/
# http://grassecon.net
# https://grassecon.net
```
