'use client';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';
import { useLifeOnboard } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function LifeOnboardPage() {
  const { filters } = useFilters();
  const { data: lifeOnboard } = useLifeOnboard(filters);
  return <Section title={lifeOnboard.title} data={lifeOnboard.data} />;
}
