'use client'
import DoughnutChart from '@/components/DoughnutChart'
import Header from '../_components/Header/Header'

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
      <Header
        title="팜인포"
        type="main"
      />
      <DoughnutChart data={data} />
    </div>
  )
}
