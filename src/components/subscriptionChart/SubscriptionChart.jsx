'use client';
import Image from 'next/image';
import React from 'react';

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Jan',
    new: 4000,
    renewal: 2400
  },
  {
    name: 'Feb',
    new: 3000,
    renwal: 1398
  },
  {
    name: 'Mar',
    new: 2000,
    renewal: 9800
  },
  {
    name: 'Apr',
    new: 2780,
    renewal: 3908
  },
  {
    name: 'May',
    new: 1890,
    renewal: 4800
  },
  {
    name: 'Jun',
    new: 2390,
    renewal: 3800
  }
  //   {
  //     name: 'Jul',
  //     new: 3490,
  //     renewal: 4300
  //   },
  //   {
  //     name: 'Aug',
  //     new: 3490,
  //     renewal: 4300
  //   },
  //   {
  //     name: 'Sept',
  //     new: 3490,
  //     renewal: 4300
  //   },
  //   {
  //     name: 'Oct',
  //     new: 3490,
  //     renewal: 4300
  //   },
  //   {
  //     name: 'Nov',
  //     new: 3490,
  //     renewal: 4
  //   },
  //   {
  //     name: 'Dec',
  //     new: 3490,
  //     renewal: 4300
  //   }
];

const SubscriptionChart = () => {
  return (
    <div className="bg-white h-full rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold">Subscriptions</h1>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />
          <Bar dataKey="new" fill="#8884d8" legendType="circle" radius={[10, 10, 0, 0]} />
          <Bar dataKey="renewal" fill="#82ca9d" legendType="circle" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionChart;
