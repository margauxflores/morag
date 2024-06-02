import { ResponsiveContainer } from 'recharts';
import { GaugeChart } from '@/components/_charts';

type Props = {
  dataset: { name: string; value: number }[];
};

export const SatisfactionOverview = ({ dataset }: Props) => {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Satisfaction Overview
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {dataset.map((item, index) => (
          <div
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            key={index}
          >
            <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <GaugeChart percentage={item.value} title={item.name} />
                </ResponsiveContainer>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
