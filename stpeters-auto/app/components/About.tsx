import Image from "next/image";
import { Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            About the workshop
          </p>
          <h2 className="mb-5 text-3xl font-bold text-text-primary sm:text-4xl">
            A St Peters workshop that earns every star the hard way
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            St Peter&rsquo;s Auto is a multi-bay mechanic workshop tucked into
            the light-industrial strip on Burrows Rd S — LGBTQ+ friendly, and
            set up to handle everything from routine servicing to full
            diagnostics.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            No pressure, no upsell — just a straight answer on what your car
            actually needs, from a shop with a genuine 5.0 rating on Google.
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
              <span className="font-semibold text-text-primary">5.0</span> on
              Google · real customer reviews
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-square">
            <Image
              src="/images/workshop-bays.jpg"
              alt="Cars being serviced on hoists at St Peter's Auto"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
              <p className="text-sm font-medium text-white">
                Every hoist in use, every day
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
