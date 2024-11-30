export const formatDate = (dateString: string) => {
  const date = new Date(dateString)

  // 날짜 구성
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0')

  // 시간 구성
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const period = hours >= 12 ? '오후' : '오전'

  // 12시간제로 변환
  hours = hours % 12 || 12 // 0시를 12시로 표시

  return `${year}.${month}.${day}\n${period} ${hours}:${minutes}`
}
