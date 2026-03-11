import { useEffect } from 'react'
import HeroMain from './Components/HeroMain'
import WhySection from './Components/WhySection'
import ServicesSection from './Components/ServicesSection'
import FounderStorySection from './Components/FounderStorySection'
import { PricingSection } from './Components/PricingSection'
import ScheduleSection from './Components/ScheduleSection'
import WavyLine from './Components/WavyLine'
import Header from './Components/Header'
import { Helmet } from 'react-helmet';
import BlogHome from './Components/BlogHome'

function Homepage() {
  useEffect(() => {
    const sectionIds = ['why', 'services', 'pricing', 'schedule']

    const getActiveHash = () => {
      const marker = 140
      let activeHash = null

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= marker) {
          activeHash = `#${id}`
        }
      })

      return activeHash
    }

    const updateHashOnScroll = () => {
      const nextHash = getActiveHash()
      if (!nextHash) {
        if (window.location.hash) {
          window.history.replaceState(
            null,
            '',
            `${window.location.pathname}${window.location.search}`
          )
        }
        return
      }

      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', nextHash)
      }
    }

    updateHashOnScroll()
    window.addEventListener('scroll', updateHashOnScroll, { passive: true })
    window.addEventListener('resize', updateHashOnScroll)

    return () => {
      window.removeEventListener('scroll', updateHashOnScroll)
      window.removeEventListener('resize', updateHashOnScroll)
    }
  }, [])

  return (
    <div>
        <Helmet>
          <html lang='en'></html>
          <title>Pranav Konjeti - Web Developer & Freelancer</title>
          <meta charSet='utf-8'/>
          <meta name="description" content="I'm Pranav, a 16-year-old web developer & freelancer with 3M+ website views & $4K+ in funding. Explore my portfolio for my work and experience."/>
        </Helmet>

        <Header />
        <HeroMain />
        <div className="hidden">
          <FounderStorySection />
        </div>
        <WhySection />
        <ServicesSection />
        <PricingSection />
        <ScheduleSection />
    </div>
  )
}

export default Homepage
