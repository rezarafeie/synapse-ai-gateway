
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <div className="py-16 mt-8">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default ContactPage;
