import socmeds from "~/data/socmeds.json";
import Section from "../Section";
import { Badge } from "../ui/badge";
import Hatch from "../Hatch";
import ContactForm from "../ContactForm";
import type { SocialMedia } from "~/models/SecialMedia";
import type { SectionProps } from "~/models/Section";

export default function Contact({ config }: SectionProps) {
  return (
    <Section className="lg:flex" id="contact">
      <div className="border-x border-b lg:border-b-0 border-dashed lg:w-6/12">
        <div className="px-4 pt-12 pb-8">
          <div className="mb-4 flex gap-1">
            {config.badges.map((badge, index) => (
              <Badge variant='outline' key={`contact-badge-${index}`}>
                {badge}
              </Badge>
            ))}
          </div>
          <h1 className="text-5xl font-bold mb-4">{config.title}</h1>
          <p className="text-muted-foreground">
            {config.description}
          </p>
        </div>
        {socmeds.map((socmed: SocialMedia) => (
          <div className="border-t border-dashed flex">
            <div className="p-4 w-8/12">
              <a href={socmed.url} target="_blank" rel="noopener noreferrer">
                <i className={`bi bi-${socmed.icon}`}></i>
                <span className="underline ms-2">{socmed.text}</span>
              </a>
            </div>
            <Hatch className="w-4/12 border-s border-dashed" />
          </div>
        ))}
      </div>
      <div className="lg:w-6/12 border-x lg:border-s-0 border-dashed">
        <ContactForm />
      </div>
    </Section>
  )
}