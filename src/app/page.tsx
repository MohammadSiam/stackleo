import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Team from '@/components/sections/Team'
import Services from '@/components/sections/Services'
import WhyUs from '@/components/sections/WhyUs'
import HowWeWork from '@/components/sections/HowWeWork'
import Portfolio from '@/components/sections/Portfolio'
import CtaBanner from '@/components/sections/CtaBanner'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <WhyUs />
        <HowWeWork />
        <Portfolio />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
