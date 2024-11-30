'use client'

import { shipmentReportResponse } from '@/types/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import DetailHeader from '../../_components/DetailHeader'
import { formatDate } from '@/utils/formatDate'
import style from '../style.module.scss'
import Button from '@/components/Button'
import ShipmentAreaManagementDetail from './_components/ShipmentManagementDetail'

export default function ShipmentReportDetail() {
  const { id } = useParams()
  const [data, setData] = useState<shipmentReportResponse>()
  const route = useRouter()

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

  const handleApprove = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/${id}/approve`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!response.ok) {
      throw new Error('Error patching data')
    }
    route.push('/admin/shipment-report-management')
  }

  const handleReject = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/${id}/reject`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!response.ok) {
      throw new Error('Error patching data')
    }
    route.push('/admin/shipment-report-management')
  }

  return (
    <main className={style.shipmentReportDetailWrapper}>
      <section>
        <DetailHeader
          id={data?.shipmentReport.id.toString() || ''}
          createdAt={formatDate(data?.shipmentReport.createdAt || '')}
        />
      </section>
      <section style={{ padding: '0 45px' }}>
        <ShipmentAreaManagementDetail data={data} />
      </section>
      {/* 접수 상태일 때만 버튼 띄우기 */}
      <section style={{ marginBottom: '30px' }}>
        {data?.shipmentReport.status === 'PENDING' && (
          <div className={style.buttonWrapper}>
            <Button
              contents="승인"
              width="153px"
              backgroundColor="#039B72"
              onClick={handleApprove}
            />
            <Button
              contents="거절"
              width="153px"
              backgroundColor="#F7CACA"
              border="1px solid #D57070"
              color="#E74545"
              onClick={handleReject}
            />
          </div>
        )}
      </section>
    </main>
  )
}
