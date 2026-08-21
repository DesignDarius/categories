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
            Privately owned on Greenwich St since 1992
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            West Village Auto Repair has been part of the neighborhood for
            over three decades — a family-run garage where the same people
            who answer the phone are the ones under the hood.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            The shop&rsquo;s reputation in Greenwich Village comes down to
            straight answers and steady hands: customers consistently point
            to the team&rsquo;s honesty and reliability as the reason they
            keep coming back.
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
              <span className="font-semibold text-text-primary">4.4</span> on
              Google · 151 reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-primary">33+</p>
            <p className="mt-1 text-sm text-text-secondary">
              Years serving Greenwich Village
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-accent-orange">151</p>
            <p className="mt-1 text-sm text-text-secondary">
              Google reviews from real customers
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-accent-green">NY</p>
            <p className="mt-1 text-sm text-text-secondary">
              State inspection station
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-accent-pink">6</p>
            <p className="mt-1 text-sm text-text-secondary">
              Days open a week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
