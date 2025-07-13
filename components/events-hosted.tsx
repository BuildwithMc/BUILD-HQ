import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function EventsHosted() {
  const events = [
    {
      title: "Global PizzaDAO Party 2024",
      brand: "PizzaDAO",
      date: "May 2024",
      location: "Nigeria",
      attendees: "300+",
      description: "Celebrated Bitcoin Pizza Day with the global Web3 community",
      type: "Global Event",
      highlights: ["Bitcoin Pizza Day celebration", "Web3 community gathering", "DAO culture promotion"],
    },
    {
      title: "Naija HackAtom Regional Workshop",
      brand: "Cosmos Hub Africa",
      date: "Dec 2024 - Apr 2025",
      location: "Enugu, Southeastern Nigeria",
      attendees: "150+",
      description: "Technical sessions on Cosmos SDK, IBC, and CosmWasm for developers",
      type: "Technical Workshop",
      highlights: ["Cosmos SDK training", "Developer onboarding", "Hackathon preparation"],
    },
    {
      title: "3MTT Hackathons Series",
      brand: "3MTT Nigeria",
      date: "Feb 2024",
      location: "Enugu, Nigeria",
      attendees: "200+ per event",
      description: "Co-created and organized three hackathons securing multiple first places",
      type: "Hackathon",
      highlights: ["2 regional first places", "1 nationwide first place", "Tech skill development"],
    },
    {
      title: "Archway Developer Workshops",
      brand: "Archway Africa",
      date: "Jan 2024 - Sept 2024",
      location: "Southeastern Nigeria",
      attendees: "250+",
      description: "Developer education and onboarding sessions for Archway blockchain",
      type: "Developer Workshop",
      highlights: ["10+ projects built", "Developer community growth", "Blockchain education"],
    },
    {
      title: "I4G Tech Workshops Series",
      brand: "Ingressive For Good",
      date: "Sep 2022 - Jul 2023",
      location: "Enugu, Nigeria",
      attendees: "800+",
      description: "Multiple tech-based workshops and events for students",
      type: "Educational Workshop",
      highlights: ["70% satisfaction rate", "15+ tech partnerships", "Career development focus"],
    },
    {
      title: "Side Hustle UNN Community Launch",
      brand: "Side Hustle NG",
      date: "Jan 2022 - Oct 2022",
      location: "University of Nigeria, Nsukka",
      attendees: "300-400",
      description: "First official Side Hustle community at UNN with multiple campus events",
      type: "Community Launch",
      highlights: ["First official UNN community", "Career growth focus", "Student engagement"],
    },
  ]

  const allEvents = events

  return (
    <section id="events" className="py-12 md:py-20 bg-[#DBE2EF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">Events I've Hosted</h2>
          <p className="text-base md:text-lg text-[#3F72AF] text-center mb-8 md:mb-16 max-w-3xl mx-auto">
            From hackathons to community meetups, I've organized and hosted numerous events that have brought together
            thousands of developers, students, and Web3 enthusiasts across Nigeria and Africa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="bg-white border-[#3F72AF] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs bg-[#3F72AF] text-white">
                      {event.brand}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-[#112D4E] leading-tight">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-[#3F72AF]">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-[#3F72AF]">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-[#3F72AF]">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attendees
                    </div>
                  </div>

                  <p className="text-[#3F72AF] text-sm mb-4">{event.description}</p>

                  <div>
                    <h5 className="font-semibold text-[#112D4E] text-sm mb-2">Key Highlights:</h5>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-[#3F72AF] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-[#3F72AF]">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link href="/events">
              <Button size="lg" className="bg-[#3F72AF] hover:bg-[#2d5a8f]">
                View All Events ({allEvents.length}+)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
