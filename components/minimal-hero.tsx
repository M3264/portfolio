"use client"

import { useState, useEffect } from "react"
import { Github, Send, Mail } from "lucide-react"

export function MinimalHero() {
  const [text, setText] = useState("")
  const fullText = "Crafting robust backend systems that power modern applications."

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen px-6">
      <div className="text-center max-w-4xl">
        {/* Terminal Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-24 h-16 border-2 border-gray-600 rounded-lg bg-black/50 backdrop-blur-sm">
              <div className="flex items-center justify-between p-2 border-b border-gray-600">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="p-2 font-mono text-xs text-green-400">
                <div className="flex items-center">
                  <span className="text-gray-500">$</span>
                  <span className="ml-1 animate-pulse">_</span>
                </div>
              </div>
            </div>
            {/* Corner brackets */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gray-600"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-gray-600"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-gray-600"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gray-600"></div>
          </div>
        </div>

        {/* Name */}
        <h1 className="font-mono text-6xl md:text-8xl font-bold mb-2 tracking-wider">KENNY</h1>

        {/* Subtitle */}
        <p className="font-mono text-lg md:text-xl text-gray-400 mb-8 tracking-widest">MIRAGE</p>

        {/* Role */}
        <p className="font-mono text-sm md:text-base text-gray-500 mb-12 tracking-wider">BACKEND DEVELOPER</p>

        {/* Typewriter Description */}
        <div className="mb-16 h-8">
          <p className="font-mono text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {text}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 border border-gray-600 font-mono text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            RESUME
          </button>
          <button className="px-8 py-3 bg-white text-black font-mono text-sm tracking-wider hover:bg-gray-200 transition-all duration-300">
            CONTACT
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/M3264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://t.me/M32669"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Send size={20} />
          </a>
          <a href="mailto:miracle32669@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
