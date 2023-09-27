'use client';

import React from 'react';
import { DataSet } from '@/types/data';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

type Props = {
  ageGroupData: DataSet[];
  careerLevelData: DataSet[];
  genderData: DataSet[];
  nationalityData: DataSet[];
  valueName: string;
};

export const ResponderData: React.FC<Props> = ({
  ageGroupData,
  careerLevelData,
  genderData,
  nationalityData,
  valueName,
}) => {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Responders
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Career Level
          </dt>
          <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
            <div className="w-[100%] h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={careerLevelData}
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
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Gender</dt>
          <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
            <div className="w-[100%] h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={genderData}
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
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Age Group
          </dt>
          <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
            <div className="w-[100%] h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={ageGroupData}
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
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">
            Nationality
          </dt>
          <dd className="mt-1 text-sm font-semibold tracking-tight text-gray-900">
            <div className="w-[100%] h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={nationalityData}
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
      </dl>
    </div>
  );
};
