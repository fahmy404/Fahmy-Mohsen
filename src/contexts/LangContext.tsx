import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'ar' | 'en';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'ar',
  toggleLang: () => {},
  t: (ar) => ar,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');
  const toggleLang = () => setLang(l => l === 'ar' ? 'en' : 'ar');
  const t = (ar: string, en: string) => lang === 'ar' ? ar : en;

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
