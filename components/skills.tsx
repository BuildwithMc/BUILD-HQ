import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Briefcase, Megaphone, Calendar, Handshake, HeadphonesIcon, Target } from "lucide-react"

export function Skills() {
  const coreSkills = [
    { icon: Users, title: "Developer Relations", description: "Building and nurturing developer communities" },
    { icon: Users, title: "Community Management", description: "Growing engaged tech communities" },
    { icon: Briefcase, title: "Business Development", description: "Strategic partnerships and growth" },
    { icon: Target, title: "Project Management", description: "Leading cross-functional teams" },
    { icon: Megaphone, title: "Brand Awareness", description: "Amplifying brand visibility" },
    { icon: Calendar, title: "Event Planning", description: "Organizing impactful tech events" },
    { icon: HeadphonesIcon, title: "Customer Support", description: "Providing exceptional user experience" },
    { icon: Handshake, title: "Strategic Partnerships", description: "Building meaningful collaborations" },
  ]

  const techStack = [
    "Solidity",
    "Rust",
    "React",
    "JavaScript",
    "Web3",
    "Blockchain",
    "Cosmos SDK",
    "CosmWasm",
    "IBC",
    "Smart Contracts",
  ]

  const certifications = [
    "Google Certified Digital Marketer",
    "ReactHQ Certified Project Manager (CPM)",
    "NFT Certified Investor and Creator",
    "Business Management Trainee",
    "Entrepreneurship and Employability",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Skills & Expertise</h2>

          {/* Core Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Core Competencies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreSkills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Development Stack</h3>
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3 justify-center">
                  {techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-2 px-4 bg-emerald-100 text-emerald-800"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certifications</h3>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
