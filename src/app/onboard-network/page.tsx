'use client';
import { Section } from '@/components/Section';
import { useOnboardNetwork } from '@/actions/useRequests';

export default function OnboardNetworkPage() {
  const { data: onboardNetwork } = useOnboardNetwork();

  return <Section title={onboardNetwork.title} data={onboardNetwork.data} />;
}
