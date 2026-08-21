import Image from "next/image";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            About the shop
          </p>
          <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
            A Chelsea shop built around your schedule, not ours
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Yaya Auto Mechanic Service keeps unusual hours on purpose —
            weeknights and Saturdays until 5AM — so a car problem that shows
            up at 11PM doesn&rsquo;t have to sit until the next business day.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            Customers keep coming back for the same reason: clear
            explanations before any work starts, and pricing that matches
            what you were quoted — no surprise add-ons at pickup.
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
              <span className="font-semibold text-text-primary">4.7</span> on
              Google · 19 real customer reviews
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-square">
            <Image
              src="/images/fuse-diagnostic.jpg"
              alt="Diagnosing a fuse box issue at Yaya Auto Mechanic Service"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
              <p className="text-sm font-medium text-white">
                We show you what&rsquo;s actually wrong
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
