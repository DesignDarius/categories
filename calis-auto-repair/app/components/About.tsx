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
            A Bronx shop that never really closes
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            Cali&rsquo;s Auto Repair &amp; Diagnostics is a Latino-owned,
            LGBTQ+ friendly garage in the Bronx, open around the clock — in
            the shop or on the road, wherever your car gives out.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            No guesswork on cost: pricing for every common job and every
            borough call-out is posted plainly, before you ever pick up the
            phone.
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
              <span className="font-semibold text-text-primary">4.6</span> on
              Google · real customer reviews
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-square">
            <Image
              src="/images/battery-diagnostic.jpg"
              alt="Running a battery health diagnostic at Cali's Auto Repair"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
              <p className="text-sm font-medium text-white">
                Real diagnostics, not guesswork
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
