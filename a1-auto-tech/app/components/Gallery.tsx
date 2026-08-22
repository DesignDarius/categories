import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/starter-rebuild.jpg",
    alt: "A rebuilt starter motor installed at A1 Auto Tech",
    caption: "Starter & alternator rebuilds, done properly",
  },
  {
    src: "/images/classic-mgb.jpg",
    alt: "A classic MGB with the bonnet up at A1 Auto Tech's workshop",
    caption: "Classic car electrical restoration",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-card/30 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            The workshop
          </p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            A real garage, not a showroom
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
