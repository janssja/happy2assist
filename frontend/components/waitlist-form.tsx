'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistFormProps {
  dictionary: {
    joinWaitlist: string;
    emailPlaceholder: string;
    success: string;
    error: string;
  };
  lang: string;
}

export default function WaitlistForm({ dictionary, lang }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, language: lang }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : dictionary.error);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dictionary.emailPlaceholder}
            className="flex-1 px-4 py-3 text-lg rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white
                     transition-all duration-200 ease-in-out"
            disabled={status === 'loading' || status === 'success'}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r 
                     from-blue-600 to-indigo-600 rounded-lg
                     hover:from-blue-700 hover:to-indigo-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 ease-in-out"
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
              </span>
            ) : (
              dictionary.joinWaitlist
            )}
          </motion.button>
        </div>
      </form>

      <AnimatePresence>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-600 dark:text-green-400 text-lg"
          >
            {dictionary.success}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-600 dark:text-red-400 text-lg"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
} 