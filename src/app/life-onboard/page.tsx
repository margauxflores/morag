'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';

export default function LifeOnboardPage() {
  const { data: lifeOnboard } = useSuspenseQuery({
    queryKey: ['life_onboard'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/life-onboard`, {
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
  return <Section title={lifeOnboard.title} data={lifeOnboard.data} />;
}
