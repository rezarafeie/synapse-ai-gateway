
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">Synapse</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              {t("about.description")}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("contact")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@rafiei-group.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400 flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  info@rafiei-group.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+989123456789" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400 flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  +98 912 345 6789
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t("useCases.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#useCases" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400"
                >
                  {t("useCase1.title")}
                </a>
              </li>
              <li>
                <a 
                  href="#useCases" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400"
                >
                  {t("useCase2.title")}
                </a>
              </li>
              <li>
                <a 
                  href="#useCases" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400"
                >
                  {t("useCase3.title")}
                </a>
              </li>
              <li>
                <a 
                  href="#useCases" 
                  className="text-gray-600 dark:text-gray-400 hover:text-synapse-600 dark:hover:text-synapse-400"
                >
                  {t("useCase4.title")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t("footer.company")}. {t("footer.rights")}
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-synapse-600 dark:hover:text-synapse-400">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-synapse-600 dark:hover:text-synapse-400">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
