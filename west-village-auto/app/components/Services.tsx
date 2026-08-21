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
    icon: Car,
    color: "bg-primary",
    title: "Luxury, Exotic & Classic Cars",
    desc: "Specialist care for high-end and classic vehicles, handled with the attention they're built for.",
  },
  {
    icon: Hammer,
    color: "bg-accent-pink",
    title: "Collision & Body Repair",
    desc: "Accident repair at every level — from panel work to full-scale restoration.",
  },
  {
    icon: Wrench,
    color: "bg-accent-orange",
    title: "Routine Maintenance",
    desc: "Oil changes, tune-ups and scheduled service to keep your car running right.",
  },
  {
    icon: ScanLine,
    color: "bg-accent-green",
    title: "NY State Inspection",
    desc: "Licensed inspection station — by appointment, done right the first time.",
  },
  {
    icon: Gauge,
    color: "bg-primary",
    title: "Diagnostics & Electronics",
    desc: "Onboard computers, wiring, GPS, stereo and gauge cluster work.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-red",
    title: "Brakes & Battery",
    desc: "Brake service and battery replacement for safe, reliable driving.",
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
