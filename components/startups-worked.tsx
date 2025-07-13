"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react"

export function StartupsWorked() {
  const [selectedStartup, setSelectedStartup] = useState<number | null>(null)

  const startups = [
    {
      name: "Switch Electric",
      role: "Chief Operating Officer",
      period: "Sep 2021 - Present",
      location: "Nigeria",
      industry: "Renewable Energy",
      description: "Pay-as-you-go solar solutions for underdeveloped regions",
      achievements: [
        "Strategic planning and execution of solar solutions project",
        "Cross-functional team orchestration",
        "Operational procedures and quality control implementation",
        "Market research and feasibility studies for expansion",
      ],
      stage: "Growth Stage",
      detailedDescription:
        "Switch Electric is a pioneering renewable energy company focused on providing sustainable solar solutions to underserved communities across Nigeria and other developing countries. As Chief Operating Officer, I spearhead the strategic planning and execution of our pay-as-you-go solar solutions project, which aims to bring reliable electricity to regions that have historically lacked access to consistent power supply.",
      keyResponsibilities: [
        "Lead strategic planning initiatives for solar solution deployment across multiple regions",
        "Orchestrate cross-functional teams including engineering, sales, marketing, and customer service",
        "Implement robust operational procedures and quality control measures to ensure high-quality service delivery",
        "Conduct comprehensive market research and feasibility studies to identify expansion opportunities",
        "Negotiate with suppliers and partners to optimize project budgets and financial performance",
        "Oversee the development and implementation of customer acquisition and retention strategies",
      ],
      impact:
        "Under my leadership, Switch Electric has successfully deployed solar solutions to over 500 households, providing reliable electricity access to previously underserved communities. The company has achieved a 95% customer satisfaction rate and expanded operations to 3 additional states.",
    },
    {
      name: "CafeOne Enugu (Sterling Bank)",
      role: "Operations Manager (Branch Lead)",
      period: "Jan 2024 – Present",
      location: "Enugu, Nigeria",
      industry: "Fintech/Banking",
      description: "Banking and co-working space hybrid serving the tech community",
      achievements: [
        "Achieved over ₦34 million in revenue within first 6 months",
        "Managed multifunctional team of 10+ members",
        "Grew asset book by ₦200 million quarterly",
        "Generated ₦100,000+ monthly advertisement revenue",
      ],
      stage: "Established",
      detailedDescription:
        "CafeOne Enugu represents an innovative fusion of traditional banking services with modern co-working space amenities, specifically designed to serve Nigeria's growing tech community. As Operations Manager and Branch Lead, I oversee all aspects of this unique hybrid business model, managing both banking operations and co-working space services.",
      keyResponsibilities: [
        "Manage a multifunctional team of 10+ including baristas, customer experience personnel, and support staff",
        "Drive revenue generation through strategic pricing, upselling, and subscription optimization",
        "Oversee banking KPIs including account opening, funding targets, and asset/liability growth",
        "Implement customer experience strategies to maintain high satisfaction standards",
        "Coordinate marketing and advertising initiatives to maximize space utilization",
        "Ensure compliance with banking regulations while maintaining co-working space operations",
      ],
      impact:
        "Successfully achieved over ₦34 million in revenue within the first 6 months of operation, while growing the asset book by ₦200 million and liabilities by ₦400 million quarterly. The branch has become a hub for Enugu's tech community, hosting numerous events and fostering innovation.",
    },
    {
      name: "RETHINK TECH LTD",
      role: "Technical Project Manager",
      period: "Apr 2022 - Jun 2023",
      location: "Nigeria",
      industry: "Blockchain/Web3",
      description: "Blockchain solutions and decentralized applications development",
      achievements: [
        "Championed Pactner platform development for organizational collaborations",
        "Directed Identify DAO automated identification system creation",
        "Oversaw Culture Refi regenerative finance ecosystem development",
        "Led iSwear legal services platform development",
      ],
      stage: "Early Stage",
      detailedDescription:
        "RETHINK TECH LTD is a forward-thinking blockchain development company focused on creating innovative decentralized solutions that address real-world problems. As Technical Project Manager, I led the development of multiple groundbreaking platforms that leverage blockchain technology to improve various sectors including collaboration, identity management, finance, and legal services.",
      keyResponsibilities: [
        "Champion the development of Pactner, a revolutionary platform for organizational collaborations",
        "Direct the creation of Identify DAO, an automated identification system using blockchain technology",
        "Oversee Culture Refi development, a comprehensive regenerative finance ecosystem featuring DAO, DeFi, and NFTs",
        "Lead iSwear development, an integrated legal services platform bridging judiciary and public sectors",
        "Coordinate with development teams to ensure timely delivery of complex blockchain solutions",
        "Manage stakeholder relationships and communicate project progress to investors and partners",
      ],
      impact:
        "Successfully delivered 4 major blockchain platforms, each addressing unique market needs. The projects collectively attracted over $500K in funding and established RETHINK TECH as a leading blockchain development company in Nigeria.",
    },
    {
      name: "Achieve Digital Agency",
      role: "Technical Project Manager",
      period: "Nov 2021 - Present",
      location: "Nigeria",
      industry: "Digital Marketing/Web Development",
      description: "Full-service digital agency providing web development and marketing solutions",
      achievements: [
        "Led development of Samandcart.com e-commerce platform",
        "Oversaw web development, SEO, and content creation teams",
        "Created CGPA calculation application for University of Nigeria",
        "Implemented project management strategies for timely delivery",
      ],
      stage: "Growth Stage",
      detailedDescription:
        "Achieve Digital Agency is a comprehensive digital solutions provider specializing in web development, digital marketing, SEO, and content creation. As Technical Project Manager, I oversee diverse teams and manage complex digital projects that help businesses establish and grow their online presence.",
      keyResponsibilities: [
        "Lead the development of Samandcart.com, a state-of-the-art e-commerce platform for Eastern Nigeria",
        "Oversee operations of web development, digital marketing, SEO, and content creation teams",
        "Implement effective project management strategies ensuring timely delivery while maintaining quality",
        "Develop custom applications including CGPA calculation tools for educational institutions",
        "Conduct regular team meetings and performance evaluations to optimize productivity",
        "Manage client relationships and ensure project requirements are met or exceeded",
      ],
      impact:
        "Under my management, the agency has successfully delivered over 50 digital projects, including e-commerce platforms, corporate websites, and custom applications. Client satisfaction rate has consistently remained above 90%, leading to significant business growth and expansion.",
    },
  ]

  const openStartupModal = (index: number) => {
    setSelectedStartup(index)
  }

  const closeModal = () => {
    setSelectedStartup(null)
  }

  const navigateStartup = (direction: "next" | "prev") => {
    if (selectedStartup === null) return

    let newIndex
    if (direction === "next") {
      newIndex = selectedStartup === startups.length - 1 ? 0 : selectedStartup + 1
    } else {
      newIndex = selectedStartup === 0 ? startups.length - 1 : selectedStartup - 1
    }
    setSelectedStartup(newIndex)
  }

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Seed Stage":
        return "bg-yellow-100 text-yellow-800"
      case "Early Stage":
        return "bg-orange-100 text-orange-800"
      case "Growth Stage":
        return "bg-emerald-100 text-emerald-800"
      case "Established":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const selectedStartupData = selectedStartup !== null ? startups[selectedStartup] : null

  return (
    <section id="startups" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Tech Startups I've Worked With</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Throughout my career, I've contributed to the growth and success of various tech startups across different
            industries, from renewable energy to blockchain and fintech.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {startups.map((startup, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 bg-[#DBE2EF] border-[#3F72AF] cursor-pointer hover:scale-105"
                onClick={() => openStartupModal(index)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-2">
                      <Building className="h-5 w-5 text-[#3F72AF]" />
                      <CardTitle className="text-xl text-gray-900">{startup.name}</CardTitle>
                    </div>
                    <Badge className={getStageColor(startup.stage)}>{startup.stage}</Badge>
                  </div>

                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-[#3F72AF]">{startup.role}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {startup.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {startup.location}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {startup.industry}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{startup.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Contributions:</h5>
                    <ul className="space-y-2">
                      {startup.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                  >
                    View Full Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedStartup !== null && selectedStartupData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Building className="h-8 w-8 mr-3 text-[#3F72AF]" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedStartupData.name}</h3>
                  <p className="text-[#3F72AF] font-semibold">{selectedStartupData.role}</p>
                  <p className="text-sm text-gray-600">
                    {selectedStartupData.period} • {selectedStartupData.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateStartup("prev")}
                  className="text-[#3F72AF] hover:text-[#2d5a8f]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-gray-500">
                  {selectedStartup + 1} of {startups.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateStartup("next")}
                  className="text-[#3F72AF] hover:text-[#2d5a8f]"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className={getStageColor(selectedStartupData.stage)}>{selectedStartupData.stage}</Badge>
                  <Badge variant="outline">{selectedStartupData.industry}</Badge>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">About the Company</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedStartupData.detailedDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {selectedStartupData.keyResponsibilities.map((responsibility, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact & Results</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedStartupData.impact}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedStartupData.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
