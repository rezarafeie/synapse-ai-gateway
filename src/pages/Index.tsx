
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowSynapseWorks from "@/components/HowSynapseWorks"; // New process component
import HomeCallToAction from "@/components/HomeCallToAction";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <BenefitsSection />
          <HowSynapseWorks />
          <HomeCallToAction />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
