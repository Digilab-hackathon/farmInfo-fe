import { CultivatedAreaReportInfo } from '@/types/CultivatedAreaInfoValues'
import { useEffect, useState } from 'react'

type CultivationReport = CultivatedAreaReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}

const AcceptManagement = () => {
  const [acceptData, setAcceptData] = useState<CultivationReport[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports`
      )
      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.')
      }
      const result = await response.json()
      setAcceptData(result)
    }

    fetchData()
  }, [])

  return (
    <div>
      {acceptData.length > 0 &&
        acceptData.map((data, index) => <div key={index}>{data.crop}</div>)}
    </div>
  )
}

export default AcceptManagement
