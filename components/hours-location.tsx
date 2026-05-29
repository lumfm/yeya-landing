import { Clock, MapPin } from "lucide-react";
import { HOURS, LOCATION } from "@/lib/constants";

export function HoursLocation() {
  return (
    <section
      id="visit"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="visit-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-12 text-center">
          <p className="font-display text-sm uppercase tracking-[0.3em] text-rose-gold">
            Visítanos
          </p>
          <h2
            id="visit-title"
            className="mt-3 font-display text-4xl font-light text-warm-white sm:text-5xl"
          >
            Horarios y ubicación
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-gold/20 bg-charcoal-soft/40 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Clock className="h-5 w-5 text-rose-gold" aria-hidden />
              <h3 className="font-display text-2xl text-warm-white">Horarios</h3>
            </div>
            <ul className="divide-y divide-rose-gold/10">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3 text-warm-cream"
                >
                  <span className="font-medium">{h.day}</span>
                  <span className="text-warm-cream/70">{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-gold/20 bg-charcoal-soft/40 p-8">
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-rose-gold" aria-hidden />
              <h3 className="font-display text-2xl text-warm-white">Ubicación</h3>
            </div>
            <p className="mb-4 text-warm-cream/80">{LOCATION.address}</p>
            <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-rose-gold/20">
              <iframe
                src={LOCATION.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Yeya Nails & Glow"
              />
            </div>
            <a
              href={LOCATION.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-gold px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-rose-gold-light"
            >
              Cómo llegar
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
