import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import ServiceSection from "@/components/ServiceSection";
import PricingSection from "@/components/PricingSection";
import ProductsSection from "@/components/ProductsSection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrandStorySection />
      <ServiceSection />
      <PricingSection />
      <ProductsSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
