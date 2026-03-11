import React from "react";

export function PricingSection() {
  return (
    <div className="max-w-[100rem] mx-auto">
      <div
        className="rounded-xl scroll-mt-[7.5rem] flex flex-col justify-center items-center mt-0 mb-8 mx-0 font-outfit"
        id="pricing"
      >
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-3xl border border-[#d9e3ff] bg-white p-6 sm:p-8 shadow-[0_22px_50px_rgba(18,40,89,0.08)]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-semibold tracking-tight text-[#0c1b3b] sm:text-4xl">
                  Transparent Pricing
                </h3>
                <p className="mt-3 text-base text-slate-600 sm:text-lg">
                  Get high-impact support that moves your application forward each week.
                </p>
                <ul className="mt-4 space-y-2 text-sm sm:text-base text-slate-700">
                  <li>Focused sessions with clear next steps after every call.</li>
                  <li>Fast feedback to keep essays and applications moving.</li>
                  <li>Flexible format so you only pay for what you need.</li>
                </ul>

                <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-stretch">
                  <div className="min-w-[12rem] rounded-2xl border border-[#cfdcff] bg-white px-6 py-4 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Hourly</div>
                    <div className="mt-1 text-2xl font-semibold text-[#0c1b3b]">$60 / hour</div>
                  </div>
                  <div className="min-w-[12rem] rounded-2xl border border-[#cfdcff] bg-white px-6 py-4 shadow-sm">
                    <div className="text-sm font-medium text-slate-500">Package</div>
                    <div className="mt-1 text-2xl font-semibold text-[#0c1b3b]">$200 / 5-hour package</div>
                  </div>
                </div>

                <p className="mt-5 text-sm font-medium text-[#122859] sm:text-base">
                  Free 30-minute intro consultation.
                </p>

                <div className="mt-6">
                  <a
                    href="#schedule"
                    className="inline-flex items-center justify-center rounded-md bg-[#5d4dcf] px-8 py-4 text-xl font-semibold text-white shadow-lg shadow-[#281e71]/25 transition hover:scale-[1.02]"
                  >
                    Book a Free Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
