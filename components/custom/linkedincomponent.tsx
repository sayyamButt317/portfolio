"use client";

import Image from "next/image";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/sayyambutt/";

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

const experience = [
  {
    role: "Software Engineer",
    company: "Product & platform builds",
    detail:
      "Shipping production SaaS across fintech, fitness, hiring, and AI analytics.",
  },
  {
    role: "Full-stack delivery",
    company: "iShout · EntryClub · Unbeatable Loans",
    detail:
      "End-to-end product work — dashboards, growth flows, and AI-assisted workflows.",
  },
  {
    role: "AI product engineering",
    company: "Competra AI · HireWithTess",
    detail:
      "Competitor intelligence and AI assessment experiences for real teams.",
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SaaS",
  "Fintech",
  "AI Products",
  "Product Engineering",
];

export default function LinkedInComponent() {
  return (
    <section
      id="linkedin"
      className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(10,102,194,0.12),_transparent_45%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
            Connect
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            LinkedIn
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
            Experience, skills, and professional updates — open my profile on{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5BA3E0] underline-offset-2 hover:underline"
            >
              linkedin.com/in/sayyambutt
            </a>
            .
          </p>
        </header>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[border-color,transform,background] duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          {/* Profile side */}
          <div className="relative flex flex-col justify-between gap-8 border-b border-white/10 p-7 sm:p-8 lg:border-r lg:border-b-0">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,#0A66C2_0%,#004182_55%,#001a33_100%)] opacity-90"
            />

            <div className="relative">
              <div className="mb-5 flex items-end justify-between gap-4 pt-10">
                <Image
                  src="https://avatars.githubusercontent.com/u/126108224?v=4"
                  alt="Sayyam Butt"
                  width={88}
                  height={88}
                  className="size-[72px] rounded-full ring-4 ring-black sm:size-[88px]"
                />
                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[#0A66C2] px-3 py-1.5 text-[11px] font-semibold text-white">
                  <LinkedInMark className="size-3.5" />
                  Open to work
                </span>
              </div>

              <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                Sayyam Butt
              </p>
              <p className="mt-1 text-sm text-white/65">
                Software Engineer · Full-stack & AI products
              </p>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-white/40">
                <MapPin className="size-3.5" />
                Available worldwide · UTC+5
              </p>

              <p className="mt-5 text-sm leading-relaxed text-white/55">
                Building production platforms for marketing, fitness ops,
                lending, hiring, and competitive intelligence.
              </p>
            </div>

            <div className="relative flex items-center gap-2 text-sm font-medium text-white">
              <LinkedInMark className="size-4 text-[#5BA3E0]" />
              <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-current">
                View LinkedIn profile
              </span>
              <ArrowUpRight className="size-4 text-[#5BA3E0] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Experience / skills side */}
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="size-4 text-[#5BA3E0]" />
                <p className="text-sm font-medium text-white">Experience focus</p>
              </div>
              <ul className="space-y-3">
                {experience.map((item) => (
                  <li
                    key={item.role}
                    className="rounded-xl border border-white/10 bg-black/35 p-3.5"
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.role}
                    </p>
                    <p className="mt-0.5 text-xs text-[#5BA3E0]">{item.company}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/50">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-white">Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#0A66C2]/35 bg-[#0A66C2]/10 px-3 py-1 text-[11px] font-medium text-[#9ec9ef]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
