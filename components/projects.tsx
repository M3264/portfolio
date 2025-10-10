"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Globe, Server, Database, Zap, Code } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Kord-AI",
      description:
        "AI-powered platform with comprehensive ecosystem including web interface, APIs, plugins, and CDN infrastructure.",
      tech: ["AI/ML", "Microservices", "CDN", "APIs"],
      links: {
        web: "https://kord-ai.web.id",
        github: "https://github.com/M3264/Kord-AI",
        api: "https://api.kordai.web.id",
        plugins: "https://plugins.kord-ai.web.id",
        cdn: "https://cdn.kordai.web.id",
      },
      featured: true,
    },
    {
      title: "FilmBase",
      description: "Download movies and tv series with ease.",
      tech: ["Streaming", "Movies", "Series"],
      links: {
        web: "https://filmbase.fun",
      },
    },
    {
      title: "NexDL",
      description: "High-performance download service with optimized backend for file processing.",
      tech: ["File Processing", "Performance", "APIs"],
      links: {
        web: "https://nex-dl.vercel.app",
      },
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Backend systems and applications demonstrating scalable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.links.web && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.links.web, "_blank")}
                      className="hover:bg-primary/10"
                    >
                      <Globe className="w-4 h-4" />
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.links.github, "_blank")}
                      className="hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.featured && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                    <Server className="w-4 h-4" />
                    Ecosystem Services
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.web, "_blank")}
                      className="justify-start text-xs"
                    >
                      <Globe className="w-3 h-3 mr-2" />
                      Main Platform
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.github, "_blank")}
                      className="justify-start text-xs"
                    >
                      <Github className="w-3 h-3 mr-2" />
                      Source Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.api, "_blank")}
                      className="justify-start text-xs"
                    >
                      <Code className="w-3 h-3 mr-2" />
                      API Service
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.plugins, "_blank")}
                      className="justify-start text-xs"
                    >
                      <Zap className="w-3 h-3 mr-2" />
                      Plugins Hub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.cdn, "_blank")}
                      className="justify-start text-xs md:col-span-2"
                    >
                      <Database className="w-3 h-3 mr-2" />
                      CDN Infrastructure
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Constantly working on new projects and exploring cutting-edge technologies.
            </p>
            <Button variant="outline" onClick={() => window.open("https://github.com/M3264", "_blank")}>
              <Github className="w-4 h-4 mr-2" />
              View GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
