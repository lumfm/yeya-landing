import Image from "next/image";
import { WhatsappLink } from "./whatsapp-link";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-charcoal via-charcoal-soft to-background">
      <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_50%_30%,var(--rose-gold)_0%,transparent_60%)]" />
      <div className="mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        <div className="shimmer relative aspect-square w-64 sm:w-80 md:w-96">
          <Image
            src="/logo-badge.png"
            alt={`${SITE.name} logo`}
            fill
            priority
            sizes="(max-width: 768px) 16rem, 24rem"
            className="object-contain drop-shadow-[0_0_50px_rgba(185,141,111,0.45)]"
          />
        </div>

        <div className="space-y-3">
          <h1 className="sr-only">{SITE.name}</h1>
          <p className="font-display text-3xl italic text-rose-gold-light sm:text-4xl">
            {SITE.tagline}
          </p>
          <p className="mx-auto max-w-xl text-balance text-base text-warm-cream/80 sm:text-lg">
            Diseños personalizados, acrílicas, semipermanentes y mucho más.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <WhatsappLink
            message="Hola! Quisiera agendar una cita en Yeya Nails & Glow."
            className="group inline-flex items-center gap-2 rounded-full bg-rose-gold px-7 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-rose-gold-light hover:shadow-[0_0_30px_rgba(185,141,111,0.5)] sm:text-base"
          >
            <span>Agenda tu cita</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </WhatsappLink>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-rose-gold/40 px-7 py-3.5 text-sm font-medium tracking-wide text-warm-cream transition-colors hover:border-rose-gold hover:text-warm-white sm:text-base"
          >
            Ver trabajos
          </a>
        </div>
      </div>
    </section>
  );
}
