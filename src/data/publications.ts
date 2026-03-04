export type PublicationCategory =
  | "journal-article"
  | "book"
  | "dissertation"
  | "dataset"
  | "report"
  | "working-paper"
  | "conference-paper"
  | "thesis"
  | "seminar-paper"
  | "survey"
  | "grant";

export interface Publication {
  title: string;
  authors?: string;
  year?: string;
  journal?: string;
  link: string;
  abstract?: string;
  category?: PublicationCategory;
}

export interface ResearchQuestion {
  question: string;
  category: "design" | "development" | "predictive-modeling" | "understanding";
}

export const researchQuestions: ResearchQuestion[] = [
  {
    question:
      "What do communities have and need to coordinate their resources and steward their collective capacity?",
    category: "design",
  },
  {
    question: "What is community?",
    category: "design",
  },
  {
    question: "What does a post scarcity society look like?",
    category: "design",
  },
  {
    question:
      "How can formalized commitments and exchange systems support community abundance and harmony with their environment and other communities?",
    category: "design",
  },
  {
    question:
      "What can we learn from ecological and indigenous resource coordination practices?",
    category: "design",
  },
  {
    question:
      "How have and can infrastructure be developed and managed for resource coordination?",
    category: "development",
  },
  {
    question:
      "How are communities fully empowered and sovereign in their choices?",
    category: "development",
  },
  {
    question: "What regulatory frameworks can be used?",
    category: "development",
  },
  {
    question:
      "How to achieve institutional integration — humanitarian orgs, chamas (community groups), schools, shops, government, financial institutions, faith-based organizations, etc.",
    category: "development",
  },
  {
    question:
      "Network visualization and analytics that help understand, react to and manage CIC systems.",
    category: "development",
  },
  {
    question:
      "How can people and institutions outside of a community interact with the local community? Aid distribution, redistribution of taxes? In what medium: capacity building, in-kind, cash, stable tokens, etc.",
    category: "predictive-modeling",
  },
  {
    question:
      "What are the impacts from pilots and trials? Short and long term effects of programs like Sarafu Network.",
    category: "understanding",
  },
  {
    question:
      "What characteristics cause resource coordination systems of different designs to have different impacts?",
    category: "understanding",
  },
];

