#!/usr/bin/env python
# -*- coding: utf-8 -*- #


AUTHOR = 'Will Ruddick'
SITENAME = 'Grassroots Economics'
SITEURL = 'https://grassecon.org'

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
    ('About', '/pages/about-us.html'),
    ('How', '/pages/how-it-works.html'),
    ('Sarafu', '/pages/sarafu-network.html'),
    ('Eco', '/pages/food-forests.html'),
    ('Edu', '/pages/research.html'),
    ('Docs', 'https://docs.grassecon.org'),
    ('Blog', '/category/blog.html'),
    ('Support', '/pages/get-involved.html'),
    ('Contact us', '/pages/contact-us.html')
)

LOAD_CONTENT_CACHE = False

THEME = "ge-theme"


STATIC_PATHS = [
    'images',
    'extra',
]

EXTRA_PATH_METADATA = {
    'extra/android-chrome-192x192.png': {'path': 'android-chrome-192x192.png'},
    'extra/android-chrome-512x512.png': {'path': 'android-chrome-512x512.png'},
    'extra/favicon-16x16.png': {'path': 'favicon-16x16.png'},
    'extra/favicon-32x32.png': {'path': 'favicon-32x32.png'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/mstile-150x150.png': {'path': 'mstile-150x150.png'},
    'extra/safari-pinned-tab.svg': {'path': 'safari-pinned-tab.svg'},
    'extra/apple-touch-icon.png': {'path': 'apple-touch-icon.png'},
    'extra/browserconfig.xml': {'path': 'browserconfig.xml'},
    'extra/site.webmanifest': {'path': 'site.webmanifest'},
    'extra/robots.txt': {'path': 'robots.txt'},
}


THEME_STATIC_PATHS = ['static']

# CSS_FILE = ['style.css']

OUTPUT_RETENTION = [".hg", ".git", "CNAME"]


# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
