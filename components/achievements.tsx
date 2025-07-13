import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Users, Target, Award } from "lucide-react"

export function Achievements() {
  const stats = [
    {
      icon: Users,
      number: "800+",
      label: "Event Attendees",
      description: "Across multiple tech workshops and conferences",
    },
    {
      icon: Target,
      number: "150+",
      label: "Developers Mobilized",
      description: "For hackathons and Web3 initiatives",
    },
    {
      icon: Award,
      number: "15+",
      label: "Tech Partnerships",
      description: "Secured with companies and communities",
    },
    {
      icon: Trophy,
      number: "53",
      label: "African Cities",
      description: "Coordinated PizzaDAO events across Africa",
    },
  ]

  const highlights = [
    {
      title: "Global PizzaDAO Party Success",
      description:
        "Successfully organized the Global PizzaDAO Party in May 2024, attracting over 300 attendees to celebrate Bitcoin Pizza Day.",
      impact: "300+ attendees",
    },
    {
      title: "Hackathon Championship",
      description:
        "Co-created and organized three hackathons in Enugu, leading the local community to secure first place in two regional and one nationwide competition.",
      impact: "3 first-place wins",
    },
    {
      title: "Community Growth Leadership",
      description:
        "Consistently achieved 30-60% increases in community participation across multiple organizations and initiatives.",
      impact: "30-60% growth",
    },
    {
      title: "Regional Developer Onboarding",
      description:
        "Successfully onboarded hundreds of developers into Web3 ecosystems including Secret Network, Archway, and Cosmos.",
      impact: "Hundreds onboarded",
    },
  ]

  return (
    <section id="achievements" className="py-12 md:py-20 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Achievements & Impact</h2>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border-[#3F72AF]">
                  <CardContent className="p-6">
                    <IconComponent className="h-12 w-12 text-[#3F72AF] mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-[#3F72AF]">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{highlight.description}</p>
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 text-[#3F72AF] mr-2" />
                      <span className="font-semibold text-[#3F72AF]">{highlight.impact}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
