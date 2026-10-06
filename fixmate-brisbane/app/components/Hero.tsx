import Image from "next/image";
import { Award, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-ladder.jpg"
          alt="A handyman on a step ladder working on a freshly painted wall"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent-orange/10 blur-[110px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary backdrop-blur">
            <Award size={14} className="text-accent-orange" />
            Best Handyman · Inner City Brisbane 2026
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
            Brisbane&rsquo;s award-winning handyman. Big jobs or small.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
            From a brand-new door, supplied and painted, to the odd jobs that
            keep piling up. Based in Fortitude Valley and looking after homes
            and businesses across inner-city Brisbane.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+61493831986"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(77,105,255,0.35)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call 0493 831 986
            </a>
            <a
              href="mailto:fixmatebrisbane@gmail.com?subject=Quote%20request"
              className="flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur transition-colors hover:bg-bg-card"
            >
              <Mail size={16} />
              Email for a quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
