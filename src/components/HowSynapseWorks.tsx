
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import ProcessSteps from "./ProcessSteps";

const HowSynapseWorks = () => {
  const { language } = useLanguage();

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProcessSteps />
      </div>
    </section>
  );
};

export default HowSynapseWorks;
