
import { useLanguage } from "@/context/LanguageContext";
import { TrendingUp } from "lucide-react";

export default function BenefitsSection() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t("benefit1.title"),
      before: t("benefit1.before"),
      after: t("benefit1.after"),
    },
    {
      title: t("benefit2.title"),
      before: t("benefit2.before"),
      after: t("benefit2.after"),
    },
    {
      title: t("benefit3.title"),
      before: t("benefit3.before"),
      after: t("benefit3.after"),
    },
    {
      title: t("benefit4.title"),
      before: t("benefit4.before"),
      after: t("benefit4.after"),
    },
    {
      title: t("benefit5.title"),
      before: t("benefit5.before"),
      after: t("benefit5.after"),
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            {t("benefits.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t("benefits.subtitle")}
          </p>
          <div className="flex justify-center mt-4">
            <TrendingUp className="h-12 w-12 text-synapse-600 dark:text-synapse-400" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr>
                <th className="px-6 py-4 bg-synapse-100 dark:bg-synapse-900 text-gray-800 dark:text-gray-200 text-left text-sm uppercase font-semibold">
                  {t("benefits.title")}
                </th>
                <th className="px-6 py-4 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-left text-sm uppercase font-semibold">
                  {t("benefits.before")}
                </th>
                <th className="px-6 py-4 bg-synapse-600 dark:bg-synapse-700 text-white text-left text-sm uppercase font-semibold">
                  {t("benefits.after")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {benefits.map((benefit, idx) => (
                <tr key={idx} className="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {benefit.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
                    {benefit.before}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 bg-teal-50 dark:bg-teal-900/20">
                    {benefit.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
