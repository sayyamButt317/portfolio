"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckSquare,
  Download,
  Eye,
  Hash,
  Home,
  ImageIcon,
  LayoutGrid,
  LineChart,
  Link2,
  Share2,
  Sparkles,
  Trash2,
  Users,
  UserSquare2,
} from "lucide-react";

type ProjectMeta = {
  index: string;
  name: string;
  tagline: string;
  href: string;
  category: string;
  accent: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className: string;
  };
};

function ProjectCard({
  meta,
  previewClassName,
  children,
}: {
  meta: ProjectMeta;
  previewClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={meta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group relative grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-[border-color,transform,background] duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
    >
      <div className="flex flex-col justify-between gap-10 p-7 sm:p-9 lg:p-10">
        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="font-mono text-xs tracking-widest text-white/35">
              {meta.index}
            </span>
            <span
              className="rounded-full px-3 py-1 text-[11px] tracking-wide text-black"
              style={{ backgroundColor: meta.accent }}
            >
              {meta.category}
            </span>
          </div>

          <div className="mb-5">
            <Image
              src={meta.logo.src}
              alt={meta.logo.alt}
              width={meta.logo.width}
              height={meta.logo.height}
              className={meta.logo.className}
            />
          </div>

          <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {meta.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
            {meta.tagline}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <span className="underline decoration-transparent underline-offset-4 transition-[text-decoration-color] duration-300 group-hover:decoration-current">
            View live site
          </span>
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: meta.accent }}
          />
        </div>
      </div>

      <div
        className={`relative min-h-[260px] overflow-hidden border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 ${previewClassName ?? ""}`}
      >
        {children}
      </div>
    </a>
  );
}

function IshoutPreview() {
  const creators = [
    { x: "12%", y: "18%", color: "bg-rose-300" },
    { x: "78%", y: "12%", color: "bg-amber-300" },
    { x: "88%", y: "48%", color: "bg-sky-300" },
    { x: "70%", y: "78%", color: "bg-violet-300" },
    { x: "18%", y: "72%", color: "bg-emerald-300" },
    { x: "8%", y: "42%", color: "bg-orange-300" },
  ];

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#050505]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(40,70,140,0.45),transparent_55%),linear-gradient(135deg,transparent_35%,rgba(20,40,90,0.35)_100%)]"
      />

      {/* Floating badges */}
      <div className="absolute top-5 left-5 z-20 flex items-center gap-1.5 rounded-full bg-[#0d1f24] px-2.5 py-1.5 shadow-lg ring-1 ring-white/10">
        <span className="flex size-4 items-center justify-center rounded-full bg-emerald-400 text-[9px] font-bold text-black">
          :)
        </span>
        <span className="text-[11px] font-medium text-white">Native</span>
      </div>
      <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 shadow-lg">
        <Image
          src="/logos/ishout.png"
          alt=""
          width={16}
          height={16}
          className="size-4 rounded-full object-cover"
        />
        <span className="text-[11px] font-semibold text-black">iShout.</span>
      </div>

      {/* Phone mockup */}
      <div className="relative mx-auto mt-12 flex w-[min(100%,220px)] flex-col items-center sm:mt-10">
        <div className="relative w-full overflow-hidden rounded-[1.7rem] border-[3px] border-white bg-white shadow-[0_20px_60px_rgba(0,0,0,0.55)]">
          <div className="mx-auto mt-1.5 h-1 w-14 rounded-full bg-slate-200" />
          <div className="px-3 pt-3 pb-4">
            <p className="mb-2 text-center text-[11px] font-semibold text-slate-800">
              # iShout
            </p>

            <div className="rounded-2xl rounded-tl-sm bg-slate-100 p-2.5">
              <div className="mb-1 flex items-center gap-1.5">
                <Image
                  src="/logos/ishout.png"
                  alt=""
                  width={14}
                  height={14}
                  className="size-3.5 rounded-full object-cover"
                />
                <span className="text-[10px] font-semibold text-slate-700">
                  iShout AI
                </span>
              </div>
              <p className="text-[10px] leading-relaxed text-slate-600">
                Perfect. I&apos;ll shortlist matching influencers and prepare
                your campaign brief.
              </p>
              <ul className="mt-1.5 space-y-0.5 text-[10px] text-slate-600">
                <li>✅ Influencers matched</li>
                <li>✅ Rates collected</li>
                <li>📣 Content approved</li>
                <li>📊 Report ready</li>
              </ul>
            </div>

            {/* Influencer network */}
            <div className="relative mx-auto mt-3 h-28 w-full">
              <svg
                className="absolute inset-0 size-full"
                viewBox="0 0 100 100"
                aria-hidden
              >
                {creators.map((c, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={parseFloat(c.x)}
                    y2={parseFloat(c.y)}
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                  />
                ))}
              </svg>
              <div className="absolute top-1/2 left-1/2 z-10 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black shadow-md ring-2 ring-white">
                <Image
                  src="/logos/ishout.png"
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-full object-cover"
                />
              </div>
              {creators.map((c, i) => (
                <span
                  key={i}
                  className={`absolute size-6 -translate-x-1/2 -translate-y-1/2 rounded-full ${c.color} ring-2 ring-white`}
                  style={{ left: c.x, top: c.y }}
                />
              ))}
            </div>

            <div className="mt-2 ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#ff2e95]/15 px-2.5 py-1.5">
              <p className="text-[9px] font-medium text-[#ff2e95]">
                Marketing Manager
              </p>
              <p className="text-[10px] text-slate-700">
                Wait… all that just from this chat?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp widget */}
      <div className="absolute right-3 bottom-3 z-20 max-w-[210px]">
        <div className="mb-2 flex items-start gap-2 rounded-2xl bg-white px-2.5 py-2 shadow-lg">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-bold text-white">
            W
          </span>
          <p className="text-[10px] leading-snug text-slate-600">
            Hello, welcome to ishout! How can we help you?
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#1a1a1a] px-3 py-2 ring-1 ring-white/10">
          <span className="text-[11px] text-white/35">Search…</span>
          <span className="ml-auto text-sm text-white/50">+</span>
        </div>
      </div>
    </div>
  );
}

