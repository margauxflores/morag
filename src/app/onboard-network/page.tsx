'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';
import { useOnboardNetwork } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function OnboardNetworkPage() {
  const { filters } = useFilters();
  const { data: onboardNetwork } = useOnboardNetwork(filters);

  return <Section title={onboardNetwork.title} data={onboardNetwork.data} />;
}
