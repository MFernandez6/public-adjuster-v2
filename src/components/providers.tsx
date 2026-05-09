'use client';

import { LanguageProvider } from '@/contexts/language-context';
import MobileCallBar from '@/components/layout/MobileCallBar';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <MobileCallBar />
    </LanguageProvider>
  );
}
