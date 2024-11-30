"use client"

import DoughnutChart from "@/components/DoughnutChart"
import Header from "../_components/Header/Header"
import style from "./style.module.scss"
import Image from "next/image"
import HorizontalBarChart from "@/components/HorizontalBarChart"
import { useEffect, useState } from "react"
import { cropOptions } from "@/constants/options"
import { mapEnglishToKorean } from "@/utils/mapEnglishToKorean"
import { addBarChartOptions } from "@/utils/addBarChartOptions"

type ratioType = {
  cropRatios: {
    [key: string]: number // 각 항목의 키는 문자열이고, 값은 숫자입니다.
  }
  yieldPerArea: {
    [key: string]: number
  }
}

export default function Home() {
  const [ratios, setRatios] = useState<ratioType | null>(null)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/members/analytics?phoneNumber=010-1234-5678`
        )
        if (!response.ok) {
          throw new Error("데이터를 가져오는 데 실패했습니다.")
        }
        const result = await response.json()
        setRatios(result)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }
    fetchAnalytics()
  }, [])

  const cropRatios = ratios?.cropRatios
  const cropRatiosData = cropRatios
    ? Object.entries(cropRatios)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
    : []
  const cropRatiosValues = cropRatiosData.map(([, value]) => value)
  const maxRatios =
    cropRatiosValues.length > 0 ? Math.max(...cropRatiosValues) : 0

  const yieldPerArea = ratios?.yieldPerArea
  const yieldPerAreaData = yieldPerArea
    ? Object.entries(yieldPerArea)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
    : []
  const refinedData = mapEnglishToKorean(yieldPerAreaData, cropOptions)
  const backgroundColors = ["#17D1F8", "#009974", "#60D1A0"]

  // 배경 색상 추가
  const formattedYieldPerAreaData = addBarChartOptions(
    refinedData,
    backgroundColors
  )

  const data = {
    datasets: [
      {
        data: cropRatiosValues,
        backgroundColor: backgroundColors
      }
    ]
  }

  return (
    <div>
      <Header
        title="팜인포"
        type="main"
      />
      <div className={style.mainContentsContainer}>
        {/* 공지 */}
        <section className={style.noticeWrapper}>
          <Image
            src="/icons/notice.png"
            alt="공지"
            width={24}
            height={24}
          />
          <div>
            <span style={{ fontWeight: "700" }}>[공지] </span>
            <span>재배면적 신고기간 공지</span>
          </div>
          <Image
            src="/icons/new.png"
            alt="공지"
            width={18}
            height={18}
          />
        </section>

        <section className={style.cropDataContainer}>
          <div className={style.cropDataWrapper}>
            <label>나의 농작 데이터</label>
            <div className={style.mostCropWrapper}>
              <div className={style.contentsWrapper}>
                <div className={style.labelWrapper}>
                  <div>내 재배지에</div>
                  <div>가장 많은 품목</div>
                </div>
                <div className={style.cropName}>
                  <div>당근</div>
                  <Image
                    src="/icons/carrot.png"
                    alt="당근"
                    width={26}
                    height={30}
                  />
                </div>
              </div>
              <div className={style.doughnutChartWrapper}>
                <div className={style.doughnutChart}>
                  <div className={style.ratio}>
                    {maxRatios ? `${Math.floor(maxRatios)}%` : ""}
                  </div>
                  <DoughnutChart data={data} />
                </div>
                <ul className={style.list}>
                  {cropRatiosData.map((cropRatios, index) => (
                    <li key={cropRatios[0]}>
                      <div
                        className={style.color}
                        style={{
                          backgroundColor: backgroundColors[index]
                        }}></div>
                      <div>
                        {
                          cropOptions.find(
                            option => option.value === cropRatios[0]
                          )?.label
                        }
                      </div>
                      <div className={style.unit}>
                        {Math.floor(cropRatios[1])}%
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={style.myShipmentWrapper}>
            <label>나의 품목당 2024년 출하량</label>
            <HorizontalBarChart data={formattedYieldPerAreaData} />
          </div>
        </section>

        <button className={style.buttonWrapper}>
          <Image
            src="/icons/download.png"
            alt="다운로드"
            width={28}
            height={28}
          />
          <div>나의 데이터 다운 받기</div>
        </button>
      </div>
    </div>
  )
}
