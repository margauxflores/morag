'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function GeneralPage() {
  const { filters } = useFilters();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { data: general } = useSuspenseQuery({
    queryKey: ['general'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/general`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...filters }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });

  return <Section title={general.title} data={general.data} />;
}
