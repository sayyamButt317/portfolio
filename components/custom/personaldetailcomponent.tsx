"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";

const PHONE = "+923240149841";
const EMAIL = "sayyamButt317@gmail.com";

const contacts = [
  {
    label: "Phone",
    value: "+92 324 0149841",
    href: `tel:${PHONE}`,
    icon: Phone,
    hint: "Call or WhatsApp",
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
    hint: "Say hello",
  },
] as const;

export default function PersonalDetailComponent() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-black px-6 py-20 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,255,255,0.05),_transparent_50%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium tracking-[0.22em] text-white/45 uppercase">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Personal details
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55 sm:text-base">
            Reach out directly — happy to talk about products, roles, or
            collaborations.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map(({ label, value, href, icon: Icon, hint }) => (
            <a
              key={label}
              href={href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-[border-color,transform,background] duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white/70 transition-colors group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
                    {label}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-white/45">{hint}</p>
                </div>
              </div>
              <ArrowUpRight className="mt-1 size-4 shrink-0 text-white/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/30 sm:text-left">
          Prefer social? Find me on GitHub and LinkedIn above.
        </p>
      </div>
    </section>
  );
}
