"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Briefcase,
  Megaphone,
  Calendar,
  Handshake,
  Target,
  Settings,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const skillsData = {
  "Community Management": {
    icon: Users,
    description: "Building and nurturing vibrant tech communities across Africa",
    experiences: [
      {
        title: "City Champion (Community Manager/Co-Lead)",
        company: "Onboard Global",
        period: "Oct 2024 - Dec 2024",
        location: "Enugu, Nigeria",
        description:
          "As a City Club Champion, I build and grow Enugu's local community by organizing in-person events and implementing engagement strategies to connect and inspire 'dreamers' aligned with Onboard's mission.",
        achievements: [
          "Managed and grew the Enugu Onboard community, aiming to connect 100+ local 'dreamers' with onchain opportunities",
          "Organized and hosted in-person events and meetups, attracting over 100+ participants to explore and discuss Onboard's mission in under 2 days",
          "Implemented the Onboard community engagement framework on Telegram, driving consistent daily and weekly interactions",
          "Launched initiatives to enhance engagement, achieving a 35% increase in active participation",
        ],
      },
      {
        title: "Community Manager",
        company: "3MTT Nigeria",
        period: "Feb 2024 - Present",
        location: "Enugu, Nigeria",
        description:
          "At 3MTT, I lead community engagement efforts, facilitated partnerships with stakeholders, organizing educational and collaborative initiatives like hackathons and workshops to drive tech skill development.",
        achievements: [
          "Co-created and organized three hackathons in Enugu, leading the local community to secure first place in two regional and one nationwide competition",
          "Hosted two statewide events with over 200 attendees each, enhancing tech awareness and engagement across Enugu",
          "Conducted weekly community check-ins and learning activities, achieving an average attendance of 50+ participants per session",
          "Fostered peer-to-peer learning structures, boosting active participation by 30% and supporting members in achieving their learning goals",
        ],
      },
      {
        title: "Community Development Manager",
        company: "Ingressive For Good",
        period: "Sep 2022 - Jul 2023",
        location: "Enugu, Nigeria",
        description:
          "At I4G, I focused on fostering tech education, establishing partnerships with tech companies and career growth by hosting skill-building workshops and events tailored to young tech enthusiasts.",
        achievements: [
          "Hosted and organized multiple tech-based workshops and events attended by over 800+ students, resulting in a 70% satisfaction rate and a 20% increase in signups",
          "Established partnerships with 15+ tech companies and communities, securing funding, internships, resources and job opportunities for the community",
          "Initiated a series of programs that encouraged existing members to refer friends and colleagues, resulting in a 60% increase in community membership",
        ],
      },
      {
        title: "Brand Advocate and Community Manager",
        company: "Side Hustle NG",
        period: "Jan 2022 - Oct 2022",
        location: "Enugu, Nigeria",
        description:
          "At Side Hustle NG, I led the launch of the first official Side Hustle community at the University of Nigeria Nsukka, fostering career growth and skill development among students.",
        achievements: [
          "Led the establishment and launch of the first official Side Hustle UNN community, hosting multiple on-campus events and building an active community of 300-400 students",
          "Advocated for the tech industry and Side Hustle's opportunities through targeted outreach, workshops, and presentations",
        ],
      },
    ],
  },
  "Developer Relations": {
    icon: Target,
    description: "Empowering developers and driving Web3 technology adoption across Africa",
    experiences: [
      {
        title: "Developer Relations Advocate",
        company: "Cosmos Hub Africa | Naija HackAtom",
        period: "Dec 2024 – April 2025",
        location: "Southeastern Nigeria",
        description:
          "Supported by the Atom Accelerator DAO (AADAO), I led developer relations and community engagement efforts in Southeastern Nigeria for Naija HackAtom — a region-wide hackathon series focused on accelerating the adoption of Cosmos Hub, Interchain, and the Atom Economic Zone (AEZ).",
        achievements: [
          "Spearheaded the planning, promotion, and execution of Naija HackAtom workshops and hackathon activations across Southeastern Nigeria, successfully mobilizing over 150 developers, students, and Web3 enthusiasts",
          "Hosted a regional in-person IRL workshop in Enugu, delivering technical sessions on the Cosmos SDK, IBC, and CosmWasm, and onboarding new developers into the Cosmos ecosystem",
          "Facilitated local project ideation aligned with Cosmos tracks including AEZ, Interchain Security, and ATOM utility — contributing to multiple hackathon submissions from Southeastern Nigeria",
          "Conducted technical onboarding sessions, live Q&As, and mentor hours to educate participants on building with Cosmos technologies, resulting in improved project quality and submission rates",
          "Partnered with local developer communities, student blockchain clubs, and tech hubs to expand Cosmos Hub Africa's visibility and drive grassroots adoption of the Interchain stack",
        ],
      },
      {
        title: "Developer Relations Advocate & Secret Agent",
        company: "Secret Network Africa",
        period: "May 2022 – Nov 2024",
        location: "Southeastern Nigeria",
        description:
          "At Secret Network, I championed privacy-preserving technologies and developer tools, driving adoption through regional outreach, developer onboarding, and technical advocacy. My work involved organizing grassroots engagements, supporting Dapp ecosystems, and scaling community growth across universities and local hubs in Southeastern Nigeria.",
        achievements: [
          "Evangelized Secret Network's privacy-first blockchain infrastructure at conferences, meetups, and university bootcamps, onboarding developers and tech enthusiasts into the Secret ecosystem",
          "Led developer outreach campaigns and coordinated university recruitment programs, significantly increasing developer awareness and participation in Secret Network initiatives",
          "Activated and managed a local chapter of the Secret Agents program, mentoring new advocates through structured missions that rewarded learning and contribution—leading to a 40% growth in regional agent participation",
          "Facilitated onboarding and adoption of Dapps built on Secret Network, including Stashh NFT Marketplace and Alter Network, by providing hands-on guidance, demo sessions, and community-driven content",
          "Organized and moderated beta testing groups for emerging tools, gathering user feedback and relaying insights to product teams to refine developer experience and platform usability",
        ],
      },
      {
        title: "Developer Relations Advocate & Community Manager",
        company: "Archway Africa",
        period: "Jan 2024 - Sept 2024",
        location: "Southeastern Nigeria",
        description:
          "At Archway, I focused on building and nurturing developer communities across Southeastern Nigeria, organizing events, workshops, and hackathons to educate and engage developers with Archway's blockchain ecosystem.",
        achievements: [
          "Organized and hosted developer workshops and events, drawing over 250 participants and driving strong interest in Archway's blockchain ecosystem",
          "Guided and supported developers in regional hackathons, leading to the completion of 10+ projects built on the Archway platform",
          "Fostered a thriving developer community in Southeastern Nigeria, increasing active participation by 30% in six months",
          "Facilitated Archway adoption through onboarding sessions and hands-on training, significantly boosting community knowledge and engagement with the platform",
        ],
      },
    ],
  },
  "Project Management": {
    icon: Briefcase,
    description: "Leading cross-functional teams and delivering complex technical projects",
    experiences: [
      {
        title: "Technical Project Manager",
        company: "RETHINK TECH LTD",
        period: "Apr 2022 - Jun 2023",
        location: "Nigeria",
        description:
          "Championed the development of multiple blockchain and technology platforms, leading cross-functional teams to deliver innovative solutions.",
        achievements: [
          "Championed the development of Pactner, a pioneering platform designed to foster impactful collaborations between organizations, effectively addressing the inefficiencies in achieving Sustainable Development Goals",
          "Directed the creation of Identify DAO, an innovative automated identification system that leverages blockchain technology, enhancing security and streamlining user verification processes",
          "Oversaw the development of Culture Refi, a comprehensive regenerative finance ecosystem featuring DAO, DeFi, and NFTs, contributing to the democratization of finance and fostering economic inclusivity",
          "Led the development of iSwear, an integrated legal services platform designed to bridge the gap between the judiciary and the public, enhancing access to legal services and promoting justice",
          "Supervised the creation of Ballox, a voting smart contract built on the Ethereum blockchain using the Polygon chain, facilitating secure and transparent voting processes, and tokenizing voter IDs",
        ],
      },
      {
        title: "Technical Project Manager",
        company: "Achieve Digital Agency",
        period: "Nov 2021 - Present",
        location: "Nigeria",
        description:
          "Oversaw the operations of diverse teams, including web development, digital marketing, SEO, and content creation, fostering a collaborative environment that encouraged innovation and efficiency.",
        achievements: [
          "Led the development of Samandcart.com, a state-of-the-art e-commerce store specifically tailored to cater to the market needs of Eastern Nigeria, enhancing the region's digital commerce landscape",
          "Championed the creation of a JavaScript application designed to calculate students' cumulative grade point averages (CGPA) in accordance with the University of Nigeria, Nsukka standards, improving academic tracking and performance analysis",
          "Implemented effective project management strategies, ensuring timely delivery of projects while maintaining high-quality standards, leading to increased client satisfaction",
          "Conducted regular team meetings and performance evaluations, identifying areas for improvement and implementing necessary changes, contributing to the overall productivity and efficiency of the agency",
        ],
      },
      {
        title: "Technical Project Manager",
        company: "VOLTAN ENERGY",
        period: "Oct 2019 - Oct 2021",
        location: "Nigeria",
        description:
          "Spearheaded the development of Trine Tech, a cutting-edge renewable energy company focused on transforming biodegradable waste into bio-gas, contributing to sustainable energy solutions.",
        achievements: [
          "Orchestrated the design and implementation of bio-digesters, a key component in the conversion process, enhancing the efficiency and effectiveness of waste-to-energy conversion",
          "Managed cross-functional teams, fostering a collaborative environment that encouraged innovation and problem-solving, leading to the successful execution of the project",
          "Conducted comprehensive market research and feasibility studies to identify potential areas for expansion, contributing to the company's sustainable growth and impact",
          "Implemented robust operational procedures and quality control measures to ensure the delivery of high-quality, sustainable energy solutions, significantly improving the living conditions in targeted regions",
        ],
      },
    ],
  },
  "Operations Management": {
    icon: Settings,
    description: "Optimizing business operations and driving performance across multiple sectors",
    experiences: [
      {
        title: "Operations Manager (Branch Lead)",
        company: "CafeOne Enugu (Sterling Bank)",
        period: "Jan 2024 – Present",
        location: "Enugu, Nigeria",
        description:
          "As the Branch Lead for CafeOne Enugu, I was responsible for overseeing daily operations across banking and non-banking verticals—driving customer experience, team efficiency, and financial performance.",
        achievements: [
          "Managed a multifunctional team of 10+ (baristas, customer experience personnel, and janitors), maintaining operational excellence and customer satisfaction standards",
          "Achieved over ₦34 million in revenue within the first 6 months through strategic pricing, upselling, and maximizing subscriptions across coffee, co-working, and events",
          "Grew non-banking income by optimizing coffee and pastry sales to meet weekly targets of ₦750,000, and consistently converted walk-ins to paying co-working subscribers",
          "Drove banking KPIs by supporting ambassadors to open and fund 100+ retail/corporate accounts monthly, growing the asset book by ₦200 million and liabilities by ₦400 million quarterly",
          "Led customer engagement initiatives, including physical activations and daily outreach—ensuring each ambassador contacted at least five customers daily",
          "Oversaw daily financial tracking, inventory audits, vendor relations, and compliance with hygiene/safety standards, submitting detailed end-of-day performance reports to HQ",
          "Spearheaded brand-aligned events and strategic partnerships, generating at least two paid event space rentals monthly and screen advertisement revenue of ₦100,000+",
          "Ensured tech and ambiance optimization—daily checks on internet speeds, music curation, coffee aroma activation, and screen displays—to enrich customer experience",
        ],
      },
      {
        title: "Chief Operating Officer",
        company: "Switch Electric",
        period: "Sep 2021 - Present",
        location: "Nigeria",
        description:
          "Spearheaded the strategic planning and execution of the Switch project, aimed at providing pay-as-you-go solar solutions to underdeveloped regions in Nigeria and other developing countries lacking reliable electricity.",
        achievements: [
          "Orchestrated cross-functional teams to ensure seamless project execution, fostering a collaborative environment that encouraged innovation and problem-solving",
          "Implemented robust operational procedures and quality control measures to ensure the delivery of high-quality, sustainable solar solutions, significantly improving the living conditions in targeted regions",
          "Conducted comprehensive market research and feasibility studies to identify potential areas for expansion, contributing to the company's sustainable growth and impact",
          "Negotiated with suppliers and vendors to secure cost-effective resources, optimizing the project budget and enhancing the company's financial performance",
        ],
      },
    ],
  },
  "Strategic Partnerships": {
    icon: Handshake,
    description: "Building meaningful collaborations and securing strategic business relationships",
    experiences: [
      {
        title: "Business Developer (Lead for Sponsorships and Fundraising)",
        company: "AIESEC in Nigeria",
        period: "Feb 2023 - Jan 2024",
        location: "Nigeria",
        description:
          "Devised and executed strategic plans for securing sponsorships and fundraising, significantly boosting event funding.",
        achievements: [
          "Cultivated relationships with potential sponsors, leveraging negotiation skills to secure sponsorships from multiple organizations",
          "Collaborated with the event planning team to ensure sponsors' needs were met, effectively promoting their brands during events",
          "Conducted market research to identify potential sponsors and donors, creating tailored proposals to attract their support",
          "Organized and promoted fundraising events and campaigns, resulting in increased participation and donations",
        ],
      },
      {
        title: "Startup Business Development Specialist",
        company: "Calm Minds Tutorials",
        period: "May 2022 - May 2023",
        location: "Nigeria",
        description:
          "Led the development and execution of startup fundamentals, including the creation, testing, and implementation of a robust business model canvas, setting the foundation for the company's growth.",
        achievements: [
          "Orchestrated strategic partnerships, negotiating mutually beneficial deals that enhanced the company's market position and expanded its network",
          "Conducted comprehensive reviews of partnerships, ensuring fulfilment of obligations and maintaining strong, productive relationships with business partners",
          "Identified and evaluated new business opportunities, conducting risk assessments to ensure informed decision-making and strategic growth",
          "Spearheaded the sourcing of funds, grants, and specific investment types, securing crucial financial resources for the company's operations and expansion",
        ],
      },
      {
        title: "Junior Business Developer",
        company: "Achieve Digital Agency",
        period: "Nov 2021 - Jun 2023",
        location: "Nigeria",
        description:
          "Led the Digital Services Department, ensuring the high quality of products and services offered, contributing to customer satisfaction and business growth.",
        achievements: [
          "Managed the execution and quality assurance of products and services, ensuring they meet the company's standards and client expectations",
          "Developed, planned, tested, and executed business model canvases, contributing to strategic decision-making and business development",
          "Identified and secured strategic partnerships, negotiating deals that enhanced the company's market position and expanded its network",
        ],
      },
      {
        title: "Junior Business Developer",
        company: "Switch Electric",
        period: "Sep 2021 - Jun 2023",
        location: "Nigeria",
        description:
          "Assisted the CEO in the development, planning, testing, and execution of the business model canvas, contributing to the strategic direction and growth of the company.",
        achievements: [
          "Led the training, coaching, and mentoring of company interns, fostering a learning environment and enhancing the company's talent pool",
          "Collaborated with the CEO in lead generation and first contact initiatives, driving customer acquisition and business expansion",
          "Orchestrated strategic partnerships, negotiating mutually beneficial deals that enhanced the company's market position and expanded its network",
          "Conducted comprehensive reviews of partnerships, ensuring fulfilment of obligations and maintaining strong, productive relationships with business partners",
        ],
      },
    ],
  },
  "Event Planning": {
    icon: Calendar,
    description: "Organizing impactful tech events and conferences across Africa",
    experiences: [
      {
        title: "Africa Coordinator",
        company: "PizzaDAO",
        period: "Jan 2025 - Present",
        location: "Africa",
        description:
          "Directed the planning and execution of PizzaDAO events across 53 African cities, collaborating with local hosts to secure venues and manage logistics.",
        achievements: [
          "Secured regional sponsorships and facilitated over 20+ partnership deals with communities, local brands, and Web3 organizations",
          "Coordinated logistics and venue management across 53 African cities for simultaneous events",
          "Implemented comprehensive event management frameworks for consistent quality across all locations",
        ],
      },
      {
        title: "Global Party Host and DAO Contributor",
        company: "PizzaDAO",
        period: "May 2024",
        location: "Nigeria",
        description:
          "Successfully organized the Global PizzaDAO Party in May 2024, attracting over 300 attendees to celebrate Bitcoin Pizza Day and promoting PizzaDAO's mission.",
        achievements: [
          "Collaborated in planning and executing side events and social gatherings at major blockchain events in Nigeria, including Web3 Lagos 2024",
          "Coordinated community engagement activities within PizzaDAO, leading to a 20% increase in regional participation across African PizzaDAO communities",
          "Supported community-led initiatives, helping to boost local event attendance and fostering stronger connections within the DAO",
        ],
      },
    ],
  },
  "Brand Awareness": {
    icon: Megaphone,
    description: "Amplifying brand visibility and driving market presence across multiple platforms",
    experiences: [
      {
        title: "Brand Advocate and Community Manager",
        company: "Techniverse.org",
        period: "Jan 2022 - Apr 2023",
        location: "Nigeria",
        description:
          "Led on-campus and virtual events, attracting over 200+ students, resulting in a 10% boost in brand awareness.",
        achievements: [
          "Brokered partnerships with popular student organizations, leading to co-branded events that generated significant social media engagement",
          "Developed and executed comprehensive brand awareness campaigns across multiple channels",
          "Created engaging content strategies that resonated with target audiences and drove community growth",
        ],
      },
      {
        title: "Brand Advocate and Secret Network Agent",
        company: "Secret Network Foundation",
        period: "May 2022 - Nov 2024",
        location: "Nigeria",
        description:
          "Represented the Secret Network Agency at various events, workshops, and outreaches, and preached and taught about privacy issues in the blockchain space.",
        achievements: [
          "Represented Dapps built on Secret Network's infrastructure, such as Stashh NFT Marketplace and Alter Network, and drove people to use their applications",
          "Conducted educational workshops on privacy-preserving technologies and their importance in the blockchain ecosystem",
          "Built brand recognition for Secret Network across Nigerian tech communities through consistent advocacy and education",
        ],
      },
    ],
  },
  "Digital Marketing": {
    icon: TrendingUp,
    description: "Strategic digital campaigns and online presence management",
    experiences: [
      {
        title: "Assistant Head of Digital Marketing",
        company: "Hult Prize Foundation",
        period: "Sep 2020 - Apr 2021",
        location: "Nsukka, Enugu Nigeria",
        description:
          "Elevated event participation by 40% through strategic digital marketing campaigns, enhancing campus-wide awareness of the Hult Prize.",
        achievements: [
          "Amplified student body engagement by utilising social media platforms, achieving a 30% increase in event sign-ups and active participation",
          "Engineered compelling digital content strategies that cultivated interest and accelerated the understanding of the Hult Prize's value",
          "Implemented comprehensive digital marketing frameworks that became templates for future campaigns",
        ],
      },
      {
        title: "Digital Marketing Specialist",
        company: "Magnus Media Ltd",
        period: "Jul 2020 - Dec 2020",
        location: "Trans-Ekulu, Enugu Nigeria",
        description:
          "Oversaw numerous social media campaigns, including creating and deploying content, engaging with target audiences and boosting reach with strategic ad placements.",
        achievements: [
          "Optimised web pages to improve SEO and usability, resulting in increased organic traffic and user engagement",
          "Tracked and reported on marketing campaign performance monthly to help with optimizing current and future plans",
          "Developed comprehensive social media strategies that significantly improved brand visibility and engagement rates",
        ],
      },
    ],
  },
}

