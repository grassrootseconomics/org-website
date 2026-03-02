export interface MediaArticle {
  outlet: string;
  title: string;
  year?: string;
  link: string;
}

export const mediaArticles: MediaArticle[] = [
  { outlet: "World Food Program", title: "Developing Community Inclusion Currencies", year: "2022", link: "https://www.wfp.org/" },
  { outlet: "IMF Finance & Development", title: "New Old Idea - Technological innovation is fueling the resurgence of community currencies", year: "2021", link: "https://www.imf.org/en/Publications/fandd" },
  { outlet: "Red Cross", title: "Basic Income Press Release", year: "2021", link: "https://www.redcross.org/" },
  { outlet: "Radio New Zealand", title: "Virtual currency helps Kenya slum dwellers battle Covid-19 downturn", year: "2021", link: "https://www.rnz.co.nz/" },
  { outlet: "VOA", title: "Kenyans Turn to Community Initiative Currency to Stay Afloat", year: "2020", link: "https://www.voanews.com/" },
  { outlet: "SHADO Magazine", title: "Capitalism in Crisis: Alternative Currencies during COVID-19", year: "2020", link: "https://shfrm.com/" },
  { outlet: "CityAM", title: "Empowering communities with alternative currencies towards a post-Covid economy", year: "2020", link: "https://www.cityam.com/" },
  { outlet: "Forbes", title: "Red Cross Implements Crypto To Boost Disaster-Prone Communities", year: "2019", link: "https://www.forbes.com/" },
  { outlet: "Thomson Reuters", title: "Red Cross boosts disaster-prone communities with blockchain 'cash'", year: "2019", link: "https://www.reuters.com/" },
  { outlet: "Newsweek", title: "Introducing Blockchain Impact Award Winner Grassroots Economics Foundation", year: "2019", link: "https://www.newsweek.com/" },
  { outlet: "Bloomberg", title: "Closing the Cash Gap With Cryptocurrency", year: "2018", link: "https://www.bloomberg.com/news/features/2018-10-31/closing-the-cash-gap-with-cryptocurrency" },
  { outlet: "Decrypt", title: "A Mombasa slum looks to digital currency to escape poverty", year: "2018", link: "https://decrypt.co/" },
  { outlet: "News24", title: "Community currency pioneer talks to business owners", year: "2015", link: "https://www.news24.com/" },
  { outlet: "YES! Magazine", title: "Alternative Currencies Are Bigger Than Bitcoin: How They're Building Prosperity From London to Kenya", year: "2015", link: "http://www.yesmagazine.org/commonomics/alternative-currencies-bigger-than-bitcoin-bangla-pesa-brixton" },
  { outlet: "Christian Science Monitor", title: "Africa's 'First' Alternative Currency", year: "2014", link: "https://www.csmonitor.com/" },
  { outlet: "Standard Media", title: "Bangla-Pesa Comeback", year: "2014", link: "https://www.standardmedia.co.ke/" },
  { outlet: "Al Jazeera", title: "Kenyan slum embraces alternative currency", year: "2013", link: "https://www.youtube.com/watch?v=UpCr8-3K05E" },
  { outlet: "Kenya Today", title: "Mombasa Governor Joho reopens Bangla-Pesa", year: "2013", link: "https://www.kenya-today.com/" },
  { outlet: "Brookings", title: "Bangla-Pesa Currency", year: "2013", link: "https://www.brookings.edu/" },
  { outlet: "HuffPost", title: "The Crime of Alleviating Poverty", year: "2013", link: "https://www.huffingtonpost.com/ellen-brown/the-crime-of-alleviating-_b_3519858.html" },
  { outlet: "Quartz", title: "Introducing Bangla-Pesa", year: "2013", link: "https://qz.com/86618/introducing-the-bangla-pesa-kenyas-beautiful-new-complementary-currency/" },
  { outlet: "Blorge", title: "Kenya's answer to the Green America Exchange", year: "2013", link: "https://blorge.com/" },
];

export const radioLinks = [
  { outlet: "PRI", title: "African slum lacked cash so people made their own", link: "https://www.pri.org/stories/2013-11-13/african-slum-lacked-cash-so-people-made-their-own" },
  { outlet: "France Culture", title: "Monnaies complémentaires au Kenya", link: "https://www.franceculture.fr/emissions/terre-terre/monnaies-complementaires-au-kenya" },
];

export const lettersOfSupport = [
  "Anette Riggs, President of the IRTA",
  "Mombasa County Assembly, Hon. Duncan O. Onyango",
  "Kenya National Assembly, Hon. Twalib Badi",
  "UNNGLS, Hamish Jenkins, United Nations Non-Governmental Liaison Service",
  "Attorney General Kenya",
];

export const otherResources = [
  { title: "Wikipedia — General Information on Complementary Currencies", link: "https://en.wikipedia.org/wiki/Complementary_currency" },
  { title: "complementarycurrency.org — Resource Center — Database of different Complementary Currency systems", link: "https://complementarycurrency.org/" },
  { title: "wiki.p2pfoundation.net — Various Complementary Currency Software", link: "https://wiki.p2pfoundation.net/" },
];
