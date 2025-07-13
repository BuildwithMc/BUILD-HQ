import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Developer Relations Advocate",
      company: "Cosmos Hub Africa | Naija HackAtom",
      period: "Dec 2024 – April 2025",
      location: "Southeastern Nigeria",
      description:
        "Leading developer relations and community engagement efforts for Naija HackAtom, supported by the Atom Accelerator DAO (AADAO).",
      achievements: [
        "Mobilized over 150 developers, students, and Web3 enthusiasts",
        "Hosted regional IRL workshop in Enugu on Cosmos SDK, IBC, and CosmWasm",
        "Facilitated multiple hackathon submissions from Southeastern Nigeria",
        "Conducted technical onboarding sessions and mentor hours",
      ],
      tags: ["Cosmos", "Developer Relations", "Community Building", "Hackathons"],
    },
    {
      title: "Africa Co-ordinator",
      company: "PizzaDAO",
      period: "January 2025",
      location: "Africa",
      description:
        "Leading operational and strategic execution of PizzaDAO's global May 22 celebration across 53 cities in Africa.",
      achievements: [
        "Directed planning and execution across 53 African cities",
        "Secured 20+ partnership deals with communities and Web3 organizations",
        "Conducted info sessions and onboarding tutorials",
        "Supervised publicity strategy and community marketing",
      ],
      tags: ["DAO", "Event Management", "Partnerships", "Community"],
    },
    {
      title: "Developer Relations Advocate",
      company: "Secret Network Africa",
      period: "May 2022 – Nov 2024",
      location: "Southeastern Nigeria",
      description:
        "Championed privacy-preserving technologies and developer tools, driving adoption through regional outreach and technical advocacy.",
      achievements: [
        "Evangelized Secret Network at conferences and university bootcamps",
        "Led developer outreach campaigns and university recruitment",
        "Managed Secret Agents program with 40% growth in participation",
        "Facilitated onboarding for Stashh NFT Marketplace and Alter Network",
      ],
      tags: ["Privacy Tech", "Developer Advocacy", "Community Growth"],
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Recent Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-[#DBE2EF] border-[#3F72AF]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">{exp.title}</CardTitle>
                      <h4 className="text-lg font-semibold text-[#3F72AF] mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
