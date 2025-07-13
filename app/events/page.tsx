"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, ExternalLink, ImageIcon, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommunityCTA } from "@/components/community-cta"

const allEvents = [
  {
    id: 1,
    title: "Global Pizza Party Enugu 2025",
    brand: "PizzaDAO",
    date: "May 22, 2025",
    location: "Enugu, Nigeria",
    type: "Global Event",
    status: "COMPLETED",
    attendees: "300+",
    description: "Celebrated Bitcoin Pizza Day with the global Web3 community in Enugu",
    registrationLink: "https://bit.ly/EnuguPizzaParty2025",
    picturesLink: "https://drive.google.com/drive/folders/1tyNY55NqtnDjtE6M-onVTmsof5T-mF0X?usp=drive_link",
    highlights: ["Bitcoin Pizza Day celebration", "Web3 community gathering", "DAO culture promotion"],
    category: "Web3 & Blockchain",
  },
  {
    id: 2,
    title: "ENUGU TECH FEST 2025",
    brand: "ETF",
    date: "May 7, 2025",
    location: "Enugu, Nigeria",
    type: "Tech Festival",
    status: "COMPLETED",
    attendees: "500+",
    description: "Major tech festival bringing together developers, entrepreneurs, and tech enthusiasts",
    registrationLink: "#",
    picturesLink: "#",
    highlights: ["Tech innovation showcase", "Networking opportunities", "Startup pitches"],
    category: "Tech Community",
  },
  {
    id: 3,
    title: "STELLAR DEV AND GAMES FEST 2025",
    brand: "STELLAR",
    date: "January 25, 2025",
    location: "Enugu, Nigeria",
    type: "Developer Workshop",
    status: "COMPLETED",
    attendees: "150+",
    description: "Developer-focused event showcasing Stellar blockchain and gaming applications",
    registrationLink: "https://lu.ma/yhz50nz6",
    picturesLink: "https://mega.nz/folder/JGMmgTCK#kASK25Qm5jCZv3YYhBGiHA",
    highlights: ["Stellar blockchain education", "Gaming development", "Developer networking"],
    category: "Web3 & Blockchain",
  },
  {
    id: 4,
    title: "Cosmos Hub - Accelerate Nigeria. Naija HackAtom Enugu 2025",
    brand: "COSMOS HUB AFRICA",
    date: "February 1, 2025",
    location: "Enugu, Nigeria",
    type: "Hackathon",
    status: "COMPLETED",
    attendees: "200+",
    description: "Regional hackathon focused on Cosmos ecosystem development and innovation",
    registrationLink: "https://lu.ma/event/manage/evt-OHHXA9LnOYHh7p3/overview",
    picturesLink: "https://mega.nz/folder/RelzmSyZ#tEn2MD4rIliT3alAZa5wuw",
    highlights: ["Cosmos SDK training", "Hackathon competition", "Developer onboarding"],
    category: "Web3 & Blockchain",
  },
  {
    id: 5,
    title: "3MTT ENUGU IMPACT SUMMIT 2025",
    brand: "3MTT",
    date: "March 15, 2025",
    location: "Enugu, Nigeria",
    type: "Summit",
    status: "COMPLETED",
    attendees: "400+",
    description: "Impact-focused summit showcasing tech solutions for social good",
    registrationLink: "#",
    picturesLink: "#",
    highlights: ["Social impact tech", "Community development", "Skills training"],
    category: "Tech Community",
  },
  {
    id: 6,
    title: "ONBOARD CITY CLUB EVENT 2024",
    brand: "ONBOARD",
    date: "December 2024",
    location: "Enugu, Nigeria",
    type: "Community Meetup",
    status: "COMPLETED",
    attendees: "100+",
    description: "Local community event connecting dreamers with onchain opportunities",
    registrationLink: "#",
    picturesLink: "#",
    highlights: ["Onchain opportunities", "Community building", "Web3 adoption"],
    category: "Web3 & Blockchain",
  },
  {
    id: 7,
    title: "SWITCH 5TH ANNIVERSARY 2024",
    brand: "SWITCH",
    date: "November 2024",
    location: "Enugu, Nigeria",
    type: "Anniversary Event",
    status: "COMPLETED",
    attendees: "200+",
    description: "Celebrating 5 years of Switch Electric's impact in renewable energy",
    registrationLink: "#",
    picturesLink: "https://discord.com/channels/1072430564726030346/1297257666279899357",
    highlights: ["Company milestone", "Renewable energy focus", "Community celebration"],
    category: "Corporate",
  },
  {
    id: 8,
    title: "Pizza Jolly at Web3Lagos 2024",
    brand: "PizzaDAO",
    date: "August 2024",
    location: "Lagos, Nigeria",
    type: "Side Event",
    status: "COMPLETED",
    attendees: "150+",
    description: "Side event at Web3Lagos conference celebrating DAO culture",
    registrationLink: "https://app.unlock-protocol.com/event/pizza-joli",
    picturesLink: "https://drive.google.com/drive/folders/1u3MBQs1sOxfNBH1xop84qHAAfWEvLzbK",
    highlights: ["Web3Lagos side event", "DAO networking", "Pizza celebration"],
    category: "Web3 & Blockchain",
  },
  {
    id: 9,
    title: "STELLAR ENUGU MEETUP EVENT",
    brand: "STELLAR",
    date: "September 2024",
    location: "Enugu, Nigeria",
    type: "Meetup",
    status: "COMPLETED",
    attendees: "80+",
    description: "Local meetup focused on Stellar blockchain education and networking",
    registrationLink: "https://lu.ma/event/manage/evt-WfkvhFhjgv7YwBm/overview",
    picturesLink: "#",
    highlights: ["Stellar education", "Local networking", "Blockchain awareness"],
    category: "Web3 & Blockchain",
  },
  {
    id: 10,
    title: "3MTT ENUGU MIXER 2024",
    brand: "3MTT",
    date: "July 2024",
    location: "Enugu, Nigeria",
    type: "Networking Event",
    status: "COMPLETED",
    attendees: "120+",
    description: "Tech ecosystem mixer bringing together developers and entrepreneurs",
    registrationLink: "#",
    picturesLink: "#",
    highlights: ["Tech ecosystem networking", "Developer connections", "Startup showcase"],
    category: "Tech Community",
  },
  {
    id: 11,
    title: "Global Pizza Party Nsukka 2024",
    brand: "PizzaDAO",
    date: "May 22, 2024",
    location: "Nsukka, Nigeria",
    type: "Global Event",
    status: "COMPLETED",
    attendees: "200+",
    description: "Bitcoin Pizza Day celebration at University of Nigeria Nsukka",
    registrationLink: "https://bit.ly/NsukkaPizzaParty",
    picturesLink: "https://mega.nz/folder/kScmTJZT#w3dYoX6YcZW-uCEz93sWWA",
    highlights: ["University engagement", "Bitcoin education", "Student community"],
    category: "Web3 & Blockchain",
  },
  {
    id: 12,
    title: "Global Pizza Party Enugu 2024",
    brand: "PizzaDAO",
    date: "May 22, 2024",
    location: "Enugu, Nigeria",
    type: "Global Event",
    status: "COMPLETED",
    attendees: "300+",
    description: "Major Bitcoin Pizza Day celebration in Enugu with Web3 community",
    registrationLink: "https://bit.ly/EnuguPizzaParty",
    picturesLink: "https://mega.nz/folder/lKUmnYiK#p7IgMg9R3NoyvvKmfJY9oQ",
    highlights: ["Bitcoin Pizza Day", "Web3 education", "Community building"],
    category: "Web3 & Blockchain",
  },
  {
    id: 13,
    title: "3MTT Cohort One Regional Hackathon 2024",
    brand: "3MTT",
    date: "April 2024",
    location: "Enugu, Nigeria",
    type: "Hackathon",
    status: "COMPLETED",
    attendees: "180+",
    description: "Regional hackathon for 3MTT cohort focusing on tech solutions",
    registrationLink: "https://lu.ma/event/manage/evt-c80GXzkzhw4liOO",
    picturesLink: "#",
    highlights: ["Regional competition", "Tech solutions", "Skills development"],
    category: "Tech Community",
  },
  {
    id: 14,
    title: "3MTT ENUGU MEET AND GREET 2024",
    brand: "3MTT",
    date: "March 2024",
    location: "Enugu, Nigeria",
    type: "Meetup",
    status: "COMPLETED",
    attendees: "100+",
    description: "Meet and greet event for 3MTT community members in Enugu",
    registrationLink: "https://lu.ma/3mtt042",
    picturesLink: "#",
    highlights: ["Community introduction", "Networking", "Program orientation"],
    category: "Tech Community",
  },
  {
    id: 15,
    title: "ARCHWAY DEVELOPER WORKSHOP 2024",
    brand: "ARCHWAY",
    date: "February 2024",
    location: "Nsukka, Nigeria",
    type: "Developer Workshop",
    status: "COMPLETED",
    attendees: "120+",
    description: "Developer workshop focused on Archway blockchain development",
    registrationLink: "https://lu.ma/Archwayunn",
    picturesLink: "#",
    highlights: ["Archway development", "Smart contracts", "Developer training"],
    category: "Web3 & Blockchain",
  },
  {
    id: 16,
    title: "GREENPILL IMPACT TOUR NIG EVENT",
    brand: "GREENPILL NAIJA",
    date: "January 2024",
    location: "Nigeria",
    type: "Impact Tour",
    status: "COMPLETED",
    attendees: "250+",
    description: "Impact tour promoting regenerative finance and public goods",
    registrationLink: "https://lu.ma/042impacttour",
    picturesLink: "https://mega.nz/folder/dLsCVIiQ#HVt8aJgxeNFRN3xSnCMXIg",
    highlights: ["Regenerative finance", "Public goods", "Impact measurement"],
    category: "Impact & Sustainability",
  },
  {
    id: 17,
    title: "IMPACT SUMMIT 2023",
    brand: "GREENPILL NAIJA",
    date: "December 2023",
    location: "Nigeria",
    type: "Summit",
    status: "COMPLETED",
    attendees: "300+",
    description: "Summit focused on impact measurement and regenerative finance",
    registrationLink: "https://lu.ma/nwjs7209",
    picturesLink: "https://mega.nz/folder/NOEDHKrK#FN601wVrxMvwqcGmney43g",
    highlights: ["Impact measurement", "Sustainability", "Community building"],
    category: "Impact & Sustainability",
  },
  {
    id: 18,
    title: "AIESEC THRIVEFEST 2024",
    brand: "AIESEC",
    date: "October 2024",
    location: "Nigeria",
    type: "Festival",
    status: "COMPLETED",
    attendees: "400+",
    description: "Youth leadership and development festival",
    registrationLink: "https://lu.ma/thrivefest1.0summit?tk=ueCObA",
    picturesLink: "#",
    highlights: ["Youth leadership", "Global citizenship", "Skills development"],
    category: "Youth Development",
  },
  {
    id: 19,
    title: "SWITCH 4TH ANNIVERSARY 2024",
    brand: "SWITCH",
    date: "November 2023",
    location: "Enugu, Nigeria",
    type: "Anniversary Event",
    status: "COMPLETED",
    attendees: "180+",
    description: "4th anniversary celebration of Switch Electric",
    registrationLink: "#",
    picturesLink: "https://mega.nz/folder/oTE0kaCY#HYrlEztv_0vCyaibImsQUw",
    highlights: ["Company milestone", "Team celebration", "Community appreciation"],
    category: "Corporate",
  },
  {
    id: 20,
    title: "WEB3 CONNECT 2023",
    brand: "SWITCH",
    date: "September 2023",
    location: "Nsukka, Nigeria",
    type: "Conference",
    status: "COMPLETED",
    attendees: "200+",
    description: "Web3 conference connecting developers and blockchain enthusiasts",
    registrationLink: "https://lu.ma/web3connectunn",
    picturesLink: "https://discord.com/channels/1128564139472736296/1165866805861023754",
    highlights: ["Web3 education", "Developer networking", "Blockchain adoption"],
    category: "Web3 & Blockchain",
  },
  {
    id: 21,
    title: "MEET AND GREET 2023",
    brand: "I4G UNN",
    date: "January 2023",
    location: "Nsukka, Nigeria",
    type: "Meetup",
    status: "COMPLETED",
    attendees: "150+",
    description: "New year meet and greet for tech community members",
    registrationLink: "#",
    picturesLink: "#",
    highlights: ["Community building", "New year resolutions", "Tech networking"],
    category: "Tech Community",
  },
]

