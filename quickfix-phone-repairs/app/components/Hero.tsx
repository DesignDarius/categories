import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-kiosk.jpg"
          alt="The Quickfix Phone Repairs kiosk at Spencer Outlet Centre, Docklands"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent-orange/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur">
            <Star size={13} className="fill-accent-orange text-accent-orange" />
            4.8 rating · Docklands, Melbourne
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
            Your screen, back to new — while you shop.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            Screen and battery replacements, water damage repair and unlocking
            for every phone — done at the Spencer Outlet Centre kiosk, often
            while you finish your shopping.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+61409607863"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(77,105,255,0.4)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call 0409 607 863
            </a>
            <a
              href="https://www.google.com/maps/place/Quickfix+phone+repairs/data=!4m7!3m6!1s0x6ad65d4879d02349:0xe0216237ad8bc526!8m2!3d-37.815278!4d144.9516571!16s%2Fg%2F11h7f8tpcd!19sChIJSSPQeUhd1moRJsWLrTdiIeA?authuser=0&hl=en"
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
