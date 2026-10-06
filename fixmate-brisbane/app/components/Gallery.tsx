import Image from "next/image";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "/images/window-install.jpg",
    alt: "A tradesman fitting a new window frame",
    caption: "Windows & frames",
  },
  {
    src: "/images/frame-drill.jpg",
    alt: "A drill fixing a hinge plate to a door frame",
    caption: "Doors & hinges",
  },
  {
    src: "/images/outdoor-light.jpg",
    alt: "An outdoor light fitting being installed under the eaves",
    caption: "Outdoor fixtures",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 max-w-xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              The jobs we take on
            </p>
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              Inside, outside and everything in between
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
