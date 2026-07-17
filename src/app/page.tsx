import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-foreground">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
