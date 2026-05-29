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

        <a
          href={INSTAGRAM.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-rose-gold/40 px-6 py-3 text-sm tracking-wide text-warm-white transition-colors hover:border-rose-gold hover:bg-rose-gold/10"
        >
          <InstagramIcon className="h-5 w-5" />
          Ver en Instagram
        </a>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <a
              key={i}
              href={INSTAGRAM.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-rose-gold/30 to-charcoal ring-1 ring-rose-gold/20 transition-all hover:ring-rose-gold/60"
              aria-label="Ver publicación en Instagram"
            >
              <div className="absolute inset-0 flex items-center justify-center text-rose-gold/70 transition-opacity group-hover:opacity-100">
                <InstagramIcon className="h-8 w-8" />
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-warm-cream/40">
          Las publicaciones reales se cargarán cuando se conecte la API de Instagram.
        </p>
      </div>
    </section>
  );
}
