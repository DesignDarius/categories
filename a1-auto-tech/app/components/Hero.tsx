import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-classic-ford.jpg"
          alt="A restored classic car inside the A1 Auto Tech workshop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary">
          <Star size={13} className="fill-accent-orange text-accent-orange" />
          4.9 rating · Wellington
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          From a daily Audi to a 1959 classic — wired right.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          Wellington auto electricians handling modern diagnostics, starter
          and alternator rebuilds, and full electrical restoration on
          classic cars other shops won&rsquo;t touch.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+6443842215"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call (04) 384 2215
          </a>
          <a
            href="https://www.google.com/maps/place/A1+Auto+Tech,+Auto+Electrician+Wellington/data=!4m7!3m6!1s0x6d38af11d86b8941:0xd4b8b699ca23d3b2!8m2!3d-41.298741!4d174.7738603!16s%2Fg%2F1tfddnl9!19sChIJQYlr2BGvOG0RstMjypm2uNQ?authuser=0&hl=en"
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
