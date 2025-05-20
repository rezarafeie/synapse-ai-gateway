
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
  };

  // Help ensure fonts are loaded properly by adding a class to the body
  useEffect(() => {
    document.body.classList.toggle('font-iransans', language === 'fa');
  }, [language]);

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="px-3 text-sm font-medium inline-flex items-center"
    >
      <Globe className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0" />
      <span>{language === "en" ? "فارسی" : "English"}</span>
    </Button>
  );
}
