"use client";

import { useState } from "react";
import previewManifest from "@/lib/image-preview-widths.json";
import { withBasePath } from "@/lib/sitePath";

const previewWidths: Record<string, number[]> = previewManifest;

type SmartImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  original?: boolean;
  className?: string;
};

export function SmartImage({
  src, alt, fill, width, height, sizes, priority, original, className,
}: SmartImageProps) {
  const [failedPreview, setFailedPreview] = useState("");
  const [failedOriginal, setFailedOriginal] = useState("");
  const widths = !original && failedPreview !== src ? previewWidths[src] : undefined;

  if (!src || failedOriginal === src) {
    return (
      <div className={`image-fallback ${className ?? ""}`} role="img" aria-label={alt}>
        <span>Image note</span>
        <small>This frame is waiting to be added.</small>
      </div>
    );
  }

  const base = withBasePath(src.replace(/^\/images\//, "/image-previews/"));
  const candidates = widths?.map(w => `${base}.${w}.webp ${w}w`).join(", ");

  // The export contains these variants. GitHub Pages has no on-demand image service.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={widths ? `${base}.${widths[widths.length - 1]}.webp` : withBasePath(src)}
      srcSet={candidates}
      sizes={widths ? sizes ?? "100vw" : undefined}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%" } : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={className}
      onError={() => widths ? setFailedPreview(src) : setFailedOriginal(src)}
    />
  );
}
