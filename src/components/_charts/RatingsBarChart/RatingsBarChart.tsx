'use client';

import React from 'react';
import { DataSet } from '@/types/data';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {
  title: string;
  data: DataSet[];
};

export const RatingsBarChart: React.FC<Props> = ({ title, data }) => {
  const barColors = [
    '#ed561b',
    '#ff9655',
    '#fff263',
    '#64e572',
    '#50b432',
    '#adadad',
  ];

  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
      <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
        <div className="w-[100%] h-[300px]">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart width={100} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis type="number" domain={[0, 100]} hide />
              <Tooltip />
              <Bar dataKey="value" name="Responses">
                {data.map((entry, index) => (
                  <Cell fill={barColors[index]} key={index} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </dd>
    </div>
  );
};
