import { StatsBox } from '@/components/StatsBox';
import { ResponderData } from '@/components/ResponderData';
import { getSurveyData } from '@/utils/actions';

export default async function Home() {
  const data = await getSurveyData();

  return (
    <main>
      <StatsBox title="Overview" data={data} />
      <ResponderData />
    </main>
  );
}
