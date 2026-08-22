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
              About MK Handyman
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              A Richmond handyman who finishes what he starts
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              MK Handyman &amp; Home Repairs covers the trades that usually
              need three different tradespeople — plumbing, plastering,
              framing — under one number, from a single loose tile to a full
              wall rebuild.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              That range, backed by a genuine 5.0 rating on Google, is why
              Richmond locals call once instead of juggling separate
              contractors for every job.
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
                src="/images/doorway-framing.jpg"
                alt="New doorway framing and insulation mid-build by MK Handyman & Home Repairs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  Built properly, not just patched
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
