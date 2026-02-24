import React from "react";

export function Projects() {
  const faqs = [
    {
      question: "Who is this consulting for?",
      answer:
        "Students applying to competitive colleges who want structured guidance on strategy, essays, and positioning throughout the process.",
    },
    {
      question: "What kinds of support do you offer?",
      answer:
        "Support includes admissions strategy, school list planning, essay brainstorming and feedback, supplemental essay guidance, and interview preparation.",
    },
    {
      question: "How do I get started?",
      answer:
        "Start with a short intro call to discuss your goals, timeline, and where you need the most help. From there, we can recommend the best support format.",
    },
  ];

  return (
    <div className="max-w-[100rem] mx-auto">
      <div
        className="rounded-xl flex flex-col justify-center items-center mt-16 mb-8 mx-0 font-outfit"
        id="work"
      >
        <div className="py-4 w-11/12 max-w-5xl flex flex-col items-center text-center mb-4" id="schedule">
          <h1 className="seven-title font-semibold tracking-tight">
            Frequently Asked <span className="hero-main-gradient">Questions</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 max-w-2xl">
            Quick answers about who this is for, what support looks like, and how to get started.
          </p>
          <div className="mt-8 w-full flex flex-col gap-4 text-left">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#cfd9f8] bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-sm shadow-[#305cde]/10"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#122859]">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-700 leading-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
