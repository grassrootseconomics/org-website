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

DISPLAY_PAGES_ON_MENU = True

LOAD_CONTENT_CACHE = False

THEME = "ge-theme"

PAGE_ORDER_BY = 'page-order'

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