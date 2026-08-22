import Image from "next/image";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent-orange/10 blur-[100px]" />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
              About Quickfix
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              A repair counter built for people mid-shop
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Quickfix Phone Repairs sits right inside Spencer Outlet Centre —
              drop your phone off, keep shopping, and pick it up working
              again. No mail-in waiting, no separate trip.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              Customers keep coming back for the same reason: honest
              diagnosis, fair pricing against the big-chain stores, and
              repairs that actually hold up.
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
                <span className="font-semibold text-text-primary">4.8</span>{" "}
                on Google · 200+ real customer reviews
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_0_40px_rgba(255,178,63,0.12)]">
            <div className="relative aspect-square">
              <Image
                src="/images/logo-closeup.jpg"
                alt="The Quickfix Phone Repairs logo at the Docklands kiosk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  A name locals already know at the centre
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
