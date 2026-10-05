import Image from "next/image";
import { MessageSquare, Phone, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/repair-bench.jpg"
          alt="An iPhone opened up mid-repair, with its screen and camera parts laid out on the table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent-green/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur">
            <Star size={13} className="fill-accent-orange text-accent-orange" />
            5.0 on Google · Brisbane City
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
            Cracked screen? Dying battery? We come to you.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            iPhone screen and battery repairs around Brisbane City — at your
            home, your office or the café down the street. No shop to find, no
            day without your phone.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+61494077491"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(77,105,255,0.4)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call 0494 077 491
            </a>
            <a
              href="sms:+61494077491"
              className="flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur transition-colors hover:bg-bg-card"
            >
              <MessageSquare size={16} />
              Send a text
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
