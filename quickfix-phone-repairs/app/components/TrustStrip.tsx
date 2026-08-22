import { Clock, MapPin, MessageSquareText, Star } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: Star, label: "4.8★ Google", sub: "200+ real reviews" },
  { icon: Clock, label: "Same-day repairs", sub: "Most jobs while you wait" },
  { icon: MessageSquareText, label: "Honest pricing", sub: "No surprise fees" },
  { icon: MapPin, label: "Spencer Outlet Centre", sub: "Docklands, Melbourne" },
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
