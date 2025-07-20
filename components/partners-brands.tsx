"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Zap, Globe, Briefcase, Code, Mic, Calendar } from "lucide-react"
import Image from "next/image"

const partnerLogos = [
  { name: "3MTT Nigeria", src: "/images/partners/3mtt-nigeria.png", alt: "3MTT Nigeria Logo" },
  { name: "Switch Electric", src: "/images/partners/switch-electric.png", alt: "Switch Electric Logo" },
  { name: "Magnus Media", src: "/images/partners/magnus-media.png", alt: "Magnus Media Logo" },
  { name: "Café One", src: "/images/partners/cafe-one.png", alt: "Café One Logo" },
  { name: "Enugu 3MTT", src: "/images/partners/enugu-3mtt.png", alt: "Enugu 3MTT Logo" },
  { name: "Greenpill Nigeria", src: "/images/partners/greenpill-nigeria.png", alt: "Greenpill Nigeria Logo" },
  { name: "Enugu SME Center", src: "/images/partners/enugu-sme.png", alt: "Enugu SME Center Logo" },
  { name: "PizzaDAO", src: "/images/partners/pizzadao.png", alt: "PizzaDAO Logo" },
]

const techStartups = [
  {
    name: "Switch Electric",
    role: "Chief Operating Officer",
    period: "Sep 2021 - Present",
    description:
      "Leading operations for Nigeria's premier renewable energy startup, managing strategic partnerships and scaling sustainable energy solutions across West Africa.",
    achievements: [
      "Scaled operations from 2 to 15+ team members",
      "Established partnerships with 50+ solar installers",
      "Managed $500K+ in renewable energy projects",
      "Led expansion into 3 new Nigerian states",
    ],
    icon: Zap,
    color: "bg-green-500",
  },
  {
    name: "PizzaDAO",
    role: "Africa Coordinator",
    period: "Jan 2025 - Present",
    description:
      "Coordinating Web3 community initiatives across Africa, fostering blockchain adoption and decentralized governance in emerging markets.",
    achievements: [
      "Launched Africa-focused DAO initiatives",
      "Built network of 200+ Web3 enthusiasts",
      "Organized 5+ blockchain education events",
      "Facilitated $50K+ in community grants",
    ],
    icon: Globe,
    color: "bg-purple-500",
  },
  {
    name: "Greenpill Nigeria",
    role: "Community Lead",
    period: "Mar 2023 - Dec 2024",
    description:
      "Led regenerative finance initiatives in Nigeria, building communities around sustainable blockchain solutions and environmental impact projects.",
    achievements: [
      "Grew community from 0 to 500+ members",
      "Organized 10+ regenerative finance workshops",
      "Facilitated partnerships with 3 environmental NGOs",
      "Launched Nigeria's first ReFi meetup series",
    ],
    icon: Building2,
    color: "bg-emerald-500",
  },
]

const web3Partners = [
  {
    name: "Ethereum Nigeria",
    description: "Core contributor to Nigeria's largest Ethereum community",
    icon: Code,
    color: "bg-blue-500",
  },
  {
    name: "Web3Bridge",
    description: "Mentor and community builder for Africa's leading Web3 education platform",
    icon: Users,
    color: "bg-indigo-500",
  },
  {
    name: "Blockchain Nigeria User Group",
    description: "Active member and event organizer for Nigeria's premier blockchain community",
    icon: Globe,
    color: "bg-cyan-500",
  },
]

const corporatePartners = [
  {
    name: "Sterling Bank (CafeOne)",
    role: "Operations Manager (Branch Lead)",
    description: "Leading digital banking operations and community engagement initiatives",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    name: "3MTT Nigeria",
    role: "Community Manager",
    description: "Managing Nigeria's largest tech talent development program community",
    icon: Users,
    color: "bg-green-600",
  },
  {
    name: "Magnus Media",
    role: "Strategic Advisor",
    description: "Providing strategic guidance for digital marketing and brand development",
    icon: Mic,
    color: "bg-red-500",
  },
]

export function PartnersBrands() {
  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partners & Brands I Work With</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Collaborating with innovative organizations across tech, finance, and Web3 to drive meaningful impact
          </p>
        </div>

        {/* Partner Logos Carousel */}
        <div className="mb-16 overflow-hidden">
          <div className="flex animate-scroll-logos hover:pause-animation">
            {/* First set of logos */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center p-4"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center p-4"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tech Startups */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-[#3F72AF]" />
                Tech Startups I've Worked With
              </CardTitle>
              <CardDescription>Leading operations and growth at innovative technology companies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {techStartups.map((startup, index) => {
                  const IconComponent = startup.icon
                  return (
                    <div
                      key={index}
                      className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-all duration-300 cursor-pointer hover:scale-105"
                      onClick={() => {
                        // Create modal content
                        const modal = document.createElement("div")
                        modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                        modal.innerHTML = `
                          <div class="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <div class="flex items-center justify-between mb-4">
                              <h3 class="text-2xl font-bold text-foreground">${startup.name}</h3>
                              <button class="text-muted-foreground hover:text-foreground" onclick="this.closest('.fixed').remove()">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                              </button>
                            </div>
                            <div class="mb-4">
                              <div class="text-[#3F72AF] font-semibold">${startup.role}</div>
                              <div class="text-muted-foreground text-sm">${startup.period}</div>
                            </div>
                            <p class="text-muted-foreground mb-6">${startup.description}</p>
                            <div>
                              <h4 class="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                              <ul class="space-y-2">
                                ${startup.achievements
                                  .map(
                                    (achievement) => `
                                  <li class="flex items-start gap-2 text-muted-foreground">
                                    <svg class="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                    ${achievement}
                                  </li>
                                `,
                                  )
                                  .join("")}
                              </ul>
                            </div>
                          </div>
                        `
                        document.body.appendChild(modal)
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${startup.color} p-2 rounded-lg`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{startup.name}</h3>
                          <p className="text-[#3F72AF] text-sm font-medium">{startup.role}</p>
                          <p className="text-muted-foreground text-sm">{startup.period}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Corporate Partners */}
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-[#3F72AF]" />
                Corporate Partners
              </CardTitle>
              <CardDescription>Strategic partnerships with established organizations and institutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {corporatePartners.map((partner, index) => {
                  const IconComponent = partner.icon
                  return (
                    <div
                      key={index}
                      className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`${partner.color} p-2 rounded-lg`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{partner.name}</h3>
                          <p className="text-[#3F72AF] text-sm font-medium">{partner.role}</p>
                          <p className="text-muted-foreground text-sm mt-1">{partner.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Web3 & Blockchain Partners */}
        <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-[#3F72AF]" />
              Web3 & Blockchain Partners
            </CardTitle>
            <CardDescription>Active contributor to Africa's growing Web3 and blockchain ecosystem</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {web3Partners.map((partner, index) => {
                const IconComponent = partner.icon
                return (
                  <div
                    key={index}
                    className="text-center p-6 border border-border rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`${partner.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                    <p className="text-muted-foreground text-sm">{partner.description}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in partnering with me? Let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-[#3F72AF] hover:text-white transition-colors duration-300"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Available for Consulting
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-[#3F72AF] hover:text-white transition-colors duration-300"
            >
              <Users className="h-4 w-4 mr-2" />
              Open to Partnerships
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-[#3F72AF] hover:text-white transition-colors duration-300"
            >
              <Mic className="h-4 w-4 mr-2" />
              Speaking Opportunities
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
