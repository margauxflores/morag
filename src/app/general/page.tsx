'use client';
import { useGeneral } from '@/actions/useRequests';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';

export const dynamic = 'force-dynamic';

export default function GeneralPage() {
  const { filters } = useFilters();
  const { data: general } = useGeneral(filters);

  return <Section title={general.title} data={general.data} />;
}
