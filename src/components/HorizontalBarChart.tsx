'use client'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },

  scales: {
    x: {
      // display: false,
      grid: {
        offset: true
      },
      beginAtZero: true
    },
    y: {
      display: false
    }
  }
}

const labels = ['January', 'February', 'March']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 6, 3],
      backgroundColor: ['#17D1F8', '#009974', '#60D1A0']
    }
  ]
}

export default function HorizontalBarChart() {
  return (
    <Bar
      options={options}
      data={data}
    />
  )
}
