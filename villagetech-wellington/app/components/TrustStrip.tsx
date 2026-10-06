import { BadgeCheck, Search, Star, Timer } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: Star, label: "5.0★ Google", sub: "Rated by real customers" },
  { icon: Search, label: "Free inspection", sub: "Know the problem first" },
  { icon: BadgeCheck, label: "No fix = No fee", sub: "You only pay for results" },
  { icon: Timer, label: "15–30 min", sub: "iPhone screen turnaround" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
        {ITEMS.map(({ icon: Icon, label, sub }, i) => (
          <Reveal key={label} delay={i * 80}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-card-light shadow-[0_0_16px_rgba(255,178,63,0.15)]">
                <Icon size={18} className="text-accent-orange" />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {label}
                </p>
                <p className="text-xs text-text-secondary">{sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
