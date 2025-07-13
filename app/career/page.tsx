"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  MapPin,
  Building,
  ArrowLeft,
  Users,
  Target,
  Briefcase,
  Handshake,
  Megaphone,
  Settings,
  TrendingUp,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommunityCTA } from "@/components/community-cta"

const allExperiences = [
  {
    id: 1,
    title: "Operations Manager (Branch Lead)",
    company: "CafeOne Enugu (Sterling Bank)",
    period: "Jan 2024 - Present",
    location: "Enugu, Nigeria",
    category: "Operations Management",
    type: "Current Role",
    description:
      "As the Branch Lead for CafeOne Enugu, I was responsible for overseeing daily operations across banking and non-banking verticals—driving customer experience, team efficiency, and financial performance.",
    achievements: [
      "Managed a multifunctional team of 10+ (baristas, customer experience personnel, and janitors), maintaining operational excellence and customer satisfaction standards",
      "Achieved over ₦34 million in revenue within the first 6 months through strategic pricing, upselling, and maximizing subscriptions across coffee, co-working, and events",
      "Grew non-banking income by optimizing coffee and pastry sales to meet weekly targets of ₦750,000, and consistently converted walk-ins to paying co-working subscribers",
      "Drove banking KPIs by supporting ambassadors to open and fund 100+ retail/corporate accounts monthly, growing the asset book by ₦200 million and liabilities by ₦400 million quarterly",
    ],
    skills: ["Team Management", "Revenue Generation", "Customer Experience", "Banking Operations"],
  },
  {
    id: 2,
    title: "Community Manager",
    company: "3MTT Nigeria",
    period: "Feb 2024 - Present",
    location: "Enugu, Nigeria",
    category: "Community Management",
    type: "Current Role",
    description:
      "At 3MTT, I lead community engagement efforts, facilitated partnerships with stakeholders, organizing educational and collaborative initiatives like hackathons and workshops to drive tech skill development.",
    achievements: [
      "Co-created and organized three hackathons in Enugu, leading the local community to secure first place in two regional and one nationwide competition",
      "Hosted two statewide events with over 200 attendees each, enhancing tech awareness and engagement across Enugu",
      "Conducted weekly community check-ins and learning activities, achieving an average attendance of 50+ participants per session",
      "Fostered peer to peer learning structures, boosting active participation by 30% and supporting members in achieving their learning goals",
    ],
    skills: ["Hackathon Organization", "Community Engagement", "Tech Education", "Partnership Development"],
  },
  {
    id: 3,
    title: "Africa Coordinator",
    company: "PizzaDAO",
    period: "Jan 2025 - Present",
    location: "Africa",
    category: "Event Planning",
    type: "Current Role",
    description:
      "Directed the planning and execution of PizzaDAO events across 53 African cities, collaborating with local hosts to secure venues and manage logistics.",
    achievements: [
      "Directed the planning and execution of PizzaDAO events across 53 African cities, collaborating with local hosts to secure venues and manage logistics",
      "Secured regional sponsorships and facilitated over 20+ partnership deals with communities, local brands, and Web3 organizations",
    ],
    skills: ["Event Coordination", "Partnership Development", "Logistics Management", "Regional Strategy"],
  },
  {
    id: 4,
    title: "Chief Operating Officer",
    company: "Switch Electric",
    period: "Sep 2021 - Present",
    location: "Nigeria",
    category: "Operations Management",
    type: "Current Role",
    description:
      "Spearheaded the strategic planning and execution of the Switch project, aimed at providing pay-as-you-go solar solutions to underdeveloped regions in Nigeria and other developing countries lacking reliable electricity.",
    achievements: [
      "Spearheaded the strategic planning and execution of the Switch project, aimed at providing pay-as-you-go solar solutions",
      "Orchestrated cross-functional teams to ensure seamless project execution, fostering a collaborative environment",
      "Implemented robust operational procedures and quality control measures to ensure the delivery of high-quality, sustainable solar solutions",
      "Conducted comprehensive market research and feasibility studies to identify potential areas for expansion",
    ],
    skills: ["Renewable Energy", "Strategic Planning", "Operations Management", "Market Research"],
  },
  {
    id: 5,
    title: "City Champion (Community Manager/Co-Lead)",
    company: "Onboard Global",
    period: "Oct 2024 - Dec 2024",
    location: "Enugu, Nigeria",
    category: "Community Management",
    type: "Past Role",
    description:
      "As a City Club Champion, I built and grew Enugu's local community by organizing in-person events and implementing engagement strategies to connect and inspire 'dreamers' aligned with Onboard's mission.",
    achievements: [
      "Managed and grew the Enugu Onboard community, aiming to connect 100+ local 'dreamers' with onchain opportunities",
      "Organized and hosted in-person events and meetups, attracting over 100+ participants to explore and discuss Onboard's mission in under 2 days",
      "Implemented the Onboard community engagement framework on Telegram, driving consistent daily and weekly interactions",
      "Launched initiatives to enhance engagement, achieving a 35% increase in active participation",
    ],
    skills: ["Community Building", "Event Management", "Telegram Marketing", "Engagement Strategy"],
  },
  {
    id: 6,
    title: "Developer Relations Advocate",
    company: "Cosmos Hub Africa | Naija HackAtom",
    period: "Dec 2024 – April 2025",
    location: "Southeastern Nigeria",
    category: "Developer Relations",
    type: "Recent Role",
    description:
      "Supported by the Atom Accelerator DAO (AADAO), I led developer relations and community engagement efforts in Southeastern Nigeria for Naija HackAtom — a region-wide hackathon series focused on accelerating the adoption of Cosmos Hub, Interchain, and the Atom Economic Zone (AEZ).",
    achievements: [
      "Spearheaded the planning, promotion, and execution of Naija HackAtom workshops and hackathon activations across Southeastern Nigeria, successfully mobilizing over 150 developers, students, and Web3 enthusiasts",
      "Hosted a regional in-person IRL workshop in Enugu, delivering technical sessions on the Cosmos SDK, IBC, and CosmWasm, and onboarding new developers into the Cosmos ecosystem",
      "Facilitated local project ideation aligned with Cosmos tracks including AEZ, Interchain Security, and ATOM utility — contributing to multiple hackathon submissions from Southeastern Nigeria",
      "Conducted technical onboarding sessions, live Q&As, and mentor hours to educate participants on building with Cosmos technologies, resulting in improved project quality and submission rates",
    ],
    skills: ["Developer Relations", "Cosmos SDK", "Technical Training", "Community Mobilization"],
  },
  {
    id: 7,
    title: "Global Party Host and DAO Contributor",
    company: "PizzaDAO",
    period: "May 2024",
    location: "Nigeria",
    category: "Event Planning",
    type: "Past Role",
    description:
      "Successfully organized the Global PizzaDAO Party in May 2024, attracting over 300 attendees to celebrate Bitcoin Pizza Day and promoting PizzaDAO's mission.",
    achievements: [
      "Successfully organized the Global PizzaDAO Party in May 2024, attracting over 300 attendees to celebrate Bitcoin Pizza Day",
      "Collaborated in planning and executing side events and social gatherings at major blockchain events in Nigeria, including Web3 Lagos 2024",
      "Coordinated community engagement activities within PizzaDAO, leading to a 20% increase in regional participation across African PizzaDAO communities",
    ],
    skills: ["Event Management", "Community Engagement", "DAO Operations", "Bitcoin Advocacy"],
  },
  {
    id: 8,
    title: "Developer Relations Advocate & Secret Agent",
    company: "Secret Network Africa",
    period: "May 2022 – Nov 2024",
    location: "Southeastern Nigeria",
    category: "Developer Relations",
    type: "Past Role",
    description:
      "At Secret Network, I championed privacy-preserving technologies and developer tools, driving adoption through regional outreach, developer onboarding, and technical advocacy.",
    achievements: [
      "Evangelized Secret Network's privacy-first blockchain infrastructure at conferences, meetups, and university bootcamps, onboarding developers and tech enthusiasts into the Secret ecosystem",
      "Led developer outreach campaigns and coordinated university recruitment programs, significantly increasing developer awareness and participation in Secret Network initiatives",
      "Activated and managed a local chapter of the Secret Agents program, mentoring new advocates through structured missions that rewarded learning and contribution—leading to a 40% growth in regional agent participation",
      "Facilitated onboarding and adoption of Dapps built on Secret Network, including Stashh NFT Marketplace and Alter Network",
    ],
    skills: ["Privacy Technology", "Developer Advocacy", "University Outreach", "DApp Onboarding"],
  },
  {
    id: 9,
    title: "Developer Relations Advocate & Community Manager",
    company: "Archway Africa",
    period: "Jan 2024 - Sept 2024",
    location: "Southeastern Nigeria",
    category: "Developer Relations",
    type: "Past Role",
    description:
      "At Archway, I focused on building and nurturing developer communities across Southeastern Nigeria, organizing events, workshops, and hackathons to educate and engage developers with Archway's blockchain ecosystem.",
    achievements: [
      "Organized and hosted developer workshops and events, drawing over 250 participants and driving strong interest in Archway's blockchain ecosystem",
      "Guided and supported developers in regional hackathons, leading to the completion of 10+ projects built on the Archway platform",
      "Fostered a thriving developer community in Southeastern Nigeria, increasing active participation by 30% in six months",
      "Facilitated Archway adoption through onboarding sessions and hands-on training",
    ],
    skills: ["Blockchain Development", "Workshop Facilitation", "Developer Community", "Technical Training"],
  },
  {
    id: 10,
    title: "Community Development Manager",
    company: "Ingressive For Good",
    period: "Sep 2022 - Jul 2023",
    location: "Enugu, Nigeria",
    category: "Community Management",
    type: "Past Role",
    description:
      "At I4G, I focused on fostering tech education, establishing partnerships with tech companies and career growth by hosting skill-building workshops and events tailored to young tech enthusiasts.",
    achievements: [
      "Hosted and organized multiple tech-based workshops and events attended by over 800+ students, resulting in a 70% satisfaction rate and a 20% increase in signups",
      "Established partnerships with 15+ tech companies and communities, securing funding, internships, resources and job opportunities for the community",
      "Initiated a series of programs that encouraged existing members to refer friends and colleagues, resulting in a 60% increase in community membership",
    ],
    skills: ["Tech Education", "Partnership Development", "Workshop Organization", "Community Growth"],
  },
  {
    id: 11,
    title: "Technical Project Manager",
    company: "RETHINK TECH LTD",
    period: "Apr 2022 - Jun 2023",
    location: "Nigeria",
    category: "Project Management",
    type: "Past Role",
    description:
      "Championed the development of multiple blockchain and technology platforms, leading cross-functional teams to deliver innovative solutions.",
    achievements: [
      "Championed the development of Pactner, a pioneering platform designed to foster impactful collaborations between organizations",
      "Directed the creation of Identify DAO, an innovative automated identification system that leverages blockchain technology",
      "Oversaw the development of Culture Refi, a comprehensive regenerative finance ecosystem featuring DAO, DeFi, and NFTs",
      "Led the development of iSwear, an integrated legal services platform designed to bridge the gap between the judiciary and the public",
    ],
    skills: ["Blockchain Development", "Project Management", "DAO Development", "Legal Tech"],
  },
  {
    id: 12,
    title: "Technical Project Manager",
    company: "Achieve Digital Agency",
    period: "Nov 2021 - Present",
    location: "Nigeria",
    category: "Project Management",
    type: "Current Role",
    description:
      "Oversaw the operations of diverse teams, including web development, digital marketing, SEO, and content creation, fostering a collaborative environment that encouraged innovation and efficiency.",
    achievements: [
      "Led the development of Samandcart.com, a state-of-the-art e-commerce store specifically tailored to cater to the market needs of Eastern Nigeria",
      "Championed the creation of a JavaScript application designed to calculate students' cumulative grade point averages (CGPA)",
      "Implemented effective project management strategies, ensuring timely delivery of projects while maintaining high-quality standards",
      "Conducted regular team meetings and performance evaluations, identifying areas for improvement",
    ],
    skills: ["E-commerce Development", "Team Management", "Web Development", "Project Management"],
  },
  {
    id: 13,
    title: "Business Developer (Lead for Sponsorships and Fundraising)",
    company: "AIESEC in Nigeria",
    period: "Feb 2023 - Present",
    location: "Nigeria",
    category: "Strategic Partnerships",
    type: "Current Role",
    description:
      "Devised and executed strategic plans for securing sponsorships and fundraising, significantly boosting event funding.",
    achievements: [
      "Devised and executed strategic plans for securing sponsorships and fundraising, significantly boosting event funding",
      "Cultivated relationships with potential sponsors, leveraging negotiation skills to secure sponsorships from multiple organizations",
      "Conducted market research to identify potential sponsors and donors, creating tailored proposals to attract their support",
      "Organized and promoted fundraising events and campaigns, resulting in increased participation and donations",
    ],
    skills: ["Fundraising", "Sponsorship Development", "Strategic Planning", "Relationship Building"],
  },
  {
    id: 14,
    title: "Brand Advocate and Community Manager",
    company: "Side Hustle NG",
    period: "Jan 2022 - Oct 2022",
    location: "Enugu, Nigeria",
    category: "Brand Awareness",
    type: "Past Role",
    description:
      "At Side Hustle NG, I led the launch of the first official Side Hustle community at the University of Nigeria Nsukka, fostering career growth and skill development among students.",
    achievements: [
      "Led the establishment and launch of the first official Side Hustle UNN community, hosting multiple on-campus events and building an active community of 300-400 students",
      "Advocated for the tech industry and Side Hustle's opportunities through targeted outreach, workshops, and presentations",
    ],
    skills: ["Community Launch", "Student Engagement", "Brand Advocacy", "Career Development"],
  },
  {
    id: 15,
    title: "Brand Advocate and Community Manager",
    company: "Techniverse.org",
    period: "Jan 2022 - Apr 2023",
    location: "Nigeria",
    category: "Brand Awareness",
    type: "Past Role",
    description:
      "Led on-campus and virtual events, attracting over 200+ students, resulting in a 10% boost in brand awareness.",
    achievements: [
      "Led on-campus and virtual events, attracting over 200+ students, resulting in a 10% boost in brand awareness",
      "Brokered partnerships with popular student organizations, leading to co-branded events that generated significant social media engagement",
    ],
    skills: ["Brand Awareness", "Student Engagement", "Partnership Development", "Social Media Marketing"],
  },
  {
    id: 16,
    title: "Assistant Head of Digital Marketing",
    company: "Hult Prize Foundation",
    period: "Sep 2020 - Apr 2021",
    location: "Nsukka, Enugu Nigeria",
    category: "Digital Marketing",
    type: "Past Role",
    description:
      "Elevated event participation by 40% through strategic digital marketing campaigns, enhancing campus-wide awareness of the Hult Prize.",
    achievements: [
      "Elevated event participation by 40% through strategic digital marketing campaigns",
      "Amplified student body engagement by utilising social media platforms, achieving a 30% increase in event sign-ups",
      "Engineered compelling digital content strategies that cultivated interest and accelerated the understanding of the Hult Prize's value",
    ],
    skills: ["Digital Marketing", "Social Media Strategy", "Content Creation", "Campaign Management"],
  },
  {
    id: 17,
    title: "Digital Marketing Specialist",
    company: "Magnus Media Ltd",
    period: "Jul 2020 - Dec 2020",
    location: "Trans-Ekulu, Enugu Nigeria",
    category: "Digital Marketing",
    type: "Past Role",
    description:
      "Oversaw numerous social media campaigns, including creating and deploying content, engaging with target audiences and boosting reach with strategic ad placements.",
    achievements: [
      "Oversaw numerous social media campaigns, including creating and deploying content, engaging with target audiences",
      "Optimised web pages to improve SEO and usability",
      "Tracked and reported on marketing campaign performance monthly to help with optimizing current and future plans",
    ],
    skills: ["Social Media Marketing", "SEO Optimization", "Content Creation", "Campaign Analytics"],
  },
]