const eventTypes = [
  "All",
  "Global Event",
  "Hackathon",
  "Developer Workshop",
  "Summit",
  "Meetup",
  "Conference",
  "Festival",
  "Anniversary Event",
  "Side Event",
  "Networking Event",
  "Impact Tour",
]
const brandCategories = [
  "All",
  "Web3 & Blockchain",
  "Tech Community",
  "Corporate",
  "Impact & Sustainability",
  "Youth Development",
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || event.type === selectedType
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory

    return matchesSearch && matchesType && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-[#112D4E] dark:bg-[#0a1a2e] shadow-sm pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center text-[#3F72AF] hover:text-[#3F72AF] mb-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-4xl font-bold text-white">All Events I've Hosted</h1>
              <p className="text-lg text-[#DBE2EF] mt-2">
                A comprehensive collection of {allEvents.length}+ events I've organized across Nigeria and Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-sm p-4 md:p-6 mb-8 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Filter Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Search Events</label>
              <Input
                placeholder="Search by title, brand, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Event Type</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Brand Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {brandCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 px-4">
          <p className="text-muted-foreground">
            Showing {filteredEvents.length} of {allEvents.length} events
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow bg-card border border-border">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                    {event.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-[#3F72AF] text-white">
                    {event.brand}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground leading-tight">{event.title}</CardTitle>
                <Badge className="w-fit text-xs bg-[#3F72AF] text-white">{event.status}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>

                <div className="mb-4">
                  <h5 className="font-semibold text-foreground text-sm mb-2">Highlights:</h5>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-[#3F72AF] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-2">
                  {event.registrationLink && event.registrationLink !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white"
                      onClick={() => window.open(event.registrationLink, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Event Registration
                    </Button>
                  )}
                  {event.picturesLink && event.picturesLink !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white"
                      onClick={() => window.open(event.picturesLink, "_blank")}
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      View Event Pictures
                    </Button>
                  )}
                </div>

                <div className="mt-3">
                  <Badge variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                    {event.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white"
              onClick={() => {
                setSearchTerm("")
                setSelectedType("All")
                setSelectedCategory("All")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <CommunityCTA />
      <Footer />
    </div>
  )
}
