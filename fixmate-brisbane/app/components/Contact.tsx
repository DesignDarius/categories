import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-card/30 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
              Get a quote
            </p>
            <h2 className="mb-6 text-3xl font-bold text-text-primary sm:text-4xl">
              Tell us the job — big or small
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Phone</p>
                  <a
                    href="tel:+61493831986"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    0493 831 986
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Email</p>
                  <a
                    href="mailto:fixmatebrisbane@gmail.com?subject=Quote%20request"
                    className="break-all text-sm text-text-secondary hover:text-text-primary"
                  >
                    fixmatebrisbane@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Based at</p>
                  <p className="text-sm text-text-secondary">
                    Cambridge Towers, 338 Water St, Fortitude Valley QLD 4006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Hours</p>
                  <p className="text-sm text-text-secondary">
                    Open 24 hours — call or email to book a time
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-card-light">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Facebook</p>
                  <a
                    href="https://www.facebook.com/61556702494601"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    Message Fix Mate on Facebook
                  </a>
                </div>
              </div>
            </div>

            <a
              href="tel:+61493831986"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(77,105,255,0.35)] transition-transform hover:scale-105"
            >
              <Phone size={16} />
              Call now
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Fix Mate Brisbane location"
              src="https://www.google.com/maps?q=338+Water+St,+Fortitude+Valley+QLD+4006&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
