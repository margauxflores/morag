'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function LifeOnboardPage() {
  const { filters } = useFilters();

  const { data: lifeOnboard } = useSuspenseQuery({
    queryKey: ['life_onboard'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/life-onboard`, {
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
  return <Section title={lifeOnboard.title} data={lifeOnboard.data} />;
}
