import React from "react"
import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  Cell,
  LabelProps
} from "recharts"

interface BarChartOption {
  name: string
  value: number
  backgroundColor: string
}
interface dataProps {
  data: BarChartOption[]
}

interface CustomLabelProps extends LabelProps {
  name: string
  value: number
}

const CustomLabel: React.FC<CustomLabelProps> = ({ x, y, name, value }) => {
  const maxLength = 4 // 텍스트 길이를 기준으로 줄 바꿈을 처리합니다.
  const splitName = name.match(new RegExp(`.{1,${maxLength}}`, "g")) || []
  return (
    <g
      transform={`translate(${x},${y})`}
      style={{ fontSize: "14px", color: "#565656", fontWeight: "700" }}>
      {splitName.map((line, index) => (
        <text
          key={index}
          x={-50}
          y={5 + index * 20} // 줄마다 y 값을 변경하여 위아래로 배치
          textAnchor="start"
          fill="#565656">
          {line}
        </text>
      ))}
      <text
        x={275}
        y={5} // value는 name의 텍스트가 끝난 후 위치
        textAnchor="start"
        fill="#565656">
        {Math.floor(value)}kg
      </text>
    </g>
  )
}

const HorizontalBarChart = ({ data }: dataProps) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={200}>
      <BarChart
        layout="vertical"
        data={data}
        barGap={3}
        margin={{ top: 30, right: 0, bottom: 30, left: 20 }}>
        <XAxis
          type="number"
          hide={true}
        />
        <YAxis
          dataKey="name"
          type="category"
          tick={({ x, y, payload }) => {
            const item = data.find(item => item.name === payload.value)
            return item ? (
              <CustomLabel
                x={x - 10}
                y={y}
                name={payload.value}
                value={item.value}
              />
            ) : (
              <></>
            )
          }}
        />
        <Tooltip />
        <Bar
          dataKey="value"
          barSize={35}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.backgroundColor}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default HorizontalBarChart
