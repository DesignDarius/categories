import { MapPin, MessageSquare, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Call or text",
    desc: "Tell us your iPhone model and what's wrong — screen, battery or something else.",
  },
  {
    icon: MapPin,
    title: "We come to you",
    desc: "Pick a place that suits you: home, office or a café around Brisbane City.",
  },
  {
    icon: Wrench,
    title: "Fixed on the spot",
    desc: "The repair is done right there, so your phone never leaves your sight.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-green">
              How it works
            </p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              No shop visit. No mail-in. Three steps.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 120}>
              <div className="relative h-full rounded-2xl border border-border bg-bg-card p-6">
                <span className="absolute right-5 top-4 text-5xl font-extrabold text-white/5">
                  {i + 1}
                </span>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-card-light shadow-[0_0_20px_rgba(42,183,73,0.18)]">
                  <Icon size={20} className="text-accent-green" />
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
      </div>
    </section>
  );
}
