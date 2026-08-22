import {
  CarFront,
  Gauge,
  Hammer,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    color: "bg-primary",
    title: "Logbook Servicing",
    desc: "Manufacturer-scheduled servicing that keeps your warranty intact.",
  },
  {
    icon: Gauge,
    color: "bg-accent-green",
    title: "Diagnostics",
    desc: "Modern scan tools to find the real fault before any work starts.",
  },
  {
    icon: ShieldCheck,
    color: "bg-accent-orange",
    title: "Brakes & Suspension",
    desc: "Pads, rotors, shocks and struts, done right the first time.",
  },
  {
    icon: Hammer,
    color: "bg-accent-pink",
    title: "Crash & Panel Repair",
    desc: "From minor knocks to serious collision damage, rebuilt properly.",
  },
  {
    icon: Zap,
    color: "bg-accent-red",
    title: "Engine & Electrical",
    desc: "Engine rebuilds, wiring faults and full electrical diagnostics.",
  },
  {
    icon: CarFront,
    color: "bg-primary",
    title: "Every Make & Model",
    desc: "From daily drivers to performance and prestige cars.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="mb-12 max-w-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
          What we do
        </p>
        <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
          Real mechanical work, backed by a 5.0 rating
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, color, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-light"
          >
            <div
              className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color}`}
            >
              <Icon size={20} className="text-white" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
