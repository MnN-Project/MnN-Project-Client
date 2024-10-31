'use client';
import Image from 'next/image';
import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 106,
    fill: '#fff'
  },
  {
    name: 'Companies',
    count: 50,
    fill: '#8884d8'
  },
  {
    name: 'Users',
    count: 50,
    fill: '#b3ed83'
  }
];

const CountChart = () => {
  return (
    <div className=" bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold">Companies</h1>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className=" relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar minAngle={15} background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <img
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-light-green rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-dark-gray">Companies (55%) </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-blue rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-dark-gray">Users (55%) </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
