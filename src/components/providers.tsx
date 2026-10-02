'use client';

import { MotionConfig } from 'framer-motion';
import { LanguageProvider } from '@/contexts/language-context';
import MobileCallBar from '@/components/layout/MobileCallBar';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        {children}
        <MobileCallBar />
      </LanguageProvider>
    </MotionConfig>
  );
}
