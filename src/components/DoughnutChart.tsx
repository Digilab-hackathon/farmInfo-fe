'use client'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

interface ChartProps {
  data: {
    datasets: {
      data: number[]
      backgroundColor: string[]
    }[]
  }
}

const DoughnutChart = ({ data }: ChartProps) => {
  // 차트 옵션 설정
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <Doughnut
      data={data}
      options={options}
    />
  )
}

export default DoughnutChart
