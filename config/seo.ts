import type { Metadata } from "next";

export const seoConfig = {
  siteOrigin: "https://hi1124565801-ai.github.io",
  basePath: "/yunmoxiao-tian",
  canonicalSiteUrl: "https://hi1124565801-ai.github.io/yunmoxiao-tian/",
  siteName: "Yunmoxiao Tian",
  personName: "Yunmoxiao Tian",
  chineseName: "田云墨筱",
  alternateName: "Tian Yunmoxiao",
  profileImagePath: "/images/profile/yunmoxiao-main.jpg",
  socialImagePath: "/og.png",
  googleSiteVerification: "WlK2AVNhcAr85WzErqMvlsZtLCJIubZuF2pGt2q-sx4",
  bingSiteVerification: null as string | null,
  baiduSiteVerification: null as string | null,
} as const;

export const homeTitle = "田云墨筱 Yunmoxiao Tian | 个人主页 · Peking University";

export const homeDescription =
  "田云墨筱的个人主页。就读于北京大学英语语言文学专业，辅修社会学。这里收录了她的新闻报道、个人公众号「冰块下午」的随笔、田野研究、摄影作品和小说城市漫游图。Yunmoxiao Tian studies English Language and Literature at Peking University, with a minor in Sociology.";

export const indexedPages = [
  {
    path: "/",
    title: homeTitle,
    description: homeDescription,
  },
  {
    path: "/research",
    title: "Research | Yunmoxiao Tian 田云墨筱",
    description:
      "Research by Yunmoxiao Tian on cultural sociology, organizations, communication, consumption, digital platforms, visual culture, and AI-supported writing.",
  },
  {
    path: "/writing",
    title: "Writing | Yunmoxiao Tian 田云墨筱",
    description:
      "Long-form journalism, campus reporting, and independent essays by Yunmoxiao Tian on culture, consumption, urban life, education, and contemporary experience.",
  },
  {
    path: "/media",
    title: "Media Coverage | Yunmoxiao Tian 田云墨筱",
    description:
      "Selected profiles and interviews featuring Yunmoxiao Tian’s study, research, writing, and international academic experiences.",
  },
  {
    path: "/photography",
    title: "Photography | Yunmoxiao Tian 田云墨筱",
    description:
      "An interactive world map and visual archive of cities, coastlines, streets, interiors, and passing moments photographed by Yunmoxiao Tian.",
  },
  {
    path: "/literary-mapping",
    title: "Literary City Atlas | Yunmoxiao Tian 田云墨筱",
    description:
      "Read scenes from Beijing, London, and Cholon, then follow their places on Yunmoxiao Tian’s interactive Literary City Atlas.",
  },
] as const;

function cleanPath(path: string) {
  const withoutQueryOrHash = path.split(/[?#]/, 1)[0] || "/";
  if (withoutQueryOrHash === "/") return "";
  return `/${withoutQueryOrHash.replace(/^\/+|\/+$/g, "")}`;
}

export function canonicalUrl(path = "/") {
  const normalizedPath = cleanPath(path);
  return `${seoConfig.siteOrigin}${seoConfig.basePath}${normalizedPath}/`;
}

export function publicAssetUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${seoConfig.siteOrigin}${seoConfig.basePath}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  profile = false,
}: {
  title: string;
  description: string;
  path: string;
  profile?: boolean;
}): Metadata {
  const url = canonicalUrl(path);
  const socialImage = publicAssetUrl(seoConfig.socialImagePath);

  return {
    title: { absolute: title },
    description,
    authors: [
      {
        name: seoConfig.personName,
        url: seoConfig.canonicalSiteUrl,
      },
    ],
    creator: seoConfig.personName,
    publisher: seoConfig.personName,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: profile ? "profile" : "website",
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      locale: "en_US",
      alternateLocale: ["zh_CN"],
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Yunmoxiao Tian 田云墨筱 — Peking University",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export function getVerificationMetadata(): Metadata["verification"] {
  const other: Record<string, string> = {};

  if (seoConfig.bingSiteVerification) {
    other["msvalidate.01"] = seoConfig.bingSiteVerification;
  }
  if (seoConfig.baiduSiteVerification) {
    other["baidu-site-verification"] = seoConfig.baiduSiteVerification;
  }

  if (!seoConfig.googleSiteVerification && Object.keys(other).length === 0) {
    return undefined;
  }

  return {
    ...(seoConfig.googleSiteVerification
      ? { google: seoConfig.googleSiteVerification }
      : {}),
    ...(Object.keys(other).length > 0 ? { other } : {}),
  };
}

export const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${seoConfig.canonicalSiteUrl}#website`,
      url: seoConfig.canonicalSiteUrl,
      name: `${seoConfig.personName} ${seoConfig.chineseName}`,
      inLanguage: ["en", "zh-CN"],
      publisher: {
        "@id": `${seoConfig.canonicalSiteUrl}#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${seoConfig.canonicalSiteUrl}#profile`,
      url: seoConfig.canonicalSiteUrl,
      name: `${seoConfig.personName} ${seoConfig.chineseName}`,
      mainEntity: {
        "@type": "Person",
        "@id": `${seoConfig.canonicalSiteUrl}#person`,
        name: seoConfig.personName,
        alternateName: [seoConfig.chineseName, seoConfig.alternateName],
        url: seoConfig.canonicalSiteUrl,
        image: publicAssetUrl(seoConfig.profileImagePath),
        email: [
          "mailto:2200018214@stu.pku.edu.cn",
          "mailto:hi1124565801@gmail.com",
        ],
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Peking University",
          alternateName: "北京大学",
          sameAs: "https://www.pku.edu.cn/",
        },
        sameAs: [
          "https://www.linkedin.com/in/yunmoxiao-tian-781b88348/",
          "https://github.com/hi1124565801-ai",
        ],
        knowsAbout: [
          "Cultural Sociology",
          "Communication",
          "Media and Technology",
          "Organizations",
          "Consumer Sociology",
          "Urban Social Life",
          "Digital Platforms",
        ],
      },
    },
  ],
} as const;
