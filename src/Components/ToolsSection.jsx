import React from "react";
import { MapIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const serviceCards = [
  {
    title: "Admissions Strategy",
    summary:
      "Build a compelling, cohesive application plan before senior year begins.",
    icon: MapIcon,
    bullets: [
      "Extracurricular positioning and activity audit",
      "Major and academic direction clarity",
      "School list strategy (reach / target / safety balance)",
      "Summer program selection",
      "Scholarship targeting",
      "Personal narrative development",
    ],
  },
  {
    title: "Essays & Application Support",
    summary: "Craft essays that are sharp, authentic, and competitive.",
    icon: PencilSquareIcon,
    bullets: [
      "Personal statement brainstorming",
      "Common App essay feedback",
      "Supplemental essay strategy",
      "Summer program essays",
      "Activity descriptions optimization",
      "Interview preparation",
    ],
  },
];

function ServiceCard({ title, summary, icon: Icon, bullets }) {
  return (
    <div className="rounded-3xl border border-[#d9e3ff] bg-[#f8fbff] p-8 shadow-[0_18px_40px_rgba(18,40,89,0.08)]">
      <div className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl">
        <div className="absolute inset-0 rounded-xl bg-[linear-gradient(90deg,#281e71_0%,#305cde_45%,#122859_100%)] opacity-20 blur-[2px]" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-[#305cde]/20">
          <Icon className="h-6 w-6 text-[#281e71]" />
        </div>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-[#0c1b3b]">
        {title}
      </h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{summary}</p>

      <ul role="list" className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[linear-gradient(90deg,#281e71_0%,#305cde_55%,#122859_100%)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <div
      className="px-4 py-16 font-outfit xl:px-0"
      id="tools"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-[#0c1b3b] sm:text-7xl">
              How I <span className="hero-main-gradient">Help</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#122859]/80 sm:text-xl">
              Strategy and execution — from building your story to polishing your essays.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#d9e3ff] bg-[#f8fbff] p-8 text-center shadow-[0_22px_50px_rgba(18,40,89,0.08)]">
            <h3 className="text-2xl font-semibold tracking-tight text-[#0c1b3b] sm:text-3xl">
              Transparent Pricing
            </h3>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Flexible support based on your needs.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="min-w-[12rem] rounded-2xl border border-[#cfdcff] bg-white px-6 py-4 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Hourly</div>
                <div className="mt-1 text-2xl font-semibold text-[#0c1b3b]">$80 / hour</div>
              </div>
              <div className="min-w-[12rem] rounded-2xl border border-[#cfdcff] bg-white px-6 py-4 shadow-sm">
                <div className="text-sm font-medium text-slate-500">Package</div>
                <div className="mt-1 text-2xl font-semibold text-[#0c1b3b]">$300 / 5-hour package</div>
              </div>
            </div>

            <p className="mt-5 text-sm font-medium text-[#122859] sm:text-base">
              Free 20-minute intro consultation.
            </p>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#5d4dcf] px-5 py-3 text-base font-medium text-white shadow-lg shadow-[#281e71]/25 transition hover:scale-[1.02]"
              >
                Schedule a Call
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
