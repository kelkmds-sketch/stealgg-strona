import { 
  Crosshair, 
  Car, 
  Building2, 
  Shirt, 
  Users, 
  Trophy,
  MapPin,
  Wrench
} from "lucide-react"

const features = [
  {
    icon: Crosshair,
    title: "System Bojówkowy",
    description: "Zaawansowany system walki z różnorodnymi broniami i taktykami"
  },
  {
    icon: Car,
    title: "Unikalne Pojazdy",
    description: "Szeroki wybór custom pojazdów dostosowanych do każdego stylu gry"
  },
  {
    icon: Building2,
    title: "Custom Interiory",
    description: "Własne wnętrza budynków stworzone specjalnie dla naszego serwera"
  },
  {
    icon: Shirt,
    title: "Custom Ubrania",
    description: "Tysiące unikalnych ubrań i akcesoriów dla Twojej postaci"
  },
  {
    icon: Users,
    title: "Aktywna Społeczność",
    description: "Przyjazna i aktywna społeczność graczy z całej Polski"
  },
  {
    icon: Trophy,
    title: "System Rang",
    description: "Rozbudowany system progresji z nagrodami i przywilejami"
  },
  {
    icon: MapPin,
    title: "Custom Lokacje",
    description: "Unikalne miejsca i tereny stworzone dla lepszych doświadczeń"
  },
  {
    icon: Wrench,
    title: "Ciągły Rozwój",
    description: "Regularne aktualizacje i nowe funkcje dodawane przez zespół"
  }
]

export function Features() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Funkcje </span>
            <span className="text-primary">Serwera</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Steal GG oferuje wiele unikalnych funkcji, które wyróżniają nas na tle konkurencji
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
