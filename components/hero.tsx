"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, MessageCircle, Download } from "lucide-react"
import { NextSectionPrompt } from "@/components/next-section-prompt"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#112D4E] to-[#1a3a5c] dark:from-[#0a1a2e] dark:to-[#1a2332] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#3F72AF]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-[#DBE2EF]/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#3F72AF]/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#DBE2EF]/15 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-in slide-in-from-left duration-1000">
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 animate-in fade-in duration-1000 delay-200">
                Mmerichukwu Anosike
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#3F72AF] font-semibold mb-3 md:mb-4 animate-in slide-in-from-bottom duration-1000 delay-400">
                Known as <span className="text-[#DBE2EF] animate-pulse">Buildwithmc</span>
              </div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-[#DBE2EF] mb-4 md:mb-6 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-600">
                Builder & Organizer | Community Champion | Tech Ecosystem Architect
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed animate-in fade-in duration-1000 delay-800">
                I build and organize businesses, communities, programs, events, projects, partnerships, and marketing
                strategies that drive innovation and growth across Africa's tech ecosystem. From DevRel to operations
                management, I turn vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center lg:justify-start animate-in slide-in-from-bottom duration-1000 delay-1000">
                <Button
                  size="lg"
                  className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white hover:scale-110 transition-all duration-300 hover:rotate-1"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn About Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent hover:scale-110 transition-all duration-300 hover:rotate-1"
                  onClick={() => window.open("https://cv.buildwithmc.com", "_blank")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6 animate-in fade-in duration-1000 delay-1200">
                <a
                  href="https://linkedin.com/in/mmerichukwu-anosike"
                  className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
                </a>
                <a
                  href="https://github.com/Roarnotes"
                  className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 md:h-8 md:w-8" />
                </a>
                <a
                  href="#"
                  className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <Twitter className="h-6 w-6 md:h-8 md:w-8" />
                </a>
                <a
                  href="#"
                  className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000 delay-500">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#3F72AF] to-[#DBE2EF] hover:scale-105 transition-all duration-500 hover:rotate-2">
                  <img
                    src="/images/https://github.com/BuildwithMc/BuildwithMc/Studio-Ghibli-(10).png"
                    alt="Mmerichukwu Anosike - Buildwithmc"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-[#3F72AF] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-[#DBE2EF] rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NextSectionPrompt nextSection="about" message="Want to know more about me?" buttonText="Discover My Story" />
    </section>
  )
}
