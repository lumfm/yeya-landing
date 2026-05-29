import Image from "next/image";
import { WhatsappLink } from "./whatsapp-link";
import { InstagramIcon, WhatsappIcon } from "./icons";
import { INSTAGRAM, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-rose-gold/10 bg-charcoal py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <div className="relative aspect-square w-24">
          <Image
            src="/logo-badge.png"
            alt={`${SITE.name} logo`}
            fill
            sizes="6rem"
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-warm-cream/70 transition-colors hover:text-rose-gold"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <WhatsappLink
            aria-label="WhatsApp"
            className="text-warm-cream/70 transition-colors hover:text-rose-gold"
          >
            <WhatsappIcon className="h-5 w-5" />
          </WhatsappLink>
        </div>
        <p className="text-xs text-warm-cream/40">
          © {new Date().getFullYear()} {SITE.name}. Hecho con ♥ en Colombia.
        </p>
      </div>
    </footer>
  );
}
