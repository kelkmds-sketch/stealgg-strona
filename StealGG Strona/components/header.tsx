"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Strona Główna", href: "#home" },
  { name: "Regulamin", href: "#regulamin" },
  { name: "Crime", href: "#crime" },
  { name: "Płatności", href: "#platnosci" },
  { name: "Hounds", href: "#hounds" },
  { name: "Sklep", href: "https://sklep.stealgg.pl", external: true },
  { name: "Discord", href: "https://discord.gg/stealgg", external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Steal GG Logo"
              width={160}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Connect Button */}
          <Link
            href="fivem://connect/play.stealgg.pl"
            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
          >
            Połącz się
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="fivem://connect/play.stealgg.pl"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all mt-2"
              >
                Połącz się
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
