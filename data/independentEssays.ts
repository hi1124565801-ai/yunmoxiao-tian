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
      "A lyrical essay against optimized networking, scheduled coffee chats, and screen-mediated attention. Moving through summer memories, city walks, music, small talk, and local speech, it imagines conversation as an accidental, unhurried form of intimacy rather than a transaction.",
  },
  {
    id: "eating-together",
    titleEn: "The Necessity of Old-Fashioned Eating Together",
    titleZh: "《老派吃饭之必要》",
    link: "https://mp.weixin.qq.com/s/J9cB2p8zYGA8rFSxJOSGuA",
    summary:
      "A playful personal essay celebrating street stalls, crowded restaurants, waiting in line, shared dishes, childhood tastes, and the conversations that happen around food. It contrasts spontaneous, sensory forms of eating together with polished dining rituals and carefully managed experiences.",
  },
  {
    id: "world-press-photo",
    titleEn: "World Press Photo 2026: Seeing Human Presence in the Age of AI",
    titleZh: "《26荷赛摄影展｜在遍地 AI 的时代，看见人的存在》",
    link: "https://mp.weixin.qq.com/s/O3l56VucsQ2Rmbiq_pK3uA",
    summary:
      "A reflection on photojournalism as embodied witnessing and ethical care in an age of generative images. Through photographs of fire, scam compounds, human–robot companionship, and a wedding during a flood, the essay argues that photography matters not simply because it produces images, but because a person was present to witness another life.",
  },
];
