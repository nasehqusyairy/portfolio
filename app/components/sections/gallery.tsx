import type { SectionProps } from "~/models/Section";
import Section from "../home-section";
import GalleryGrid from "../gallery/gallery-grid";
import { Badge } from "../ui/badge";

export default function Gallery({ config }: SectionProps) {
  return (
    <>
      <Section id="gallery">
        <div className="ps-4 lg:ps-0 pt-12 pb-6 border-x border-dashed lg:text-center">
          <div className="flex lg:justify-center gap-1 mb-4">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`gallery-badge-${index}`} data-aos="zoom-in" data-aos-delay={index * 250}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 font-bold text-5xl" data-aos="zoom-in" data-aos-delay={250}>{config.title}</h1>
          <p className="text-muted-foreground" data-aos="zoom-in" data-aos-delay={500}>
            {config.description}
          </p>
        </div>
      </Section>
      <Section>
        <GalleryGrid />
      </Section>
    </>
  )
}