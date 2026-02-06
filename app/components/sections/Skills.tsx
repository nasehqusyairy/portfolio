import type { SectionProps } from "~/models/Section";
import Hatch from "../Hatch";
import Section from "../Section";
import { Badge } from "../ui/badge";
import logos from "~/data/skills.json";

export default function Skills({ config }: SectionProps) {
  return (
    <>
      <Section className="flex justify-end-safe" id="skills">
        <Hatch className="border-l w-4/12" />
        <div className="lg:w-8/12 lg:text-end">
          <div className="py-12 ps-4 pe-4 border-x border-dashed">
            <div className="flex lg:justify-end gap-1 mb-4">
              {config.badges.map((badge, index) => (
                <Badge variant='outline' key={`skills-badge-${index}`} data-aos="fade-left" data-aos-delay={index * 250}>
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="mb-4 font-bold text-5xl" data-aos="fade-left" data-aos-delay="250">{config.title}</h1>
            <p className="text-muted-foreground" data-aos="fade-left" data-aos-delay="500">
              {config.description}
            </p>
          </div>
        </div>
      </Section>
      <Section className="py-4">
        <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
          {logos.map((tech, i) => (
            <div
              data-aos="fade-up"
              data-aos-delay={i * 250}
              key={tech.name}
              className="flex flex-col justify-center items-center bg-background active:bg-secondary p-4 border rounded-lg transition-all hover:-translate-y-2 duration-300 cursor-pointer hover:transform"
            >
              <div className="flex justify-center items-center mb-4 w-16 h-16">
                <img
                  src={`${tech.icon}?height=80&width=80`}
                  alt={tech.name}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}