import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-storefront.jpg"
          alt="St Peter's Auto workshop on Burrows Rd S, St Peters"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-bg-card/70 px-4 py-1.5 text-xs font-medium text-text-secondary">
          <Star size={13} className="fill-accent-orange text-accent-orange" />
          5.0 rating · St Peters, Sydney
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-6xl">
          A five-star mechanic that hasn&rsquo;t needed a website to earn it.
        </h1>

        <p className="mt-5 max-w-xl text-base text-text-secondary sm:text-lg">
          Full workshop with multiple hoists, real diagnostics and honest
          advice — servicing, brakes, tyres and general repairs for every
          make and model, right on Burrows Rd S.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="tel:+61413110911"
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call 0413 110 911
          </a>
          <a
            href="https://www.google.com/maps/place/St+Peter%E2%80%99s+Auto/data=!4m7!3m6!1s0x6b12b057c15d84ab:0x74415a311470baf7!8m2!3d-33.9209244!4d151.1769791!16s%2Fg%2F11clzk91jg!19sChIJq4RdwVewEmsR97pwFDFaQXQ?authuser=0&hl=en"
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
