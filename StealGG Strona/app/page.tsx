import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Sections } from "@/components/sections"
import { HowToJoin } from "@/components/how-to-join"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Sections />
      <HowToJoin />
      <Footer />
    </main>
  )
}
