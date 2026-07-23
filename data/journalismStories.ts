export type JournalismStory = {
  id: string;
  publication: string;
  year: string;
  titleEn: string;
  titleZh: string;
  summary: string;
  metrics: string;
  link: string;
  image: string;
  featured: boolean;
};

export const journalismStories: JournalismStory[] = [
  {
    id: "lv-budget-offerings",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "A ¥240 Louis Vuitton Purchase: Who Is Buying Luxury’s “Budget Offerings”?",
    titleZh: "《240元买LV，谁在为奢侈品的“穷鬼生意”买单？》",
    summary:
      "An investigation into Louis Vuitton’s lower-priced products and entry-level marketing strategy amid weakening luxury consumption. The story examines how luxury brands cultivate aspirational customers and how consumers negotiate status, affordability, and symbolic value.",
    metrics: "95K reads",
    link: "https://mp.weixin.qq.com/s/IncamWGjah77dkHlqrb0sA",
    image: "/images/writing/lv.jpg",
    featured: true,
  },
  {
    id: "academic-bars",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "No Singing, No Dancing: Why Young People Are Flocking to Bars for Lectures",
    titleZh: "《不唱歌、不蹦迪，年轻人沉迷在酒吧听课》",
    summary:
      "One of the earliest in-depth reports in China on the “academic bar” phenomenon. Based on interviews with organizers and participants, the story examines how young people use semi-public nightlife spaces for knowledge exchange, social belonging, cultural aspiration, and relief from pressure.",
    metrics: "100K+ reads in the first hour · 10K+ shares",
    link: "https://mp.weixin.qq.com/s/aTlFbr5voLSeuBrmwXaxtw",
    image: "/images/writing/academic-bar.jpg",
    featured: true,
  },
  {
    id: "older-concert-fans",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "A ¥17,000 Ticket: The Older Fans Following Concert Tours",
    titleZh: "《17000元一张票，追演唱会的中老年人》",
    summary:
      "A feature on middle-aged and older concertgoers, based on interviews with fans, their children, and music-industry professionals. It examines the emotional appeal of Dao Lang, the growth of the silver consumer market, and how concert-going becomes a form of memory, companionship, and self-expression.",
    metrics: "800K+ reads · 16K+ shares",
    link: "https://mp.weixin.qq.com/s/gWsEASQgcSULlGZakfw5-Q",
    image: "/images/writing/concert.jpg",
    featured: true,
  },
  {
    id: "last-superstar",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "How Much Did 2024’s Last Superstar Make?",
    titleZh: "《2024最后一个顶流，赚了多少钱？》",
    summary:
      "A data-driven analysis of Dao Lang’s commercial success and the wider economic effects of his concert tour. The article combines industry data with narrative reporting to assess ticketing, tourism, and local consumption.",
    metrics: "100K+ reads",
    link: "https://mp.weixin.qq.com/s/r_xyPBrzUg21GS_rwcAnVw",
    image: "/images/writing/daolang.jpg",
    featured: false,
  },
  {
    id: "trial-class",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "The ¥2.8 “Just-for-Fun” Class: Young Consumers Take the Trial and Move On",
    titleZh: "《2.8元的「乐子课」，年轻人薅完就跑》",
    summary:
      "An examination of ultra-low-cost trial classes as a leisure trend among young consumers. The story explores consumption downgrading, the search for inexpensive experiences, and the tensions faced by businesses whose trial offers attract attention without generating lasting customers.",
    metrics: "100K+ reads",
    link: "https://mp.weixin.qq.com/s/C5djEctnSOx4Y0nuXTbegQ",
    image: "/images/writing/trial-class.jpg",
    featured: false,
  },
  {
    id: "skp",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "Even Beijing’s Wealthiest Shoppers Are Cutting Back at SKP",
    titleZh: "《全北京最有钱的人，在SKP也不乱花钱了》",
    summary:
      "A report on subdued spending at Beijing SKP during its anniversary period. It uses the shopping mall as an entry point to examine the slowdown in China’s luxury market and the growing emphasis on resale value, durability, and financial caution.",
    metrics: "100K+ reads",
    link: "https://mp.weixin.qq.com/s/lCDOBlWQyK16jj8izL7FtA",
    image: "/images/writing/skp.jpg",
    featured: false,
  },
  {
    id: "korean-tourists",
    publication: "People Magazine (人物)",
    year: "2024",
    titleEn: "The First Wave of Korean Tourists in Shanghai Is Already Earning RMB",
    titleZh: "《第一波来上海的韩国人，已经开始赚人民币了》",
    summary:
      "A report on the arrival of Korean visitors in Shanghai, Zhangjiajie, Harbin, and other Chinese cities following visa-free entry. It examines the new cultural and commercial encounters emerging around this tourism boom.",
    metrics: "100K+ reads",
    link: "https://mp.weixin.qq.com/s/ehL9Ky2WygkZfomcNUgiyg",
    image: "/images/writing/korean-visitors.jpg",
    featured: false,
  },
];
