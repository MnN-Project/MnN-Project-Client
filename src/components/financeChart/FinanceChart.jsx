'use client';
import Image from 'next/image';
import React from 'react';
import {
  LineChart,
  Line,
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
    income: 4000,
    expense: 2400
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 1398
  },
  {
    name: 'Mar',
    income: 2000,
    expense: 9800
  },
  {
    name: 'Apr',
    income: 2780,
    expense: 3908
  },
  {
    name: 'May',
    income: 1890,
    expense: 4800
  },
  {
    name: 'Jun',
    income: 2390,
    expense: 3800
  },
  {
    name: 'Jul',
    income: 3490,
    expense: 4300
  },
  {
    name: 'Aug',
    income: 3490,
    expense: 4300
  },
  {
    name: 'Sept',
    income: 3490,
    expense: 4300
  },
  {
    name: 'Oct',
    income: 3490,
    expense: 4300
  },
  {
    name: 'Nov',
    income: 3490,
    expense: 4
  },
  {
    name: 'Dec',
    income: 3490,
    expense: 4300
  }
];

const FinanceChart = () => {
  return (
    <div className="bg-white w-full h-full rounded-xl p-4">
      {/* <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Revenue</h1>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div> */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10}
            strokeWidth={5}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10}
            strokeWidth={5}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }}
          />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;