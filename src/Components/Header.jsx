import { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import admitsLogo from '../Images/admitslogo.png'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Why Us', href: '#why' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overscrollBehavior = previousBodyOverscroll;
    };
  }, [mobileMenuOpen]);

  const navigateToSection = (href) => {
    const isMobile = window.innerWidth < 1024;

    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`
      );
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    if (!isMobile) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
      return;
    }

    const mobileOffsetByHref = {
      '#why': -108,
      '#services': -108,
      '#pricing': -108,
      '#schedule': -108,
    };
    const extraOffset = isMobile ? (mobileOffsetByHref[href] ?? 0) : 0;
    const scrollToDestination = () => {
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const destination = Math.min(Math.max(targetTop + extraOffset, 0), maxScroll);
      window.scrollTo({ top: destination, behavior: 'smooth' });
    };

    scrollToDestination();

    // Re-apply once on mobile to account for nav close/layout settling.
    if (isMobile) {
      window.setTimeout(scrollToDestination, 140);
    }
  };

  const handleNavigationClick = (event, href) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent('nav-scroll-start'));

    const shouldDelayScrollForMobileClose = window.innerWidth < 1024 && mobileMenuOpen;

    if (shouldDelayScrollForMobileClose) {
      setMobileMenuOpen(false);
      window.setTimeout(() => {
        navigateToSection(href);
      }, 60);
      return;
    }

    navigateToSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div
        className={`flex flex-col items-center font-outfit ${
          mobileMenuOpen
            ? 'fixed inset-0 z-50 justify-start bg-white'
            : 'sticky z-40 top-10 mt-10 mx-10 justify-center'
        } lg:sticky lg:z-40 lg:top-10 lg:mt-10 lg:mx-10 lg:justify-center`}
      >
        <header
          className={`relative z-40 w-full overflow-hidden ${
            mobileMenuOpen
              ? 'h-full max-w-none rounded-none bg-white px-10 pt-10'
              : 'h-[5.5rem] max-w-[85rem] rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]'
          } lg:h-auto`}
        >
          <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src={admitsLogo}
                    alt=""
                  />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-[1.05rem] leading-6 text-black transition transform hover:scale-110 font-light"
                  onClick={(event) => handleNavigationClick(event, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end font-light">
              <a 
                href="#schedule"
                className="text-[1.05rem] leading-6 bg-[#353ab9] text-white px-4 py-2 rounded-lg shadow-md"
                onClick={(event) => handleNavigationClick(event, '#schedule')}
              >
                Book a Free Call <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <div
            id="mobile-nav-menu"
            className={`relative z-10 h-[calc(100%-5.5rem)] transition-opacity duration-500 ease-out lg:hidden ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex h-[calc(100%-5.5rem)] flex-col px-6 pb-8 pt-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-1.5 block rounded-lg px-1.5 py-2 text-[1.05rem] leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(event) => handleNavigationClick(event, item.href)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="-mx-1.5 mt-auto pt-6">
                <a
                  href="#schedule"
                  className="block rounded-lg bg-[#353ab9] px-3 py-2.5 text-center text-[1.05rem] leading-7 text-white shadow-md"
                  onClick={(event) => handleNavigationClick(event, '#schedule')}
                >
                  Book a Free Call
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
