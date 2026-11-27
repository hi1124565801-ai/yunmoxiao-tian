export const literaryMapping = {
  title: "Literary City Atlas",
  url: "https://hi1124565801-ai.github.io/literary-city-atlas/",
  feedbackUrl: "mailto:hi1124565801@gmail.com?subject=Literary%20City%20Atlas%20Feedback",
} as const;

export function atlasSceneUrl(sceneId: string) {
  return literaryMapping.url + "?scene=" + encodeURIComponent(sceneId);
}
