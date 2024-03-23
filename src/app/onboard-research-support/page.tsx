'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function OnboardResearchSupportPage() {
  const { filters } = useFilters();

  const { data: onboardResearchSupport } = useSuspenseQuery({
    queryKey: ['onboard_research_support'],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/onboard-research-support`,
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
    <Section
      title={onboardResearchSupport.title}
      data={onboardResearchSupport.data}
    />
  );
}
