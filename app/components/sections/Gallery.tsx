import type { SectionProps } from "~/models/Section";
import Section from "../Section";
import GalleryGrid from "../gallery/GalleryGrid";
import { Badge } from "../ui/badge";

export default function Gallery({ config }: SectionProps) {
  return (
    <>
      <Section id="gallery">
        <div className="pt-12 pb-6 ps-4 lg:ps-0 lg:text-center border-x border-dashed">
          <div className="mb-4 flex gap-1 lg:justify-center">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`gallery-badge-${index}`} data-aos="zoom-in" data-aos-delay={index * 250}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="text-5xl font-bold mb-4" data-aos="zoom-in" data-aos-delay={250}>{config.title}</h1>
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