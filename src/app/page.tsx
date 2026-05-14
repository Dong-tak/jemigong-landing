import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import ServiceSection from "@/components/ServiceSection";
import MediaSection from "@/components/MediaSection";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import KakaoChatButton from "@/components/KakaoChatButton";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MediaSection />
      <ProductsSection />
      <BrandStorySection />
      <ServiceSection />
      <ContactSection />
      <Footer />
      <KakaoChatButton />
    </main>
  );
}
