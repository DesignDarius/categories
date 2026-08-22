import { MapPin, ShieldCheck, Star, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: Star, label: "5.0★ Google", sub: "Rated by real customers" },
  { icon: ShieldCheck, label: "Licensed & insured", sub: "Lic. 335792c" },
  { icon: Wrench, label: "Property maintenance", sub: "Not just small jobs" },
  { icon: MapPin, label: "Mosman based", sub: "Lower North Shore" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
        {ITEMS.map(({ icon: Icon, label, sub }, i) => (
          <Reveal key={label} delay={i * 80}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-card-light shadow-[0_0_14px_rgba(77,105,255,0.12)]">
                <Icon size={18} className="text-primary" />
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
