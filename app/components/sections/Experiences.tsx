import type { SectionProps } from "~/models/Section";
import Hatch from "../Hatch";
import Section from "../Section";
import Timeline from "../timeline/Timline";
import { Badge } from "../ui/badge";

export default function Experiences({ config }: SectionProps) {
  return (
    <>
      <Section className="flex justify-between" id="experiences">
        <div className="border-x border-dashed py-12 ps-4 pe-12 lg:w-8/12">
          <div className="mb-4 flex gap-1">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`experiences-badge-${index}`} data-aos="fade-right" data-aos-delay={index * 250}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 data-aos="fade-right" data-aos-delay="500" className="text-5xl font-bold mb-4">{config.title}</h1>
          <p data-aos="fade-right" data-aos-delay="750" className="text-muted-foreground">
            {config.description}
          </p>
        </div>
        <Hatch className="w-4/12 border-r" />
      </Section>
      <Section>
        <div className="pt-12 border-s border-dashed">
          <Timeline />
        </div>
      </Section>
    </>
  )
}