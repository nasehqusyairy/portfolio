import socmeds from "~/data/socmeds.json";
import Section from "../home-section";
import { Badge } from "../ui/badge";
import Hatch from "../hatch";
import ContactForm from "../contact-form";
import type { SocialMedia } from "~/models/SecialMedia";
import type { SectionProps } from "~/models/Section";

export default function Contact({ config }: SectionProps) {
  return (
    <Section className="lg:flex" id="contact">
      <div className="border-x border-b lg:border-b-0 border-dashed lg:w-6/12">
        <div className="px-4 pt-12 pb-8">
          <div className="flex gap-1 mb-4">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`contact-badge-${index}`}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="mb-4 font-bold text-5xl">{config.title}</h1>
          <p className="text-muted-foreground">
            {config.description}
          </p>
        </div>
        {socmeds.map((socmed: SocialMedia, id) => (
          <div className="flex border-t border-dashed" key={id}>
            <div className="p-4 w-8/12">
              <a href={socmed.url} target="_blank" rel="noopener noreferrer">
                <i className={`bi bi-${socmed.icon}`}></i>
                <span className="ms-2 underline">{socmed.text}</span>
              </a>
            </div>
            <Hatch className="border-s border-dashed w-4/12" />
          </div>
        ))}
      </div>
      <div className="border-x lg:border-s-0 border-dashed lg:w-6/12">
        <ContactForm />
      </div>
    </Section>
  )
}