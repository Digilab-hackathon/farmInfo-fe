'use client'

import DoughnutChart from '@/components/DoughnutChart'
import Dropdown from '@/components/Dropdown'
import { cropOptions } from '@/constants/options'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import style from './style.module.scss'
import Link from 'next/link'

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
}

export default function AreaReport() {
  const [approciateAreaData, setApprociateAreaData] = useState(0)
  const [approveAreaData, setApproveAreaData] = useState(0)
  const [expectedPriceData, setExpectedPriceData] = useState(0)

  const { control, watch } = useForm({
    defaultValues: {
      crop: 'RADISH'
    }
  })

  const crop = watch('crop')

  useEffect(() => {
    const fetchApprociateAreaData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-area?crop=${crop}`
        )
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.')
        }
        const result = await response.json()
        setApprociateAreaData(result)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    const fetchApproveAreaData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/area/${crop}`
        )
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.')
        }
        const result = await response.json()
        setApproveAreaData(result)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    const fetchExpectedPriceData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/price/${crop}`
        )
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.')
        }
        const result = await response.json()
        setExpectedPriceData(result)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchApprociateAreaData()
    fetchApproveAreaData()
    fetchExpectedPriceData()
  }, [crop])

  const remainArea = approciateAreaData - approveAreaData
  const coverageRatio = Math.floor((approveAreaData / approciateAreaData) * 100)

  return (
    <main className={style.areaReportContainer}>
      <section className={style.appropriateCultivationAreaWrapper}>
        <label>품목별 적정 재배 면적 표기</label>
        <Dropdown
          name="crop"
          control={control}
          options={cropOptions.slice(1)}
          rules={{ required: true }}
          type="mini"
        />
        <DoughnutChart data={data} />
        {coverageRatio < 100 ? (
          <div className={style.cultivationRateInfoWrapper}>
            남은 면적 : {remainArea}평
          </div>
        ) : (
          <div className={style.cultivationRateInfoWrapper}>
            <label>적정 재베 면적 지수 초과</label>
            <div className={style.highlight}>공급 과잉 우려</div>
          </div>
        )}

        <div className={style.expectedPriceWrapper}>
          <label>예상 가격</label>
          <div>
            <span>{expectedPriceData}원</span>
            <span className={style.unit}>(개당)</span>
          </div>
        </div>
      </section>
      <div className={style.bar}></div>
      <section className={style.postCultivationAreaInfoContainer}>
        <div className={style.postCultivationAreaInfoWrapper}>
          <div className={style.labelWrapper}>
            <label>24~25년산 주요 채소류 재배면적 신고</label>
            <div>2024. 11. 1 (월) ~ 2024. 11. 24 (월)</div>
          </div>
          <div className={style.linkWrapper}>
            <Link href="/area-report/post">신고하기</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
