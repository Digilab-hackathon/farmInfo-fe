'use client'
import DoughnutChart from '@/components/DoughnutChart'

export default function Home() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }
  return (
    <div>
      <h1>지도</h1>
      <DoughnutChart data={data} />
    </div>
  )
}
