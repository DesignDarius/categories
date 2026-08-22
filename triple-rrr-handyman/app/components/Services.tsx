import {
  Fence,
  Hammer,
  Lamp,
  PaintRoller,
  TreeDeciduous,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: TreeDeciduous,
    color: "bg-primary",
    title: "Decking & Outdoor Builds",
    desc: "Timber decks, pergolas and outdoor structures built to last.",
  },
  {
    icon: Fence,
    color: "bg-accent-green",
    title: "Fencing & Privacy Screens",
    desc: "Fences and decorative screens installed cleanly and securely.",
  },
  {
    icon: Wrench,
    color: "bg-accent-orange",
    title: "General Repairs",
    desc: "The everyday jobs around the house that keep piling up.",
  },
  {
    icon: Lamp,
    color: "bg-accent-pink",
    title: "Furniture & Lamp Restoration",
    desc: "Careful restoration work on pieces worth keeping, not replacing.",
  },
  {
    icon: PaintRoller,
    color: "bg-accent-red",
    title: "Painting & Finishing",
    desc: "Interior and exterior painting, staining and timber finishing.",
  },
  {
    icon: Hammer,
    color: "bg-primary",
    title: "General Handyman",
    desc: "One call for the jobs that don't fit neatly into a category.",
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
            Real handyman work, backed by a 5.0 rating
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