export const publications: Publication[] = [
  // Books
  {
    title: "Grassroots Economics: Reflection and Practice",
    authors: "William O. Ruddick",
    journal: "Substack (Free PDF)",
    link: "https://willruddick.substack.com/p/grassroots-economics-the-book-is",
    abstract:
      "Explores Commitment Pooling principles, community-led economic models, and regenerative abundance frameworks.",
    category: "book",
  },

  // Journal Articles
  {
    title:
      "Commitment Pooling — An Economic Protocol Inspired by Ancestral Wisdom",
    authors: "William O. Ruddick",
    year: "2023",
    journal:
      "International Journal of Community Currency Research (IJCCR), Vol. 27, pp. 54-79",
    link: "https://ijccr.net/ijccr-27-2023/vol-27-pp-54-79/",
    abstract:
      "This paper introduces the pooling of commitments as a protocol for curating and fairly exchanging resources within communities.",
    category: "journal-article",
  },
  {
    title: "Circulation of a digital community currency",
    authors: "Carolina E. S. Mattsson, Teodoro Criscione & Frank W. Takes",
    journal: "Nature Scientific Reports",
    year: "2023",
    link: "https://www.nature.com/articles/s41598-023-33184-1",
    abstract:
      "Network analysis of Sarafu, a digital community currency, examining its circulation during the COVID-19 pandemic in Kenya.",
    category: "journal-article",
  },
  {
    title: "Complex Systems Modeling of Community Inclusion Currencies",
    authors: "Clark, Andrew; Mihailov, Alexander; Zargham, Michael",
    year: "2022",
    journal: "Vienna University of Economics and Business",
    link: "https://epub.wu.ac.at/8664/",
    abstract:
      "Dynamic system modeling for CIC validation and poverty alleviation mechanisms.",
    category: "journal-article",
  },
  {
    title:
      "Community Currencies as Crisis Response: Results from a Randomized Control Trial in Kenya",
    authors: "Rebecca Mqamelo",
    year: "2022",
    journal: "Frontiers in Blockchain",
    link: "https://www.frontiersin.org/articles/10.3389/fbloc.2021.739751/full",
    abstract:
      "Results from what may be the world's first randomized control trial on community currencies.",
    category: "journal-article",
  },
  {
    title: "Complementary Currencies for Humanitarian Aid",
    authors:
      "Leanne Ussher, Laura Ebert, Georgina M. Gomez, William O. Ruddick",
    year: "2021",
    journal: "MDPI Journal of Risk and Financial Management",
    link: "https://www.mdpi.com/1911-8074/14/11/557",
    abstract:
      "Analyzes the impact of Complementary Currencies instituted by Grassroots Economics Foundation and the Red Cross in Kenya, comparing cash and voucher assistance using blockchain transaction data.",
    category: "journal-article",
  },
  {
    title:
      "Complementary Currencies for Sustainable Development in Kenya: the Case of the Bangla-Pesa",
    authors: "Ruddick, W.; Richards, M.; Bendell, J.",
    year: "2015",
    journal: "International Journal of Community Currency Research",
    link: "https://ijccr.files.wordpress.com/2014/11/ijccr-2014-ruddick.pdf",
    category: "journal-article",
  },
  {
    title:
      "Eco-Pesa: an Evaluation of a Complementary Currency Programme in Kenya's Informal Settlements",
    authors: "Ruddick, W.",
    year: "2011",
    journal: "International Journal of Community Currency Research",
    link: "https://ijccr.files.wordpress.com/2012/04/ijccr-2011-ruddick.pdf",
    category: "journal-article",
  },

  // Dissertations
  {
    title: "Network effects on community currency systems",
    authors: "Teodoro Criscione",
    journal: "Central European University",
    link: "https://libsearch.ceu.edu/discovery/fulldisplay?context=L&vid=43CEU_INST:VU1&search_scope=MyInst_and_CI&tab=Everything&docid=alma991003647554508861",
    abstract:
      "Study of the Sarafu token network and Circles UBI network using network science tools to analyze community currencies for basic income pilots and cash transfer programs.",
    category: "dissertation",
  },

  // Datasets
  {
    title: "Sarafu.Network 2021-2023 Data",
    authors: "Grassroots Economics",
    year: "2023",
    journal: "UK Data Service",
    link: "https://reshare.ukdataservice.ac.uk/856593",
    abstract:
      "Anonymous transaction and meta data from digital community currency records for approximately 20,000 users (April 2022 — July 2023).",
    category: "dataset",
  },
  {
    title: "Sarafu Community Inclusion Currency 2020-2021",
    authors:
      "Carolina E. S. Mattsson, Teodoro Criscione & William O. Ruddick",
    journal: "Nature Scientific Data",
    year: "2022",
    link: "https://www.nature.com/articles/s41597-022-01539-4",
    abstract:
      "Dataset of account information and transaction records for a digital complementary currency in Kenya with around 55,000 users.",
    category: "dataset",
  },
  {
    title: "Sarafu — CIC 2020-2021 Data",
    authors: "William O. Ruddick, Teodoro Criscione, C.E.S. Mattsson",
    year: "2021",
    journal: "UK Data Service",
    link: "https://reshare.ukdataservice.ac.uk/855142/",
    abstract:
      "55,000 user transaction records (January 2020 — June 2021) including pandemic period data.",
    category: "dataset",
  },

  // Reports & Surveys
  {
    title:
      "CIC Research Findings: Expert Opinions on the Future of Community Inclusion Currencies",
    authors: "OCTOPI",
    year: "2022",
    link: "https://grassecon.org/theme/pdfs/CIC_Research_Findings-May-2022.pdf",
    abstract: "Expert analysis on CIC adoption risks and solutions.",
    category: "report",
  },
  {
    title: "Sarafu — User Phone Survey and Analysis 2021",
    authors: "60 Decibels",
    year: "2021",
    link: "https://grassecon.org/theme/pdfs/CIC.pdf",
    abstract:
      "325-user phone survey showing 99% had no alternative to Sarafu for trading.",
    category: "survey",
  },
  {
    title: "Red Cross Mukuru Kayaba Rapid Survey Analysis May 2020",
    year: "2020",
    abstract:
      "619 respondents from Mukuru Kayaba documenting Sarafu impact during the COVID-19 pandemic.",
    link: "https://grassecon.org/theme/pdfs/Red-Cross-Mukuru-Kayaba-Rapid-Survey-Analysis-May-2020.pdf",
    category: "survey",
  },
  {
    title:
      "Trade Facilitation and Community Development in the Age of Blockchain & DLT",
    journal:
      "Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ)",
    link: "https://grassecon.org/theme/pdfs/trade-facilitation.pdf",
    abstract:
      "Community currency projects in low-resource environments, commissioned by GIZ.",
    category: "report",
  },
  {
    title:
      "Kenyan Businesswomen Transforming Slum Economies through Complementary Currencies",
    authors: "Richards, M.; Ruddick, W.",
    year: "2013",
    journal: "United Nations Research Institute for Social Development",
    link: "https://www.unrisd.org/unrisd/website/newsview.nsf/(httpNews)/B84ECEC19AC54952C1257BB2004",
    category: "report",
  },

  // Working Papers
  {
    title: "Proof of Impact: Blockchain Community Currencies in Action",
    authors: "Galia Benartzi, Rebecca Mqamelo",
    year: "2019",
    link: "https://grassecon.org/theme/pdfs/CIC-crisis-response.pdf",
    abstract:
      "Blockchain Sarafu addressing liquidity problems with case studies.",
    category: "working-paper",
  },
  {
    title:
      "Re-imagining Money to Broaden the Future of Development Finance",
    authors: "Bendell, J.; Slater, M.; Ruddick, W.",
    year: "2015",
    journal: "UNRISD Working Paper 2015-10",
    link: "https://www.unrisd.org/80256B3C005BCCF9/search/99FCA15CAF8E24F4C1257E7E00501101?OpenDocument",
    category: "working-paper",
  },
  {
    title:
      "Complementary Currencies Strengthening the Social and Solidarity Economy: Case Studies from Kenya",
    authors: "Ruddick, W.; Mariani, L.",
    year: "2013",
    journal: "United Nations Research Institute for Social Development",
    link: "https://www.unrisd.org/80256B3C005BCCF9/search/E2B1E6C5D3D4127BC1257B60005013CB?OpenDocument",
    category: "working-paper",
  },

  // Conference Papers
  {
    title: "Trust and Spending of Community Currencies in Kenya",
    authors: "Ruddick, W.",
    year: "2015",
    journal:
      "3rd International Conference on Social and Complementary Currencies, Salvador, Brazil",
    link: "https://socialcurrency.sciencesconf.org/conference/socialcurrency/pages/Trust_and_Spending_of_Community_RUDDICK.pdf",
    category: "conference-paper",
  },
  {
    title:
      "Challenges of Collective Organization and Institution Building around Community Currencies in Kenyan Slums",
    authors: "Dissaux, T.; Ruddick, W.",
    year: "2017",
    journal:
      "4th International Conference on Social and Complementary Currencies, Barcelona, Spain",
    link: "https://grassecon.org/theme/pdfs/challanges-of-collective-org.pdf",
    category: "conference-paper",
  },

  // Theses
  {
    title:
      "A Relational Analysis of Sarafu Network: Emergence of a Monetary Ecosystem for the Prosperity of Communities",
    authors: "Sowelu Elios Avanzo",
    journal: "University of Torino (Master's Thesis)",
    link: "https://grassecon.org/theme/pdfs/sarafu-network.pdf",
    category: "thesis",
  },
  {
    title:
      "Voucher Systems for Food Security: A Case Study on Kenya's Sarafu-Credit",
    authors: "Marion Cauvet",
    year: "2018",
    journal: "University of Copenhagen (M.Sc. Agricultural Development)",
    link: "https://grassecon.org/theme/pdfs/voucher-systems.pdf",
    category: "thesis",
  },
  {
    title:
      "Community Currency Programmes as a Tool for the Sustainable Development of Informal Settlements",
    authors: "Daan Sillen",
    year: "2017",
    journal:
      "United Nations University / Maastricht University (M.Sc. Public Policy and Human Development)",
    link: "https://grassecon.org/theme/pdfs/UNU-merit.pdf",
    category: "thesis",
  },
  {
    title:
      "The Case of Sarafu-credits: Examining How a Community Currency Can Contribute to Sustainable Livelihood in Informal Settlements",
    authors: "Hannes Anagrius",
    year: "2017",
    journal:
      "Stockholm Resilience Centre (M.Sc. Resilience and Sustainability Science)",
    link: "https://grassecon.org/theme/pdfs/stock-resiliance.pdf",
    category: "thesis",
  },
  {
    title:
      "Community Currencies in a Development Context: The Case of the Sarafu-Credit in Kenya",
    authors: "Thibaud Dezyn",
    year: "2017",
    journal: "University of Leuven, Belgium (Masters in Cultural Anthropology)",
    link: "https://grassecon.org/theme/pdfs/CIC-development.pdf",
    category: "thesis",
  },
  {
    title:
      "The Role of Complementary Currency in Promoting Business Growth in an Informal Economy: Case of Bangla-Pesa",
    authors: "Roselyne M. Omanga",
    year: "2016",
    journal:
      "Strathmore University, Kenya (Masters of Executive Business Administration)",
    link: "https://grassecon.org/theme/pdfs/role-of-complementary-currency.pdf",
    category: "thesis",
  },
  {
    title:
      "Relationship between Community Currencies and Nutritional Intake of Household in Kibera Kenya",
    authors: "Sharlene Mbula Mule",
    year: "2016",
    journal: "University of Nairobi (B.Sc. Food Nutrition and Dietetics)",
    link: "https://grassecon.org/theme/pdfs/relationship-btwn-cic.pdf",
    category: "thesis",
  },

  // Seminar Papers
  {
    title: "Economic Advantages of Community Currencies",
    authors: "Sarah Zeller",
    link: "https://grassecon.org/theme/pdfs/economic-adv-cic.pdf",
    abstract:
      "Examines liquidity as a success factor for community currency viability.",
    category: "seminar-paper",
  },

  // Grants
  {
    title:
      "DANIDA Awarded 9 Million DKK for Research on Community Currencies",
    authors: "Ester Barinaga (Lund University, Lead Researcher)",
    journal: "DANIDA / Copenhagen Business School",
    link: "https://www.cbs.dk/en/research/departments-and-centres/department-of-management-politics-and-philosophy/news/ester-barinaga-mpp-receives-research-grant-from-danida",
    abstract:
      "4-year research grant from Denmark's Ministry of Foreign Affairs studying governance practices and diffusion in Mombasa, Nairobi, and Kisumu.",
    category: "grant",
  },
];
