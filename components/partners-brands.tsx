"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, Globe, Users, Zap } from "lucide-react"

export function PartnersBrands() {
  const partnerLogos = [
    { name: "3MTT Nigeria", logo: "/images/partners/3mtt-nigeria.png" },
    { name: "Switch Electric", logo: "/images/partners/switch-electric.png" },
    { name: "Magnus Media", logo: "/images/partners/magnus-media.png" },
    { name: "Café One", logo: "/images/partners/cafe-one.png" },
    { name: "Enugu 3MTT", logo: "/images/partners/enugu-3mtt.png" },
    { name: "Greenpill Nigeria", logo: "/images/partners/greenpill-nigeria.png" },
    { name: "Enugu SME Center", logo: "/images/partners/enugu-sme.png" },
    { name: "PizzaDAO", logo: "/images/partners/pizzadao.png" },
  ]

  const partnerCategories = [
    {
      title: "Web3 & Blockchain Partners",
      icon: Zap,
      description: "Leading blockchain protocols and Web3 organizations",
      partners: [
        "Cosmos Hub Africa",
        "Secret Network",
        "Archway Protocol",
        "PizzaDAO",
        "Atom Accelerator DAO (AADAO)",
        "Stashh NFT Marketplace",
        "Alter Network",
      ],
    },
    {
      title: "Tech Communities & Organizations",
      icon: Users,
      description: "Developer communities and tech education platforms",
      partners: [
        "Ingressive For Good",
        "3MTT Nigeria",
        "Side Hustle NG",
        "Onboard Global",
        "AIESEC in Nigeria",
        "Techniverse.org",
        "Hult Prize Foundation",
      ],
    },
    {
      title: "Corporate & Financial Partners",
      icon: Globe,
      description: "Established companies and financial institutions",
      partners: [
        "Sterling Bank",
        "CafeOne",
        "Switch Electric",
        "Magnus Media Ltd",
        "Achieve Digital Agency",
        "VOLTAN ENERGY",
        "Calm Minds Tutorials",
      ],
    },
    {
      title: "Strategic Collaborations",
      icon: Handshake,
      description: "Key partnerships and collaborative initiatives",
      partners: [
        "University of Nigeria Nsukka",
        "RETHINK TECH LTD",
        "Local Developer Communities",
        "Student Blockchain Clubs",
        "Tech Hubs Southeastern Nigeria",
        "Web3 Lagos",
      ],
    },
  ]

  return (
    <section id="partners" className="py-12 md:py-20 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#112D4E] mb-4">Partners & Brands</h2>
          <p className="text-base md:text-lg text-center text-[#3F72AF] mb-12 md:mb-16 max-w-3xl mx-auto">
            I've had the privilege of partnering with leading organizations across Web3, tech communities, and corporate
            sectors to drive innovation and community growth.
          </p>

          {/* Partner Logos Carousel */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-[#112D4E] mb-6 md:mb-8">
              Trusted Partners
            </h3>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8 md:space-x-12">
                {/* First set of logos */}
                {partnerLogos.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-3 md:p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partnerLogos.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-lg shadow-md flex items-center justify-center p-3 md:p-4 hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {partnerCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="bg-white border-[#3F72AF] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-[#3F72AF]" />
                      <CardTitle className="text-lg md:text-xl text-[#112D4E]">{category.title}</CardTitle>
                    </div>
                    <p className="text-[#3F72AF]">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.partners.map((partner, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs md:text-sm py-1 px-2 md:px-3 hover:bg-[#DBE2EF] hover:border-[#3F72AF] text-[#112D4E] transition-colors"
                        >
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Partnership Stats */}
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            <Card className="text-center bg-white border-[#3F72AF]">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-[#3F72AF] mb-2">20+</div>
                <div className="text-xs md:text-sm text-[#3F72AF]">Partnership Deals Secured</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-[#3F72AF]">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-[#3F72AF] mb-2">15+</div>
                <div className="text-xs md:text-sm text-[#3F72AF]">Tech Companies Partnered</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-[#3F72AF]">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-[#3F72AF] mb-2">53</div>
                <div className="text-xs md:text-sm text-[#3F72AF]">Cities Coordinated</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-white border-[#3F72AF]">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl md:text-3xl font-bold text-[#3F72AF] mb-2">7+</div>
                <div className="text-xs md:text-sm text-[#3F72AF]">Blockchain Protocols</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
