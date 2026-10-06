import { BadgeCheck, Search, Store } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Store,
    title: "Walk in",
    desc: "Bring your phone, laptop or tablet to the shop on Willis Street — no booking needed.",
  },
  {
    icon: Search,
    title: "Free inspection",
    desc: "We check what's wrong and tell you the options before any work starts.",
  },
  {
    icon: BadgeCheck,
    title: "Fixed — or you don't pay",
    desc: "Most iPhone screens are done in 15–30 minutes. No fix means no fee.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
              How it works
            </p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Simple, honest repairs in three steps
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-border bg-bg-card p-6">
                <span className="absolute right-5 top-4 text-5xl font-extrabold text-white/5">
                  {i + 1}
                </span>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-card-light shadow-[0_0_20px_rgba(255,178,63,0.15)]">
                  <Icon size={20} className="text-accent-orange" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
