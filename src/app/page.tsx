import { StatsBox } from '@/components/StatsBox';
import { getResponderAgeGroupData, getSurveyData } from '@/utils/actions';
import { ResponderData } from '@/components/ResponderData';

export default async function Home() {
  const surveyData = await getSurveyData();
  const ageGroupData = await getResponderAgeGroupData();

  return (
    <main>
      <StatsBox title="Overview" data={surveyData} />
      <ResponderData ageGroupData={ageGroupData} valueName="Responders" />
    </main>
  );
}
