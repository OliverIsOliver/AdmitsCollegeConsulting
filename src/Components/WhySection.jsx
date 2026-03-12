import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaVolleyballBall,
  FaTableTennis,
  FaMusic,
  FaCamera,
} from "react-icons/fa";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOutlineBusinessCenter } from "react-icons/md";
import chatgptHeroImage from "../Images/ChatGPT Image Feb 25, 2026, 09_08_13 PM.png";
import { IoMailOpen } from "react-icons/io5";

export default function WhySection() {
  return (
    <>
      <div
        class="relative overflow-hidden bg-[#98AEEF] -skew-y-2 px-4 xl:px-0 pt-16 space-y-24 font-outfit"
        id="why"
      >
        <div class="relative skew-y-2">
          <div class="lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row lg:gap-12 lg:px-8">
            <div class="w-full lg:w-1/2 lg:my-0 my-12 mx-auto max-w-xl lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:order-1 order-2">
              <div className="pl-0">
                <div>
                  <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
                    <IoChatboxEllipses className="h-8 w-8 text-[#122859]" />
                  </span>
                </div>

                <div class="mt-3">
                  <h2 class="text-4xl mb-1 font-semibold tracking-wide text-white">
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
            <div class="w-full lg:w-1/2 lg:order-2 order-1 flex items-center justify-center lg:justify-end">
              <img
                loading="lazy"
                class="rounded-xl w-5/6 lg:my-0 shadow-2xl ring-1 ring-black ring-opacity-5 rotate-2"
                src={chatgptHeroImage}
              />
            </div>
          </div>

          <div className="mt-16 mb-28 px-6 text-center font-outfit sm:px-10 lg:px-16">
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
                      src="https://maxadmit.com/_next/static/media/duke.38629773.svg"
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
                      src="https://maxadmit.com/_next/static/media/harvard.0651e71d.svg"
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
                      src="https://maxadmit.com/_next/static/media/mit.02abd4ed.svg"
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
                      src="https://maxadmit.com/_next/static/media/yale.fed1fc4e.svg"
                      className="h-9 w-auto object-contain sm:h-11 lg:h-14"
                      style={{ color: "transparent" }}
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="Northwestern"
                      loading="lazy"
                      width="1186"
                      height="350"
                      src="https://maxadmit.com/_next/static/media/northwestern.461d14a5.svg"
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
                      src="https://maxadmit.com/_next/static/media/utaustin.465217dd.svg"
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
