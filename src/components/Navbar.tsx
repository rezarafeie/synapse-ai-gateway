
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: t("home"), href: "/", isRoute: true },
    { name: t("about"), href: "/about", isRoute: true },
    { name: t("features"), href: "/#features", isRoute: false },
    { name: t("useCases"), href: "/#useCases", isRoute: false },
    { name: t("benefits"), href: "/#benefits", isRoute: false },
    { name: t("process"), href: "/#process", isRoute: false },
    { name: t("contact"), href: "/contact", isRoute: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-xl font-bold gradient-text">Synapse</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4 rtl:space-x-reverse">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-synapse-600 dark:hover:text-synapse-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-synapse-600 dark:hover:text-synapse-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageToggle />
            <Link to="/request">
              <Button className="bg-synapse-600 hover:bg-synapse-700">
                {t("hero.cta")}
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white dark:bg-gray-900 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-synapse-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-synapse-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="pt-4">
            <Link to="/request" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-synapse-600 hover:bg-synapse-700">
                {t("hero.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
