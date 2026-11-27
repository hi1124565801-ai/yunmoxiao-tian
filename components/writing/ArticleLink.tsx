import Link from "next/link";
import type { ComponentProps } from "react";
import { hasReadingEdition } from "@/data/readingEditions";

type Props = Omit<ComponentProps<"a">, "href"> & { story: { id: string; link: string } };
export function ArticleLink({ story, children, ...props }: Props) {
  if (hasReadingEdition(story.id)) {
    return <Link prefetch={false} href={`/writing/${story.id}/`} {...props}>{children}</Link>;
  }
  return <a href={story.link} {...props}>{children}</a>;
}
