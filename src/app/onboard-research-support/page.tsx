'use client';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';
import { useOnboardResearchSupport } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function OnboardResearchSupportPage() {
  const { filters } = useFilters();
  const { data: onboardResearchSupport } = useOnboardResearchSupport(filters);
  return (
    <Section
      title={onboardResearchSupport.title}
      data={onboardResearchSupport.data}
    />
  );
}
