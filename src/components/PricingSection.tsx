
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("pricing.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("pricing.subtitle")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              {t("pricing.description")}
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t("pricing.setup")}
                </div>
                <div className="text-gray-600 dark:text-gray-300 md:text-right mt-2 md:mt-0">
                  {t("pricing.setupValue")}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t("pricing.subscription")}
                </div>
                <div className="text-gray-600 dark:text-gray-300 md:text-right mt-2 md:mt-0">
                  {t("pricing.subscriptionValue")}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4">
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t("pricing.custom")}
                </div>
                <div className="text-gray-600 dark:text-gray-300 md:text-right mt-2 md:mt-0">
                  {t("pricing.customValue")}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-synapse-600 hover:bg-synapse-700 text-white"
              >
                <Check className="mr-2 h-5 w-5" />
                {t("pricing.cta")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
