import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { InstagramFeed } from "@/components/instagram-feed";
import { HoursLocation } from "@/components/hours-location";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Gallery />
        <InstagramFeed />
        <HoursLocation />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
