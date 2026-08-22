import {
  Droplets,
  Grid3x3,
  Home,
  PaintRoller,
  TreeDeciduous,
  Waves,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: TreeDeciduous,
    color: "bg-primary",
    title: "Decking & Timber Work",
    desc: "New decks, steps and timber structures built to last outdoors.",
  },
  {
    icon: Home,
    color: "bg-accent-green",
    title: "Roof Repairs & Retiling",
    desc: "Damaged and leaking roof tiles found, replaced and sealed.",
  },
  {
    icon: Waves,
    color: "bg-accent-orange",
    title: "Waterproofing",
    desc: "Proper waterproofing before the damage becomes structural.",
  },
  {
    icon: PaintRoller,
    color: "bg-accent-pink",
    title: "Painting & Finishing",
    desc: "Interior and exterior painting, finished cleanly and evenly.",
  },
  {
    icon: Droplets,
    color: "bg-accent-red",
    title: "Gutter Service",
    desc: "Gutters cleared, repaired and protected before the next storm.",
  },
  {
    icon: Grid3x3,
    color: "bg-primary",
    title: "Paving & Outdoor Flooring",
    desc: "Paver and tiled outdoor flooring, laid level and secure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
            What we do
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Licensed property maintenance, backed by a 5.0 rating
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, color, title, desc }, i) => (
          <Reveal key={title} delay={(i % 3) * 100}>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-light">
              <div
                className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color} shadow-[0_0_16px_rgba(0,0,0,0.2)]`}
              >
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {desc}
              </p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/10" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
