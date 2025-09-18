import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import TechStack from '@/components/sections/TechStack'
import Projects from '@/components/sections/Projects'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Footer />
    </main>
  );
}
