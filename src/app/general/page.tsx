'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';

export default function GeneralPage() {
  const { data: general } = useSuspenseQuery({
    queryKey: ['general'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/general`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });

  return <Section title={general.title} data={general.data} />;
}
