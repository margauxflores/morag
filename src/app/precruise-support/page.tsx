'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import useFilterStore from '@/store/filter.store';
export default function PrecruiseSupportPage() {
  const { filters } = useFilterStore((state: any) => ({
    filters: state.filters,
  }));
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { data: precruiseSupport } = useSuspenseQuery({
    queryKey: ['precruise_support'],
    queryFn: async () => {
      const response = await fetch(`${apiUrl}/api/precruise-support`, {
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
    <Section title={precruiseSupport.title} data={precruiseSupport.data} />
  );
}
