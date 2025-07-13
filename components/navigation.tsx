"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Briefcase, Calendar, Users, Mail, Home, Mic, Code, Youtube, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const careerDropdownItems = [
    { href: "/#about", label: "About", icon: User },
    { href: "/career", label: "Career", icon: Briefcase },
    { href: "/projects", label: "Projects", icon: Code },
    { href: "/events", label: "Events", icon: Calendar },
  ]

  const mainNavItems = [
    { href: "/youtube", label: "YouTube", icon: Youtube },
    { href: "/#speaking", label: "Speaking", icon: Mic },
    { href: "/#partners", label: "Partners", icon: Users },
    { href: "/#contact", label: "Contact", icon: Mail },
  ]

  const allNavItems = [{ href: "/", label: "Home", icon: Home }, ...careerDropdownItems, ...mainNavItems]

  const currentRoles = [
    {
      title: "Operations Manager (Branch Lead)",
      company: "CafeOne Enugu (Sterling Bank)",
      period: "Jan 2024 - Present",
    },
    {
      title: "Community Manager",
      company: "3MTT Nigeria",
      period: "Feb 2024 - Present",
    },
    {
      title: "Africa Coordinator",
      company: "PizzaDAO",
      period: "Jan 2025 - Present",
    },
    {
      title: "Chief Operating Officer",
      company: "Switch Electric",
      period: "Sep 2021 - Present",
    },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3F72AF] rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-sm md:text-base">MC</span>
              </div>
              <div className="hidden md:block">
                <div className="text-foreground font-bold text-lg">Buildwithmc</div>
                <div className="text-muted-foreground text-xs">Builder & Organizer</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Career Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCareerDropdownOpen(true)}
                onMouseLeave={() => setIsCareerDropdownOpen(false)}
              >
                <button
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-1 ${
                    careerDropdownItems.some(
                      (item) => pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)),
                    )
                      ? "bg-[#3F72AF] text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-[#3F72AF]/50"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  <span>Career</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-300 ${isCareerDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isCareerDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg animate-in slide-in-from-top-2 duration-200">
                    {careerDropdownItems.map((item) => {
                      const IconComponent = item.icon
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 hover:bg-[#3F72AF]/10 transition-all duration-300 hover:scale-105 first:rounded-t-lg last:rounded-b-lg ${
                            isActive ? "bg-[#3F72AF]/20 text-[#3F72AF]" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <IconComponent className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Other Main Nav Items */}
              {mainNavItems.map((item) => {
                const IconComponent = item.icon
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-1 ${
                      isActive
                        ? "bg-[#3F72AF] text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-[#3F72AF]/50"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Current Role Badge */}
              <div className="bg-[#3F72AF]/20 border border-[#3F72AF] rounded-lg px-3 py-2 hover:scale-105 transition-transform duration-300">
                <div className="text-muted-foreground text-xs">Currently</div>
                <div className="text-foreground text-sm font-semibold">Branch Lead @ CafeOne</div>
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:bg-[#3F72AF]/50 hover:scale-110 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 animate-in fade-in duration-200" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-80 bg-background shadow-xl border-l border-border animate-in slide-in-from-right duration-300">
            <div className="p-6 pt-20">
              {/* Current Roles */}
              <div className="mb-8">
                <h3 className="text-foreground font-semibold mb-4">Current Roles</h3>
                <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3F72AF] scrollbar-track-muted">
                  <div className="space-y-3 pr-2">
                    {currentRoles.map((role, index) => (
                      <div
                        key={index}
                        className="bg-muted rounded-lg p-3 border border-[#3F72AF] hover:scale-105 transition-transform duration-300"
                      >
                        <div className="text-[#3F72AF] font-medium text-sm">{role.title}</div>
                        <div className="text-foreground text-xs">{role.company}</div>
                        <div className="text-muted-foreground text-xs">{role.period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Links - Scrollable */}
              <div className="mb-8">
                <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
                <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[#3F72AF] scrollbar-track-muted">
                  <div className="space-y-2 pr-2">
                    {allNavItems.map((item) => {
                      const IconComponent = item.icon
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                            isActive
                              ? "bg-[#3F72AF] text-white"
                              : "text-muted-foreground hover:text-foreground hover:bg-[#3F72AF]/50"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <IconComponent className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-border">
                <div className="text-muted-foreground text-sm">
                  <div className="mb-2">mc@buildwithmc.com</div>
                  <div>+2348106212763</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
