import { MapPinned, Wrench } from "lucide-react";

const CALLOUT_FEES = [
  { area: "Bronx", price: "$100" },
  { area: "Manhattan", price: "$150" },
  { area: "Queens", price: "$150" },
  { area: "Brooklyn", price: "$200" },
  { area: "Staten Island", price: "$300" },
];

const SERVICE_PRICES = [
  { item: "Brakes (front or back)", price: "$60" },
  { item: "Brakes (all four)", price: "$120" },
  { item: "Oil change", price: "$30" },
  { item: "Oil change, foreign makes", price: "$60" },
  { item: "Vehicle lockout", price: "$100" },
  { item: "Electrical repairs", price: "$125+" },
  { item: "Diagnostic fee", price: "$125+" },
  { item: "Road-ready 120-point assessment", price: "$100" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            No surprises
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Pricing, posted up front
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Most shops make you call and guess. Here&rsquo;s what things
            actually cost.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <MapPinned size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Roadside call-out fee
              </h3>
            </div>
            <div className="space-y-3">
              {CALLOUT_FEES.map((row) => (
                <div
                  key={row.area}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-text-secondary">
                    {row.area}
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-text-muted">
              Call-out fee applies when we come to your location, in addition
              to the repair itself.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-orange">
                <Wrench size={18} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Common services
              </h3>
            </div>
            <div className="space-y-3">
              {SERVICE_PRICES.map((row) => (
                <div
                  key={row.item}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-text-secondary">
                    {row.item}
                  </span>
                  <span className="text-sm font-semibold text-text-primary">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-text-muted">
              Oil changes require customer-supplied oil. Vehicle report for
              the road-ready assessment available for an extra $50.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
