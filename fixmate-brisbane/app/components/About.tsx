import Image from "next/image";
import { Award, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              About Fix Mate
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              Recognised as inner-city Brisbane&rsquo;s best handyman
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Fix Mate Brisbane works out of Fortitude Valley, taking on
              everything from quick repairs to larger projects for homeowners,
              renters and businesses across the inner city.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              In 2026 Fix Mate was named the Best Handyman in Inner City
              Brisbane by the Quality Business Awards — a result built on
              reliable work and happy customers.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-card px-5 py-4">
                <Award size={20} className="shrink-0 text-accent-orange" />
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">
                    Best Handyman 2026
                  </span>
                  <br />
                  Inner City Brisbane
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-card px-5 py-4">
                <div className="flex shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="fill-accent-orange text-accent-orange"
                    />
                  ))}
                </div>
                <p className="text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">5.0</span>{" "}
                  on Google
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_0_40px_rgba(77,105,255,0.12)]">
            <div className="relative aspect-square">
              <Image
                src="/images/drill-closeup.jpg"
                alt="A tradesman in a work apron holding a cordless drill"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  Tools ready — big jobs or small
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
