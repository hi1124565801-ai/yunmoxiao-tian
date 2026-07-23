"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/sitePath";

type SmartImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function SmartImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className,
}: SmartImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ""}`} role="img" aria-label={alt}>
        <span>Image note</span>
        <small>This frame is waiting to be added.</small>
      </div>
    );
  }

  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      unoptimized
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
