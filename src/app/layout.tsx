import { ReactNode } from 'react';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import { Sidebar } from '@/components/Sidebar';
import { FilterBar } from '@/components/FilterBar/FilterBar';
import Providers from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cruise Evaluation',
  description: 'Cruise Evaluation Survey Data',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={classNames(inter.className, 'h-full')}>
        <Sidebar />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <Providers>
              <FilterBar />
              {children}
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
