'use client';

import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';
import LocaleSwitcher from '@/components/locale-switcher';
import WaitlistForm from '@/components/waitlist-form';
import { useEffect, useState } from 'react';
import { use } from 'react';
import { motion } from 'framer-motion';

type Dictionary = {
  welcome: {
    title: string;
    subtitle: string;
    joinWaitlist: string;
    emailPlaceholder: string;
    success: string;
    error: string;
  }
}

export default function HomePage({
  params
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = use(params);
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const bgImageUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/images/background.png'
    : '/images/background.png';

  useEffect(() => {
    getDictionary(lang).then(setDictionary);
  }, [lang]);

  if (!dictionary) return null;

  return (
    <div className="min-h-screen relative">
      {/* Achtergrondafbeelding met absolute URL */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${bgImageUrl}")`,
          backgroundColor: '#1a1a1a' // Fallback kleur
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="absolute top-4 right-4 z-10">
        <LocaleSwitcher />
      </div>
      
      <div className="container-custom min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white drop-shadow-lg">
              {dictionary.welcome.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 drop-shadow">
              {dictionary.welcome.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          >
            <WaitlistForm dictionary={dictionary.welcome} lang={lang} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 