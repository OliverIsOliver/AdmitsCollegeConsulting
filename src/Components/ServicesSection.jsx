import { MapIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import planImage from "../Images/ChatGPT Image Plan.png";
import writingImage from "../Images/ChatGPT Image Writing.png";

const serviceCards = [
  {
    title: "Application Support",
    summary:
      "Understanding your goals and preferences to build a compelling narrative.",
    icon: MapIcon,
    image: planImage,
    bullets: [
      "Identify your future area of study",
      "Develop your personal brand",
      "Position your extracurriculars and awards",
      "Find your summer program",
      "Construct your school list",
      "Maximize your scholarships",
    ],
  },
  {
    title: "Essay Writing",
    summary: "Crafting sharp, authentic, and competitive essays.",
    icon: PencilSquareIcon,
    image: writingImage,
    bullets: [
      "Brainstorm unique essay topics",
      "Develop a strong story arc for your essays",
      "Revise drafts for proper essay structure",
      "Ensure cohesion across your application essays",
      "Provide line-by-line feedback and edits",
      "Polish and proofread final drafts",
    ],
  },
];

function ServiceCard({ title, summary, icon: Icon, bullets, image }) {
  return (
    <div className="rounded-3xl border border-[#d9e3ff] bg-white p-8 shadow-[0_18px_40px_rgba(18,40,89,0.08)]">
      <div className="mb-6 rounded-2xl">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full object-contain"
        />
      </div>

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
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[radial-gradient(circle_at_center,#305cde_0%,#122859_100%)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <div
      className="mt-16 scroll-mt-24 px-4 pt-16 pb-6 font-outfit xl:px-0"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-semibold tracking-tight text-[#0c1b3b] sm:text-7xl">
              <span className="hero-main-gradient">Complete</span> Admissions Package
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#122859]/80 sm:text-xl">
              Everything you need to craft a standout application and earn your spot at a top university.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {serviceCards.map((card) => (
              <ServiceCard key={card.title} {...card} />
            ))}
          </div>
      </div>
    </div>
  );
}
