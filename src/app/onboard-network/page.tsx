'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function OnboardNetworkPage() {
  const { filters } = useFilters();

  const { data: onboardNetwork } = useSuspenseQuery({
    queryKey: ['onboard_network'],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/onboard-network`,
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

  return <Section title={onboardNetwork.title} data={onboardNetwork.data} />;
}
