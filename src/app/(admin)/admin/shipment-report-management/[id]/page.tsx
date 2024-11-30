'use client'

import { shipmentReportResponse } from '@/types/data'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ShipmentReportDetail() {
  const { id } = useParams()
  const [data, setData] = useState<shipmentReportResponse>()

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/${id}`
        )
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.')
        }
        const result = await response.json()
        setData(result) // 데이터 설정
      } catch (error) {
        console.error(error) // 에러 처리
      }
    }

    fetchData()
  }, [id])

  return <div>{data?.memberInfo.address}</div>
}
