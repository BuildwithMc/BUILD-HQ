import { Github, Linkedin, Twitter, MessageCircle, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { href: "/", label: "Home" },
      { href: "/#about", label: "About" },
      { href: "/career", label: "Career" },
      { href: "/events", label: "Events" },
      { href: "/#speaking", label: "Speaking" },
    ],
    connect: [
      { href: "/#partners", label: "Partners" },
      { href: "/#contact", label: "Contact" },
      { href: "mailto:mc@buildwithmc.com", label: "Email" },
      { href: "tel:+2348106212763", label: "Phone" },
    ],
  }

  const socialLinks = [
    {
      href: "https://linkedin.com/in/mmerichukwu-anosike",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Roarnotes",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "#",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "#",
      icon: MessageCircle,
      label: "Discord",
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#3F72AF] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">MC</span>
                </div>
                <div>
                  <div className="text-foreground font-bold text-lg">Buildwithmc</div>
                  <div className="text-muted-foreground text-sm">Builder & Organizer</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                I build and organize businesses, communities, programs, events, projects, partnerships, and marketing
                strategies that drive innovation and growth across Africa's tech ecosystem.
              </p>
              <div className="text-sm text-muted-foreground">
                <div className="mb-1">📍 Enugu State, Nigeria</div>
                <div className="mb-1">💼 Operations Manager @ CafeOne Enugu</div>
                <div>🌍 Building Web3 Communities Across Africa</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#3F72AF] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#3F72AF] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-border">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="text-muted-foreground hover:text-[#3F72AF] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} Buildwithmc. Coded with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by MC</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground">
              Building the future of Web3 in Africa • Community • Developer Relations • Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
