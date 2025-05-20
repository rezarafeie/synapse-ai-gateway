import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { t, language } = useLanguage();
  
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 mesh-bg"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-synapse-500/20 dark:bg-synapse-700/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 dark:bg-teal-700/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`flex-1 ${language === "fa" ? "md:order-2" : ""}`}>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{t("hero.title")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/request">
                  <Button size="lg" className="bg-synapse-600 hover:bg-synapse-700 text-white">
                    {t("hero.cta")}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    {t("hero.secondary")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className={`flex-1 ${language === "fa" ? "md:order-1" : ""}`}>
            <div className="relative w-full h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 bg-gradient-to-tr from-synapse-600 to-teal-500 rounded-full animate-float opacity-90 dark:opacity-80">
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <Brain size={64} className="text-synapse-600 dark:text-synapse-400" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 dark:bg-teal-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-synapse-400 dark:bg-synapse-300 rounded-full animate-pulse delay-300"></div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-12 left-0 glass rounded-xl p-4 shadow-lg animate-float">
                <div className="w-48 h-8 bg-synapse-100 dark:bg-synapse-900 rounded-md"></div>
                <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded-md mt-2"></div>
              </div>
              
              <div className="absolute bottom-12 right-0 glass rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-32 h-8 bg-teal-100 dark:bg-teal-900 rounded-md"></div>
                <div className="w-48 h-4 bg-gray-200 dark:bg-gray-700 rounded-md mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
