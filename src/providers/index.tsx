'use client';

import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import FiltersProvider from '@/providers/filters';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

export default function Providers({ children }: PropsWithChildren<object>) {
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools client={queryClient} />
      )}
      <FiltersProvider>{children}</FiltersProvider>
    </QueryClientProvider>
  );
}
