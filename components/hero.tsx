"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail, MapPin } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Backend Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(112,192,232,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(112,192,232,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Terminal-style header */}
        <div className="inline-block mb-8 p-4 bg-card border border-border rounded-lg glow-animation">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="font-mono text-sm text-left">
            <span className="text-primary">$</span> whoami
            <br />
            <span className="text-muted-foreground">kenny@dev:~$</span>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-balance">
            Kenny
            <br />
            <span className="text-2xl md:text-3xl text-muted-foreground font-normal">Mirage</span>
          </h1>

          <div className="text-2xl md:text-3xl font-mono text-primary min-h-[2em] flex items-center justify-center">
            {text}
            <span className="animate-pulse ml-1">|</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Building scalable backend systems and APIs that power modern applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nigeria
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              miracle32669@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Available for projects
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open("tel:+2349067339193")} className="px-8">
              +234 906 733 9193
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
