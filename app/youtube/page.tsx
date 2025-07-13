"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Play,
  Users,
  Video,
  ArrowLeft,
  ExternalLink,
  Youtube,
  Code,
  Calendar,
  Target,
  BookOpen,
  Mail,
  Star,
  MessageCircle,
  Linkedin,
  Twitter,
  Github,
  PowerIcon as Gear,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HammerClick } from "@/components/hammer-click"

// Recent videos data
const recentVideos = [
  {
    id: "BzzVkPp1UAc",
    title: "Building Web3 Communities in Africa",
    description:
      "Learn how to build and grow thriving Web3 communities across Africa with practical strategies and real-world examples.",
    duration: "15:32",
    views: "2.1K",
    uploadDate: "2 weeks ago",
    thumbnail: `https://img.youtube.com/vi/BzzVkPp1UAc/maxresdefault.jpg`,
  },
  {
    id: "t2tPYjcgN8E",
    title: "Developer Relations Best Practices",
    description: "Essential DevRel strategies for building developer communities and driving technology adoption.",
    duration: "12:45",
    views: "1.8K",
    uploadDate: "3 weeks ago",
    thumbnail: `https://img.youtube.com/vi/t2tPYjcgN8E/maxresdefault.jpg`,
  },
  {
    id: "vqJ-nvrVPLU",
    title: "Event Planning for Tech Communities",
    description: "Complete guide to organizing successful tech events, from hackathons to conferences.",
    duration: "18:20",
    views: "3.2K",
    uploadDate: "1 month ago",
    thumbnail: `https://img.youtube.com/vi/vqJ-nvrVPLU/maxresdefault.jpg`,
  },
  {
    id: "gopo-ejF4bk",
    title: "Building Your First DApp",
    description: "Step-by-step tutorial on creating your first decentralized application from scratch.",
    duration: "25:15",
    views: "4.5K",
    uploadDate: "1 month ago",
    thumbnail: `https://img.youtube.com/vi/gopo-ejF4bk/maxresdefault.jpg`,
  },
  {
    id: "example5",
    title: "Zero to Deployed: React App",
    description: "Build and deploy a complete React application from scratch to production.",
    duration: "32:10",
    views: "5.2K",
    uploadDate: "2 months ago",
    thumbnail: `https://img.youtube.com/vi/example5/maxresdefault.jpg`,
  },
  {
    id: "example6",
    title: "Community Management Masterclass",
    description: "Advanced strategies for managing and growing tech communities effectively.",
    duration: "22:45",
    views: "3.8K",
    uploadDate: "2 months ago",
    thumbnail: `https://img.youtube.com/vi/example6/maxresdefault.jpg`,
  },
]

