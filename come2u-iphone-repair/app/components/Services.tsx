import {
  BatteryCharging,
  MessageCircleQuestion,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Smartphone,
    color: "bg-primary",
    title: "iPhone Screen Replacement",
    desc: "Cracked, black or unresponsive screen replaced on the spot, wherever you are in the city.",
  },
  {
    icon: BatteryCharging,
    color: "bg-accent-green",
    title: "iPhone Battery Replacement",
    desc: "Phone dying by lunchtime? A fresh battery brings back a full day of charge.",
  },
  {
    icon: ShoppingBag,
    color: "bg-accent-orange",
    title: "Replacement Screens for Sale",
    desc: "Need just the part? Ask about replacement iPhone screens currently available.",
  },
  {
    icon: MessageCircleQuestion,
    color: "bg-accent-pink",
    title: "Something Else?",
    desc: "Not sure what's wrong? Send a text describing the problem and get an honest answer.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-green">
            What we fix
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            iPhone repairs, done where you are
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {SERVICES.map(({ icon: Icon, color, title, desc }, i) => (
          <Reveal key={title} delay={(i % 2) * 100}>
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
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent-green/0 blur-2xl transition-colors duration-500 group-hover:bg-accent-green/10" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
