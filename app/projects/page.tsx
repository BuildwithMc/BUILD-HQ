"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Code,
  Globe,
  Users,
  Zap,
  ExternalLink,
  Github,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calculator,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommunityCTA } from "@/components/community-cta"

const allProjects = [
  {
    id: 1,
    title: "Faculty of Engineering Website",
    category: "Web Development",
    description: "Official website for the Faculty of Engineering at the University of Nigeria Nsukka",
    detailedDescription:
      "A comprehensive website built for the Faculty of Engineering at the University of Nigeria Nsukka. This project serves as the digital presence for the faculty, providing information about programs, faculty members, research initiatives, and student resources. The website features a modern, responsive design that works seamlessly across all devices and provides an intuitive user experience for students, faculty, and visitors.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
    demoLink: "https://team-achieve.github.io/ENGINEBLOG-ADMIN/index.html",
    githubLink: "https://github.com/TEAM-ACHIEVE/ENGINEBLOG",
    status: "Live",
    year: "2023",
    role: "Lead Developer",
    features: [
      "Responsive design optimized for all devices",
      "Faculty and staff directory with detailed profiles",
      "Program information and curriculum details",
      "News and announcements section",
      "Research showcase and publications",
      "Student resources and academic calendar",
      "Contact forms and department information",
    ],
    challenges: [
      "Creating a scalable content management system",
      "Ensuring accessibility compliance for educational institutions",
      "Optimizing performance for users with varying internet speeds",
    ],
    impact: "Improved digital presence for the faculty, enhanced communication with students and stakeholders",
  },
  {
    id: 2,
    title: "Nnaji Obinna Portfolio",
    category: "Web Development",
    description: "Professional portfolio website showcasing creative work and projects",
    detailedDescription:
      "A sleek and modern portfolio website designed for Nnaji Obinna to showcase his creative work, projects, and professional experience. The website features an elegant design with smooth animations, interactive elements, and a user-friendly interface that effectively presents his portfolio in an engaging manner.",
    tech: ["React", "CSS3", "JavaScript", "Responsive Design", "Animation Libraries"],
    demoLink: "https://buildwithmc.github.io/nnajiobinna/",
    githubLink: "https://github.com/BuildwithMc/nnajiobinna",
    status: "Live",
    year: "2023",
    role: "Full-Stack Developer",
    features: [
      "Interactive portfolio gallery with filtering capabilities",
      "Smooth scroll animations and transitions",
      "Contact form with email integration",
      "Responsive design for optimal viewing on all devices",
      "SEO optimized for better search engine visibility",
      "Fast loading times with optimized assets",
    ],
    challenges: [
      "Creating smooth animations without compromising performance",
      "Implementing an intuitive navigation system",
      "Optimizing images and assets for fast loading",
    ],
    impact: "Enhanced professional online presence, improved client engagement and project inquiries",
  },
  {
    id: 3,
    title: "GreenPayer Payment App",
    category: "Web3 & DeFi",
    description: "Payment application for the M3tering protocol enabling green energy transactions",
    detailedDescription:
      "GreenPayer is a revolutionary payment application built for the M3tering protocol that facilitates seamless transactions in the green energy sector. The application enables users to make payments for renewable energy services, track their energy consumption, and participate in the green economy through blockchain technology. It features a user-friendly interface, secure payment processing, and real-time transaction tracking.",
    tech: ["React", "Web3.js", "Smart Contracts", "Ethereum", "Node.js", "MongoDB"],
    demoLink: "https://greenpayer.buildwithmc.com/",
    githubLink: "https://github.com/BuildwithMc/Greenpayer-Dapp",
    status: "Live",
    year: "2024",
    role: "Lead Developer",
    features: [
      "Secure blockchain-based payment processing",
      "Real-time energy consumption tracking",
      "User dashboard with transaction history",
      "Integration with M3tering protocol",
      "Multi-wallet support (MetaMask, WalletConnect)",
      "Mobile-responsive design",
      "Energy usage analytics and reporting",
    ],
    challenges: [
      "Integrating complex smart contract functionality",
      "Ensuring secure wallet connections",
      "Optimizing gas fees for transactions",
      "Creating intuitive UX for Web3 interactions",
    ],
    impact: "Facilitated green energy payments, promoted sustainable energy adoption, simplified Web3 interactions",
  },
  {
    id: 4,
    title: "Vibra Exchange App",
    category: "Web3 & DeFi",
    description: "Recreated decentralized exchange platform with modern UI/UX improvements",
    detailedDescription:
      "A complete recreation of the Vibra Exchange application with enhanced user interface, improved user experience, and modern design principles. This project involved rebuilding the entire frontend of the exchange platform while maintaining compatibility with existing smart contracts and backend systems. The new version features better performance, accessibility, and mobile responsiveness.",
    tech: ["React", "Web3.js", "DeFi Protocols", "Smart Contracts", "CSS3", "TypeScript"],
    demoLink: "https://buildwithmc.github.io/Vibra/",
    githubLink: "https://github.com/BuildwithMc/Vibra",
    status: "Live",
    year: "2024",
    role: "Frontend Developer",
    features: [
      "Modern and intuitive trading interface",
      "Real-time price charts and market data",
      "Liquidity pool management",
      "Token swapping functionality",
      "Portfolio tracking and analytics",
      "Mobile-optimized responsive design",
      "Dark/light theme support",
    ],
    challenges: [
      "Maintaining compatibility with existing smart contracts",
      "Implementing real-time data updates",
      "Creating an intuitive trading interface",
      "Optimizing performance for complex calculations",
    ],
    impact: "Improved user experience for DeFi traders, increased platform accessibility and usability",
  },
  {
    id: 5,
    title: "iSwear Legal Platform",
    category: "Legal Tech",
    description: "Virtual legal space for generating affidavits and legal document automation",
    detailedDescription:
      "iSwear is an innovative virtual legal platform that revolutionizes the way legal documents are created and managed. The platform provides automated affidavit generation, legal document templates, and streamlined processes for common legal procedures. It bridges the gap between traditional legal services and modern technology, making legal assistance more accessible and efficient for individuals and small businesses.",
    tech: ["React", "Node.js", "Express", "MongoDB", "PDF Generation", "Legal APIs"],
    demoLink: "https://ballox-by-team-wonder.github.io/iSwear-main/",
    githubLink: "https://github.com/Ballox-by-Team-Wonder/iSwear-main",
    status: "Live",
    year: "2023",
    role: "Technical Project Manager",
    features: [
      "Automated affidavit generation with legal templates",
      "Document management and storage system",
      "User authentication and secure access",
      "PDF generation and download functionality",
      "Legal form builder with validation",
      "Case tracking and management",
      "Integration with legal databases",
    ],
    challenges: [
      "Ensuring legal compliance and accuracy",
      "Creating secure document storage",
      "Implementing complex form validation",
      "Designing user-friendly legal workflows",
    ],
    impact:
      "Democratized access to legal services, reduced time for document generation, improved legal process efficiency",
  },
  {
    id: 6,
    title: "Culture Refi Ecosystem",
    category: "Web3 & DeFi",
    description: "Regenerative finance ecosystem with DAO, DeFi, and NFTs featuring $Cowry token",
    detailedDescription:
      "Culture is a comprehensive regenerative finance (ReFi) ecosystem that combines decentralized autonomous organization (DAO) governance, decentralized finance (DeFi) protocols, and non-fungible tokens (NFTs). The platform features the native $Cowry token, which is exchangeable with cUSD and connects users' IoT devices to the ecosystem when they acquire Culture-partner solar energy equipment. The smart contract rewards users with $Cowry airdrops for green energy adoption and continuous eco-friendly energy consumption.",
    tech: ["Celo Blockchain", "Smart Contracts", "React", "Web3.js", "IoT Integration", "Solidity"],
    demoLink: "http://culture-celo.herokuapp.com/",
    githubLink: "https://github.com/Ballox-by-Team-Wonder/culture",
    status: "Live",
    year: "2023",
    role: "Technical Project Manager",
    features: [
      "$Cowry token with cUSD exchangeability",
      "IoT device integration for solar equipment",
      "Automated reward system for green energy usage",
      "DAO governance for community decisions",
      "DeFi protocols for token staking and lending",
      "NFT marketplace for environmental assets",
      "Inter-Blockchain Communication (IBC) support",
      "Culture wallet for token management",
    ],
    challenges: [
      "Integrating IoT devices with blockchain",
      "Creating sustainable tokenomics",
      "Implementing complex smart contract logic",
      "Ensuring scalability for multiple users",
    ],
    impact: "Promoted renewable energy adoption, created sustainable finance ecosystem, incentivized green behavior",
  },
  {
    id: 7,
    title: "Ballox Voting Platform",
    category: "Governance & Voting",
    description: "Blockchain-based voting system with voter ID tokenization on Polygon",
    detailedDescription:
      "Ballox is a revolutionary blockchain-based voting platform that leverages Ethereum and Polygon technologies to create secure, transparent, and tamper-proof voting systems. The platform features voter ID tokenization, secure vote recording, and transparent result tallying. It uses Filecoin for handling voter payments and wallet transactions, ensuring a complete ecosystem for democratic participation.",
    tech: ["Ethereum", "Polygon", "Filecoin", "Smart Contracts", "React", "Web3.js", "Solidity"],
    demoLink: "https://ballox-by-team-wonder.github.io/Ballox-Web/index.html",
    githubLink: "https://github.com/Ballox-by-Team-Wonder/Ballox-Web",
    status: "Live",
    year: "2023",
    role: "Technical Project Manager",
    features: [
      "Secure blockchain-based voting mechanism",
      "Voter ID tokenization for identity verification",
      "Transparent vote recording and tallying",
      "Real-time election results dashboard",
      "Voter wallet integration with Filecoin",
      "Multi-election support and management",
      "Audit trail for election transparency",
      "Mobile-responsive voting interface",
    ],
    challenges: [
      "Ensuring voter privacy while maintaining transparency",
      "Implementing secure identity verification",
      "Optimizing gas costs for large-scale voting",
      "Creating user-friendly blockchain interactions",
    ],
    impact: "Enhanced democratic processes, increased voting transparency, reduced election fraud potential",
  },
  {
    id: 8,
    title: "Identify DAO",
    category: "Identity & Verification",
    description: "Fast and seamless automated identification system leveraging blockchain technology",
    detailedDescription:
      "Identify DAO is a cutting-edge automated identification system that leverages blockchain technology to address verification, payment, and customer care services in a decentralized community. The platform provides fast, secure, and seamless identity verification processes while maintaining user privacy and data security through decentralized protocols.",
    tech: ["Celo Blockchain", "Smart Contracts", "React", "Web3.js", "Identity Protocols", "Encryption"],
    demoLink: "https://identify-nu.vercel.app/sign-in",
    githubLink: "https://github.com/Ballox-by-Team-Wonder/Celo-Identify-DAO",
    status: "Live",
    year: "2023",
    role: "Technical Project Manager",
    features: [
      "Automated identity verification system",
      "Blockchain-based credential storage",
      "Decentralized identity management",
      "Secure authentication protocols",
      "Privacy-preserving verification",
      "Integration with payment systems",
      "Customer service automation",
      "Multi-platform compatibility",
    ],
    challenges: [
      "Balancing privacy with verification requirements",
      "Creating seamless user onboarding",
      "Implementing robust security measures",
      "Ensuring regulatory compliance",
    ],
    impact: "Streamlined identity verification, enhanced security, reduced verification time and costs",
  },
  {
    id: 9,
    title: "GP Calculator",
    category: "Educational Tools",
    description: "JavaScript-based GPA calculator for university-level students",
    detailedDescription:
      "A comprehensive JavaScript-based Grade Point Average (GPA) calculator specifically designed for university-level students. Developed by Team Achieve for Achieve Digital Agency, this tool helps students calculate their cumulative GPA based on their course grades and credit hours. The calculator supports various grading systems and provides detailed breakdowns of academic performance.",
    tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Local Storage"],
    demoLink: "https://team-achieve.github.io/CUSTOM-GP-CALCULATOR/",
    githubLink: "https://github.com/TEAM-ACHIEVE/CUSTOM-GP-CALCULATOR",
    status: "Live",
    year: "2022",
    role: "Lead Developer",
    features: [
      "Support for multiple grading systems",
      "Cumulative GPA calculation",
      "Semester-wise grade tracking",
      "Credit hour management",
      "Grade point breakdown and analysis",
      "Data persistence with local storage",
      "Responsive design for mobile use",
      "Export functionality for academic records",
    ],
    challenges: [
      "Supporting different university grading systems",
      "Creating intuitive grade input interface",
      "Implementing accurate GPA calculations",
      "Ensuring data persistence across sessions",
    ],
    impact: "Simplified GPA calculations for students, improved academic planning and tracking",
  },
]

