"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell } from "recharts"

interface HalfDoughnutChartOption {
  name: string
  value: number
  color: string
}
interface dataProps {
  data: HalfDoughnutChartOption[]
}

const HalfDoughnutChart = ({ data }: dataProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // 서버에서 렌더링하지 않음

  return (
    <PieChart
      width={400}
      height={200}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx={195}
        cy={180}
        innerRadius={90}
        outerRadius={160}
        fill="#8884d8"
        stroke="none">
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
          />
        ))}
      </Pie>
    </PieChart>
  )
}

export default HalfDoughnutChart
