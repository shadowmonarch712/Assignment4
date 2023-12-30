import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Revenue for November 2019',
      min: 0,
      max: 60000,
      interval: 5000,
    },
  ],
  width: 400,
  height: 400,
};

const dataset = [
  {
    city: 'Everett',
    revenue: 80000,
  },
  {
    city: 'Seattle',
    revenue: 75000,
  },
  {
    city: 'Lynnwood',
    revenue:49000,
  },
  {
    city: 'Bothell',
    revenue: 47500,
  },
  {
    city: 'Mukilteo',
    revenue: 46500,
  },
  {
    city: 'Edmonds',
    revenue: 34000,
  },
];

const valueFormatter = (value) => `$${value}`;

export default function Bargraph() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'city' }]}
      series={[{ dataKey: 'revenue', label: 'Revenue by Job Location', valueFormatter, backgroundColor: 'red' }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
