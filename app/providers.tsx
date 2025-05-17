'use client';

import React, { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/auth-context';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default Providers;
