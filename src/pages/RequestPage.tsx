
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSectionAlt"; // Changed the import to use ContactSectionAlt

const RequestPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                  Request Your Custom AI Assistant
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                  Let us build a tailored AI solution to enhance your workflow and productivity
                </p>
              </div>
            </div>
          </div>
          <ProcessSection />
          <ContactSection title="Start Building Your AI Assistant Today" />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default RequestPage;
