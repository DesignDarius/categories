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
            A neighbourhood garage on Alroy Road
          </h2>
          <p className="mb-4 text-base leading-relaxed text-text-secondary">
            New Auto Tech has been fixing cars in Finsbury Park for over a
            decade — full mechanical repairs, servicing and body work on
            every make, with an on-site MOT testing station so nothing needs
            to be sent elsewhere.
          </p>
          <p className="text-base leading-relaxed text-text-secondary">
            Customers keep coming back for the same reason: straight
            diagnostics, fair pricing, and a team that treats a BMW with the
            same care as a daily runaround.
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
              Google · 71 reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-primary">10+</p>
            <p className="mt-1 text-sm text-text-secondary">
              Years serving Finsbury Park
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-accent-orange">71</p>
            <p className="mt-1 text-sm text-text-secondary">
              Google reviews from real customers
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <p className="text-3xl font-extrabold text-accent-green">MOT</p>
            <p className="mt-1 text-sm text-text-secondary">
              Official testing station
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
