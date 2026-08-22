import {
  BatteryCharging,
  Droplet,
  LockKeyholeOpen,
  Plug,
  Smartphone,
  Unplug,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Smartphone,
    color: "bg-primary",
    title: "Screen Replacement",
    desc: "Cracked or dead screens replaced with quality parts, same day.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-green",
    title: "Battery Replacement",
    desc: "Restore real battery life instead of charging twice a day.",
  },
  {
    icon: Droplet,
    color: "bg-accent-orange",
    title: "Water Damage Repair",
    desc: "Fast diagnosis and cleanup before corrosion does real damage.",
  },
  {
    icon: Plug,
    color: "bg-accent-pink",
    title: "Charging Port Repair",
    desc: "Loose or dead charging ports cleaned out or replaced.",
  },
  {
    icon: LockKeyholeOpen,
    color: "bg-accent-red",
    title: "Phone Unlocking",
    desc: "Network and passcode unlocking for every major brand.",
  },
  {
    icon: Unplug,
    color: "bg-primary",
    title: "Software & Data Issues",
    desc: "Software glitches, updates and data recovery sorted on the spot.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            What we fix
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Real repairs, backed by a 4.8 rating
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, color, title, desc }, i) => (
          <Reveal key={title} delay={(i % 3) * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-light">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color} shadow-[0_0_20px_rgba(0,0,0,0.25)]`}
              >
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {desc}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-accent-orange/10" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
