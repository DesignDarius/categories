import {
  BatteryCharging,
  Car,
  Gauge,
  Hammer,
  ScanLine,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: ScanLine,
    color: "bg-accent-green",
    title: "MOT Testing Station",
    desc: "Official on-site MOT testing — no waiting on another garage to book you in.",
  },
  {
    icon: Hammer,
    color: "bg-accent-pink",
    title: "Crash & Body Repair",
    desc: "Accident repair at every level — from panel work to full-scale restoration.",
  },
  {
    icon: Wrench,
    color: "bg-accent-orange",
    title: "Full & Interim Service",
    desc: "Scheduled servicing to your car's spec, done right and on time.",
  },
  {
    icon: Gauge,
    color: "bg-primary",
    title: "Engine Diagnostics",
    desc: "Fault-finding and diagnostics across all makes and models.",
  },
  {
    icon: Car,
    color: "bg-primary",
    title: "BMW Specialist",
    desc: "Deep experience with BMW alongside full mechanical work on every make.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-red",
    title: "Brakes & Battery",
    desc: "Brake inspection, wheel alignment and battery replacement for safe driving.",
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
          Full-service repair, under one roof
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
