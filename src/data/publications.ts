export interface Publication {
  title: string;
  authors?: string;
  year?: string;
  journal?: string;
  link: string;
  abstract?: string;
}

export const publications: Publication[] = [
  {
    title: "Circulation of a digital community currency",
    authors: "Carolina E. S. Mattsson, Teodoro Criscione & Frank W. Takes",
    journal: "Nature Scientific Reports",
    year: "2023",
    link: "https://www.nature.com/articles/s41598-023-33184-1",
    abstract: "The study uses a network analysis method to examine the circulation of Sarafu, a digital community currency in Kenya, during the COVID-19 pandemic.",
  },
  {
    title: "Commitment Pooling - An Economic Protocol Inspired by Ancestral Wisdom",
    authors: "William O. Ruddick",
    year: "2023",
    journal: "IJCCR",
    link: "https://ijccr.net/ijccr-27-2023/vol-27-pp-54-79/",
    abstract: "This paper introduces the pooling of commitments as a mechanism for curating and fairly exchanging resources within communities.",
  },
  {
    title: "Network effects on community currency systems",
    authors: "Teodoro Criscione Ph.D.",
    journal: "Central European University Dissertation",
    link: "https://libsearch.ceu.edu/discovery/fulldisplay?context=L&vid=43CEU_INST:VU1&search_scope=MyInst_and_CI&tab=Everything&docid=alma991003647554508861",
    abstract: "Study of community currencies for basic income pilots and cash transfer programs using network science tools.",
  },
  {
    title: "Sarafu Community Inclusion Currency 2020-2021",
    authors: "Carolina E. S. Mattsson, Teodoro Criscione & William O. Ruddick",
    journal: "Scientific Data",
    year: "2022",
    link: "https://www.nature.com/articles/s41597-022-01539-4",
    abstract: "Dataset of account information and transaction records for a digital complementary currency in Kenya with around 55,000 users.",
  },
  {
    title: "Community Currencies as Crisis Response",
    authors: "Rebecca Mqamelo",
    year: "2022",
    journal: "Frontiers in Blockchain",
    link: "https://www.frontiersin.org/articles/10.3389/fbloc.2021.739751/full",
    abstract: "Results from what may be the world's first randomized control trial on community currencies.",
  },
  {
    title: "Complementary Currencies for Humanitarian Aid",
    authors: "Leanne Ussher, Laura Ebert, Georgina M. Gomez, William O. Ruddick",
    year: "2021",
    link: "https://www.mdpi.com/1911-8074/14/11/557",
    abstract: "Analyzes the impact of Complementary Currencies instituted by Grassroots Economics Foundation and the Red Cross in Kenya.",
  },
  {
    title: "Complementary Currencies for Sustainable Development in Kenya",
    authors: "Ruddick, W., Richards, M., Bendell, J.",
    year: "2015",
    journal: "IJCCR",
    link: "https://ijccr.files.wordpress.com/2014/11/ijccr-2014-ruddick.pdf",
  },
  {
    title: "Re-imagining Money to Broaden the Future of Development Finance",
    authors: "Bendell, J., Slater, M., Ruddick, W.",
    year: "2015",
    journal: "UNRISD Working Paper",
    link: "https://www.unrisd.org/80256B3C005BCCF9/search/99FCA15CAF8E24F4C1257E7E00501101?OpenDocument",
  },
  {
    title: "Trust and Spending of Community Currencies in Kenya",
    authors: "Ruddick, W.",
    year: "2015",
    journal: "3rd International Conference on Social and Complementary Currencies",
    link: "https://socialcurrency.sciencesconf.org/conference/socialcurrency/pages/Trust_and_Spending_of_Community_RUDDICK.pdf",
  },
  {
    title: "Eco-Pesa: an Evaluation of a Complementary Currency Programme in Kenya's Informal Settlements",
    authors: "Ruddick, W.",
    year: "2011",
    journal: "IJCCR",
    link: "https://ijccr.files.wordpress.com/2012/04/ijccr-2011-ruddick.pdf",
  },
];
