import type { SectionProps } from "~/models/Section";
import ParticleBG from "../particle-bg";
import Section from "../home-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import myPhoto from "~/images/myphoto.jpg";

export default function Jumbotron({ config }: SectionProps) {
  return (
    <Section className="z-10 relative pt-28 pb-12">
      <ParticleBG />
      <div className="z-10 relative flex flex-wrap items-center">
        <div className="relative flex justify-center mb-12 w-full lg:w-6/12">
          <div data-aos="flip-left" className="bg-primary mt-6 rounded-lg w-[18rem] h-[24rem] -rotate-12" />
          <img data-aos="flip-left" data-aos-delay="250" src={myPhoto} className="z-10 absolute bg-foreground rounded-lg w-[18rem] h-[24rem]" />
        </div>
        <div className="w-full lg:w-6/12">
          <div className="flex gap-1 mb-4">
            {config.badges.map((badge, index) => (
              <Badge data-aos="zoom-in" data-aos-delay={index * 250} variant='outline' key={`jumbotron-badge-${index}`}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 data-aos="fade-down" className="mb-4 font-bold text-5xl">
            {config.title}
          </h1>
          <p data-aos="fade-down" data-aos-delay="250" className="mb-6 text-muted-foreground text-lg text-justify">
            {config.description}
          </p>
          <div className="flex gap-1">
            <Button asChild data-aos="fade-up" size={"lg"}>
              <a href="#contact">Hire me</a>
            </Button>
            <Button asChild data-aos="fade-up" data-aos-delay="250" size={"lg"} variant={"secondary"}>
              <a href="#gallery">View projects</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}