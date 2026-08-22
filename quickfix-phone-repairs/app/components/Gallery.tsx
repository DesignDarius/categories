import Image from "next/image";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "/images/iphone-repair.jpg",
    alt: "A freshly repaired iPhone with MagSafe case at Quickfix Phone Repairs",
    caption: "Every phone handled like it's ours",
  },
  {
    src: "/images/storefront.jpg",
    alt: "The Quickfix Phone Repairs kiosk at Spencer Outlet Centre",
    caption: "Find us at Spencer Outlet Centre",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
              The kiosk
            </p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              A real repair counter, not a mail-in service
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PHOTOS.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 120}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
                  <p className="text-sm font-medium text-white">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
