'use client';
import { useGeneral } from '@/actions/useRequests';
import { Section } from '@/components/Section';

export default function GeneralPage() {
  const { data: general } = useGeneral();

  return <Section title={general.title} data={general.data} />;
}
