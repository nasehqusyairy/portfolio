import type { SectionProps } from "~/models/Section";
import ParticleBG from "../ParticleBG";
import Section from "../Section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import myPhoto from "~/images/myphoto.jpg";

export default function Jumbotron({ config }: SectionProps) {
  return (
    <Section className="pb-12 pt-28 relative z-10">
      <ParticleBG />
      <div className="flex items-center flex-wrap z-10 relative">
        <div className="relative w-full lg:w-6/12 flex justify-center mb-12">
          <div data-aos="flip-left" className="h-[24rem] w-[18rem] rounded-lg bg-primary -rotate-12 mt-6" />
          <img data-aos="flip-left" data-aos-delay="250" src={myPhoto} className="h-[24rem] w-[18rem] rounded-lg bg-foreground z-10 absolute" />
        </div>
        <div className="w-full lg:w-6/12">
          <div className="mb-4 flex gap-1">
            {config.badges.map((badge, index) => (
              <Badge data-aos="zoom-in" data-aos-delay={index * 250} variant='outline' key={`jumbotron-badge-${index}`}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 data-aos="fade-down" className="text-5xl font-bold mb-4">
            {config.title}
          </h1>
          <p data-aos="fade-down" data-aos-delay="250" className="text-lg mb-6 text-muted-foreground text-justify">
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