'use client';
import { Section } from '@/components/Section';
import { useFilters } from '@/providers/filters';
import { useOnboardEquipment } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function OnboardEquipmentPage() {
  const { filters } = useFilters();
  const { data: onboardEquipment } = useOnboardEquipment(filters);

  return (
    <Section title={onboardEquipment.title} data={onboardEquipment.data} />
  );
}
