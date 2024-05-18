'use client';

import { Section } from '@/components/Section';
import { usePreciseSupport } from '@/actions/useRequests';

export default function PrecruiseSupportPage() {
  const { data: precruiseSupport } = usePreciseSupport();

  return (
    <Section title={precruiseSupport.title} data={precruiseSupport.data} />
  );
}
