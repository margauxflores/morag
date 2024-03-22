import { BarChartData } from '@/types/data';
import { RatingsBarChart } from '@/components/_charts';

type Props = {
  title: string;
  data: BarChartData[];
};

export const Section = ({ title, data }: Props) => {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {title}
      </h3>
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {data.map((item, index) => (
            <RatingsBarChart
              title={item.title}
              data={item.dataset}
              key={index}
            />
          ))}
        </dl>
      </div>
    </div>
  );
};
