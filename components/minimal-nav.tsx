"use client"

interface MinimalNavProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function MinimalNav({ activeSection, setActiveSection }: MinimalNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <button
            onClick={() => setActiveSection("home")}
            className="font-mono text-sm text-gray-400 hover:text-white transition-colors"
          >
            KENNY
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => setActiveSection("home")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "home" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "skills" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            SKILLS
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={`font-mono text-sm transition-colors ${
              activeSection === "projects" ? "text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => setActiveSection("contact")}
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
