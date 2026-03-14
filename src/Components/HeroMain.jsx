import chatgptHeroImage from "../Images/hero-graphic.png";


export default function HeroMain() {
    const handleNavigationClick = (event, href) => {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const isMobile = window.innerWidth < 1024;
        const shouldUseMobileOffset = isMobile && href === "#why";

        if (shouldUseMobileOffset) {
          const targetTop = target.getBoundingClientRect().top + window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const destination = Math.min(Math.max(targetTop - 108, 0), maxScroll);
          window.scrollTo({ top: destination, behavior: "smooth" });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        window.history.replaceState(null, "", href);
      }
    };

    return (
        <>
        <div id="hero" className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="hidden sm:block absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-r from-[#5d4dcf] from-40% via-[#281e71] to-blue-500 to-65% opacity-40 sm:left-[calc(50%-30rem)] sm:bottom-[-20rem] sm:w-[81.1875rem]"
              style={{
                clipPath:
                  'polygon(28.22% 33.13%, 37.2% 26.09%, 48.37% 23.76%, 60.27% 26.09%, 66.68% 29.23%, 70.05% 35.52%, 72.34% 46.86%, 71.78% 53.33%, 70.05% 61.09%, 62.84% 64.45%, 51.31% 69.45%, 38.91% 67.34%, 28.22% 57.35%, 23.5% 43.51%)',
              }}
            />
          </div>
          <div className="mx-auto w-full max-w-7xl pb-32 sm:pb-48 lg:pb-56 lg:pt-16 sm:pt-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div className="mx-auto w-full max-w-4xl text-left lg:mx-0">
                <h1 className="text-5xl tracking-tight font-semibold text-black sm:text-8xl lg:text-7xl xl:text-8xl font-outfit">
                  College Consulting From{" "}
                  <span className='hero-main-gradient'>Recent Admits.</span>
                </h1>
                <p className="mt-6 text-xl sm:text-3xl leading-8 text-black font-outfit">
                  Learn from students who successfully navigated
                  <span className='hero-main-gradient font-semibold ml-2'>
                      competitive T20 admissions.
                  </span>
                </p>
                
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    href="#why"
                    className="rounded-md bg-[#5d4dcf] px-3.5 py-2.5 text-xl text-white shadow-lg shadow-[#281e71]/20 sm:shadow-xl sm:shadow-[#281e71]/35 font-outfit w-40 h-15 flex items-center justify-center transform transition hover:scale-105"
                    onClick={(event) => handleNavigationClick(event, "#why")}
                  >
                    Why Us
                  </a>
                  <a 
                    href="#schedule"
                    className="text-xl leading-6 text-black font-outfit transform transition hover:scale-105"
                    onClick={(event) => handleNavigationClick(event, "#schedule")}
                  >
                    Book a Free Call <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="mx-auto flex w-full max-w-xl items-center justify-center lg:mx-0 lg:max-w-3xl">
                <img
                  src={chatgptHeroImage}
                  alt="ChatGPT screenshot"
                  className="w-full origin-center scale-110 object-contain transform lg:scale-[1.22]"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#281e71] from-50% to-[#305cde] to-40% via-[#305cde] opacity-40 sm:left-[calc(40%+36rem)] sm:bottom-[20rem] sm:w-[80.1875rem] sm:h-[60rem] hidden"
              style={{
                clipPath:
                  'polygon(28.29% 33.22%, 37.29% 26.17%, 48.49% 23.83%, 60.42% 26.17%, 66.84% 29.32%, 70.23% 35.62%, 72.52% 47%, 71.96% 53.49%, 70.23% 61.27%, 63% 64.64%, 51.44% 69.65%, 39.01% 67.54%, 28.29% 57.52%, 23.56% 43.63%)',
              }}
            />
          </div>
        </div>
        </>
    )
}
