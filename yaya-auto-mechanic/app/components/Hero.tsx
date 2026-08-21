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
          4.7 rating ·
          <Clock size={13} className="text-accent-green" />
          Open until 5AM · Chelsea, NYC
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          Still turning wrenches after everyone else has locked up.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          Full-service repair for cars, trucks and SUVs on W 25th St in
          Chelsea — open until 5AM most nights, so a breakdown doesn&rsquo;t
          have to wait until morning. Honest diagnosis, no surprise charges.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+16462512341"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call (646) 251-2341
          </a>
          <a
            href="https://www.google.com/maps/place/Yaya+Auto+Mechanic+Service/data=!4m7!3m6!1s0x89c2598a026c799f:0xb77357ae436f1915!8m2!3d40.7490747!4d-74.003728!16s%2Fg%2F11lmg_9y35!19sChIJn3lsAopZwokRFRlvQ65Xc7c?authuser=0&hl=en"
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
