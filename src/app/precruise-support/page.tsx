import { BarChartData } from '@/types/data';
import { getPrecruiseSupportRatings } from '@/utils/server';
import { PrecruiseSupportRatings } from '@/components/_sections';

export default async function PrecruiseSupportPage() {
  const data: BarChartData[] = await getPrecruiseSupportRatings();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Precruise Support
      </h3>
      <PrecruiseSupportRatings data={data} />
    </div>
  );
}
