#!/usr/bin/env python
# -*- coding: utf-8 -*- #


AUTHOR = 'idaapayo'
SITENAME = 'grassroots-pelican'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Africa/Nairobi'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'https://getpelican.com/'),
         ('Python.org', 'https://www.python.org/'),
         ('Jinja2', 'https://palletsprojects.com/p/jinja/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

DISPLAY_PAGES_ON_MENU = False

DISPLAY_CATEGORIES_ON_MENU = False

MENUITEMS = (
    ('Home', '/'),
    ('About Us', '/pages/about-us.html'),
    ('Sarafu Network', '/pages/sarafu-network.html'),
    ('How It Works', '/pages/how-it-works.html'),
    ('Blog', '/category/blog.html'),
    ('Food Forests', '/pages/food-forests.html'),
    ('Research', '/pages/research.html'),
    ('Get Involved', '/pages/get-involved.html'),
    ('Media', '/pages/media.html'),
    ('Dashboard', '/pages/dashboard.html'),
    ('Contact us', '/pages/contact-us.html'),
    ('MOOC', '/pages/mooc.html')

)

LOAD_CONTENT_CACHE = False

THEME = "ge-theme"



STATIC_PATHS = [
    'images',
    'extra',
]

EXTRA_PATH_METADATA = {
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/robots.txt': {'path': 'robots.txt'},
}


THEME_STATIC_PATHS = ['static']

# CSS_FILE = ['style.css']

OUTPUT_RETENTION = [".hg",".git","CNAME"]


# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True