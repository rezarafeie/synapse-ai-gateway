
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";

const AboutPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <AboutSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AboutPage;
