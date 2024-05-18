'use client';

import { Section } from '@/components/Section';
import { usePreciseSupport } from '@/actions/useRequests';
import { useFilters } from '@/providers/filters';

export const dynamic = 'force-dynamic';

export default function PrecruiseSupportPage() {
  const { filters } = useFilters();
  const { data: precruiseSupport } = usePreciseSupport(filters);

  return (
    <Section title={precruiseSupport.title} data={precruiseSupport.data} />
  );
}
