'use client'
import { cultivationReportResponse } from '@/types/data'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CultivatedAreaManagementDetail from './_components/CultivatedAreaManagementDeatil'
import DetailHeader from '../../_components/DetailHeader'
import { formatDate } from '@/utils/formatDate'
import Button from '@/components/Button'
import style from '../style.module.scss'

export default function CultivatedAreaReportDetail() {
  const { id } = useParams()
  const [data, setData] = useState<cultivationReportResponse>()
  const route = useRouter()

  useEffect(() => {
    if (!id) return // id가 없으면 실행하지 않음

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/${id}`
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/${id}/approve`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!response.ok) {
      throw new Error('Error patching data')
    }
    route.push('/admin/cultivated-area-report-management')
  }

  const handleReject = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/${id}/reject`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!response.ok) {
      throw new Error('Error patching data')
    }
    route.push('/admin/cultivated-area-report-management')
  }

  return (
    <main className={style.cultivatedAreaReportDetailWrapper}>
      <section>
        <DetailHeader
          id={data?.cultivationReport.id.toString() || ''}
          createdAt={formatDate(data?.cultivationReport.createdAt || '')}
        />
      </section>
      <section style={{ padding: '0 45px' }}>
        <CultivatedAreaManagementDetail data={data} />
      </section>
      {/* 접수 상태일 때만 버튼 띄우기 */}
      <section style={{ marginBottom: '30px' }}>
        {data?.cultivationReport.status === 'PENDING' && (
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
