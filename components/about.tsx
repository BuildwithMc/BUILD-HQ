import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone } from "lucide-react"
import { NextSectionPrompt } from "@/components/next-section-prompt"

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#DBE2EF] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#3F72AF]/10 rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#3F72AF]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#3F72AF]/15 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#112D4E] mb-8 md:mb-16 animate-in slide-in-from-top duration-700">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-700 delay-200">
              <h3 className="text-xl md:text-2xl font-semibold text-[#112D4E] mb-4 md:mb-6">
                Driving Web3 Adoption Across Africa
              </h3>
              <p className="text-[#3F72AF] mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                I'm a passionate Builder & Organizer with over 3 years of experience building and organizing businesses,
                communities, programs, events, projects, partnerships, and marketing strategies that drive innovation
                and growth across Africa's tech ecosystem. Based in Enugu State, Nigeria, I specialize in turning vision
                into reality through strategic execution and community-driven initiatives.
              </p>
              <p className="text-[#3F72AF] mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                From DevRel to operations management, I've successfully built thriving developer communities, organized
                events with 800+ attendees, led hackathons with 150+ developers, and secured partnerships with 15+ tech
                companies. My work spans across Web3 adoption, community building, and ecosystem development throughout
                Southeastern Nigeria and beyond.
              </p>
              <p className="text-[#3F72AF] leading-relaxed text-sm md:text-base">
                I'm committed to empowering the next generation of African builders and fostering innovation in the tech
                ecosystem. Whether it's organizing impactful events, building strategic partnerships, or managing
                complex operations, I bring a unique combination of technical expertise and community leadership to
                every project.
              </p>
            </div>

            <div className="space-y-4 animate-in slide-in-from-right duration-700 delay-400">
              <Card className="bg-white border-[#3F72AF] hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-[#112D4E] text-sm md:text-base">Location</h4>
                      <p className="text-[#3F72AF] text-sm md:text-base">Enugu State, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#3F72AF] hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-[#112D4E] text-sm md:text-base">Email</h4>
                      <p className="text-[#3F72AF] text-sm md:text-base">mc@buildwithmc.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-[#3F72AF] hover:scale-105 hover:rotate-1 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-[#112D4E] text-sm md:text-base">Phone</h4>
                      <p className="text-[#3F72AF] text-sm md:text-base">+2348106212763</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <NextSectionPrompt
        nextSection="skills"
        message="Ready to explore my expertise?"
        buttonText="Check Out My Skills"
      />
    </section>
  )
}
