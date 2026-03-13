import { useEffect } from 'react'
import HeroMain from './Components/HeroMain'
import WhySection from './Components/WhySection'
import ServicesSection from './Components/ServicesSection'
import { PricingSection } from './Components/PricingSection'
import ScheduleSection from './Components/ScheduleSection'
import Header from './Components/Header'
import { Helmet } from 'react-helmet';

function Homepage() {
  useEffect(() => {
    const sectionIds = ['why', 'services', 'pricing', 'schedule']
    const initialHash = window.location.hash
    let navScrollLockUntil = 0
    let initialHashRetryTimers = []
    let initialHashProtectUntil = 0
    let initialScrollUnlockTimer
    const previousOverflow = document.body.style.overflow
    const previousOverscrollBehavior = document.body.style.overscrollBehavior

    const lockHashUpdates = (durationMs = 900) => {
      navScrollLockUntil = Date.now() + durationMs
    }

    const preventScrollInput = (event) => {
      event.preventDefault()
    }

    const preventScrollKeys = (event) => {
      const blockedKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar']
      if (blockedKeys.includes(event.key)) {
        event.preventDefault()
      }
    }

    const scrollToHash = (hash) => {
      const hashId = hash.replace('#', '')
      if (!hashId) return
      const target = document.getElementById(hashId)
      if (target) {
        target.scrollIntoView({ behavior: 'auto', block: 'start' })
      }
    }

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
      if (Date.now() < navScrollLockUntil || Date.now() < initialHashProtectUntil) return

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

    window.addEventListener('nav-scroll-start', lockHashUpdates)

    const initialHashId = initialHash.replace('#', '')
    if (sectionIds.includes(initialHashId)) {
      initialHashProtectUntil = Date.now() + 1000
      lockHashUpdates(1000)

      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      window.addEventListener('wheel', preventScrollInput, { passive: false })
      window.addEventListener('touchmove', preventScrollInput, { passive: false })
      window.addEventListener('keydown', preventScrollKeys)
      initialScrollUnlockTimer = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow
        document.body.style.overscrollBehavior = previousOverscrollBehavior
        window.removeEventListener('wheel', preventScrollInput)
        window.removeEventListener('touchmove', preventScrollInput)
        window.removeEventListener('keydown', preventScrollKeys)
      }, 1000)

      ;[0, 120, 260, 500, 850, 1300, 1900].forEach((delay) => {
        const timerId = window.setTimeout(() => {
          scrollToHash(initialHash)
        }, delay)
        initialHashRetryTimers.push(timerId)
      })
    }

    updateHashOnScroll()
    window.addEventListener('scroll', updateHashOnScroll, { passive: true })
    window.addEventListener('resize', updateHashOnScroll)

    return () => {
      window.removeEventListener('nav-scroll-start', lockHashUpdates)
      initialHashRetryTimers.forEach((timerId) => window.clearTimeout(timerId))
      if (initialScrollUnlockTimer) {
        window.clearTimeout(initialScrollUnlockTimer)
      }
      document.body.style.overflow = previousOverflow
      document.body.style.overscrollBehavior = previousOverscrollBehavior
      window.removeEventListener('wheel', preventScrollInput)
      window.removeEventListener('touchmove', preventScrollInput)
      window.removeEventListener('keydown', preventScrollKeys)
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
        <WhySection />
        <ServicesSection />
        <PricingSection />
        <ScheduleSection />
    </div>
  )
}

export default Homepage
