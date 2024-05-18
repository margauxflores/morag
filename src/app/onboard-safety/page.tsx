'use client';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';
import { useOnboardSafety } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function OnboardSafetyPage() {
  const { filters } = useFilters();
  const { data: onboardSafety } = useOnboardSafety(filters);
  return <Section data={onboardSafety.data} title={onboardSafety.title} />;
}
