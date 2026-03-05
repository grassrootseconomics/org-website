export interface CommunityStory {
  id: string;
  title: string;
  location: string;
  text: string;
  pullQuote?: string;
  attribution?: string;
  imageSrc?: string;
}

export const stories: CommunityStory[] = [
  {
    id: "jacob",
    title: "Jacob's Story",
    location: "Miyani, Kwale County",
    text: "Jacob is a 44-year-old farmer and fisherman with seven children. Before joining a Commitment Pool, his family ate ugali every day — it was all they could afford when Kenyan Shillings were scarce. Through Community Asset Vouchers, Jacob now trades his catch and crops with other pool members. His daily earnings rose from 2,500 to 3,700 KSH on good fishing days. His family now buys rice, beans, and wheat flour.",
    pullQuote:
      "I don't have to eat ugali every day now. I can buy rice, beans, wheat flour.",
    attribution: "Jacob, farmer and fisherman",
    imageSrc: "/images/how-it-works/cic-img3.webp",
  },
  {
    id: "bangla-pesa",
    title: "The Bangla-Pesa Arrests",
    location: "Bangladesh Settlement, Mombasa",
    text: "In May 2013, six people — including founder Will Ruddick — were arrested for launching Bangla-Pesa, a community currency in Bangladesh informal settlement near Mombasa. The charge: forgery of currency. The case drew international attention from BBC, HuffPost, Al Jazeera, and Quartz. Charges were eventually dropped, and the attention only amplified the movement. Within months, Bangla-Pesa was back in circulation among 200 businesses.",
    pullQuote:
      "They charged us with forging currency. We were creating community.",
    attribution: "Will Ruddick, Founder",
    imageSrc: "/images/how-it-works/bangla-pesa-launch1.webp",
  },
  {
    id: "mwerya",
    title: "Reviving Mwerya",
    location: "Kwale County, Kenya",
    text: "Mwerya is an ancestral practice of rotational labor — community members take turns helping each other farm, build homes, and create together. It predates any formal economy. Through our programs, communities have organized 1,637 Mwerya events, built 30 houses, and established 139 farms — all coordinated through digital vouchers that formalize what was always there: mutual commitment.",
    imageSrc: "/images/how-it-works/cic-img7.webp",
  },
  {
    id: "gatina-pesa",
    title: "Gatina-Pesa Launch",
    location: "Kawangware, Nairobi",
    text: "The first replication of the Bangla-Pesa model outside Mombasa. Hon. Simba Arati, the area Member of Parliament, officially launched the Gatina-Pesa voucher. The entire community of Kawangware mobilized — a march went from Congo through the slum to Gatina Primary School, where Alpha and Omega youth group performed a drama showing how the vouchers work. 258 businesses joined the network.",
    imageSrc: "/images/about/gatina-pesa.webp",
  },
];
