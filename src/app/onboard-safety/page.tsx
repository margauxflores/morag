'use client';
import { Section } from '@/components/Section';
import { useOnboardSafety } from '@/actions/useRequests';

export default function OnboardSafetyPage() {
  const { data: onboardSafety } = useOnboardSafety();
  return <Section data={onboardSafety.data} title={onboardSafety.title} />;
}
