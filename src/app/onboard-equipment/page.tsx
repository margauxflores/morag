'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import useFilterStore from '@/store/filter.store';

export default function OnboardEquipmentPage() {
  const { filters } = useFilterStore((state: any) => ({
    filters: state.filters,
  }));
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { data: onboardEquipment } = useSuspenseQuery({
    queryKey: ['onboard_equipment'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/onboard-equipment`, {
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

  return (
    <Section title={onboardEquipment.title} data={onboardEquipment.data} />
  );
}