export default function YouTubePage() {
  const [email, setEmail] = useState("")
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null)

  const handleNewsletterSignup = () => {
    if (email) {
      window.open(`https://buildwithmc.substack.com`, "_blank")
      setEmail("")
    }
  }

  const latestVideo = recentVideos[0]
  const otherVideos = recentVideos.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Section 1: Hero Section */}
      <section className="bg-gradient-to-br from-[#112D4E] to-[#1a3a5c] dark:from-[#0a1a2e] dark:to-[#1a2332] pt-20 pb-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-[#3F72AF]/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="flex items-center text-[#3F72AF] hover:text-[#DBE2EF] mb-8 transition-colors animate-in slide-in-from-left duration-500"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in slide-in-from-top duration-700">
                Turn Your Tech Idea Into Reality
              </h1>
              <p className="text-lg md:text-xl text-[#DBE2EF] mb-8 leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
                Buildwithmc is your guide to building impactful tech programs, applications, communities, and events.
                Learn the complete lifecycle, from code to community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-in slide-in-from-bottom duration-700 delay-400">
                <HammerClick>
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 hover:scale-110 transition-all duration-300"
                    onClick={() => window.open("https://www.youtube.com/@Buildwithmc", "_blank")}
                  >
                    <Youtube className="h-5 w-5 mr-2" />
                    SUBSCRIBE ON YOUTUBE
                  </Button>
                </HammerClick>
                <HammerClick>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-[#3F72AF] hover:text-white hover:bg-[#3F72AF]/50 text-lg px-8 py-4 hover:scale-110 transition-all duration-300"
                    onClick={() => document.getElementById("recent-videos")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Watch the Latest Video →
                  </Button>
                </HammerClick>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof & Credibility */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 animate-in slide-in-from-top duration-700">
              Join Over 1,000+ Builders
            </h2>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* YouTube Stats */}
              <div className="animate-in slide-in-from-left duration-700">
                <div className="flex items-center justify-center mb-4">
                  <Youtube className="h-8 w-8 text-red-500 mr-3" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">Growing</div>
                    <div className="text-muted-foreground">YouTube Subscribers</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="animate-in slide-in-from-bottom duration-700 delay-200">
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground italic text-sm">
                      "MC's tutorials are incredibly practical. I built my first community platform following his
                      guides!"
                    </blockquote>
                    <div className="text-xs text-muted-foreground mt-2">- Community Member</div>
                  </CardContent>
                </Card>
              </div>

              {/* Experience */}
              <div className="animate-in slide-in-from-right duration-700 delay-400">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-[#3F72AF] mr-3" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">3+ Years</div>
                    <div className="text-muted-foreground">Building Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Channel Focus */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-in slide-in-from-top duration-700">
              What You'll Learn to Build
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Build Systems & Applications */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-left duration-700">
                  <CardHeader className="text-center">
                    <Code className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <CardTitle className="text-xl text-foreground">Build Systems & Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Master the full stack. We go from Zero to Deployed, building real-world applications, systems, and
                      project architecture.
                    </p>
                  </CardContent>
                </Card>
              </HammerClick>

              {/* Build Events & Programs */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-700 delay-200">
                  <CardHeader className="text-center">
                    <Calendar className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <CardTitle className="text-xl text-foreground">Build Events & Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Learn the playbook for running successful hackathons, virtual summits, and mentorship programs
                      that create a buzz.
                    </p>
                  </CardContent>
                </Card>
              </HammerClick>

              {/* Build Communities & Projects */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right duration-700 delay-400">
                  <CardHeader className="text-center">
                    <Users className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <CardTitle className="text-xl text-foreground">Build Communities & Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Discover the secrets to starting, growing, and engaging a thriving tech community from the ground
                      up.
                    </p>
                  </CardContent>
                </Card>
              </HammerClick>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Recent Videos & Embedded Player */}
      <section id="recent-videos" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-in slide-in-from-top duration-700">
              Fresh From The Channel
            </h2>

            {/* Main Featured Video */}
            <div className="mb-12 animate-in slide-in-from-bottom duration-700">
              <Card className="bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${latestVideo.id}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={latestVideo.title}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{latestVideo.title}</h3>
                  <p className="text-muted-foreground mb-4">{latestVideo.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{latestVideo.views} views</span>
                    <span>{latestVideo.uploadDate}</span>
                    <span>{latestVideo.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Gallery */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {otherVideos.slice(0, 6).map((video, index) => (
                <HammerClick key={video.id}>
                  <Card
                    className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom duration-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{video.description}</p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                        <span>{video.views} views</span>
                        <span>{video.uploadDate}</span>
                      </div>
                      <Button
                        size="sm"
                        className="w-full bg-red-600 hover:bg-red-700 text-white hover:scale-105 transition-all duration-300"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                    </CardContent>
                  </Card>
                </HammerClick>
              ))}
            </div>

            {/* See All Videos CTA */}
            <div className="text-center animate-in slide-in-from-bottom duration-700 delay-600">
              <HammerClick>
                <Button
                  size="lg"
                  className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white hover:scale-110 transition-all duration-300"
                  onClick={() => window.open("https://www.youtube.com/@Buildwithmc/videos", "_blank")}
                >
                  <Video className="h-4 w-4 mr-2" />
                  SEE ALL VIDEOS
                </Button>
              </HammerClick>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Newsletter */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#3F72AF] to-[#2d5a8f]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-in slide-in-from-top duration-700">
              Go Beyond the Videos
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
              Join the 'Buildwithmc' newsletter and get exclusive weekly tips, behind-the-scenes content, and resources
              I don't share anywhere else.
            </p>

            <div className="max-w-md mx-auto animate-in slide-in-from-bottom duration-700 delay-400">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 hover:scale-105 transition-all duration-300"
                />
                <HammerClick onClick={handleNewsletterSignup}>
                  <Button
                    className="bg-white text-[#3F72AF] hover:bg-gray-100 hover:scale-110 transition-all duration-300 whitespace-nowrap"
                    disabled={!email}
                  >
                    JOIN THE COMMUNITY
                  </Button>
                </HammerClick>
              </div>
              <p className="text-white/70 text-sm mt-4">No spam, ever. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Builder's Hub */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-in slide-in-from-top duration-700">
              Let's Build Together
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* YouTube Playlists */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-left duration-700">
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">BROWSE BY TOPIC</h3>
                    <p className="text-muted-foreground mb-6">
                      Explore organized playlists: App Builds, Event Planning, Community Management, and more.
                    </p>
                    <Button
                      className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white hover:scale-110 transition-all duration-300"
                      onClick={() => window.open("https://www.youtube.com/@Buildwithmc/playlists", "_blank")}
                    >
                      <Video className="h-4 w-4 mr-2" />
                      View Playlists
                    </Button>
                  </CardContent>
                </Card>
              </HammerClick>

              {/* Tools & Resources */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right duration-700 delay-200">
                  <CardContent className="p-8 text-center">
                    <Gear className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">MY RECOMMENDED GEAR & TOOLS</h3>
                    <p className="text-muted-foreground mb-6">
                      Discover the tools and resources I use to build applications, manage communities, and create
                      content.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white hover:scale-110 transition-all duration-300 bg-transparent"
                      onClick={() => window.open("https://buildwithmc.com/tools", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Tools
                    </Button>
                  </CardContent>
                </Card>
              </HammerClick>

              {/* Social Media */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-left duration-700 delay-400">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">FOLLOW ON SOCIAL</h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with me on LinkedIn, Twitter, and GitHub for updates and behind-the-scenes content.
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#3F72AF] hover:text-[#2d5a8f] hover:scale-125 transition-all duration-300"
                        onClick={() => window.open("https://linkedin.com/in/mmerichukwu-anosike", "_blank")}
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#3F72AF] hover:text-[#2d5a8f] hover:scale-125 transition-all duration-300"
                        onClick={() => window.open("https://github.com/Roarnotes", "_blank")}
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#3F72AF] hover:text-[#2d5a8f] hover:scale-125 transition-all duration-300"
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </HammerClick>

              {/* Contact */}
              <HammerClick>
                <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in slide-in-from-right duration-700 delay-600">
                  <CardContent className="p-8 text-center">
                    <Mail className="h-12 w-12 text-[#3F72AF] mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">GET IN TOUCH</h3>
                    <p className="text-muted-foreground mb-6">
                      Have a project idea or want to collaborate? Let's discuss how we can build something amazing
                      together.
                    </p>
                    <Button
                      variant="outline"
                      className="border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white hover:scale-110 transition-all duration-300 bg-transparent"
                      onClick={() => (window.location.href = "mailto:mc@buildwithmc.com")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </HammerClick>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
