import { BarChartData } from '@/types/data';
import { getOnboardSafetyRatings } from '@/utils/server';
import { OnboardSafetyRatings } from '@/components/_sections';

export default async function OnboardSafetyPage() {
  const data: BarChartData[] = await getOnboardSafetyRatings();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Onboard Safety
      </h3>
      <OnboardSafetyRatings data={data} />
    </div>
  );
}
