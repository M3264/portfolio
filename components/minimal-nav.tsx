"use client"

import { useState, useEffect } from "react"

export function MinimalNav() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
          >
            KENNY
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "home" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "skills" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "projects" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "contact" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  )
}
