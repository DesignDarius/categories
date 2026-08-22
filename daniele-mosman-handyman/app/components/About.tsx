import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              About Daniele
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              Licensed for the jobs a casual handyman can&rsquo;t take on
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Daniele Mosman Handyman is a licensed, insured property
              maintenance operator — roofing, waterproofing and structural
              work included, not just the jobs that fit under a generic
              &ldquo;handyman&rdquo; label.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              That licence and insurance, backed by a genuine 5.0 rating on
              Google, is why Mosman locals call for everything from a leaking
              roof to a full outdoor rebuild.
            </p>

            <div className="mt-8 flex items-center gap-2 rounded-xl border border-border bg-bg-card px-5 py-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">5.0</span>{" "}
                on Google · real customer reviews
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_0_35px_rgba(77,105,255,0.1)]">
            <div className="relative aspect-square">
              <Image
                src="/images/underfloor-heating.jpg"
                alt="Underfloor heating pipes being installed by Daniele Mosman Handyman"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  The unglamorous work, done right
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
