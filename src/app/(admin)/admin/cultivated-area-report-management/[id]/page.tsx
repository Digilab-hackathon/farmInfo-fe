'use client'
import { cultivationReportResponse } from '@/types/data'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import CultivatedAreaManagementDetail from './_components/CultivatedAreaManagementDeatil'
import DetailHeader from '../../_components/DetailHeader'
import { formatDate } from '@/utils/formatDate'
import Button from '@/components/Button'
import style from '../style.module.scss'

export default function CultivatedAreaReportDetail() {
  const params = useParams()
  const [data, setData] = useState<cultivationReportResponse>()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/${params.id ?? ''}`
      )
      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.')
      }
      const result = await response.json()

      if (result) {
        setData(result)
      }
    }
    fetchData()
  }, [params.id])

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
      <section style={{ marginTop: '30px' }}>
        {data?.cultivationReport.status === 'PENDING' ? (
          <div className={style.buttonWrapper}>
            <Button
              contents="승인"
              width="153px"
              backgroundColor="#039B72"
              onClick={() => alert('hi')}
            />
            <Button
              contents="거절"
              width="153px"
              backgroundColor="#F7CACA"
              border="1px solid #D57070"
              color="#E74545"
              onClick={() => alert('hi')}
            />
          </div>
        ) : null}
      </section>
    </main>
  )
}
