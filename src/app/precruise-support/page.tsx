'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function PrecruiseSupportPage() {
  const { filters } = useFilters();

  const { data: precruiseSupport } = useSuspenseQuery({
    queryKey: ['precruise_support'],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/precruise-support`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...filters }),
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    },
  });

  return (
    <Section title={precruiseSupport.title} data={precruiseSupport.data} />
  );
}
