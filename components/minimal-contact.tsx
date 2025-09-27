"use client"

import { Github, Send, Mail, MapPin } from "lucide-react"

export function MinimalContact() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-16 tracking-wider">CONTACT</h2>

        <div className="space-y-8">
          <div className="flex items-center justify-center gap-4 p-6 border border-gray-800 bg-black/50 backdrop-blur-sm">
            <Mail size={20} className="text-gray-400" />
            <a
              href="mailto:miracle32669@gmail.com"
              className="font-mono text-lg text-gray-300 hover:text-white transition-colors"
            >
              miracle32669@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 p-6 border border-gray-800 bg-black/50 backdrop-blur-sm">
            <MapPin size={20} className="text-gray-400" />
            <span className="font-mono text-lg text-gray-300">Nigeria</span>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <a
              href="https://github.com/M3264"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 font-mono text-sm hover:bg-white hover:text-black transition-all"
            >
              <Github size={20} />
              GITHUB
            </a>
            <a
              href="https://t.me/M32669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 font-mono text-sm hover:bg-white hover:text-black transition-all"
            >
              <Send size={20} />
              TELEGRAM
            </a>
          </div>
        </div>

        <div className="mt-16 p-8 border border-gray-800 bg-black/50 backdrop-blur-sm">
          <p className="font-mono text-gray-400 mb-4">Available for backend development projects</p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-mono text-sm text-green-400">OPEN TO WORK</span>
          </div>
        </div>
      </div>
    </div>
  )
}
