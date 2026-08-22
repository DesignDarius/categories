import {
  Droplet,
  Hammer,
  Layers,
  PaintBucket,
  Ruler,
  Sun,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: Droplet,
    color: "bg-primary",
    title: "Plumbing Repairs",
    desc: "Leaks, blocked drains and fittings fixed without the guesswork.",
  },
  {
    icon: PaintBucket,
    color: "bg-accent-green",
    title: "Plastering & Wall Repairs",
    desc: "Patched, sanded and finished so the repair doesn't show.",
  },
  {
    icon: Ruler,
    color: "bg-accent-orange",
    title: "Framing & Carpentry",
    desc: "New walls, doorways and structural timber work, built square.",
  },
  {
    icon: Sun,
    color: "bg-accent-pink",
    title: "Patio & Pergola Builds",
    desc: "Outdoor roof structures framed and sheeted properly.",
  },
  {
    icon: Layers,
    color: "bg-accent-red",
    title: "Insulation & Wall Fit-outs",
    desc: "Insulation and lining installed as part of a full room fit-out.",
  },
  {
    icon: Hammer,
    color: "bg-primary",
    title: "General Handyman",
    desc: "The everyday repairs around the house that keep piling up.",
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
            Real repairs and renovations, backed by a 5.0 rating
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
