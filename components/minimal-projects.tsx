"use client"

import { ExternalLink, Github } from "lucide-react"

export function MinimalProjects() {
  const projects = [
    {
      name: "KORD-AI",
      description: "AI-powered ecosystem with multiple services",
      web: "https://kord-ai.web.id",
      repo: "https://github.com/M3264/Kord-Ai",
      subdomains: [
        { name: "API", url: "https://api.kordai.web.id" },
        { name: "PLUGINS", url: "https://plugins.kord-ai.web.id" },
        { name: "CDN", url: "https://cdn.kordai.web.id" },
        { name: "MOVIES", url: "https://movies.kord-ai.web.id" },
      ],
    },
    {
      name: "NEXDL",
      description: "Download service platform",
      web: "https://nex-dl.vercel.app",
      repo: null,
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-16 tracking-wider">PROJECTS</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-800 p-8 bg-black/50 backdrop-blur-sm">
              <h3 className="font-mono text-2xl font-bold mb-4 tracking-wider">{project.name}</h3>
              <p className="font-mono text-gray-400 mb-6">{project.description}</p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-600 font-mono text-sm hover:bg-white hover:text-black transition-all"
                >
                  <ExternalLink size={16} />
                  LIVE
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 font-mono text-sm hover:bg-white hover:text-black transition-all"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                )}
              </div>

              {project.subdomains && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {project.subdomains.map((subdomain, subIndex) => (
                    <a
                      key={subIndex}
                      href={subdomain.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gray-900 font-mono text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {subdomain.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
