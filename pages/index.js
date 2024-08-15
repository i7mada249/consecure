import CTA from "@/components/ui/CTA";
import FAQs from "@/components/ui/FAQs";
import Features from "@/components/ui/Features";
import Hero from "@/components/ui/Hero";
import Pricing from "@/components/ui/Pricing";
import Testimonial from "@/components/ui/Testimonial";
import VisualFeatures from "@/components/ui/VisualFeatures";
import FAQ2 from "@/components/ui/FAQs/FAQ2";

export default function Home() {
  return (
    <>
      <Hero />
      <VisualFeatures />
      <Features />
      <CTA />
      <Testimonial />
      <Pricing />
      <FAQ2 />
    </>
  );
}
