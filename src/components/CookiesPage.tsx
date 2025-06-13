import { motion } from 'framer-motion';
import { translations, Language } from '../data/translations';

interface CookiesPageProps {
  language: Language;
  onBack: () => void;
}

const CookiesPage = ({ language, onBack }: CookiesPageProps) => {
  const t = translations[language].cookies;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 relative"
        >
          <button
            onClick={onBack}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t.title[language]}</h1>
          <p className="text-gray-600 mb-8">{t.intro[language]}</p>
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.whatAreCookiesTitle[language]}</h2>
              <p>{t.whatAreCookies[language]}</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.usageTitle[language]}</h2>
              <ul className="list-disc list-inside space-y-2">
                {t.usage[language].map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.typesTitle[language]}</h2>
              <ul className="list-disc list-inside space-y-2">
                {t.types[language].map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.managementTitle[language]}</h2>
              <p>{t.management[language]}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.consentTitle[language]}</h2>
              <p>{t.consent[language]}</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPage; 