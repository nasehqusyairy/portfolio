import Section from "~/components/home-section";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button"
import Jumbotron from "~/components/sections/jumbotron";
import Experiences from "~/components/sections/experiences";
import Skills from "~/components/sections/skills";
import Gallery from "~/components/sections/gallery";
import Contact from "~/components/sections/contact";
import socmeds from "~/data/socmeds.json";
import type { SocialMedia } from "~/models/SecialMedia";
import sections from "~/data/sections.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { jumbotron, experiences, skills, gallery, contact } = sections;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Nasyikh's Portfolio" },
    {
      property: "og:title",
      content: "Nasyikh's Portfolio",
    },
    {
      name: "description",
      content: "Welcome to Nasyikh's personal portfolio website, showcasing projects and skills.",
    },
  ];
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="max-w-screen overflow-hidden">
      <Jumbotron config={jumbotron} />
      <Experiences config={experiences} />
      <Skills config={skills} />
      <Gallery config={gallery} />
      <Contact config={contact} />
      <Section className="lg:flex justify-between items-center lg:pt-12">
        <p className="pt-12 lg:pt-0 pb-4 text-foreground">© {new Date().getFullYear()} Moh. Nasyikh Al-Qusyairy. All rights reserved.</p>
        <div className="flex gap-2 pb-4">
          {socmeds.map((socmed: SocialMedia, i) => (
            <Button variant={"ghost"} size={"icon"} asChild key={'footer-socmed-links-' + i}>
              <a href={socmed.url} target="_blank" >
                <i className={`bi bi-${socmed.icon}`}></i>
              </a>
            </Button>
          ))}
        </div>
      </Section>
    </div>
  )
}
