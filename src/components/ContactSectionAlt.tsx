
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const ContactSection = ({ title }: { title?: string }) => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {title || t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("contact.subtitle")}
          </p>
        </div>
        
        <form className="max-w-3xl mx-auto space-y-6 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("contact.name")}
              </label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("contact.email")}
              </label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("contact.phone")}
            </label>
            <input 
              type="tel" 
              id="phone" 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t("contact.message")}
            </label>
            <textarea 
              id="message" 
              rows={5} 
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-synapse-500 focus:border-synapse-500 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>
          
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="px-8 py-3 bg-synapse-600 text-white rounded-md hover:bg-synapse-700 focus:outline-none focus:ring-2 focus:ring-synapse-500 focus:ring-offset-2"
            >
              {t("contact.submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
