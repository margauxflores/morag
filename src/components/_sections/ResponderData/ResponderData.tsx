'use client';

import { BarChartData } from '@/types/data';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

type Props = {
  valueName: string;
  data: BarChartData[];
};

// Override console.error
// This is a hack to suppress the warning about missing defaultProps in recharts library as of version 2.12
// @link https://github.com/recharts/recharts/issues/3615
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export const ResponderData = ({ valueName, data }: Props) => {
  return (
    <div className="mb-14">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Responders
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {data.map((item, index) => (
          <div
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            key={index}
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.title}
            </dt>
            <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
              <div className="w-[100%] h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={item.dataset}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#8884d8"
                      name={valueName}
                      maxBarSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
