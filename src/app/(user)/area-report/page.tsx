"use client"

import { cropOptions } from "@/constants/options"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import style from "./style.module.scss"
import Link from "next/link"
import Dropdown from "@/components/Dropdown/Dropdown"
import HalfDoughnutChart from "@/components/Chart/HalfDoughnutChart"

export default function AreaReport() {
  const [approciateAreaData, setApprociateAreaData] = useState(0)
  const [approveAreaData, setApproveAreaData] = useState(0)
  const [expectedPriceData, setExpectedPriceData] = useState(0)

  const { control, watch } = useForm({
    defaultValues: {
      crop: "RADISH"
    }
  })

  const crop = watch("crop")

  useEffect(() => {
    const fetchApprociateAreaData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-area?crop=${crop}`
        )
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.")
        }
        const result = await response.json()
        setApprociateAreaData(result)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    const fetchApproveAreaData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/area/${crop}`
        )
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.")
        }
        const result = await response.json()
        setApproveAreaData(result)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    const fetchExpectedPriceData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/price/${crop}`
        )
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.")
        }
        const result = await response.json()
        setExpectedPriceData(result)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    const fetchDataWithDelay = async () => {
      fetchApprociateAreaData()
      fetchApproveAreaData()
      await new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds delay
      fetchExpectedPriceData() // This will be executed after 2 seconds delay
    }

    fetchDataWithDelay()
  }, [crop])

  const calValidCoverage = (coverageRatio: number) => {
    if (coverageRatio >= 100) return 100
    if (coverageRatio <= 0) return 0
    return coverageRatio
  }

  const remainArea = approciateAreaData - approveAreaData
  const coverageRatio =
    approciateAreaData > 0
      ? calValidCoverage(
          Math.floor((approveAreaData / approciateAreaData) * 100)
        )
      : 0

  const calCoverageColor = (coverageRatio: number) => {
    if (coverageRatio > 0 && coverageRatio < 50) return "#007052"
    if (coverageRatio < 100) return "#F18620"
    if (coverageRatio >= 100) return "#EB3E26"
    return "#CECECE"
  }

  const coverageRadioData = [
    {
      name: "헌재 신고 면적",
      value: coverageRatio,
      color: calCoverageColor(coverageRatio)
    },
    {
      name: "남은 면적",
      value: 100 - coverageRatio,
      color: "#CECECE"
    }
  ]

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
        <div className={style.halfDoughnutChartWrapper}>
          <HalfDoughnutChart data={coverageRadioData} />
          <div className={style.approveArea}>현재 신고 면적</div>
          <div className={style.ratioWrapper}>
            <div
              className={style.ratio}
              style={{ color: calCoverageColor(coverageRatio) }}>
              {coverageRatio}%
            </div>
            <div
              className={style.recommend}
              style={{ backgroundColor: calCoverageColor(coverageRatio) }}>
              추천
            </div>
          </div>
          <div className={style.approciateArea}>
            적정 재배 면적 지수 {approciateAreaData}
          </div>
        </div>

        {coverageRatio > 0 && coverageRatio < 100 ? (
          <div className={style.cultivationRateInfoWrapper}>
            남은 면적 : {Math.floor(remainArea)}평
          </div>
        ) : (
          <div className={style.cultivationRateInfoWrapper}>
            <label>적정 재배 면적 지수 초과</label>
            <div className={style.highlight}>공급 과잉 우려</div>
          </div>
        )}

        <div className={style.expectedPriceWrapper}>
          <label>예상 가격</label>
          <div>
            <span>{Math.abs(expectedPriceData)}원</span>
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
