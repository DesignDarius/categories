import { Clock, MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/25 via-background to-background" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary">
          <Star size={13} className="fill-accent-orange text-accent-orange" />
          4.6 rating ·
          <Clock size={13} className="text-accent-green" />
          Open 24 hours · Bronx, NYC
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          24-hour repair, in the shop or wherever you&rsquo;re stuck.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          Diagnostics, brakes, oil changes and electrical work at our Bronx
          shop — plus roadside repair we bring to you, anywhere across NYC&apos;s
          five boroughs. Prices posted up front, no surprises.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+13478148878"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call (347) 814-8878
          </a>
          <a
            href="https://www.google.com/maps/place/Cali's+Auto+Repair+%26+Diagnostics/@40.8147474,-73.9134661,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-bg-card"
          >
            <MapPin size={16} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
