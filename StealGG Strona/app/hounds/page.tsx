import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HoundsPage() {
  const playerRights = [
    {
      title: "Odmowy sprawdzania przez konkretnego Houndsa",
      description: "W takiej sytuacji sprawdzanie może zostać przeprowadzone przez innego dostępnego Houndsa. Jeżeli żaden inny Hounds nie jest dostępny, prawo to nie obowiązuje, a gracz ma obowiązek poddać się sprawdzaniu. W trakcie całego procesu gracz musi udostępniać ekran oraz nie opuszczać gry."
    },
    {
      title: "Odmowy pokazywania prywatnych wiadomości oraz innych prywatnych konwersacji",
      description: "Wyjątkiem są wiadomości pochodzące od botów Discorda, które nie są traktowane jako prywatna korespondencja."
    },
    {
      title: "Odmowy sprawdzania z użyciem programów do zdalnego sterowania urządzeniem",
      description: "(AnyDesk, RustDesk, TeamViewer) wyłącznie wobec rangi Trial Hounds."
    }
  ]

  const playerObligations = [
    "Niezwłocznie po wezwaniu stawić się na wyznaczonym kanale oczekiwania na sprawdzanie.",
    "W przypadku sprawdzania przy użyciu AnyDesk lub podobnego oprogramowania, gracz nie może poruszać myszką ani ingerować w proces sprawdzania. Celowe lub powtarzające się utrudnianie sprawdzania traktowane jest jako brak współpracy i może skutkować banem permanentnym.",
    "Nie nagrywać przebiegu sprawdzania. W przypadku obaw co do przebiegu sprawdzania gracz ma prawo zmienić Houndsa, o ile dostępna jest inna osoba uprawniona do jego przeprowadzenia.",
    "Pobrać wszystkie pliki wymagane przez Houndsa. W przypadku wątpliwości gracz ma obowiązek skontaktować się z zarządem serwera lub opiekunem zespołu Hounds.",
    "Pobrać oraz uruchomić wszystkie programy skanujące wskazane przez Houndsa, w tym m.in. Ocean oraz Detect.ac. Gracz ma prawo odmówić instalacji Storm.ac oraz innych nieznanych lub niewymaganych skanerów.",
    "Niezwłocznie po przeniesieniu na kanał sprawdzania udostępnić ekran swojego komputera."
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Steal GG Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sprawdzanie gracza przez administrację{" "}
              <span className="text-primary">(Hounds)</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Zapoznaj się z zasadami dotyczącymi sprawdzania graczy przez zespół Hounds
            </p>
          </div>

          {/* Player Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Gracz ma prawo do:</h2>
            </div>
            <div className="space-y-4">
              {playerRights.map((right, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{right.title}</h3>
                  <p className="text-muted-foreground">{right.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Player Obligations */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-foreground">Gracz ma obowiązek:</h2>
            </div>
            <div className="bg-card border border-border/50 rounded-lg p-6">
              <ul className="space-y-4">
                {playerObligations.map((obligation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-foreground/90">{obligation}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Warning */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <p className="text-foreground font-medium">
              Nieprzestrzeganie powyższych zasad może skutkować banem permanentnym na serwerze.
            </p>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Powrót do strony głównej
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
