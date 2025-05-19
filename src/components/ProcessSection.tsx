
import { useLanguage } from "@/context/LanguageContext";
import { Timer } from "lucide-react";

export default function ProcessSection() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: 1,
      title: t("process.step1"),
      description: t("process.step1.description"),
    },
    {
      number: 2,
      title: t("process.step2"),
      description: t("process.step2.description"),
    },
    {
      number: 3,
      title: t("process.step3"),
      description: t("process.step3.description"),
    },
    {
      number: 4,
      title: t("process.step4"),
      description: t("process.step4.description"),
    },
    {
      number: 5,
      title: t("process.step5"),
      description: t("process.step5.description"),
    },
    {
      number: 6,
      title: t("process.step6"),
      description: t("process.step6.description"),
    },
    {
      number: 7,
      title: t("process.step7"),
      description: t("process.step7.description"),
    },
  ];

  return (
    <section id="process" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("process.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("process.subtitle")}
          </p>
          <div className="flex justify-center mt-4">
            <Timer className="h-12 w-12 text-synapse-600 dark:text-synapse-400" />
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-synapse-200 dark:bg-synapse-800"></div>
          
          {/* Timeline steps */}
          <div className="relative space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col lg:flex-row ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-center lg:items-start gap-8`}>
                {/* Timeline node */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-synapse-600 dark:bg-synapse-500 flex items-center justify-center text-white z-10">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 lg:w-5/12 ml-12 lg:ml-0">
                  <h3 className="text-xl font-semibold mb-2 text-synapse-600 dark:text-synapse-400">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
