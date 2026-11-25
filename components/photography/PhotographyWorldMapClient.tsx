"use client";

import { useEffect, useRef, useState } from "react";
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
  const container = useRef<HTMLDivElement>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    if (!container.current || !("IntersectionObserver" in window)) {
      setNearViewport(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={container}>{nearViewport ? <PhotographyWorldMap /> : <div className="map-loading" aria-hidden="true" />}</div>;
}
