import type { SectionProps } from "~/models/Section";
import Hatch from "../hatch";
import Section from "../home-section";
import Timeline from "../timeline/timeline";
import { Badge } from "../ui/badge";

export default function Experiences({ config }: SectionProps) {
  return (
    <>
      <Section className="flex justify-between" id="experiences">
        <div className="py-12 ps-4 pe-12 border-x border-dashed lg:w-8/12">
          <div className="flex gap-1 mb-4">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`experiences-badge-${index}`} data-aos="fade-right" data-aos-delay={index * 250}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 data-aos="fade-right" data-aos-delay="500" className="mb-4 font-bold text-5xl">{config.title}</h1>
          <p data-aos="fade-right" data-aos-delay="750" className="text-muted-foreground">
            {config.description}
          </p>
        </div>
        <Hatch className="border-r w-4/12" />
      </Section>
      <Section>
        <div className="pt-12 border-s border-dashed">
          <Timeline />
        </div>
      </Section>
    </>
  )
}