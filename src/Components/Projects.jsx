import React from "react";

export function Projects() {
  return (
    <div className="max-w-[100rem] mx-auto">
      <div
        className="rounded-xl flex flex-col justify-center items-center mt-16 mb-8 mx-0 font-outfit"
        id="work"
      >
        <div className="mb-8 w-11/12 max-w-5xl text-center">
          <h1 className="seven-title font-semibold tracking-tight">
            Frequently Asked <span className="hero-main-gradient">Questions</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
            Quick answers about who this is for, what support looks like, and how to get started.
          </p>
        </div>

        <div
          className="w-11/12 max-w-3xl rounded-3xl border border-[#d9e3ff] bg-[#f8fbff] p-8 text-center shadow-[0_22px_50px_rgba(18,40,89,0.08)]"
          id="schedule"
        >
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
              className="inline-flex items-center justify-center rounded-md bg-[#5d4dcf] px-8 py-4 text-xl font-semibold text-white shadow-lg shadow-[#281e71]/25 transition hover:scale-[1.02]"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
