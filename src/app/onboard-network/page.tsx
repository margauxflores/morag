import { BarChartData } from '@/types/data';
import { getOnboardNetworkRatings } from '@/utils/server';
import { OnboardNetworkRatings } from '@/components/_sections';

export default async function OnboardNetworkPage() {
  const data: BarChartData[] = await getOnboardNetworkRatings();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Onboard Network
      </h3>
      <OnboardNetworkRatings data={data} />
    </div>
  );
}
