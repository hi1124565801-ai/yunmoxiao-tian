import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { atlasSceneUrl } from "@/data/literaryMapping";

export function LiteraryMappingPreview() {
  return (
    <section className="home-atlas" aria-labelledby="mapping-preview-heading">
      <figure>
        <SmartImage src="/images/projects/atlas/cn-beijing-south.webp"
          alt="A brick gateway frames a narrow lane in the atlas illustration of southern Beijing."
          width={680} height={680} sizes="(max-width: 620px) 90vw, 335px" />
        <figcaption>Southern Beijing · AI illustration from the atlas</figcaption>
      </figure>
      <div>
        <h2 id="mapping-preview-heading">Literary City Atlas <span lang="zh-CN">小说城市漫游图</span></h2>
        <p>Lin Haiyin opens <em>城南旧事</em> by remembering the people and streets of her childhood. I built a map where you can follow that memory through Beijing, one scene at a time.</p>
        <div className="home-atlas-links">
          <a className="button button--solid" href={atlasSceneUrl("scene-cn-beijing-south")}>Enter the Beijing scene <span aria-hidden="true">↗</span></a>
          <Link href="/literary-mapping">Browse the books <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  );
}
