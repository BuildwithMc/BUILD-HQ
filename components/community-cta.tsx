"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Mail, Users, Bell } from "lucide-react"
import { HammerClick } from "@/components/hammer-click"

export function CommunityCTA() {
  const handleYouTubeSubscribe = () => {
    window.open("https://www.youtube.com/@Buildwithmc", "_blank")
  }

  const handleNewsletterSignup = () => {
    window.open("https://buildwithmc.substack.com", "_blank")
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#3F72AF] to-[#2d5a8f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-white mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Join the Community</h2>
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with fellow builders, get exclusive content, and stay updated on the latest tutorials and insights.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* YouTube CTA */}
            <HammerClick onClick={handleYouTubeSubscribe}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 md:p-8 text-center">
                  <Youtube className="h-12 w-12 text-red-400 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-3">Subscribe on YouTube</h3>
                  <p className="text-white/80 mb-6 text-sm md:text-base">
                    Get practical tutorials on building tech programs, applications, communities, and events from the
                    ground up.
                  </p>
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white w-full hover:scale-110 transition-all duration-300"
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </HammerClick>

            {/* Newsletter CTA */}
            <HammerClick onClick={handleNewsletterSignup}>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 md:p-8 text-center">
                  <Bell className="h-12 w-12 text-white mx-auto mb-4 animate-bounce" />
                  <h3 className="text-xl font-bold text-white mb-3">Join the Newsletter</h3>
                  <p className="text-white/80 mb-6 text-sm md:text-base">
                    Get exclusive weekly tips, behind-the-scenes content, and resources I don't share anywhere else.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#3F72AF] w-full hover:scale-110 transition-all duration-300 bg-transparent"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Join Newsletter
                  </Button>
                </CardContent>
              </Card>
            </HammerClick>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/70 text-sm">Join thousands of builders already in the community • No spam, ever</p>
          </div>
        </div>
      </div>
    </section>
  )
}
