'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export default function OnboardEquipmentPage() {
  const { filters } = useFilters();

  const { data: onboardEquipment } = useSuspenseQuery({
    queryKey: ['onboard_equipment'],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/api/onboard-equipment`,
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
    <Section title={onboardEquipment.title} data={onboardEquipment.data} />
  );
}
