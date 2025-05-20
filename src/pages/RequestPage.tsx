
import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const SuccessMessage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-12 px-4">
      <div className="mb-6 mx-auto bg-green-100 dark:bg-green-900/20 h-24 w-24 rounded-full flex items-center justify-center">
        <Check className="h-12 w-12 text-green-600 dark:text-green-400" />
      </div>
      <h2 className="text-3xl font-bold mb-4 gradient-text">
        {t("request.success.title")}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        {t("request.success.message")}
      </p>
      <Button 
        onClick={() => navigate("/")}
        className="bg-synapse-600 hover:bg-synapse-700"
      >
        {t("request.success.backHome")}
      </Button>
    </div>
  );
};

const RequestPageContent = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                    {t("request.title")}
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    {t("request.subtitle")}
                  </p>
                </div>
                
                <RequestForm onSubmitSuccess={() => setIsSubmitted(true)} />
              </>
            ) : (
              <SuccessMessage />
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

const RequestPage = () => {
  return (
    <LanguageProvider>
      <RequestPageContent />
    </LanguageProvider>
  );
};

export default RequestPage;
