
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Step {
  number: number;
  title: string;
  subtitle: string;
}

const ProcessSteps = () => {
  const { t, language } = useLanguage();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // Define the steps with their titles and subtitles
  const steps: Step[] = [
    {
      number: 1,
      title: language === "en" ? "Consultation" : "مشاوره",
      subtitle: language === "en" ? "Initial meeting to discuss your needs" : "جلسه اولیه برای بحث در مورد نیازهای شما"
    },
    {
      number: 2,
      title: language === "en" ? "Business Review" : "بررسی کسب و کار",
      subtitle: language === "en" ? "Analyzing your business processes" : "تحلیل فرآیندهای کسب و کار شما"
    },
    {
      number: 3,
      title: language === "en" ? "Feature Planning" : "برنامه‌ریزی ویژگی‌ها",
      subtitle: language === "en" ? "Defining the AI assistant capabilities" : "تعریف قابلیت‌های دستیار هوش مصنوعی"
    },
    {
      number: 4,
      title: language === "en" ? "Assistant Design" : "طراحی دستیار",
      subtitle: language === "en" ? "Creating the AI assistant blueprint" : "ایجاد نقشه دستیار هوش مصنوعی"
    },
    {
      number: 5,
      title: language === "en" ? "Build & Test" : "ساخت و آزمایش",
      subtitle: language === "en" ? "Developing and testing your solution" : "توسعه و آزمایش راه حل شما"
    },
    {
      number: 6,
      title: language === "en" ? "Deployment" : "استقرار",
      subtitle: language === "en" ? "Setting up your AI assistant" : "راه‌اندازی دستیار هوش مصنوعی شما"
    },
    {
      number: 7,
      title: language === "en" ? "Delivery & Training" : "تحویل و آموزش",
      subtitle: language === "en" ? "Training your team on using the assistant" : "آموزش تیم شما برای استفاده از دستیار"
    }
  ];

  return (
    <div className="mb-16 md:mb-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        {language === "en" ? "How Synapse Works" : "چگونه سایناپس کار می‌کند"}
      </h2>
      
      <div className="relative overflow-x-auto hide-scrollbar pb-8">
        <div className="flex min-w-max px-6 md:px-0 md:justify-center">
          {/* Path line */}
          <div className="absolute top-1/2 left-6 right-6 h-1 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 rounded-full"></div>
          
          {/* Steps */}
          <div className="flex space-x-16 md:space-x-24 relative">
            {steps.map((step) => (
              <TooltipProvider key={step.number}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div 
                      className="flex flex-col items-center relative z-10 transform transition-all duration-300 hover:scale-110"
                      onMouseEnter={() => setHoveredStep(step.number)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          hoveredStep === step.number 
                            ? "bg-synapse-600 text-white" 
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        } shadow-md transition-all duration-500`}
                      >
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>
                      
                      <div className="mt-3 text-center opacity-80 hover:opacity-100">
                        <h3 className="text-sm font-medium">{step.title}</h3>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white dark:bg-gray-800 p-3 shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1">
                        {language === "en" ? `Step ${step.number}:` : `مرحله ${step.number}:`} {step.title}
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{step.subtitle}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
