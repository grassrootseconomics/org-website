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

LOAD_CONTENT_CACHE = False

THEME = "ge-theme"

DISPLAY_PAGES_ON_MENU = True

THEME_STATIC_PATHS = ['static']

CSS_FILE = ['style.css']


# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True