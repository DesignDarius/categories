import { Award, CalendarClock, ShieldCheck, Star } from "lucide-react";

const ITEMS = [
  { icon: Star, label: "4.4★ · 151 reviews", sub: "Google Business" },
  { icon: CalendarClock, label: "Since 1992", sub: "Family-owned" },
  { icon: ShieldCheck, label: "NY State Inspection", sub: "Licensed station" },
  { icon: Award, label: "Luxury & Exotic", sub: "Specialist care" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
        {ITEMS.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-card-light">
              <Icon size={18} className="text-accent-orange" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {label}
              </p>
              <p className="text-xs text-text-secondary">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
