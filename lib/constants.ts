export const SITE = {
  name: "Yeya Nails & Glow",
  tagline: "Belleza que resalta tu brillo",
  description:
    "Estudio de uñas en Colombia. Diseños personalizados, acrílicas, semipermanentes y más. Reserva por WhatsApp.",
  // TODO: swap to "https://yeyanailsandglow.com" once custom domain is registered + pointed at Vercel
  url: "https://yeya-landing.vercel.app",
} as const;

export const WHATSAPP = {
  number: "573212116473",
  defaultMessage:
    "Muchas gracias por contactarte con Yeya Nails & Glow! Cuentame, ¿qué te quieres hacer?",
} as const;

export function whatsappUrl(message?: string) {
  const text = message?.trim() || WHATSAPP.defaultMessage;
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(text)}`;
}

export const INSTAGRAM = {
  handle: "yeyanails_glow",
  url: "https://www.instagram.com/yeyanails_glow",
  // LightWidget embed URL. Get from https://lightwidget.com after connecting IG.
  // Format: "https://cdn.lightwidget.com/widgets/<widget-id>.html"
  // Leave empty string to hide widget and show only the CTA button.
  embedUrl: "",
} as const;

export const HOURS: { day: string; hours: string }[] = [
  { day: "Lunes", hours: "9:00 AM - 6:00 PM" },
  { day: "Martes", hours: "9:00 AM - 6:00 PM" },
  { day: "Miércoles", hours: "9:00 AM - 6:00 PM" },
  { day: "Jueves", hours: "9:00 AM - 6:00 PM" },
  { day: "Viernes", hours: "9:00 AM - 6:00 PM" },
  { day: "Sábado", hours: "9:00 AM - 6:00 PM" },
  { day: "Domingo", hours: "Cerrado" },
];

export const LOCATION = {
  address: "Cl. 18 #83C-48, Comuna 17, Cali, Valle del Cauca",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.863139068226!2d-76.5294634912833!3d3.383595251656314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1000431f0d9%3A0xa7861ec65b770166!2sYeya%20Nails%20%26%20Glow!5e0!3m2!1sen!2sco!4v1779542692206!5m2!1sen!2sco",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=3.383595%2C-76.529463",
} as const;

export const GALLERY: { src: string; alt: string }[] = [
  { src: "/gallery/nail-17.jpg", alt: "Uñas almendra con diseño de rosas marmoladas blanco y negro" },
  { src: "/gallery/nail-01.jpg", alt: "Uñas almendra francesas con flor blanca y detalle dorado" },
  { src: "/gallery/nail-12.jpg", alt: "Uñas cortas efecto espejo cromado plateado" },
  { src: "/gallery/nail-03.jpg", alt: "Uñas cuadradas francesas con margaritas blancas" },
  { src: "/gallery/nail-11.jpg", alt: "Uñas largas cuadradas francesas en rojo, blanco y dorado" },
  { src: "/gallery/nail-02.jpg", alt: "Uñas almendra francesas con flores celestes" },
  { src: "/gallery/nail-14.jpg", alt: "Uñas francesas con acento dorado, diseño Yeya Nails & Glow" },
  { src: "/gallery/nail-07.jpg", alt: "Manicura y pedicura rosa y negro con estrellas y lunas" },
  { src: "/gallery/nail-04.jpg", alt: "Uñas redondas cortas con diseño de sol en rojo y dorado" },
  { src: "/gallery/nail-10.jpg", alt: "Uñas cortas mate gris con líneas estilo cuadros" },
  { src: "/gallery/nail-06.jpg", alt: "Uñas cuadradas cortas nude con línea blanca minimalista" },
  { src: "/gallery/nail-08.jpg", alt: "Uñas stiletto largas francesas con glitter rosado" },
  { src: "/gallery/nail-09.jpg", alt: "Uñas cortas nude con encaje blanco" },
  { src: "/gallery/nail-15.jpg", alt: "Uñas cortas con diseño abstracto gris y negro" },
  { src: "/gallery/nail-05.jpg", alt: "Uñas almendra cortas con degradado rojo en las puntas" },
  { src: "/gallery/nail-18.jpg", alt: "Uñas cortas rosa y negro con corazón y diseño" },
  { src: "/gallery/nail-16.jpg", alt: "Uñas naturales nude con acabado brillante" },
];
