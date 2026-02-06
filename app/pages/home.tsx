import Section from "~/components/Section";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button"
import Jumbotron from "~/components/sections/Jumbotron";
import Experiences from "~/components/sections/Experiences";
import Skills from "~/components/sections/Skills";
import Gallery from "~/components/sections/Gallery";
import Contact from "~/components/sections/Contact";
import socmeds from "~/data/socmeds.json";
import type { SocialMedia } from "~/models/SecialMedia";
import sections from "~/data/sections.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const { jumbotron, experiences, skills, gallery, contact } = sections;

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
    <>
      <Jumbotron config={jumbotron} />
      <Experiences config={experiences} />
      <Skills config={skills} />
      <Gallery config={gallery} />
      <Contact config={contact} />
      <Section className="lg:flex justify-between items-center lg:pt-12">
        <p className="text-foreground pt-12 lg:pt-0 pb-4">© 2025 Moh. Nasyikh Al-Qusyairy. All rights reserved.</p>
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
    </>
  )
}
