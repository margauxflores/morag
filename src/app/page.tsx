import { StatsBox } from '@/components/StatsBox';
import { ResponderData } from '@/components/ResponderData';
import {
  getResponderAgeGroupData,
  getResponderCareerLevelData,
  getResponderGenderData,
  getResponderNationalityData,
  getSurveyData,
} from '@/utils/server';

export default async function Home() {
  const [
    surveyData,
    ageGroupData,
    careerLevelData,
    genderData,
    nationalityData,
  ] = await Promise.all([
    getSurveyData(),
    getResponderAgeGroupData(),
    getResponderCareerLevelData(),
    getResponderGenderData(),
    getResponderNationalityData(),
  ]);

  return (
    <main>
      <StatsBox title="Overview" data={surveyData} />
      <ResponderData
        ageGroupData={ageGroupData}
        valueName="Responders"
        careerLevelData={careerLevelData}
        nationalityData={nationalityData}
        genderData={genderData}
      />
    </main>
  );
}
