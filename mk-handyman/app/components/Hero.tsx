import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-patio-roof.jpg"
          alt="Patio roof framing under construction by MK Handyman & Home Repairs"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent-green/10 blur-[110px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur">
            <Star size={13} className="fill-primary text-primary" />
            5.0 rating · Richmond, Melbourne
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
            From a dripping tap to a full room reno.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            Plumbing, plastering, framing and patio builds — one handyman who
            actually finishes the job, not just the parts he likes.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+61469780963"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(77,105,255,0.35)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call 0469 780 963
            </a>
            <a
              href="https://www.google.com/maps/place/MK+Handyman+%26+Home+Repairs/data=!4m7!3m6!1s0x6ad643eed825b257:0x7f3bd74d5380a2d6!8m2!3d-37.8122242!4d144.9986017!16s%2Fg%2F11z49qgcbc!19sChIJV7Il2O5D1moR1qKAU03XO38?authuser=0&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur transition-colors hover:bg-bg-card"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
