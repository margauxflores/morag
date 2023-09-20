import React from 'react';
import styles from './RatingsBarChart.module.css';
import { Ratings } from '@/types/data';
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
  data: Ratings[];
  valueName: string;
};

export const RatingsBarChart: React.FC<Props> = ({
  title,
  data,
  valueName,
}) => {
  const barColors = [
    '#ed561b',
    '#ff9655',
    '#fff263',
    '#64e572',
    '#50b432',
    '#adadad',
  ];

  const formattedData = data.map(({ rating, value }) => ({
    name: rating,
    value,
  }));

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartContainer}>
        <ResponsiveContainer height="100%" width="100%">
          <BarChart width={100} height={100} data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 100]} hide />
            <Tooltip />
            <Bar dataKey="value" name={valueName}>
              {formattedData.map((entry, index) => (
                <Cell fill={barColors[index]} key={index} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
