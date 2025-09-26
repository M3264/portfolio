"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Github, Send, Code, Terminal, Zap } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "miracle32669@gmail.com",
      action: () => window.open("mailto:miracle32669@gmail.com"),
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nigeria",
      action: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/M3264",
    },
    {
      icon: <Send className="w-5 h-5" />,
      label: "Telegram",
      url: "https://t.me/M32669",
    },
  ]

  const techStack = [
    { icon: <Code className="w-4 h-4" />, name: "APIs" },
    { icon: <Terminal className="w-4 h-4" />, name: "Backend" },
    { icon: <Zap className="w-4 h-4" />, name: "Performance" },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let's Build Something
            <span className="text-primary"> Amazing Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Ready to discuss your next project? I'm always excited to work on challenging backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                    item.action ? "hover:bg-muted cursor-pointer" : ""
                  }`}
                  onClick={item.action || undefined}
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Specializing in</p>
              <div className="flex gap-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg text-sm pulse-glow"
                  >
                    <div className="text-primary">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4 mb-6">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start hover:bg-primary/10"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <div className="text-primary mr-3">{link.icon}</div>
                  {link.label}
                </Button>
              ))}
            </div>

            <div className="code-block p-4 rounded-lg mb-6">
              <div className="text-xs text-primary mb-2">// Available for</div>
              <div className="font-mono text-sm">
                <div>const opportunities = [</div>
                <div className="ml-4 text-muted-foreground">'freelance',</div>
                <div className="ml-4 text-muted-foreground">'full-time',</div>
                <div className="ml-4 text-muted-foreground">'consulting'</div>
                <div>];</div>
              </div>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open("mailto:miracle32669@gmail.com?subject=Project Inquiry")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Start a Conversation
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Backend?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need a robust API, database optimization, or a complete backend overhaul.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("mailto:miracle32669@gmail.com?subject=Backend Project Inquiry")}
                className="bg-primary hover:bg-primary/90"
              >
                Discuss Your Project
              </Button>
            </div>
          </Card>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">© 2025 Kenny. Crafted with passion for backend excellence.</p>
        </footer>
      </div>
    </section>
  )
}
