import {
  BatteryCharging,
  Cog,
  Gauge,
  History,
  Wrench,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    icon: Zap,
    color: "bg-primary",
    title: "Auto Electrical Diagnostics",
    desc: "Wiring faults and electrical gremlins found and fixed properly.",
  },
  {
    icon: Cog,
    color: "bg-accent-green",
    title: "Starter & Alternator Rebuilds",
    desc: "Rebuilt to spec rather than swapped for an expensive new unit.",
  },
  {
    icon: History,
    color: "bg-accent-orange",
    title: "Classic Car Electrical",
    desc: "Full electrical restoration for classics other shops won't touch.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-pink",
    title: "Battery & Charging Systems",
    desc: "Battery health, alternator output and charging faults sorted.",
  },
  {
    icon: Gauge,
    color: "bg-accent-red",
    title: "Modern Diagnostics",
    desc: "Full scan tools for late-model cars and SUVs, not just guesswork.",
  },
  {
    icon: Wrench,
    color: "bg-primary",
    title: "General Auto Electrical",
    desc: "Lighting, sensors, and electrical work on every make and model.",
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
          Auto electrical work, backed by a 4.9 rating
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
