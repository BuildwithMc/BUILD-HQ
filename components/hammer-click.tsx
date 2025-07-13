"use client"

import type React from "react"

import { useState } from "react"
import { Hammer } from "lucide-react"

interface HammerClickProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function HammerClick({ children, onClick, className = "" }: HammerClickProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 600)
    if (onClick) onClick()
  }

  return (
    <div className={`relative cursor-pointer ${className}`} onClick={handleClick}>
      {children}

      {/* Hammer Animation */}
      {isClicked && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <Hammer className="h-8 w-8 text-[#3F72AF] animate-bounce" />
          <div className="absolute inset-0 bg-[#3F72AF]/20 rounded-lg animate-ping"></div>
        </div>
      )}
    </div>
  )
}
