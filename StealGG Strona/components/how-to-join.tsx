import Link from "next/link"
import { Download, UserPlus, Gamepad2, ArrowRight } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Download,
    title: "Pobierz FiveM",
    description: "Pobierz i zainstaluj klienta FiveM ze strony fivem.net. Jest to wymagane do gry na naszym serwerze."
  },
  {
    step: 2,
    icon: UserPlus,
    title: "Dołącz do Discord",
    description: "Dołącz do naszego serwera Discord, aby być na bieżąco z aktualizacjami i poznać społeczność."
  },
  {
    step: 3,
    icon: Gamepad2,
    title: "Połącz się z serwerem",
    description: "Wpisz play.stealgg.pl w wyszukiwarce FiveM lub kliknij przycisk 'Graj Teraz' i rozpocznij przygodę!"
  }
]

export function HowToJoin() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Jak </span>
            <span className="text-primary">Dołączyć?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dołączenie do Steal GG jest proste i zajmuje tylko kilka minut
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-card border-2 border-primary/30 rounded-2xl flex items-center justify-center group hover:border-primary transition-colors">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="fivem://connect/play.stealgg.pl"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Graj Teraz
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="https://discord.gg/stealgg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Lub dołącz do Discord
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
