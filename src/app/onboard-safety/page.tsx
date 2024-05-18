'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export const dynamic = 'force-dynamic';

export default function OnboardSafetyPage() {
  const { filters } = useFilters();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { data: onboardSafety } = useSuspenseQuery({
    queryKey: ['onboard_safety'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-safety`, {
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

  return <Section data={onboardSafety.data} title={onboardSafety.title} />;
}
