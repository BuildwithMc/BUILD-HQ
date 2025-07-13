"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

interface NextSectionPromptProps {
  nextSection: string
  message: string
  buttonText: string
}

export function NextSectionPrompt({ nextSection, message, buttonText }: NextSectionPromptProps) {
  const scrollToSection = () => {
    const element = document.getElementById(nextSection)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
      <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#3F72AF]/20 hover:scale-110 transition-all duration-300">
        <p className="text-[#3F72AF] text-sm font-medium mb-2 flex items-center justify-center">
          <Sparkles className="h-4 w-4 mr-2 animate-spin" />
          {message}
        </p>
        <Button
          size="sm"
          onClick={scrollToSection}
          className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white hover:scale-105 transition-all duration-300"
        >
          {buttonText}
          <ArrowDown className="h-4 w-4 ml-2 animate-bounce" />
        </Button>
      </div>
    </div>
  )
}
