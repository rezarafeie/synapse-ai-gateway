
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Check } from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("about.title")}
          </h2>
          <div className="flex justify-center mb-6">
            <BookOpen className="h-12 w-12 text-synapse-600 dark:text-synapse-400" />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 mb-10">
            {t("about.description")}
          </p>
          
          <div className="space-y-6">
            {[
              t("about.point1"),
              t("about.point2"),
              t("about.point3")
            ].map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-synapse-100 dark:bg-synapse-900 text-synapse-600 dark:text-synapse-400">
                    <Check size={16} />
                  </div>
                </div>
                <p className="ml-4 text-lg text-gray-700 dark:text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
