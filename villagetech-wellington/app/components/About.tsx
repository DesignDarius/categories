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
              About Village Tech
            </p>
            <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
              A real repair shop in the heart of Te Aro
            </h2>
            <p className="mb-4 text-base leading-relaxed text-text-secondary">
              Village Tech Solutions is a walk-in repair shop on Willis
              Street, fixing mobile phones, tablets and laptops — from cracked
              screens and tired batteries to charging ports and motherboard
              faults.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              With over ten years of hands-on repair experience, the promise is
              simple: a free inspection, a clear answer, and no fee if it
              can&rsquo;t be fixed.
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
          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_0_40px_rgba(255,178,63,0.12)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/window-services.jpg"
                alt="The Village Tech Solutions shop window listing mobile phone, laptop and tablet repairs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
                <p className="text-sm font-medium text-white">
                  Free inspection · No fix = No fee
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
