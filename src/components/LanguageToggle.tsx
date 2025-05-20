
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
      size="icon"
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Persian" : "Switch to English"}
      className="rounded-full"
    >
      <Globe className="h-5 w-5" />
    </Button>
  );
}
