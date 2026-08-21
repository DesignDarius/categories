import {
  Droplet,
  Gauge,
  KeyRound,
  MapPinned,
  ShieldCheck,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: MapPinned,
    color: "bg-primary",
    title: "Mobile & Roadside Repair",
    desc: "We come to you — Bronx, Manhattan, Queens, Brooklyn or Staten Island.",
  },
  {
    icon: Gauge,
    color: "bg-accent-green",
    title: "Diagnostics & Battery Testing",
    desc: "Full diagnostic scan and battery health check to find the real problem fast.",
  },
  {
    icon: ShieldCheck,
    color: "bg-accent-orange",
    title: "Brake Service",
    desc: "Front, back, or all four — straightforward work at a straightforward price.",
  },
  {
    icon: Droplet,
    color: "bg-accent-pink",
    title: "Oil Change",
    desc: "Standard and foreign-make oil changes, done quick and done right.",
  },
  {
    icon: Zap,
    color: "bg-accent-red",
    title: "Electrical Repairs",
    desc: "Wiring faults, lights, and electrical issues other shops wave off.",
  },
  {
    icon: KeyRound,
    color: "bg-primary",
    title: "Lockouts & Road-Ready Checks",
    desc: "Vehicle lockout service and a 120-point assessment before you buy.",
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
          Real repair work, day or night
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
