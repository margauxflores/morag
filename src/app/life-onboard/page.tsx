'use client';
import { Section } from '@/components/Section';
import { useLifeOnboard } from '@/actions/useRequests';

export default function LifeOnboardPage() {
  const { data: lifeOnboard } = useLifeOnboard();
  return <Section title={lifeOnboard.title} data={lifeOnboard.data} />;
}
