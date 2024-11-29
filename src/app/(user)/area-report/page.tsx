'use client'

import DoughnutChart from '@/components/DoughnutChart'
import Dropdown from '@/components/Dropdown'
import { cropOptions } from '@/constants/options'
// import { shipmentReport } from '@/types/data'
import { useEffect } from 'react'
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
  //   const [datas, setDatas] = useState<shipmentReport[]>([])

  const { control, watch } = useForm({
    defaultValues: {
      crop: 'RADISH'
    }
  })

  const crop = watch('crop')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports`
        )
        if (!response.ok) {
          throw new Error('데이터를 가져오는 데 실패했습니다.')
        }
        // const result = await response.json()
        // setDatas(result)
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchData()
  }, [crop])

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
        <div className={style.cultivationRateInfoWrapper}>
          남은 면적 : 1234평
        </div>
        <div className={style.expectedPriceWrapper}>
          <label>예상 가격</label>
          <div>
            <span>1020원</span>
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
