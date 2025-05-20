
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomeCallToAction() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-synapse-600/20 to-teal-500/20 dark:from-synapse-600/10 dark:to-teal-500/10" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="block">{t("cta.title")}</span>
            <span className="block gradient-text">{t("cta.subtitle")}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
            <Link to="/request">
              <Button size="lg" className="w-full sm:w-auto bg-synapse-600 hover:bg-synapse-700">
                {t("cta.primary")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t("cta.secondary")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
