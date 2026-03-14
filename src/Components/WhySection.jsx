import { useEffect, useMemo, useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import chatgptHeroImage from "../Images/oliverm.png";
import headshotImage from "../Images/tylerh.png";
import dukeLogo from "../Images/schools/duke.svg";
import princetonLogo from "../Images/schools/princeton.svg";
import mitLogo from "../Images/schools/mit.svg";
import stanfordLogo from "../Images/schools/stanford.svg";
import oxfordLogo from "../Images/schools/oxford.svg";
import utAustinLogo from "../Images/schools/utaustin.svg";

export default function WhySection() {
  const photoMix = useMemo(
    () =>
      [
        {
          src: chatgptHeroImage,
          name: "Oliver M.",
          university: "CS @ Northwestern",
        },
        {
          src: headshotImage,
          name: "Tyler H.",
          university: "Business @ UNC Kenan-Flagler",
        },
      ].filter((photo) => Boolean(photo.src)),
    []
  );
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const goToNextPhoto = () => {
    if (photoMix.length <= 1) return;
    setActivePhotoIndex((current) => (current + 1) % photoMix.length);
  };

  useEffect(() => {
    if (photoMix.length <= 1) return undefined;

    const rotationTimer = window.setTimeout(() => {
      setActivePhotoIndex((current) => (current + 1) % photoMix.length);
    }, 12000);

    return () => window.clearTimeout(rotationTimer);
  }, [activePhotoIndex, photoMix.length]);

  const getPhotoLayerClass = (index) => {
    const total = photoMix.length;
    const offset = (index - activePhotoIndex + total) % total;

    if (offset === 0) {
      return "z-30 opacity-100 translate-x-0 translate-y-0 rotate-0 scale-100";
    }

    if (offset === 1) {
      return "z-20 opacity-90 translate-x-4 translate-y-2 rotate-[8deg] scale-95";
    }

    if (offset === total - 1) {
      return "z-10 opacity-90 -translate-x-12 translate-y-2 -rotate-[8deg] scale-95";
    }

    return "z-0 opacity-0 scale-90";
  };

  return (
    <>
      <div
        className="relative overflow-hidden bg-[#98AEEF] -skew-y-2 px-4 xl:px-0 pt-16 space-y-24 font-outfit"
        id="why"
      >
        <div className="relative skew-y-2">
          <div className="lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:px-8">
            <div className="w-full lg:w-1/2 lg:my-0 my-12 mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:order-1 order-2">
              <div className="pl-0">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <IoChatboxEllipses className="h-8 w-8 text-[#122859]" />
                  </span>
                </div>

                <div className="mt-3">
                  <h2 className="text-4xl mb-1 font-semibold tracking-wide text-white">
                    Why Learn From{" "}
                    <span className="text-[#1f1d70] font-bold">Recent Admits?</span>
                  </h2>
                  <p className="px-4 text-black border-l-4 border-[#122859] text-xl leading-relaxed my-4">
                    Getting into top universities is harder than ever. Top
                    schools that once admitted around{" "}
                    <a
                      href="https://www.ivycoach.com/the-ivy-coach-blog/college-admissions/college-admission-rates-get-lower-lower/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#1f1d70] underline"
                    >
                      25% of applicants now accept under 10%
                    </a>
                    , with rates still declining.
                    <br />
                    <br />
                    Many families turn to expensive counselors who charge
                    five-figure fees, but often
                    provide generic and outdated advice. Having recently gone
                    through the process ourselves,{" "}
                    we know how confusing and
                    stressful it can be.
                    <br />
                    <br />
                    That&apos;s why we started Admits College Consulting: to
                    offer personalized, first-hand guidance from students
                    who just got into top schools. We&apos;ll help plan your
                    activities, craft compelling essays, and build a strong
                    application for a fraction of the cost. Schedule a{" "}
                    <a href="#schedule" className="text-[#1f1d70] underline">
                      free intro call
                    </a>{" "}
                    and see how we can help.
                  </p>

                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-2 order-1 flex items-center justify-center lg:justify-end">
              <div className="relative h-[20rem] w-5/6 max-w-[34rem] sm:h-[24rem] lg:h-[28rem]">
                {photoMix.map((photo, index) => {
                  const total = photoMix.length;
                  const offset = (index - activePhotoIndex + total) % total;
                  const isFront = offset === 0;

                  return (
                  <div
                    key={`${photo.name}-${index}`}
                    onClick={isFront ? goToNextPhoto : undefined}
                    className={`absolute inset-0 rounded-2xl shadow-2xl transition-all duration-700 ease-out ${
                      isFront ? "cursor-pointer" : ""
                    } ${getPhotoLayerClass(index)}`}
                  >
                    <img
                      loading="lazy"
                      src={photo.src}
                      alt="Why us profile"
                      className="h-full w-full rounded-2xl object-cover"
                    />
                    {isFront && (
                      <div className="pointer-events-none absolute bottom-3 left-3 rounded-xl bg-white/95 px-3 py-2 text-left shadow-lg">
                        <p className="text-sm font-semibold leading-tight text-[#122859] sm:text-base">
                          {photo.name}
                        </p>
                        <p className="text-xs leading-tight text-[#305cde] sm:text-sm">
                          {photo.university}
                        </p>
                      </div>
                    )}
                  </div>
                  );
                })}

                <div
                  className="pointer-events-none absolute left-[-1.5rem] top-[-1.75rem] z-40 flex h-16 w-[18rem] -rotate-[2deg] items-center justify-center bg-[linear-gradient(90deg,#281e71_0%,#305cde_55%,#122859_100%)] px-6 text-xl font-semibold tracking-wide text-white shadow-[0_16px_35px_rgba(18,40,89,0.28)] sm:w-[20rem] sm:text-2xl"
                  style={{
                    clipPath:
                      "polygon(0% 0%,100% 0%,88% 50%,100% 100%,0% 100%)",
                  }}
                >
                  <span className="w-full pl-[2%] pr-[11%] text-center">
                    Meet Our Mentors
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-28 px-6 text-center font-outfit sm:px-10 lg:px-16">
            <h2 className="text-white text-2xl font-bold">
              Reach Your Dream School
            </h2>
            <ul
              role="list"
              className="mx-auto mt-10 flex max-w-6xl items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
              <li>
                <ul
                  role="list"
                  className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12"
                >
                  <li className="flex">
                    <img
                      alt="Duke"
                      loading="lazy"
                      width="799"
                      height="350"
                      src={dukeLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="Princeton"
                      loading="lazy"
                      width="1367"
                      height="350"
                      src={princetonLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="MIT"
                      loading="lazy"
                      width="677"
                      height="350"
                      src={mitLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <ul
                  role="list"
                  className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12"
                >
                  <li className="flex">
                    <img
                      alt="Stanford"
                      loading="lazy"
                      width="228"
                      height="350"
                      src={stanfordLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="Oxford"
                      loading="lazy"
                      width="1186"
                      height="350"
                      src={oxfordLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="UT Austin"
                      loading="lazy"
                      width="1225"
                      height="350"
                      src={utAustinLogo}
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
