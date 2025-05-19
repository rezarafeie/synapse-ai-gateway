
import { useLanguage } from "@/context/LanguageContext";
import { 
  Brain, FileText, Image, Headphones, 
  Rocket, Timer, CloudCog, Mic, 
  Users, BookOpen, Check, Activity
} from "lucide-react";

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    { icon: FileText, title: t("feature1.title"), description: t("feature1.description") },
    { icon: Brain, title: t("feature2.title"), description: t("feature2.description") },
    { icon: Image, title: t("feature3.title"), description: t("feature3.description") },
    { icon: Headphones, title: t("feature4.title"), description: t("feature4.description") },
    { icon: Image, title: t("feature5.title"), description: t("feature5.description") },
    { icon: Activity, title: t("feature6.title"), description: t("feature6.description") },
    { icon: CloudCog, title: t("feature7.title"), description: t("feature7.description") },
    { icon: Mic, title: t("feature8.title"), description: t("feature8.description") },
    { icon: Rocket, title: t("feature9.title"), description: t("feature9.description") },
    { icon: BookOpen, title: t("feature10.title"), description: t("feature10.description") },
    { icon: Users, title: t("feature11.title"), description: t("feature11.description") },
    { icon: Check, title: t("feature12.title"), description: t("feature12.description") },
  ];

  return (
    <section id="features" className="py-20 bg-feature-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("features.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("features.subtitle")}
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            {t("features.text")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="glass card-glow rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-synapse-500 to-teal-500 dark:from-synapse-600 dark:to-teal-600">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
