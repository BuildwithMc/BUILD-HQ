"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, Linkedin, ChevronDown, ChevronUp } from "lucide-react"

export function Testimonials() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  const testimonials = [
    {
      name: "PreciousRuby Okeke",
      title: "Social Media Marketer | Content Strategist",
      company: "Growth Specialist",
      content:
        "Mmeli is an excellent business developer, and Community manager. I have happened to work with him on few projects, and one thing that stands out for me when I work with Mmeli, is how professional, and intentional he is about his work and clients. He is someone I will really recommend for the job, and great at not only connecting but leading people in given projects.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/mmerichukwu-anosike",
      relationship: "Worked with Mmerichukwu on the same team",
      date: "June 1, 2023",
    },
    {
      name: "Damilare Oyetade",
      title: "Project Manager | Agile | Workflow Optimization",
      company: "SideHustle",
      content:
        "Only one word comes to mind when I think of Mmerichukwu, and that's AWESOME. I've worked with many Ambassadors but Mmerichukwu was one of the best. He consistently gave 100% of himself to the team, and was critical in ensuring targets are met. He was always reliable and professional, and at stressful times he was a positive influence on all. I would recommend him over again to anyone looking to hire him.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/mmerichukwu-anosike",
      relationship: "Managed Mmerichukwu directly",
      date: "September 24, 2022",
    },
    {
      name: "I. Christwin Jr.",
      title: "Founder & Captain",
      company: "Team Switch",
      content:
        "I met Mmerichukwu Anosike back in 2020 and we have been working together ever since. He is a co-founder of our company and a business developer. Mmerichukwu is a very talented person who has helped us a lot with his knowledge, skills, and experience. He is one of the most hardworking people I've ever known, yet he's also always happy to help out when it comes time for the team to make important decisions or do something special for the business. He knows how to motivate people around him and make them feel like they're part of something special, which makes him an incredible leader. His focus on quality is unmatched by anyone else I know, so I'm always confident that whatever we're working on will turn out great!",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/mmerichukwu-anosike",
      relationship: "Co-founder and Business Partner",
      date: "Long-term collaboration since 2020",
    },
    {
      name: "Afam Daniel Madu",
      title: "Innovation and Research Scientist",
      company: "Roar Nigeria",
      content:
        "I met Mmerichukwu as a Startup Incubatee, in cohort 4. He was a co-founder of a biogas startup that is now merged with a solar power startup. Ever since I have known him, I can say that he is one young man who thinks where there is no box. His dedication to team work is indispensable and the positive energy to push a team beyond her limits. He demonstrated this with his previous startup and currently one of the backbones of his current startup. He is still an Incubatee under my mentorship, but I would recommend him to any team or organisation as he processes the right skill sets to drive success out it.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/mmerichukwu-anosike",
      relationship: "Mentor and Incubation Hub Leader",
      date: "Ongoing mentorship relationship",
    },
    {
      name: "Glory Uchechukwu Amadife",
      title: "CEO",
      company: "Rethink Tech Ltd",
      content:
        "You're one of the biggest blessings that Roar Nigeria Incubation Hub gave me. It's been an awesome experience working with you, your multitasking and digital skills are somewhat amazing and I thank God for having such a wonderful person as my teammate.",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/mmerichukwu-anosike",
      relationship: "CEO and Teammate",
      date: "Professional collaboration",
    },
  ]

  const truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + "..."
  }

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Real testimonials and LinkedIn recommendations from colleagues, partners, and leaders I've worked with
              across various projects and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedCards.has(index)
              const shouldTruncate = testimonial.content.length > 150

              return (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="h-8 w-8 text-[#3F72AF] opacity-60" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-muted-foreground italic mb-4 flex-grow text-sm leading-relaxed">
                      "{isExpanded || !shouldTruncate ? testimonial.content : truncateText(testimonial.content)}"
                    </blockquote>

                    {shouldTruncate && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCard(index)}
                        className="self-start mb-4 text-[#3F72AF] hover:text-[#2d5a8f] p-0 h-auto font-normal"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="h-4 w-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Read More <ChevronDown className="h-4 w-4 ml-1" />
                          </>
                        )}
                      </Button>
                    )}

                    <div className="space-y-3 mt-auto">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-[#3F72AF] leading-tight">{testimonial.title}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                        </div>
                        <a
                          href={testimonial.linkedinUrl}
                          className="text-[#3F72AF] hover:text-[#2d5a8f] transition-colors ml-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View LinkedIn Profile"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>

                      <div className="pt-2 border-t border-border">
                        <div className="text-xs text-muted-foreground">
                          <div className="font-medium">{testimonial.relationship}</div>
                          {testimonial.date && <div className="opacity-75">{testimonial.date}</div>}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16">
            <Card className="bg-[#3F72AF] text-white">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Work Together?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join the growing list of satisfied partners and collaborators. Let's build something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-white text-[#3F72AF] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start a Conversation
                  </button>
                  <button
                    className="border-2 border-white text-white hover:bg-white hover:text-[#3F72AF] px-6 py-3 rounded-lg font-semibold transition-colors bg-transparent"
                    onClick={() => window.open("https://linkedin.com/in/mmerichukwu-anosike", "_blank")}
                  >
                    View LinkedIn Profile
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
