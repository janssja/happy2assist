'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n } from '@/i18n.config';
import { motion } from 'framer-motion';

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex gap-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-1">
      {i18n.locales.map((locale, index) => {
        const isActive = pathName?.split('/')[1] === locale;
        return (
          <div key={locale} className="flex items-center">
            {index > 0 && <span className="text-gray-300 mx-2">|</span>}
            <Link
              href={redirectedPathName(locale)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200
                ${isActive 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale.toUpperCase()}
              </motion.span>
            </Link>
          </div>
        );
      })}
    </div>
  );
} 