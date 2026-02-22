import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Users, Shield, Zap } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <Image
              src="/logo.png"
              alt="Steal GG Logo"
              width={400}
              height={150}
              className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-foreground">Witaj na </span>
            <span className="text-primary">Steal GG</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Najlepszy serwer <span className="text-primary font-semibold">FiveM typu bojówka</span>. 
            Dołącz do naszej społeczności i przeżyj niesamowitą przygodę pełną akcji, 
            rywalizacji i niezapomnianych momentów!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="fivem://connect/play.stealgg.pl"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Play className="h-5 w-5" />
              Graj Teraz
            </Link>
            <Link
              href="https://discord.gg/stealgg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary/80 transition-all border border-border hover:border-primary/50"
            >
              Dołącz do Discord
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl">
            <StatCard icon={Users} value="1000+" label="Graczy" />
            <StatCard icon={Shield} value="24/7" label="Ochrona" />
            <StatCard icon={Zap} value="60+" label="FPS" />
            <StatCard icon={Play} value="Aktywny" label="Rozwój" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    null
  )
}
