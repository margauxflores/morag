import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { DataSet } from '@/types/data';

type Props = {
  data?: DataSet[];
  valueName: string;
};

export const VerticalBarChart: React.FC<Props> = ({ data, valueName }) => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart width={100} height={100} data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis
          dataKey="name"
          type="category"
          tick={{ fontSize: 12 }}
          tickLine={false}
        />
        <Tooltip />
        <Bar dataKey="value" fill="#0088FE" name={valueName} />
      </BarChart>
    </ResponsiveContainer>
  );
};
