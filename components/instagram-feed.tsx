import { InstagramIcon } from "./icons";
import { INSTAGRAM } from "@/lib/constants";

export function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="bg-charcoal-soft py-20 sm:py-28"
      aria-labelledby="ig-title"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-rose-gold">
          Síguenos
        </p>
        <h2
          id="ig-title"
          className="mt-3 font-display text-4xl font-light text-warm-white sm:text-5xl"
        >
          @{INSTAGRAM.handle}
        </h2>
        <p className="mt-4 text-warm-cream/70">
          Inspírate con los últimos diseños y promociones.
        </p>

        {INSTAGRAM.embedUrl ? (
          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-rose-gold/20">
            <iframe
              src={INSTAGRAM.embedUrl}
              scrolling="no"
              allowTransparency
              className="w-full border-0"
              style={{ minHeight: 480 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              title={`Publicaciones recientes de @${INSTAGRAM.handle}`}
            />
          </div>
        ) : null}

        <a
          href={INSTAGRAM.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-rose-gold px-7 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-rose-gold-light hover:shadow-[0_0_30px_rgba(185,141,111,0.5)] sm:text-base"
        >
          <InstagramIcon className="h-5 w-5" />
          <span>Ver en Instagram</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </section>
  );
}
