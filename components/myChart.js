import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
      x: {
          grid: {
              display: false,
          },
      },
      y: {
          grid: {
            borderDash: [3, 3],
          }
      }
  },
  plugins: {
    legend: {
        display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'My Balance',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Yearly',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function timeseriesTransform(timeseries) {
  const transformed = [];
  const valueData = [];
  const valueLabels = [];
  Object.keys(timeseries).map((key) => {
    const entry = timeseries[key];
    const dateLong = new Date(entry.timestampCreated);
    entry.timestampParsed = dateLong
    entry.date = {
      day: dateLong.getDate(), 
      month: dateLong.getMonth(), 
      year: dateLong.getFullYear() 
    };
    transformed.push(entry);
  })
  transformed.sort((entry1, entry2) => { return (entry1.timestampParsed - entry2.timestampParsed); });
  transformed.map((elem) => {
    valueData.push(elem.portfolioValue);
    valueLabels.push(labels[elem.date.month]);
  })

  return { valueData, valueLabels };
} 

const MyChart = (timeSeries) => {
    const { valueData , valueLabels }= timeseriesTransform(timeSeries);
    
  const data = {
    labels: valueLabels,
    datasets: [
      {
        label: 'Portfolio Value',
        data: valueData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



    return (
        <Line options={options} data={data} />
    )
};

export default MyChart;