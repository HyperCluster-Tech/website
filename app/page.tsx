import Header from '../components/header'
import Hero from '../components/hero'
import Stats from '../components/stats'
import Research from '../components/research'
import Team from '../components/team'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

