import { BarChartData } from '@/types/data';
import { getLifeOnboardRatings } from '@/utils/server';
import { LifeOnboardRatings } from '@/components/_sections';

export default async function LifeOnboardPage() {
  const data: BarChartData[] = await getLifeOnboardRatings();
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Life Onboard
      </h3>
      <LifeOnboardRatings data={data} />
    </div>
  );
}
