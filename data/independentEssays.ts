export type IndependentEssay = {
  id: string;
  titleEn: string;
  titleZh: string;
  summary: string;
  link: string;
};

export const independentEssays: IndependentEssay[] = [
  {
    id: "conversation",
    titleEn: "The Necessity of Old-Fashioned Conversation",
    titleZh: "《老派聊天之必要》",
    link: "https://mp.weixin.qq.com/s/2fYnIxiXgztdKqpLvCvNGA",
    summary:
      "A city walk, a snatch of local speech, a conversation that runs past its allotted time. What happens when a conversation has no agenda?",
  },
  {
    id: "eating-together",
    titleEn: "The Necessity of Old-Fashioned Eating Together",
    titleZh: "《老派吃饭之必要》",
    link: "https://mp.weixin.qq.com/s/J9cB2p8zYGA8rFSxJOSGuA",
    summary:
      "Street stalls, childhood tastes, and the wait for a shared table. Some of the pleasure of a meal starts before the food arrives.",
  },
  {
    id: "world-press-photo",
    titleEn: "World Press Photo 2026: Seeing Human Presence in the Age of AI",
    titleZh: "《26荷赛摄影展｜在遍地 AI 的时代，看见人的存在》",
    link: "https://mp.weixin.qq.com/s/O3l56VucsQ2Rmbiq_pK3uA",
    summary:
      "Looking at a wedding photographed during a flood, I ask what it means for one person to be there to witness another person’s life.",
  },
];
