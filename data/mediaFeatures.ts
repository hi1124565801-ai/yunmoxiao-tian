export type MediaFeature = {
  id: string;
  source: string;
  originalTitle: string;
  englishTitle: string;
  date?: string;
  summary: string;
  link: string;
  image: string;
  imageAlt: string;
};

export const mediaFeatures: MediaFeature[] = [
  {
    id: "pku-faces-copenhagen",
    source: "Peking University Official Instagram",
    originalTitle: "PKU Faces — Tian Yunmoxiao at the University of Copenhagen",
    englishTitle: "PKU Faces — Tian Yunmoxiao at the University of Copenhagen",
    summary:
      "A Peking University profile of my semester at the University of Copenhagen. The post reflects on a year of extensive travel—46 flights across three continents and 99,065 kilometres—but focuses on how Copenhagen encouraged a slower and more attentive way of seeing. It highlights my creative-writing work, study of Bob Dylan’s lyrics, conversations with professors and students, and reflections on humility and intellectual curiosity.",
    link: "https://www.instagram.com/p/DW3fevVlHUg/?igsh=aWNpYzdrYmN0amt6",
    image: "/images/photography/copenhagen/copenhagen-01.jpg",
    imageAlt: "Colourful waterfront buildings reflected in Copenhagen harbour",
  },
  {
    id: "pku-global-copenhagen",
    source: "PKU Global / Peking University and the World · 北大与世界",
    originalTitle: "EAP | 田云墨筱：在冬令时的寂静里，凝视冰面的裂缝",
    englishTitle:
      "EAP | Tian Yunmoxiao: Watching the Cracks in the Ice in the Silence of Winter Time",
    summary:
      "A long-form feature on my four-month exchange at the University of Copenhagen. It traces a shift from rapid international mobility toward a slower attention to urban life, nearby people, and the social meanings of light, bars, and winter routines. It also discusses my creative-writing course, analysis of Bob Dylan in American literature, developing sociological interests, and reflections on remaining humble while encountering a wider world.",
    link: "https://mp.weixin.qq.com/s/Rw0UkrDUPiWpBAM_0CNYSw",
    image: "/images/photography/copenhagen/copenhagen-03.jpg",
    imageAlt: "A bicycle outside a warmly lit Copenhagen building after rain",
  },
  {
    id: "sfl-orientation",
    source: "Peking University School of Foreign Languages · 北大外院人",
    originalTitle: "SFL迎新季 | 外国语学院隆重举行2022年开学典礼",
    englishTitle: "SFL Orientation | The 2022 Opening Ceremony of the School of Foreign Languages",
    summary:
      "A report on the 2022 opening ceremony of Peking University’s School of Foreign Languages. I was featured as an undergraduate student speaker, reflecting on language study as a way of encountering the unknown, understanding other cultures, communicating across worlds, and taking responsibility beyond the university.",
    link: "https://mp.weixin.qq.com/s/LcNUsw5k40vRV3CbnFi_Nw",
    image: "/images/photography/beijing/beijing-01.jpg",
    imageAlt: "A sunlit interior in Beijing with trees visible through large windows",
  },
  {
    id: "campus-journalists",
    source: "Peking University Student Union · 北京大学学生会",
    originalTitle: "寻星·群星 | 当倾听他人者被倾听",
    englishTitle: "Constellations | When Those Who Listen to Others Are Heard",
    summary:
      "A collective profile of campus journalists from several Peking University media teams. In the interview, I discuss revising narrative structure, making highly accomplished interviewees emotionally legible rather than distant, and finding meaningful stories in ordinary campus lives. The feature also reflects on campus journalism as a practice of listening, preserving memory, and recording people whose work is important but rarely visible.",
    link: "https://mp.weixin.qq.com/s/QdEjtJV70ht_wfr2AKs74A",
    image: "/images/profile/yunmoxiao-main.jpg",
    imageAlt:
      "Portrait of Yunmoxiao Tian, a Peking University undergraduate in English Literature and Sociology",
  },
];
