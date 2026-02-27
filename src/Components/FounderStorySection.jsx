import React from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function FounderStorySection() {
  return (
    <section className="px-4 py-8 font-outfit xl:px-0" aria-labelledby="founder-story-title">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#d9e3ff] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_60px_rgba(18,40,89,0.08)] sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute -right-16 top-6 h-40 w-40 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "linear-gradient(90deg, #281e71 0%, #305cde 50%, #122859 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[#c9d7ff] opacity-40 blur-2xl"
            aria-hidden="true"
          />

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]">
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#d4e0ff] bg-white shadow-[0_18px_40px_rgba(18,40,89,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                  alt="Placeholder portrait"
                  className="h-[22rem] w-full object-cover sm:h-[26rem] lg:h-[30rem]"
                />
              </div>
            </div>

            <div className="text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#305cde]">
                Why This Exists
              </p>
              <h2
                id="founder-story-title"
                className="mt-3 text-4xl font-semibold tracking-tight text-[#0c1b3b] sm:text-5xl"
              >
                Meet <span className="hero-main-gradient">Oliver Maher</span>
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                I&apos;m Oliver Maher, a Northwestern admit who built this to give
                students the kind of guidance I wish I had earlier in the process.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                I tried working with an expensive college counselor, but most of
                the advice felt generic and didn&apos;t materially help my
                application. The most useful support came from conversations with
                someone who had just been through competitive admissions.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                That is the model here: recent-admit perspective, practical
                strategy, and honest feedback that actually helps students make
                better decisions.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#cfdcff] bg-white px-4 py-2 text-sm font-medium text-[#122859] shadow-sm">
                  Northwestern Admit
                </span>
                <span className="rounded-full border border-[#cfdcff] bg-white px-4 py-2 text-sm font-medium text-[#122859] shadow-sm">
                  Student-Led Guidance
                </span>
                <span className="rounded-full border border-[#cfdcff] bg-white px-4 py-2 text-sm font-medium text-[#122859] shadow-sm">
                  Practical Feedback
                </span>
              </div>

              <div className="mt-8 rounded-2xl border border-[#d9e3ff] bg-white/90 p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="relative mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl">
                    <div className="absolute inset-0 rounded-xl bg-[linear-gradient(90deg,#281e71_0%,#305cde_45%,#122859_100%)] opacity-20 blur-[2px]" />
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-[#305cde]/20">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 text-[#281e71]" />
                    </div>
                  </div>
                  <p className="text-base leading-7 text-slate-700 sm:text-lg">
                    What helped most wasn&apos;t a polished sales pitch. It was
                    talking to someone who had already navigated the exact
                    decisions I was trying to make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
