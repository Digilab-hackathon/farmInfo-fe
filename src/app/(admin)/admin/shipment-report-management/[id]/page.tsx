'use client'

import { shipmentReport } from '@/types/data'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ShipmentReportDetail() {
  const params = useParams()
  const [data, setData] = useState<shipmentReport>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/${params.id}`
      )
      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.')
      }
      const result = await response.json()
      setData(result)
    }

    fetchData()
  }, [])

  return <div>{data && <div>{data.id}</div>}</div>
}
