import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-deck-entrance.jpg"
          alt="A finished timber deck entrance built by Daniele Mosman Handyman"
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
            5.0 rating · Mosman, Sydney
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
            Licensed property maintenance, done properly.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            Decking, roofing, waterproofing, painting and gutters — licensed
            and insured work across Mosman and the Lower North Shore, from a
            handyman who does it right the first time.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+61435306311"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(77,105,255,0.35)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call 0435 306 311
            </a>
            <a
              href="https://www.google.com/maps/place/Daniele+MOSMAN+HANDYMAN/data=!4m7!3m6!1s0x6b12ac208c908129:0x9b1acfc86a860d8d!8m2!3d-33.8372754!4d151.2348778!16s%2Fg%2F11fxvnymy1!19sChIJKYGQjCCsEmsRjQ2GasjPGps?authuser=0&hl=en"
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
