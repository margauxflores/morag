import { BarChartData } from '@/types/data';
import { getOnboardResearchSupportRatings } from '@/utils/server';
import { OnboardResearchSupportRatings } from '@/components/_sections/';

export default async function OnboardResearchSupportPage() {
  const data: BarChartData[] = await getOnboardResearchSupportRatings();

  return (
    <div>
      <h3>Onboard Research Support</h3>
      <OnboardResearchSupportRatings data={data} />
    </div>
  );
}
