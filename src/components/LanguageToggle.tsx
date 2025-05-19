
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="px-3 text-sm font-medium"
    >
      {language === "en" ? "فارسی" : "English"}
    </Button>
  );
}
