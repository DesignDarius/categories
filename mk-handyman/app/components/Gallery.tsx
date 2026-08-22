import Image from "next/image";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "/images/wall-patch.jpg",
    alt: "A patched and plastered wall mid-repair by MK Handyman & Home Repairs",
    caption: "Plastering finished so the patch disappears",
  },
  {
    src: "/images/plumbing-repair.jpg",
    alt: "Under-sink plumbing repair work by MK Handyman & Home Repairs",
    caption: "Plumbing sorted, not just patched over",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Recent work
            </p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Real jobs, not stock photography
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
