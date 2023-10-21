import { getGeneralRatings } from '@/utils/server';
import { GeneralRatings } from '@/components/_sections';
import { BarChartData } from '@/types/data';

export default async function GeneralPage() {
  const data: BarChartData[] = await getGeneralRatings();

  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        General
      </h3>
      <GeneralRatings data={data} />
    </div>
  );
}
