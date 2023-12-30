import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Revenue for November 2019',
      min: 0,
      max: 140000,
      interval: 20000,
    },
  ],
  width: 400,
  height: 400,
};

const dataset = [
  {
    job: 'Service Plumbing',
    revenue: 180000,
  },
  {
    job: 'Bid Work HVAC',
    revenue: 130000,
  },
  {
    job: 'Service HVAC',
    revenue: 80000,
  },
  {
    job: 'Bid Work Plumbing',
    revenue: 78000,
  },
  {
    job: 'HWT Replacement',
    revenue: 48000,
  },
  {
    job: 'Maintenance',
    revenue: 44000,
  },
  {
    job: 'Material Sale',
    revenue: 5000,
  },
];

const valueFormatter = (value) => `$${value}`;

export default function Bargraph() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'job' }]}
      series={[{ dataKey: 'revenue', label: 'Revenue by Job Type', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
