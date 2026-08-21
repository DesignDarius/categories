import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-storefront.webp"
          alt="West Village Auto Repair storefront at 743 Greenwich St"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary">
          <Star size={13} className="fill-accent-orange text-accent-orange" />
          4.4 rating · 151 Google reviews · Est. 1992
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          Greenwich Village&rsquo;s trusted garage for cars that deserve care.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          From daily drivers to luxury, exotic &amp; classic cars — honest
          diagnostics, real mechanics, and work you can trust. Family-run on
          Greenwich St since 1992.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+12126912020"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call (212) 691-2020
          </a>
          <a
            href="https://www.google.com/maps/place/West+Village+Auto+Repair+%2F%2F+NYC+Car+Guy/@40.735406,-74.006584,17z"
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
