interface OptionType {
  label: string
  value: string
}

export const mapEnglishToKorean = (
  inputData: [string, number][], // 영어 이름과 값의 배열
  options: OptionType[] // 한글 이름을 포함하는 옵션 배열
) => {
  // 영어 이름을 한글로 매핑하는 객체 생성
  const nameMapping: Record<string, string> = options.reduce(
    (acc, { label, value }) => {
      acc[value] = label
      return acc
    },
    {} as Record<string, string>
  )

  // 입력된 데이터를 한글로 변환하여 반환
  return inputData.map(([name, value]) => {
    const koreanName = nameMapping[name] || name // 매핑된 한글 이름이 없으면 원래 이름 사용
    return { name: koreanName, value }
  })
}
