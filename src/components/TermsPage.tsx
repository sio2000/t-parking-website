import { motion } from 'framer-motion';
import { translations, Language } from '../data/translations';

interface TermsPageProps {
  language: Language;
  onBack: () => void;
}

interface TranslationSection {
  readonly title: {
    readonly el: string;
    readonly en: string;
  };
  readonly content?: {
    readonly el: string;
    readonly en: string;
  };
  readonly description?: {
    readonly el: string;
    readonly en: string;
  };
  readonly features?: {
    readonly el: readonly string[];
    readonly en: readonly string[];
  };
}

interface TermsTranslations {
  readonly title: {
    readonly el: string;
    readonly en: string;
  };
  readonly lastUpdated: {
    readonly el: string;
    readonly en: string;
  };
  readonly welcome: {
    readonly el: string;
    readonly en: string;
  };
  readonly [key: string]: TranslationSection | {
    readonly el: string;
    readonly en: string;
  };
}

const TermsPage = ({ language, onBack }: TermsPageProps) => {
  const t = translations[language].terms as unknown as TermsTranslations;
  // --- LOGGING ---
  console.log('--- TermsPage Render ---');
  console.log('language:', language);
  console.log('t:', t);
  Object.keys(t).forEach(key => {
    console.log(`t[${key}]:`, t[key]);
  });

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
          <p className="text-gray-600 mb-8">{t.lastUpdated[language]}</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">{t.welcome[language]}</p>

            <div className="space-y-8">
              {Object.entries(t).map(([key, section]) => {
                if (key === 'title' || key === 'lastUpdated' || key === 'welcome') return null;
                
                const typedSection = section as TranslationSection;
                return (
                  <section key={key}>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
                      <span>📌</span> {typedSection.title[language]}
                    </h2>
                    {typedSection.content && (
                      <p className="text-gray-700">{typedSection.content[language]}</p>
                    )}
                    {typedSection.description && (
                      <p className="text-gray-700 mb-4">{typedSection.description[language]}</p>
                    )}
                    {typedSection.features && (
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {typedSection.features[language].map((feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage; 