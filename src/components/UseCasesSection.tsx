
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight } from "lucide-react";

export default function UseCasesSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases = [
    {
      title: t("useCase1.title"),
      description: t("useCase1.description"),
      prompt: t("useCase1.prompt"),
      image: "/images/use-case-1.svg",
    },
    {
      title: t("useCase2.title"),
      description: t("useCase2.description"),
      prompt: t("useCase2.prompt"),
      image: "/images/use-case-2.svg",
    },
    {
      title: t("useCase3.title"),
      description: t("useCase3.description"),
      prompt: t("useCase3.prompt"),
      image: "/images/use-case-3.svg",
    },
    {
      title: t("useCase4.title"),
      description: t("useCase4.description"),
      prompt: t("useCase4.prompt"),
      image: "/images/use-case-4.svg",
    },
  ];

  // Placeholder for trying the assistant
  const tryAssistant = (prompt: string) => {
    console.log("Trying assistant with prompt:", prompt);
    // In a real implementation, this would open a modal or redirect to a demo
  };

  return (
    <section id="useCases" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("useCases.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("useCases.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx}
              className="glass card-glow rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              onClick={() => setActiveTab(idx)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
                <div className={`h-3 w-3 rounded-full ${activeTab === idx ? 'bg-synapse-500' : 'bg-gray-300 dark:bg-gray-700'}`}></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t("useCases.tryIt")}</p>
                  <p className="font-medium italic text-synapse-600 dark:text-synapse-400">{useCase.prompt}</p>
                </div>
                <Button 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    tryAssistant(useCase.prompt);
                  }} 
                  className="bg-synapse-600 hover:bg-synapse-700 text-white"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Try
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Button size="lg" className="bg-synapse-600 hover:bg-synapse-700 text-white">
            <Rocket className="mr-2 h-5 w-5" />
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
