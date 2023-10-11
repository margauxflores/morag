import { BarChartData } from '@/types/data';
import { getOnboardEquipmentRatings } from '@/utils/server';
import { OnboardEquipmentRatings } from '@/components/_sections';

export default async function OnboardEquipmentPage() {
  const data: BarChartData[] = await getOnboardEquipmentRatings();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Onboard Equipment
      </h3>
      <OnboardEquipmentRatings data={data} />
    </div>
  );
}