function EntryClubPreview() {
  return (
    <div className="relative h-full bg-[#f4f6f8] p-5 text-slate-900 sm:p-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm">
        <span className="size-1.5 animate-pulse rounded-full bg-sky-400" />
        Now live across Saudi Arabia
      </div>
      <h4 className="mt-4 font-[family-name:var(--font-display)] text-2xl leading-tight font-bold tracking-tight">
        Transform your{" "}
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          fitness business
        </span>
      </h4>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <p className="text-[10px] tracking-wide text-slate-400 uppercase">
            Live ops
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              ["18.4K", "Members"],
              ["320", "Classes"],
              ["12", "Branches"],
              ["9.8K", "Messages"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-base font-semibold">{value}</p>
                <p className="text-[10px] text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[10px] tracking-wide text-slate-400 uppercase">
              Check-in feed
            </p>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
              Live
            </span>
          </div>
          {[
            ["AR", "Ahmed Al-Rashid", "2 min"],
            ["SA", "Sarah Abdullah", "5 min"],
          ].map(([initials, name, time]) => (
            <div
              key={name}
              className="flex items-center gap-2 border-t border-slate-100 py-2 first:border-t-0"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-semibold text-emerald-700">
                {initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium">{name}</p>
                <p className="text-[10px] text-slate-400">{time} ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UnbeatablePreview() {
  const rows = [
    ["List Price", "$ 549,000.00"],
    ["Offer Price", "$ 549,000.00"],
    ["Down Payment", "$ 230,000.00"],
    ["Loan Amount", "$ 319,000.00"],
    ["Cash To Close", "$ 42,180.00"],
  ];

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-[#f7f8fa] p-4 text-slate-900 sm:p-5">
      {/* Mini app header */}
      <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm">
        <Image
          src="/logos/unbeatable.png"
          alt=""
          width={120}
          height={32}
          className="h-7 w-auto object-contain"
        />
        <div className="hidden items-center gap-4 text-slate-400 sm:flex">
          <Home className="size-4" />
          <CheckSquare className="size-4 text-[#0a1128]" />
          <BarChart3 className="size-4" />
        </div>
        <span className="rounded-full bg-[#1a7a4c] px-3 py-1.5 text-[11px] font-semibold text-white">
          Get Approved
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
            <Image
              src="/logos/unbeatable-house.jpg"
              alt="Residential property"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <span className="absolute top-3 right-3 rounded-full bg-[#1a7a4c] px-2.5 py-1 text-[10px] font-semibold text-white shadow">
              Qualified
            </span>
          </div>
          <div className="p-3.5">
            <div className="flex items-start justify-between gap-2">
              <p className="text-xl font-bold tracking-tight text-slate-900">
                $ 549,000.00
              </p>
              <div className="flex gap-2 text-slate-400">
                <Link2 className="size-3.5" />
                <Trash2 className="size-3.5" />
              </div>
            </div>
            <p className="mt-1 text-xs text-slate-500">
              801 SW 18th St, Fort Lauderdale, FL 33315
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-slate-200 bg-[#eef1f4] p-4 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex size-6 items-center justify-center rounded-md bg-white text-slate-600 shadow-sm">
              <Home className="size-3.5" />
            </span>
            <p className="text-sm font-semibold text-slate-800">
              Estimation Summary
            </p>
          </div>
          <div className="space-y-2">
            {rows.map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-xs text-slate-700">{label}</span>
                <span className="rounded-full bg-[#d7f0e0] px-2.5 py-1 text-[11px] font-semibold text-[#1a7a4c]">
                  {value}
                </span>
              </div>
            ))}
          </div>
          <span className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#0a1128] px-4 py-2.5 text-xs font-semibold text-white">
            <Eye className="size-3.5" />
            View Detail
          </span>
        </div>
      </div>
    </div>
  );
}

function HireWithTessPreview() {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col justify-center bg-[linear-gradient(135deg,#f6a56a_0%,#d9a48a_42%,#9aa3c7_100%)] p-6 sm:p-7">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-bold text-slate-900">Hirewithtess</span>
        <span className="rounded-md bg-[#1e3a5f] px-3 py-1 text-[11px] font-medium text-white">
          Login
        </span>
      </div>
      <div className="text-center">
        <h4 className="font-[family-name:var(--font-display)] text-2xl leading-tight font-bold text-white drop-shadow-sm sm:text-3xl">
          Effortless Hiring with AI-Powered Assessments
        </h4>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-900/75">
          Shareable AI interviews — no scheduling required.
        </p>
      </div>
      <div className="mx-auto mt-7 flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-lg">
        <span className="flex-1 truncate px-4 text-sm text-slate-400">
          Describe what you need...
        </span>
        <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
          Generate
        </span>
      </div>
    </div>
  );
}

function CompetraStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[9px] tracking-wide text-slate-400 uppercase">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function CompetraPreview() {
  const nav = [
    { label: "Overview", icon: LayoutGrid, active: true },
    { label: "Dashboard", icon: BarChart3 },
    { label: "Competitors", icon: Users },
    { label: "Employees", icon: UserSquare2 },
    { label: "Content", icon: ImageIcon },
    { label: "Hashtags", icon: Hash },
    { label: "Trends", icon: LineChart },
  ];

  return (
    <div className="grid h-full min-h-[340px] overflow-hidden bg-[#f3f5f9] text-slate-900 sm:grid-cols-[128px_1fr]">
      <aside className="hidden bg-[#151a2e] px-2.5 py-3 text-white sm:flex sm:flex-col">
        <div className="mb-4 flex items-center gap-2 px-1">
          <Image
            src="/logos/competra.png"
            alt=""
            width={28}
            height={28}
            className="size-7 object-contain"
          />
          <div>
            <p className="text-[11px] font-semibold leading-tight">Competra AI</p>
            <p className="text-[7px] tracking-[0.08em] text-white/40 uppercase">
              Know your competition
            </p>
          </div>
        </div>
        <nav className="space-y-0.5">
          {nav.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                active
                  ? "border-l-2 border-[#8b7cff] bg-[#5b5fc7] text-white"
                  : "border-l-2 border-transparent text-white/55"
              }`}
            >
              <Icon className="size-3 shrink-0 opacity-80" />
              {label}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-lg border border-white/10 bg-white/5 p-2">
          <p className="text-[9px] text-white/45">Need help?</p>
          <p className="text-[10px] text-white/75">Contact Support</p>
        </div>
      </aside>

      <div className="grid gap-2.5 overflow-hidden p-3 sm:grid-cols-3 sm:p-3.5">
        {/* Instagram */}
        <div className="flex min-h-0 flex-col rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Instagram Overview
              </p>
              <p className="text-[10px] text-slate-400">@techtimize.pk</p>
            </div>
            <span className="rounded-full bg-pink-100 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-pink-600 uppercase">
              Instagram
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <CompetraStat label="Followers" value="355" />
            <CompetraStat label="Posts" value="5" />
            <CompetraStat label="Eng. Rate" value="4.11%" />
            <CompetraStat label="Interactions" value="73" />
            <CompetraStat label="Top Format" value="Carousel" />
            <CompetraStat label="Best Format" value="Carousel" />
          </div>
          <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-2">
            <div>
              <p className="mb-1 text-[9px] text-slate-400">Engagement trend</p>
              <svg viewBox="0 0 120 40" className="h-10 w-full">
                <polyline
                  fill="none"
                  stroke="#6d5efc"
                  strokeWidth="2"
                  points="4,30 28,24 52,27 76,16 100,10 116,8"
                />
                {[
                  [4, 30],
                  [28, 24],
                  [52, 27],
                  [76, 16],
                  [100, 10],
                  [116, 8],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#6d5efc" />
                ))}
              </svg>
            </div>
            <div className="flex flex-col items-center justify-end">
              <svg viewBox="0 0 36 36" className="size-10">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="5"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#6d5efc"
                  strokeWidth="5"
                  strokeDasharray="52 88"
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <p className="mt-0.5 text-[8px] text-slate-400">Media mix</p>
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex min-h-0 flex-col rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                LinkedIn Overview
              </p>
              <p className="text-[10px] text-slate-400">
                Company presence & hiring signals
              </p>
            </div>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-sky-700 uppercase">
              LinkedIn
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <CompetraStat label="Employees" value="72" />
            <CompetraStat label="Posts" value="3" />
            <CompetraStat label="Hiring" value="No" />
            <CompetraStat label="Thought Leadership" value="Emerging" />
            <CompetraStat label="Open Roles" value="0" />
            <CompetraStat label="Avg Post Length" value="617" />
          </div>
          <div className="mt-3 rounded-lg bg-slate-50 p-2">
            <p className="text-[10px] font-semibold text-slate-700">
              Industry: AI Development
            </p>
            <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-slate-500">
              Techtimize LLC builds AI automation, web apps, and custom
              software for growth teams.
            </p>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {["AI Development", "AI Automation", "Web Apps", ".NET"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] text-slate-500"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Website */}
        <div className="flex min-h-0 flex-col rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Website Intelligence
              </p>
              <p className="text-[10px] text-slate-400">
                Derived from crawl & search signals
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-semibold tracking-wide text-emerald-700 uppercase">
              Web
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            <CompetraStat label="Pages" value="28" />
            <CompetraStat label="Blog Posts" value="Limited" />
            <CompetraStat label="Services" value="14" />
            <CompetraStat label="CTA Score" value="Unknown" />
          </div>
          <div className="mt-3 space-y-1.5">
            <p className="text-[9px] text-slate-400 uppercase">Top pages</p>
            {[
              ["/team-&-culture", 100],
              ["/services", 85],
              ["/case-studies", 70],
              ["/contact", 55],
            ].map(([path, score]) => (
              <div key={String(path)} className="flex items-center gap-2">
                <span className="w-20 truncate text-[9px] text-slate-500">
                  {path}
                </span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="w-5 text-right text-[9px] font-medium text-slate-600">
                  {score}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {["JavaScript", ".NET", "Python", "AI/ML"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] text-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StoneJewelleryPreview() {
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-[#050808] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(197,160,89,0.12),transparent_50%)]"
      />
      <div className="relative grid h-full min-h-[320px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/logos/stone.svg"
              alt=""
              width={22}
              height={22}
              className="size-5"
            />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
              Stone Jewellery
            </span>
          </div>

          <p className="mb-3 flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-[#C5A059] uppercase">
            <Sparkles className="size-3" />
            Timeless elegance, precious moments
          </p>

          <h4 className="font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
            Where Every Stone{" "}
            <span className="italic text-[#C5A059]">Tells a Story</span>
          </h4>

          <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/55 sm:text-sm">
            Exquisite jewelry crafted with rare gemstones and unparalleled
            artistry — elegance, passion, and timeless beauty.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C5A059] px-3.5 py-2 text-[11px] font-semibold text-black">
              Explore Collections
              <ArrowUpRight className="size-3" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C5A059]/50 px-3.5 py-2 text-[11px] font-medium text-white">
              <Calendar className="size-3 text-[#C5A059]" />
              Book an Appointment
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Rings", "Earrings", "Necklaces", "Bracelets"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[200px] border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10">
          <Image
            src="/logos/stone-hero.png"
            alt="Emerald and diamond luxury necklace"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050808]/70 via-transparent to-transparent" />
          <span className="absolute right-3 bottom-3 rounded-full border border-[#C5A059]/40 bg-black/60 px-2.5 py-1 text-[10px] tracking-wide text-[#C5A059] uppercase backdrop-blur-sm">
            Certified gemstones
          </span>
        </div>
      </div>
    </div>
  );
}

function EstimatorPreview() {
  const rows = [
    ["1", "Project Management", "40", "$120", "$4,800", "10%"],
    ["2", "UI/UX Design", "60", "$130", "$7,800", "16%"],
    ["3", "Frontend Development", "120", "$150", "$18,000", "37%"],
  ];

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#f4f6fb] p-4 text-slate-900 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/estimator.svg"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
          <span className="text-sm font-semibold text-slate-800">Estimator</span>
        </div>
        <span className="rounded-full bg-[#4F6BED] px-3 py-1.5 text-[11px] font-semibold text-white">
          Get Started Free
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 px-4 py-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-slate-900">
                E-commerce Platform
              </p>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                Approved
              </span>
            </div>
            <p className="mt-0.5 text-[10px] text-slate-400">
              EST-2024-0012 · Updated 2 hours ago
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Download className="size-3.5" />
            <Share2 className="size-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-b border-slate-100 p-3 sm:grid-cols-4">
          {[
            ["Total Estimate", "$48,560"],
            ["Total Hours", "320h"],
            ["Duration", "6–8 weeks"],
            ["Team Size", "4–6"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2"
            >
              <p className="text-[9px] tracking-wide text-slate-400 uppercase">
                {label}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-slate-900">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-3 p-3 sm:grid-cols-[1fr_88px]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-[10px]">
              <thead>
                <tr className="text-slate-400">
                  <th className="pb-2 font-medium">#</th>
                  <th className="pb-2 font-medium">Task / Category</th>
                  <th className="pb-2 font-medium">Hours</th>
                  <th className="pb-2 font-medium">Rate</th>
                  <th className="pb-2 font-medium">Amount</th>
                  <th className="pb-2 font-medium">%</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-t border-slate-100">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`py-1.5 ${i === 1 ? "font-medium text-slate-800" : "text-slate-600"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2">
            <svg viewBox="0 0 36 36" className="size-14">
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="none"
                stroke="#4F6BED"
                strokeWidth="4"
                strokeDasharray="75 88"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              <text
                x="18"
                y="20.5"
                textAnchor="middle"
                className="fill-slate-800 text-[8px] font-bold"
              >
                85%
              </text>
            </svg>
            <p className="mt-1 text-[9px] text-slate-400">Confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const projects: {
  meta: ProjectMeta;
  Preview: () => React.ReactNode;
}[] = [
  {
    meta: {
      index: "01",
      name: "iShout",
      tagline: "AI influencer marketing that activates brands at scale.",
      href: "https://ishout.ae/",
      category: "MarTech · Influencer",
      accent: "#ff2e95",
      logo: {
        src: "/logos/ishout.png",
        alt: "iShout logo",
        width: 48,
        height: 48,
        className: "size-12 rounded-full object-cover",
      },
    },
    Preview: IshoutPreview,
  },
  {
    meta: {
      index: "02",
      name: "EntryClub",
      tagline:
        "Fitness operations, QR check-in, and WhatsApp growth for Saudi gyms.",
      href: "https://staging.entryclubapp.com/en",
      category: "SaaS · Fitness",
      accent: "#1dbf73",
      logo: {
        src: "/logos/entryclub.svg",
        alt: "EntryClub logo",
        width: 140,
        height: 32,
        className: "h-8 w-auto object-contain object-left",
      },
    },
    Preview: EntryClubPreview,
  },
  {
    meta: {
      index: "03",
      name: "Unbeatable Loans",
      tagline: "AI-powered home shopping with agent-free mortgage approval.",
      href: "https://unbeatableloans.com/",
      category: "Fintech · Real Estate",
      accent: "#22c55e",
      logo: {
        src: "/logos/unbeatable.png",
        alt: "Unbeatable Loans logo",
        width: 168,
        height: 48,
        className: "h-11 w-auto rounded-md bg-white object-contain px-2 py-1",
      },
    },
    Preview: UnbeatablePreview,
  },
  {
    meta: {
      index: "04",
      name: "HireWithTess",
      tagline: "Shareable AI interviews — no scheduling, anytime assessments.",
      href: "https://hirewithtess.techtimize.co/",
      category: "HR Tech · AI",
      accent: "#f59e0b",
      logo: {
        src: "/logos/hirewithtess.svg",
        alt: "HireWithTess logo",
        width: 180,
        height: 32,
        className: "h-8 w-auto object-contain object-left",
      },
    },
    Preview: HireWithTessPreview,
  },
  {
    meta: {
      index: "05",
      name: "Competra AI",
      tagline:
        "Competitor intelligence across content, employees, and trends.",
      href: "https://competitor-analysis-plum.vercel.app/",
      category: "Analytics · AI",
      accent: "#6366f1",
      logo: {
        src: "/logos/competra.png",
        alt: "Competra AI logo",
        width: 120,
        height: 120,
        className: "h-16 w-16 object-contain",
      },
    },
    Preview: CompetraPreview,
  },
  {
    meta: {
      index: "06",
      name: "Stone Jewellery",
      tagline:
        "Luxury jewelry storefront — collections, craftsmanship, and private appointments.",
      href: "https://stone-psi-one.vercel.app/",
      category: "E-commerce · Luxury",
      accent: "#C5A059",
      logo: {
        src: "/logos/stone.svg",
        alt: "Stone Jewellery logo",
        width: 40,
        height: 40,
        className: "size-10 object-contain",
      },
    },
    Preview: StoneJewelleryPreview,
  },
  {
    meta: {
      index: "07",
      name: "Estimator",
      tagline:
        "AI project estimation — accurate scopes, hours, and costs in minutes.",
      href: "https://estimator-tau-eight.vercel.app/",
      category: "SaaS · Project Mgmt",
      accent: "#4F6BED",
      logo: {
        src: "/logos/estimator.svg",
        alt: "Estimator logo",
        width: 40,
        height: 40,
        className: "size-10 object-contain",
      },
    },
    Preview: EstimatorPreview,
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="projects-section relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(29,191,115,0.08),_transparent_40%)]"
      />
      <div
        aria-hidden
        className="projects-grain pointer-events-none absolute inset-0 opacity-[0.35]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="projects-reveal mb-16 max-w-2xl sm:mb-20">
          <p className="mb-4 text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
            Selected work
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Products shipped for real teams.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
            Each card shows the project type on the left and a live product
            moment on the right.
          </p>
        </header>

        <ul className="flex flex-col gap-8 lg:gap-10">
          {projects.map(({ meta, Preview }, index) => (
            <li
              key={meta.name}
              className="projects-reveal"
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <ProjectCard meta={meta}>
                <Preview />
              </ProjectCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
