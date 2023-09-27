'use client';

import React from 'react';
import { BarChartData } from '@/types/data';
import { RatingsBarChart } from '@/components/_charts';

type Props = {
  data: BarChartData[];
};

export const OnboardSafetyRatings: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {data.map((item, index) => (
          <RatingsBarChart title={item.title} data={item.dataset} key={index} />
        ))}
      </dl>
    </div>
  );
};
