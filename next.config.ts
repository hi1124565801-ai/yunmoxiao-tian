import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  images: {
    // Sites' production image transformer may fall back to the original file.
    // The portfolio assets are already web-optimized, so serving them directly
    // is faster and avoids a blank first render in stricter browsers.
    unoptimized: true,
  },
};

export default nextConfig;
