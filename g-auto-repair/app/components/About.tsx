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
            A North Melbourne workshop that doesn&rsquo;t cut corners
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            G Auto Repair &amp; Service takes on the jobs other shops wave
            off — crash-damaged panels, full engine rebuilds, and the kind of
            diagnostic work that actually finds the fault the first time.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            The workshop is trusted with everything from daily drivers to
            performance and prestige cars, backed by a genuine 5.0 rating on
            Google.
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
              src="/images/brake-diagnostic.jpg"
              alt="A worn brake pad held up next to a rotor during inspection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-5">
              <p className="text-sm font-medium text-white">
                We show you the wear, not just tell you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
