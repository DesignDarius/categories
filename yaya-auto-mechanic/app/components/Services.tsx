import {
  Cog,
  Gauge,
  Moon,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: Moon,
    color: "bg-primary",
    title: "Overnight Emergency Repair",
    desc: "Open until 5AM most nights — a breakdown after dark doesn't have to wait for morning.",
  },
  {
    icon: Gauge,
    color: "bg-accent-green",
    title: "Diagnostics",
    desc: "Full diagnostic scan to find the actual problem before any work starts.",
  },
  {
    icon: ShieldCheck,
    color: "bg-accent-orange",
    title: "Brake Service",
    desc: "Pads, rotors and full brake jobs, explained clearly before we start.",
  },
  {
    icon: Cog,
    color: "bg-accent-pink",
    title: "Transmission Repair",
    desc: "Valve body and transmission work done to spec, not just patched over.",
  },
  {
    icon: Zap,
    color: "bg-accent-red",
    title: "Electrical Repairs",
    desc: "Wiring faults, fuse and relay issues, and battery/charging system diagnostics.",
  },
  {
    icon: Truck,
    color: "bg-primary",
    title: "Cars, Trucks & SUVs",
    desc: "Full-service repair for everyday vehicles and larger trucks alike.",
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
