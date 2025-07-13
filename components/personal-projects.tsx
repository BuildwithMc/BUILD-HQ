"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Globe, Users, Zap, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function PersonalProjects() {
  const featuredProjects = [
    {
      title: "GreenPayer Payment App",
      category: "Web3 & DeFi",
      description: "Payment application for the M3tering protocol enabling green energy transactions",
      tech: ["React", "Web3", "Smart Contracts"],
      demoLink: "https://greenpayer.buildwithmc.com/",
      githubLink: "https://github.com/BuildwithMc/Greenpayer-Dapp",
      status: "Live",
      featured: true,
    },
    {
      title: "Culture Refi Ecosystem",
      category: "Web3 & DeFi",
      description: "Regenerative finance ecosystem with DAO, DeFi, and NFTs featuring $Cowry token",
      tech: ["Blockchain", "Smart Contracts", "IoT", "Celo"],
      demoLink: "http://culture-celo.herokuapp.com/",
      githubLink: "https://github.com/Ballox-by-Team-Wonder/culture",
      status: "Live",
      featured: true,
    },
    {
      title: "iSwear Legal Platform",
      category: "Legal Tech",
      description: "Virtual legal space for generating affidavits and legal document automation",
      tech: ["React", "Node.js", "Legal APIs"],
      demoLink: "https://ballox-by-team-wonder.github.io/iSwear-main/",
      githubLink: "https://github.com/Ballox-by-Team-Wonder/iSwear-main",
      status: "Live",
      featured: true,
    },
    {
      title: "Ballox Voting Platform",
      category: "Governance & Voting",
      description: "Blockchain-based voting system with voter ID tokenization on Polygon",
      tech: ["Ethereum", "Polygon", "Filecoin", "Smart Contracts"],
      demoLink: "https://ballox-by-team-wonder.github.io/Ballox-Web/index.html",
      githubLink: "https://github.com/Ballox-by-Team-Wonder/Ballox-Web",
      status: "Live",
      featured: true,
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web3 & DeFi":
        return Zap
      case "Legal Tech":
        return Users
      case "Governance & Voting":
        return Globe
      default:
        return Code
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web3 & DeFi":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
      case "Legal Tech":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Governance & Voting":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  return (
    <section id="projects" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Personal Projects</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore my portfolio of live applications, platforms, and tools that I've built, collaborated on, and
              contributed to across various domains including Web3, legal tech, and community platforms.
            </p>
            <Link href="/projects">
              <Button size="lg" className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white">
                <Code className="h-4 w-4 mr-2" />
                View All Projects
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = getCategoryIcon(project.category)
              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-[#3F72AF]" />
                        <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                      </div>
                      <Badge variant="outline" className="text-green-700 border-green-500">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                        onClick={() => window.open(project.demoLink, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-[#3F72AF] border-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 md:mt-16">
            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#3F72AF] mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Live Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#3F72AF] mb-2">5</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#3F72AF] mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-[#3F72AF] mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
