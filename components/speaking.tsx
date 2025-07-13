"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, Users, Globe, Star, Download, ArrowRight } from "lucide-react"

export function Speaking() {
  const speakingTopics = [
    {
      title: "Developer Relations & Community Building",
      description: "Building thriving tech communities and driving developer adoption",
      icon: Users,
      tags: ["DevRel", "Community", "Growth"],
    },
    {
      title: "Web3 & Blockchain Adoption in Africa",
      description: "Strategies for accelerating blockchain technology adoption across African markets",
      icon: Globe,
      tags: ["Web3", "Blockchain", "Africa"],
    },
    {
      title: "Event Organization & Management",
      description: "From hackathons to conferences: organizing impactful tech events",
      icon: Star,
      tags: ["Events", "Hackathons", "Management"],
    },
    {
      title: "Ecosystem Building & Partnerships",
      description: "Creating sustainable tech ecosystems through strategic partnerships",
      icon: Mic,
      tags: ["Partnerships", "Ecosystem", "Strategy"],
    },
  ]

  const speakingStats = [
    { number: "20+", label: "Events Spoken At" },
    { number: "5,000+", label: "Audience Reached" },
    { number: "15+", label: "Cities Covered" },
    { number: "3", label: "Countries" },
  ]

  const testimonials = [
    {
      quote:
        "MC brought incredible energy and practical insights to our Web3 conference. His community building expertise resonated with everyone.",
      author: "Conference Organizer",
      event: "Web3 Lagos 2024",
    },
    {
      quote:
        "His presentation on developer relations was both inspiring and actionable. Our community grew significantly after implementing his strategies.",
      author: "Tech Community Lead",
      event: "Enugu Tech Fest",
    },
  ]

  return (
    <section id="speaking" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4">
              <Mic className="h-8 w-8 text-[#3F72AF] mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Speaking & Conferences</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              I'm available to speak at your events and conferences, sharing insights on community building, Web3
              adoption, and tech ecosystem development across Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#3F72AF] hover:bg-[#2d5a8f] text-white"
                onClick={() => window.open("https://profile.buildwithmc.com", "_blank")}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Speaker Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Me to Speak
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Speaking Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 md:mb-16">
            {speakingStats.map((stat, index) => (
              <Card key={index} className="text-center bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#3F72AF] mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Speaking Topics */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Speaking Topics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {speakingTopics.map((topic, index) => {
                const IconComponent = topic.icon
                return (
                  <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center mb-3">
                        <IconComponent className="h-6 w-6 text-[#3F72AF] mr-3" />
                        <CardTitle className="text-lg text-foreground">{topic.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {topic.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs text-[#3F72AF] border-[#3F72AF]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">What Event Organizers Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-muted border-border">
                  <CardContent className="p-6">
                    <blockquote className="text-muted-foreground italic mb-4">"{testimonial.quote}"</blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-[#3F72AF]">{testimonial.event}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact for Speaking */}
          <Card className="bg-[#3F72AF] text-white text-center">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Have Me Speak at Your Event?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how I can add value to your conference, meetup, or corporate event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-[#3F72AF] hover:bg-gray-100"
                  onClick={() => window.open("https://profile.buildwithmc.com", "_blank")}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Speaker Profile
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#3F72AF] bg-transparent"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
