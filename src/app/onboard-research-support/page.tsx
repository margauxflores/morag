'use client';
import { Section } from '@/components/Section';
import { useOnboardResearchSupport } from '@/actions/useRequests';

export default function OnboardResearchSupportPage() {
  const { data: onboardResearchSupport } = useOnboardResearchSupport();
  return (
    <Section
      title={onboardResearchSupport.title}
      data={onboardResearchSupport.data}
    />
  );
}
