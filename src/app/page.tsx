import { StatsBox } from '@/components/StatsBox';
import { prisma } from '@/utils/db';
import { calculatePercentage } from '@/utils/calc';

const getSurveyData = async () => {
  const totalCruises = await prisma.cruise.count();
  const responder = await prisma.responder.count();
  const researcher = await prisma.researcher.count();
  const researcherResponseRate = calculatePercentage(responder, researcher);

  const data = [
    {
      name: 'Total Cruises',
      stat: totalCruises.toString(),
    },
    { name: 'Total Survey Responses', stat: responder.toLocaleString() },
    { name: 'Cruise Response Rate', stat: 'xxxx' },
    { name: 'Total Researchers', stat: researcher.toLocaleString() },
    { name: 'Total Responders', stat: responder.toLocaleString() },
    {
      name: 'Researchers Response Rate',
      stat: `${researcherResponseRate.toLocaleString()}%`,
    },
  ];

  return data;
};

export default async function Home() {
  const data = await getSurveyData();
  return (
    <main>
      <StatsBox title="Overview" data={data} />
    </main>
  );
}
