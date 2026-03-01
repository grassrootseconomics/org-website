export interface MediaArticle {
  outlet: string;
  title: string;
  year?: string;
  link: string;
}

export const mediaArticles: MediaArticle[] = [
  { outlet: "Quartz", title: "Introducing the Bangla-Pesa", year: "2013", link: "https://qz.com/86618/introducing-the-bangla-pesa-kenyas-beautiful-new-complementary-currency/" },
  { outlet: "Bloomberg", title: "Closing the Cash Gap with Cryptocurrency", year: "2018", link: "https://www.bloomberg.com/news/features/2018-10-31/closing-the-cash-gap-with-cryptocurrency" },
  { outlet: "BBC", title: "BBC World Service Feature", link: "http://bbc.co.uk/programmes/p05zw020" },
  { outlet: "Al Jazeera", title: "Community Currencies in Kenya", link: "https://www.youtube.com/watch?v=UpCr8-3K05E" },
  { outlet: "HuffPost", title: "The Crime of Alleviating Poverty", year: "2013", link: "https://www.huffingtonpost.com/ellen-brown/the-crime-of-alleviating-_b_3519858.html" },
  { outlet: "Yes! Magazine", title: "Alternative Currencies Bigger Than Bitcoin", link: "http://www.yesmagazine.org/commonomics/alternative-currencies-bigger-than-bitcoin-bangla-pesa-brixton" },
  { outlet: "Forbes", title: "Cryptocurrency for Social Good", link: "https://www.forbes.com/sites/jasonbloomberg/" },
  { outlet: "Reuters", title: "Kenyan Community Currency", link: "https://www.reuters.com/" },
];
