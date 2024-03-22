'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';

export default function OnboardSafetyPage() {
  const { data: onboardSafety } = useSuspenseQuery({
    queryKey: ['onboard_safety'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/onboard-safety`, {
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

  return <Section data={onboardSafety.data} title={onboardSafety.title} />;
}
