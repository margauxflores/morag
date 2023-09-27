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

  const dataset = [
    {
      title: 'Career Level',
      dataset: careerLevelData,
    },
    {
      title: 'Age Group',
      dataset: ageGroupData,
    },
    {
      title: 'Gender',
      dataset: genderData,
    },
    {
      title: 'Nationality',
      dataset: genderData,
    },
  ];

  return (
    <div>
      <StatsBox title="Overview" data={surveyData} />
      <ResponderData valueName="Responders" data={dataset} />
    </div>
  );
}
