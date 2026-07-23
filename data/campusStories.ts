export type CampusStory = {
  id: string;
  titleEn: string;
  titleZh: string;
  summary?: string;
  link: string;
};

export const campusStories: CampusStory[] = [
  {
    id: "arts-course",
    titleEn: "A Peking University Arts Course with an 800-Person Waitlist",
    titleZh: "一门800多人抢课的北大“神仙课程”",
    summary:
      "A profile of a highly popular Peking University arts course, examining its teaching approach and why it resonated so strongly with students.",
    link: "https://mp.weixin.qq.com/s/8EbXr9jndNIwSFyhjo3gIQ",
  },
  {
    id: "wang-kaixiang",
    titleEn: "Beyond the Nature Cover: The Many-Sided Life of Astronomy PhD Wang Kaixiang",
    titleZh: "北大天文博士、Nature封面作者王凯翔的多面人生",
    summary:
      "A profile of an astronomy doctoral researcher and Nature cover author, exploring the person, interests, and everyday experiences behind a high-achieving academic identity.",
    link: "https://mp.weixin.qq.com/s/lK7L_yMq3VBpqB6OL3jZSg",
  },
  {
    id: "warehouse-painter",
    titleEn: "The Painter’s Dream of a Peking University Warehouse Manager",
    titleZh: "北大库房管理师傅姚晓光的画家梦",
    summary:
      "A human-interest story about a university warehouse manager’s long-standing artistic practice and dream of becoming a painter.",
    link: "https://mp.weixin.qq.com/s/TGFkCw6CWmZeuv42Trnpvg",
  },
  {
    id: "thirty-day-challenge",
    titleEn: "A Thirty-Day Challenge at Peking University",
    titleZh: "北大同学30天挑战，成功了吗？",
    summary:
      "A report on a thirty-day challenge initiated by Professor He Shu, following how participants negotiated discipline, experimentation, and everyday change.",
    link: "https://mp.weixin.qq.com/s/vAbSIOrzTs1aRdNzajDpqQ",
  },
  {
    id: "triplets",
    titleEn: "The “Revitalize China” Triplets, Years Later",
    titleZh: "高考后火遍全网的“振兴中华”三胞胎的成长与蜕变",
    summary:
      "A follow-up profile of the triplets who became widely known after the national college entrance examination, tracing their growth and changing aspirations.",
    link: "https://mp.weixin.qq.com/s/bciqCHiURJZ96ByL8t2Yrw",
  },
  {
    id: "sfl-year-review",
    titleEn: "School of Foreign Languages Year-End Review",
    titleZh: "北大外院年终总结特辑",
    link: "https://mp.weixin.qq.com/s/_pH_3Hq456TpC42C7F0otw",
  },
  {
    id: "yenching-video",
    titleEn: "2024 Yenching Global Symposium Video Reporting",
    titleZh: "2024全球青年中国论坛出镜记者",
    link: "https://mp.weixin.qq.com/s/yvJmUUYsplyfAa3ebIm_UQ",
  },
];