const categories = [
  "All",
  "Community Management",
  "Developer Relations",
  "Project Management",
  "Operations Management",
  "Strategic Partnerships",
  "Event Planning",
  "Brand Awareness",
  "Digital Marketing",
]

const roleTypes = ["All", "Current Role", "Recent Role", "Past Role"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Community Management":
      return Users
    case "Developer Relations":
      return Target
    case "Project Management":
      return Briefcase
    case "Operations Management":
      return Settings
    case "Strategic Partnerships":
      return Handshake
    case "Event Planning":
      return Calendar
    case "Brand Awareness":
      return Megaphone
    case "Digital Marketing":
      return TrendingUp
    default:
      return Briefcase
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Community Management":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "Developer Relations":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "Project Management":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "Operations Management":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "Strategic Partnerships":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    case "Event Planning":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    case "Brand Awareness":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "Digital Marketing":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
  }
}

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  const filteredExperiences = allExperiences.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || exp.category === selectedCategory
    const matchesType = selectedType === "All" || exp.type === selectedType

    return matchesSearch && matchesCategory && matchesType
  })

  const currentRoles = allExperiences.filter((exp) => exp.type === "Current Role")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <div className="bg-[#112D4E] dark:bg-[#0a1a2e] pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="flex items-center text-[#3F72AF] hover:text-[#DBE2EF] mb-6 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Career Journey</h1>
                <p className="text-lg text-[#DBE2EF] mb-6">
                  Explore my professional experience across {allExperiences.length}+ roles in community management,
                  developer relations, project management, and more.
                </p>

                <div className="flex flex-wrap gap-2">
                  {categories.slice(1, 5).map((category) => {
                    const IconComponent = getCategoryIcon(category)
                    return (
                      <Badge key={category} variant="outline" className="text-[#DBE2EF] border-[#3F72AF]">
                        <IconComponent className="h-3 w-3 mr-1" />
                        {category}
                      </Badge>
                    )
                  })}
                </div>
              </div>

              {/* Current Roles Summary */}
              <div className="bg-[#1a3a5c] dark:bg-[#1a2332] rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-[#3F72AF]" />
                  Currently Active In ({currentRoles.length})
                </h3>
                <div className="space-y-3">
                  {currentRoles.slice(0, 4).map((role, index) => (
                    <div key={index} className="border-l-2 border-[#3F72AF] pl-3">
                      <div className="text-[#3F72AF] font-medium text-sm">{role.title}</div>
                      <div className="text-white text-xs">{role.company}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Filter Career Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                  <Input
                    placeholder="Search roles, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-border focus:border-[#3F72AF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Role Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredExperiences.length} of {allExperiences.length} career experiences
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {filteredExperiences.map((exp) => {
              const IconComponent = getCategoryIcon(exp.category)
              return (
                <Card key={exp.id} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="h-5 w-5 text-[#3F72AF]" />
                          <Badge className={getCategoryColor(exp.category)}>{exp.category}</Badge>
                          <Badge
                            variant="outline"
                            className={
                              exp.type === "Current Role"
                                ? "border-green-500 text-green-700 dark:text-green-400"
                                : exp.type === "Recent Role"
                                  ? "border-blue-500 text-blue-700 dark:text-blue-400"
                                  : "border-gray-500 text-gray-700 dark:text-gray-400"
                            }
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-foreground mb-2">{exp.title}</CardTitle>
                        <div className="flex items-center text-[#3F72AF] font-semibold mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Skills & Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Target className="h-16 w-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No experiences found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters.</p>
              <Button
                variant="outline"
                className="text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedType("All")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <CommunityCTA />
      <Footer />
    </div>
  )
}
