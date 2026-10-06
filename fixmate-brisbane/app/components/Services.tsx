import {
  DoorOpen,
  Hammer,
  Lightbulb,
  ListChecks,
  PaintRoller,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: DoorOpen,
    title: "Door Installation",
    desc: "New doors supplied, hung and painted — plus fixing ones that stick, squeak or won't latch.",
  },
  {
    icon: PaintRoller,
    title: "Painting & Touch-ups",
    desc: "Fresh coats, patched walls and touch-ups that make a room look finished again.",
  },
  {
    icon: Wrench,
    title: "General Repairs",
    desc: "The broken handles, loose fittings and small fixes that keep getting put off.",
  },
  {
    icon: Lightbulb,
    title: "Fixtures & Installs",
    desc: "Shelving, curtain rails, mirrors, TV mounts and fittings installed properly.",
  },
  {
    icon: Hammer,
    title: "Small Renovation Jobs",
    desc: "Larger projects welcome — get a quote and a clear plan before anything starts.",
  },
  {
    icon: ListChecks,
    title: "Odd-Job Lists",
    desc: "Got a list? Send it through and knock several jobs over in one visit.",
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
            One call for the jobs around your place
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} delay={(i % 3) * 100}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg-card p-6 transition-colors hover:bg-bg-card-light">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-[0_0_20px_rgba(77,105,255,0.3)]">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
