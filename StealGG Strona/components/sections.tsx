import React from "react"
import { Shield, Skull, CreditCard, Dog, ExternalLink } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    id: "regulamin",
    title: "Regulamin",
    icon: Shield,
    description: "Zapoznaj się z zasadami panującymi na naszym serwerze. Przestrzeganie regulaminu zapewnia przyjemną grę dla wszystkich uczestników.",
    features: [
      "Zasady ogólne serwera",
      "Zasady RP i combat",
      "System kar i banów",
      "Prawa i obowiązki gracza"
    ],
    link: "/regulamin",
    external: true,
    buttonText: "Czytaj Regulamin"
  },
  {
    id: "crime",
    title: "Regulamin Crime",
    icon: Skull,
    description: "Odkryj świat przestępczości na Steal GG. Organizacje kryminalne, napady, handel i wiele więcej czeka na Ciebie.",
    features: [
      "Organizacje przestępcze",
      "System napadów",
      "Czarny rynek",
      "Wojny gangów"
    ],
    link: "/regulamin",
    external: true,
    buttonText: "Czytaj Regulamin"
  },
  {
    id: "platnosci",
    title: "Regulamin Płatności",
    icon: CreditCard,
    description: "Zapoznaj się z regulaminem płatności na serwerze Steal GG. Znajdziesz tu informacje o zwrotach, pakietach premium i zasadach zakupów.",
    features: [
      "Zasady zakupów",
      "Polityka zwrotów",
      "Pakiety premium",
      "Warunki usług"
    ],
    link: "/regulamin-platnosci",
    external: true,
    buttonText: "Czytaj Regulamin"
  },
  {
    id: "hounds",
    title: "Regulamin Hounds",
    icon: Dog,
    description: "Hounds to zespół odpowiedzialny za weryfikację graczy. Sprawdzamy komputery w celu wykrycia cheatów i nieuczciwego oprogramowania, dbając o fair play na serwerze.",
    features: [
      "Weryfikacja graczy",
      "Wykrywanie cheatów",
      "Kontrola oprogramowania",
      "Ochrona fair play"
    ],
    link: "/hounds",
    external: false,
    buttonText: "Czytaj Regulamin"
  }
]

export function Sections() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Poznaj </span>
            <span className="text-primary">Steal GG</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Wszystko czego potrzebujesz, aby rozpocząć swoją przygodę na naszym serwerze
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sections.map((section, index) => (
            <SectionCard key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface SectionType {
  id: string
  title: string
  icon: React.ElementType
  description: string
  features: string[]
  link: string
  external?: boolean
  buttonText: string
}

function SectionCard({ section, index }: { section: SectionType; index: number }) {
  const Icon = section.icon

  return (
    <div 
      id={section.id}
      className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {section.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {section.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-foreground/80">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <Link
        href={section.link}
        target={section.external ? "_blank" : undefined}
        rel={section.external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all group-hover:scale-105"
      >
        {section.buttonText}
        {section.external && <ExternalLink className="h-4 w-4" />}
      </Link>
    </div>
  )
}