export function InteractiveSkills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const skillKeys = Object.keys(skillsData) as Array<keyof typeof skillsData>

  const openSkillModal = (skillKey: string) => {
    const index = skillKeys.indexOf(skillKey)
    setCurrentSkillIndex(index)
    setSelectedSkill(skillKey)
  }

  const closeModal = () => {
    setSelectedSkill(null)
  }

  const navigateSkill = (direction: "next" | "prev") => {
    let newIndex
    if (direction === "next") {
      newIndex = currentSkillIndex === skillKeys.length - 1 ? 0 : currentSkillIndex + 1
    } else {
      newIndex = currentSkillIndex === 0 ? skillKeys.length - 1 : currentSkillIndex - 1
    }
    setCurrentSkillIndex(newIndex)
    setSelectedSkill(skillKeys[newIndex])
  }

  const currentSkill = selectedSkill ? skillsData[selectedSkill] : null

  return (
    <section id="skills" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#112D4E] mb-12 md:mb-16">
            Skills & Expertise
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillKeys.map((skillKey) => {
              const skill = skillsData[skillKey]
              const IconComponent = skill.icon

              return (
                <Card
                  key={skillKey}
                  className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#3F72AF] hover:scale-105"
                  onClick={() => openSkillModal(skillKey)}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-12 w-12 mx-auto mb-4 text-[#3F72AF]" />
                    <h4 className="font-semibold mb-2 text-[#112D4E]">{skillKey}</h4>
                    <p className="text-sm text-[#3F72AF] mb-4">{skill.description}</p>
                    <Button variant="ghost" size="sm" className="text-[#3F72AF] hover:text-[#2d5a8f]">
                      View Experience
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSkill && currentSkill && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                {(() => {
                  const IconComponent = currentSkill.icon
                  return <IconComponent className="h-8 w-8 mr-3 text-[#3F72AF]" />
                })()}
                <div>
                  <h3 className="text-2xl font-bold text-[#112D4E]">{selectedSkill}</h3>
                  <p className="text-[#3F72AF]">{currentSkill.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateSkill("prev")}
                  className="text-[#3F72AF] hover:text-[#2d5a8f]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-gray-500">
                  {currentSkillIndex + 1} of {skillKeys.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateSkill("next")}
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
              <div className="space-y-8">
                {currentSkill.experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-[#3F72AF] pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-[#112D4E] mb-1">{exp.title}</h4>
                        <p className="text-lg text-[#3F72AF] font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-[#3F72AF] mt-2 md:mt-0">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    {exp.description && <p className="text-gray-600 mb-4 italic">{exp.description}</p>}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-[#3F72AF]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
