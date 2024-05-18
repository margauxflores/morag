'use client';
import { Section } from '@/components/Section';
import { useOnboardEquipment } from '@/actions/useRequests';

export const dynamic = 'force-dynamic';

export default function OnboardEquipmentPage() {
  const { data: onboardEquipment } = useOnboardEquipment();

  return (
    <Section title={onboardEquipment.title} data={onboardEquipment.data} />
  );
}
