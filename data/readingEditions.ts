export type ReadingEdition = {
  title: string;
  publisher: string;
  paragraphs: string[];
  textSource?: string;
};

const editions = {
  "academic-bars": () => import("./writing-text/academic-bars.json"),
  "lv-budget-offerings": () => import("./writing-text/lv-budget-offerings.json"),
  "older-concert-fans": () => import("./writing-text/older-concert-fans.json"),
  "last-superstar": () => import("./writing-text/last-superstar.json"),
  "trial-class": () => import("./writing-text/trial-class.json"),
  skp: () => import("./writing-text/skp.json"),
  "korean-tourists": () => import("./writing-text/korean-tourists.json"),
  conversation: () => import("./writing-text/conversation.json"),
  "eating-together": () => import("./writing-text/eating-together.json"),
  "world-press-photo": () => import("./writing-text/world-press-photo.json"),
  "arts-course": () => import("./writing-text/arts-course.json"),
  "thirty-day-challenge": () => import("./writing-text/thirty-day-challenge.json"),
  "warehouse-painter": () => import("./writing-text/warehouse-painter.json"),
  triplets: () => import("./writing-text/triplets.json"),
};

export function hasReadingEdition(id: string): id is keyof typeof editions {
  return Object.hasOwn(editions, id);
}
export const editionIds = Object.keys(editions);

export async function getReadingEdition(id: string): Promise<ReadingEdition | undefined> {
  if (hasReadingEdition(id)) return (await editions[id]()).default;
}
