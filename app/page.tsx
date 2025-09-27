"use client"

import { MinimalHero } from "@/components/minimal-hero"
import { MinimalNav } from "@/components/minimal-nav"
import { MinimalProjects } from "@/components/minimal-projects"
import { MinimalSkills } from "@/components/minimal-skills"
import { MinimalContact } from "@/components/minimal-contact"
import { useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "projects":
        return <MinimalProjects />
      case "skills":
        return <MinimalSkills />
      case "contact":
        return <MinimalContact />
      default:
        return <MinimalHero />
    }
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <MinimalNav activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </main>
  )
}
