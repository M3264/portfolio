"use client"

import { MinimalHero } from "@/components/minimal-hero"
import { MinimalNav } from "@/components/minimal-nav"
import { MinimalProjects } from "@/components/minimal-projects"
import { MinimalSkills } from "@/components/minimal-skills"
import { MinimalContact } from "@/components/minimal-contact"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <MinimalNav />

      <section id="home" className="min-h-screen">
        <MinimalHero />
      </section>

      <section id="projects" className="min-h-screen">
        <MinimalProjects />
      </section>

      <section id="skills" className="min-h-screen">
        <MinimalSkills />
      </section>

      <section id="contact" className="min-h-screen">
        <MinimalContact />
      </section>
    </main>
  )
}
