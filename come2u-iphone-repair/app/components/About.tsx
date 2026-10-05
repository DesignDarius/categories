import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-green/10 blur-[100px]" />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-green">
              About
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              A repair bench that travels to you
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Instead of hunting for a repair shop and leaving your phone
              behind for the day, the repair comes to you. Screens and
              batteries are replaced right in front of you, wherever is
              easiest.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              It&rsquo;s a simple idea that customers clearly appreciate —
              every Google review so far is five stars.
            </p>

            <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-bg-card px-5 py-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent-orange text-accent-orange"
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">5.0</span>{" "}
                rating on Google
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_0_40px_rgba(42,183,73,0.12)]">
            <div className="relative aspect-[8/7]">
              <Image
                src="/images/iphone-internals.jpg"
                alt="Inside an iPhone during a battery and screen repair"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  Real repair work — not a stock photo
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
