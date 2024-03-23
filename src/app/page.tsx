'use client';

import { StatsBox } from '@/components/StatsBox';
import { ResponderData } from '@/components/_sections';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useFilters } from '@/providers/filters';

export default function Home() {
  const { filters } = useFilters();
  const { data: survey } = useSuspenseQuery({
    queryKey: ['survey'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api/survey`, {
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

  const dataset = [
    {
      title: 'Career Level',
      dataset: survey[1]?.dataset,
    },
    {
      title: 'Age Group',
      dataset: survey[2]?.dataset,
    },
    {
      title: 'Gender',
      dataset: survey[3]?.dataset,
    },
    {
      title: 'Nationality',
      dataset: survey[4]?.dataset,
    },
  ];

  return (
    <div>
      {survey[0]?.value && (
        <StatsBox title="Overview" data={survey[0]?.value} />
      )}
      <ResponderData valueName="Responders" data={dataset} />
    </div>
  );
}
