import {
  BatteryCharging,
  Cpu,
  Laptop,
  LockKeyholeOpen,
  Plug,
  ShoppingBag,
  Smartphone,
  Tablet,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Smartphone,
    color: "bg-primary",
    title: "Screen Replacement",
    desc: "Cracked or dead screens replaced — iPhone screens usually in 15–30 minutes.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-green",
    title: "Battery Replacement",
    desc: "Get a full day of charge back instead of hunting for a power point.",
  },
  {
    icon: Plug,
    color: "bg-accent-orange",
    title: "Charging Port Repair",
    desc: "Loose, dirty or dead charging ports cleaned out or replaced.",
  },
  {
    icon: Cpu,
    color: "bg-accent-pink",
    title: "Motherboard Repair",
    desc: "Board-level repairs for phones that won't power on or keep restarting.",
  },
  {
    icon: Laptop,
    color: "bg-accent-red",
    title: "Laptop Repair",
    desc: "Screens, keyboards, batteries and other laptop faults diagnosed in store.",
  },
  {
    icon: Tablet,
    color: "bg-primary",
    title: "Tablet Repair",
    desc: "Cracked iPad and tablet screens and batteries replaced.",
  },
  {
    icon: LockKeyholeOpen,
    color: "bg-accent-green",
    title: "Unlocking",
    desc: "Network unlocking so your phone works with any carrier.",
  },
  {
    icon: ShoppingBag,
    color: "bg-accent-orange",
    title: "Accessories",
    desc: "Cases, chargers, cables and screen protectors in stock at the shop.",
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
            Phones, laptops and tablets — all under one roof
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ icon: Icon, color, title, desc }, i) => (
          <Reveal key={title} delay={(i % 4) * 90}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-light">
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
