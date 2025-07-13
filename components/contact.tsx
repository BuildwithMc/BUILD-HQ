"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { HammerClick } from "@/components/hammer-click"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendEmail = () => {
    const { name, email, subject, message } = formData

    // Create email body with form data
    const emailBody = `Hi MC,

My name is ${name} and I'm reaching out regarding: ${subject}

${message}

Best regards,
${name}
${email}`

    // Create mailto link
    const mailtoLink = `mailto:mc@buildwithmc.com?subject=${encodeURIComponent(
      subject || "Contact from buildwithmc.com",
    )}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink
  }

  const handleWhatsApp = () => {
    const message = `Hi MC! I'm reaching out from your website. I'd like to connect with you.`
    const whatsappLink = `https://wa.me/2348106212763?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
  }

  const handleDirectEmail = () => {
    window.location.href = "mailto:mc@buildwithmc.com"
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section id="contact" className="py-12 md:py-20 bg-[#112D4E] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#3F72AF]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-[#DBE2EF]/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#3F72AF]/20 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-16 animate-in slide-in-from-top duration-700">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="animate-in slide-in-from-left duration-700 delay-200">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Let's Connect</h3>
              <p className="text-[#DBE2EF] mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                I'm always excited to connect with fellow developers, community builders, and Web3 enthusiasts. Whether
                you're looking to collaborate on a project, need developer relations expertise, or want to discuss the
                future of decentralized technologies, I'd love to hear from you.
              </p>

              <div className="space-y-4 mb-6 md:mb-8">
                <HammerClick>
                  <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Email</h4>
                      <p className="text-[#DBE2EF] text-sm md:text-base">mc@buildwithmc.com</p>
                      <p className="text-xs md:text-sm text-gray-400">Buildwithmc@gmail.com</p>
                    </div>
                  </div>
                </HammerClick>

                <HammerClick>
                  <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Phone</h4>
                      <p className="text-[#DBE2EF] text-sm md:text-base">+2348106212763</p>
                    </div>
                  </div>
                </HammerClick>

                <HammerClick>
                  <div className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#3F72AF] animate-pulse" />
                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">Location</h4>
                      <p className="text-[#DBE2EF] text-sm md:text-base">Enugu State, Nigeria</p>
                    </div>
                  </div>
                </HammerClick>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <HammerClick onClick={handleWhatsApp}>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white hover:scale-105 transition-all duration-300">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Me
                  </Button>
                </HammerClick>
                <HammerClick onClick={handleDirectEmail}>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF] hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </HammerClick>
              </div>

              <div className="flex space-x-4">
                <HammerClick>
                  <a
                    href="https://linkedin.com/in/mmerichukwu-anosike"
                    className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </HammerClick>
                <HammerClick>
                  <a
                    href="https://github.com/Roarnotes"
                    className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </HammerClick>
                <HammerClick>
                  <a
                    href="#"
                    className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                  >
                    <Twitter className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </HammerClick>
                <HammerClick>
                  <a
                    href="#"
                    className="text-[#DBE2EF] hover:text-[#3F72AF] transition-all duration-300 hover:scale-125 hover:rotate-12"
                  >
                    <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
                  </a>
                </HammerClick>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in slide-in-from-right duration-700 delay-400">
              <Card className="bg-[#1a3a5c] border-[#3F72AF] hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg md:text-xl">Send a Message</CardTitle>
                  <p className="text-sm text-[#DBE2EF]">Fill out the form and click to open your email client</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-[#112D4E] border-[#3F72AF] text-white placeholder:text-gray-400 focus:border-[#DBE2EF] hover:scale-105 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-[#112D4E] border-[#3F72AF] text-white placeholder:text-gray-400 focus:border-[#DBE2EF] hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-[#112D4E] border-[#3F72AF] text-white placeholder:text-gray-400 focus:border-[#DBE2EF] hover:scale-105 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-[#112D4E] border-[#3F72AF] text-white placeholder:text-gray-400 focus:border-[#DBE2EF] resize-none hover:scale-105 transition-all duration-300"
                      />
                    </div>

                    <HammerClick onClick={handleSendEmail}>
                      <Button
                        disabled={!isFormValid}
                        className="w-full bg-[#3F72AF] hover:bg-[#2d5a8f] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-all duration-300"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Open Email Client
                      </Button>
                    </HammerClick>

                    <p className="text-xs text-[#DBE2EF] text-center">
                      This will open your default email app with the message pre-filled
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
