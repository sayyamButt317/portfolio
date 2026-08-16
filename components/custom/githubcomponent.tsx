"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";

const GITHUB_URL = "https://github.com/sayyamButt317";
const USERNAME = "sayyamButt317";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  );
}
type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total: { lastYear: number };
  contributions: ContributionDay[];
};

const levelClass = [
  "bg-white/[0.06]",
  "bg-emerald-900/80",
  "bg-emerald-700/90",
  "bg-emerald-500",
  "bg-emerald-400",
] as const;

function groupByWeeks(days: ContributionDay[]) {
  const weeks: ContributionDay[][] = [];
  let week: ContributionDay[] = [];

  days.forEach((day, index) => {
    const weekday = new Date(`${day.date}T12:00:00`).getDay();
    if (index === 0) {
      for (let i = 0; i < weekday; i += 1) {
        week.push({ date: "", count: -1, level: -1 });
      }
    }
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length) {
    while (week.length < 7) {
      week.push({ date: "", count: -1, level: -1 });
    }
    weeks.push(week);
  }

  return weeks;
}

export default function GithubComponent() {
  const [data, setData] = useState<ContributionResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then((json: ContributionResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(
    () => (data ? groupByWeeks(data.contributions) : []),
    [data],
  );

  const total = data?.total.lastYear ?? 0;

  return (
    <section
      id="github"
      className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.08),_transparent_45%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
            Open source
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            GitHub activity
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
            Commits, pulls, and builds from the last year — live from{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline-offset-2 hover:underline"
            >
              @{USERNAME}
            </a>
            .
          </p>
        </header>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[border-color,transform,background] duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
        >
          {/* Profile panel */}
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 p-7 sm:p-8 lg:border-r lg:border-b-0">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/126108224?v=4"
                  alt="Sayyam Butt"
                  width={72}
                  height={72}
                  className="size-16 rounded-full ring-2 ring-white/10 sm:size-[72px]"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white sm:text-2xl">
                    Sayyam Butt
                  </p>
                  <p className="mt-0.5 text-sm text-white/45">@{USERNAME}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/60">
                Software Engineer building products across fintech, SaaS, AI,
                and growth platforms.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: "Repos", value: "30" },
                  { label: "Followers", value: "1" },
                  {
                    label: "Commits",
                    value: error ? "—" : data ? total.toLocaleString() : "…",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-black/40 px-3 py-3"
                  >
                    <p className="text-[10px] tracking-wide text-white/40 uppercase">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <GithubMark className="size-4 text-white/70" />
              <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-current">
                View GitHub profile
              </span>
              <ArrowUpRight className="size-4 text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Contribution box */}
          <div className="flex flex-col p-5 sm:p-7">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <GitCommitHorizontal className="size-4 text-emerald-400" />
                <p className="text-sm font-medium text-white">
                  {error
                    ? "Contribution graph"
                    : data
                      ? `${total.toLocaleString()} contributions in the last year`
                      : "Loading contributions…"}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                <span>Less</span>
                {levelClass.map((cls, i) => (
                  <span
                    key={cls}
                    className={`size-2.5 rounded-sm ${i === 0 ? "bg-white/[0.06]" : cls}`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>

            <div className="flex-1 overflow-x-auto rounded-xl border border-white/10 bg-[#0b0f0c] p-3 sm:p-4">
              {error ? (
                <div className="flex h-28 items-center justify-center text-sm text-white/45">
                  Open GitHub to see the live contribution graph.
                </div>
              ) : !data ? (
                <div className="flex h-28 items-center justify-center gap-1">
                  {Array.from({ length: 52 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, j) => (
                        <span
                          key={j}
                          className="size-2.5 animate-pulse rounded-sm bg-white/[0.06] sm:size-3"
                          style={{ animationDelay: `${(i + j) * 8}ms` }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="inline-flex min-w-full justify-start gap-[3px] sm:gap-1">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px] sm:gap-1">
                      {week.map((day, di) =>
                        day.level < 0 ? (
                          <span
                            key={`${wi}-${di}`}
                            className="size-2.5 rounded-sm sm:size-3"
                          />
                        ) : (
                          <span
                            key={day.date}
                            title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                            className={`size-2.5 rounded-sm sm:size-3 ${levelClass[day.level] ?? levelClass[0]}`}
                          />
                        ),
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <p className="mt-3 text-[11px] text-white/35">
              Click anywhere to open {GITHUB_URL.replace("https://", "")}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
