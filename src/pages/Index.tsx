
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VSLSection } from "@/components/VSLSection";
import { WorkShowcase } from "@/components/WorkShowcase";
import { BookCallSection } from "@/components/BookCallSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <VSLSection />
      <WorkShowcase />
      <BookCallSection />
      <Footer />
    </div>
  );
};

export default Index;
