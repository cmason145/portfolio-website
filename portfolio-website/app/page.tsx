import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { AboutSection } from "@/components/about"
import { ProjectsSection } from "@/components/projects"
import { ContactSection } from "@/components/contact"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

