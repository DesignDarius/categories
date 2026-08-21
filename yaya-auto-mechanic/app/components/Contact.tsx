import { Clock, MapPin, Phone } from "lucide-react";

const HOURS = [
  { day: "Mon – Fri", time: "5:00 PM – 5:00 AM" },
  { day: "Saturday", time: "3:00 PM – 5:00 AM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-card/30 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-orange">
            Get in touch
          </p>
          <h2 className="mb-6 text-3xl font-bold text-text-primary sm:text-4xl">
            Stop by, or call before you tow it anywhere else
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                <MapPin size={18} className="text-accent-orange" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Address</p>
                <p className="text-sm text-text-secondary">
                  500 W 25th St, New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                <Phone size={18} className="text-accent-orange" />
              </div>
              <div>
                <p className="font-semibold text-text-primary">Phone</p>
                <a
                  href="tel:+16462512341"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  (646) 251-2341
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                <Clock size={18} className="text-accent-orange" />
              </div>
              <div className="w-full">
                <p className="mb-1 font-semibold text-text-primary">Hours</p>
                <div className="space-y-1">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm text-text-secondary"
                    >
                      <span>{h.day}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "text-text-muted"
                            : "text-accent-green"
                        }
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href="tel:+16462512341"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <Phone size={16} />
            Call now
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Yaya Auto Mechanic Service location"
            src="https://www.google.com/maps?q=500+W+25th+St,+New+York,+NY+10001&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 360 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
