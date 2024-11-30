interface OptionType {
  name: string
  value: number
}

export const addBarChartOptions = (
  data: OptionType[], // 한글로 변환된 데이터
  backgroundColors: string[] // 배경 색상 배열
) => {
  // 배경 색상을 데이터에 추가
  return data.map((item, index) => {
    const backgroundColor = backgroundColors[index] || "gray"
    return { ...item, backgroundColor }
  })
}
