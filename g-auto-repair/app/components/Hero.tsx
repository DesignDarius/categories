import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-workshop.jpg"
          alt="A Porsche 911 on the hoist inside the G Auto Repair & Service workshop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary">
          <Star size={13} className="fill-accent-orange text-accent-orange" />
          5.0 rating · North Melbourne
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          From daily drivers to a Porsche on the hoist.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          A 5.0-rated workshop handling everything from routine servicing to
          crash repair and engine rebuilds — real mechanical work, trusted
          with performance cars and family cars alike.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+61403346666"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call 0403 346 666
          </a>
          <a
            href="https://www.google.com/maps/place/G+Auto+Repair+%26+Service/data=!4m7!3m6!1s0x6ad65d4323a7f7fd:0x21a51a3f2965dea8!8m2!3d-37.8031225!4d144.9463387!16s%2Fg%2F11n9hvj8mn!19sChIJ_fenI0Nd1moRqN5lKT8apSE?authuser=0&hl=en"
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