const categories = [
  "All",
  "Web3 & DeFi",
  "Web Development",
  "Legal Tech",
  "Governance & Voting",
  "Identity & Verification",
  "Educational Tools",
]

const statuses = ["All", "Live", "In Development", "Completed"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web3 & DeFi":
      return Zap
    case "Web Development":
      return Globe
    case "Legal Tech":
      return FileText
    case "Governance & Voting":
      return Users
    case "Identity & Verification":
      return Users
    case "Educational Tools":
      return Calculator
    default:
      return Code
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Web3 & DeFi":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
    case "Web Development":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "Legal Tech":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "Governance & Voting":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "Identity & Verification":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    case "Educational Tools":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
  }
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const openProjectModal = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const navigateProject = (direction: "next" | "prev") => {
    if (selectedProject === null) return

    const currentIndex = allProjects.findIndex((p) => p.id === selectedProject)
    let newIndex

    if (direction === "next") {
      newIndex = currentIndex === allProjects.length - 1 ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex === 0 ? allProjects.length - 1 : currentIndex - 1
    }

    setSelectedProject(allProjects[newIndex].id)
  }

  const selectedProjectData = selectedProject ? allProjects.find((p) => p.id === selectedProject) : null

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

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Personal Projects</h1>
              <p className="text-lg text-[#DBE2EF] mb-6 max-w-3xl mx-auto">
                A comprehensive collection of {allProjects.length} live applications, platforms, and tools that I've
                built, collaborated on, and contributed to across various domains.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
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
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center">
                <Code className="h-5 w-5 mr-2" />
                Filter Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Search Projects</label>
                  <Input
                    placeholder="Search by title, description, or technology..."
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
                  <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
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
              Showing {filteredProjects.length} of {allProjects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => {
              const IconComponent = getCategoryIcon(project.category)
              return (
                <Card
                  key={project.id}
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => openProjectModal(project.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-[#3F72AF]" />
                        <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          project.status === "Live"
                            ? "text-green-700 border-green-500"
                            : "text-blue-700 border-blue-500"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500 border-gray-400">
                            +{project.tech.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.demoLink, "_blank")
                        }}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubLink, "_blank")
                        }}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div>

                    <div className="mt-3 text-center">
                      <Button variant="ghost" size="sm" className="text-[#3F72AF] hover:text-[#2d5a8f]">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Code className="h-16 w-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters.</p>
              <Button
                variant="outline"
                className="text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedStatus("All")
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && selectedProjectData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center">
                {(() => {
                  const IconComponent = getCategoryIcon(selectedProjectData.category)
                  return <IconComponent className="h-8 w-8 mr-3 text-[#3F72AF]" />
                })()}
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProjectData.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={getCategoryColor(selectedProjectData.category)}>
                      {selectedProjectData.category}
                    </Badge>
                    <Badge variant="outline" className="text-green-700 border-green-500">
                      {selectedProjectData.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">• {selectedProjectData.year}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateProject("prev")}
                  className="text-[#3F72AF] hover:text-[#2d5a8f]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  {allProjects.findIndex((p) => p.id === selectedProject) + 1} of {allProjects.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigateProject("next")}
                  className="text-[#3F72AF] hover:text-[#2d5a8f]"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Project Description */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Project Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProjectData.detailedDescription}</p>
                </div>

                {/* Role & Year */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">My Role</h5>
                    <p className="text-muted-foreground">{selectedProjectData.role}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Year</h5>
                    <p className="text-muted-foreground">{selectedProjectData.year}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-[#3F72AF] border-[#3F72AF]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProjectData.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-[#3F72AF] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technical Challenges</h4>
                  <ul className="space-y-2">
                    {selectedProjectData.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Impact & Results</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProjectData.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button
                    className="flex-1 bg-[#3F72AF] hover:bg-[#2d5a8f] text-white"
                    onClick={() => window.open(selectedProjectData.demoLink, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                    onClick={() => window.open(selectedProjectData.githubLink, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <CommunityCTA />
      <Footer />
    </div>
  )
}
