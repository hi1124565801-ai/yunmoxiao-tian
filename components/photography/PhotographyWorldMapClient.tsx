"use client";

import dynamic from "next/dynamic";

const PhotographyWorldMap = dynamic(
  () =>
    import("./PhotographyWorldMap").then((module) => module.PhotographyWorldMap),
  {
    ssr: false,
    loading: () => (
      <div className="map-loading" role="status">
        Preparing the photography map…
      </div>
    ),
  },
);

export function PhotographyWorldMapClient() {
  return <PhotographyWorldMap />;
}
