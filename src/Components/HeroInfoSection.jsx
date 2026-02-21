import React from "react";

const infoCards = [
  {
    subtitle: "Lorem Heading One",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    subtitle: "Lorem Heading Two",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    subtitle: "Lorem Heading Three",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function HeroInfoSection() {
  return (
    <section className="px-6 lg:px-8 mt-10 sm:mt-14">
      <div className="mx-auto max-w-5xl">
        <div className="text-center font-outfit">
          <h2 className="six-title font-semibold tracking-tight">
            New{" "}
            <span className="hero-main-gradient inline text-transparent bg-clip-text">
              Section
            </span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.subtitle}
              className="rounded-2xl p-[1px] bg-gradient-to-tr from-[#281e71] via-[#305cde] to-[#122859] shadow-lg shadow-[#281e71]/20"
            >
              <div className="h-full rounded-2xl bg-white/95 p-6 font-outfit">
                <h3 className="text-2xl font-semibold tracking-tight text-[#281e71]">
                  {card.subtitle}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#1e293b]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
