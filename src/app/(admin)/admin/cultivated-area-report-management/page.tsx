"use client"

import useTabsStore from "@/store/useTabsStore"
import { useEffect, useState } from "react"
import { cultivationReportResponse } from "@/types/data"
import style from "./style.module.scss"
import Tab from "../../_components/Tab/Tab"
import ManagementList from "../_components/ManagementList/ManagementList"

export default function CultivatedAreaReportManagement() {
  const activeTab = useTabsStore(state => state.activeTab)
  const [datas, setDatas] = useState<cultivationReportResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-reports/status/${activeTab}`
      )
      if (!response.ok) {
        throw new Error("데이터를 가져오는 데 실패했습니다.")
      }
      const result = await response.json()
      setDatas(result)
    }

    fetchData()
  }, [activeTab])

  return (
    <main className={style.cultivatedAreaReportManagementContainer}>
      <div className={style.label}>
        <label>재배면적 신고 관리</label>
      </div>
      <Tab />
      {activeTab && (
        <ManagementList
          datas={datas}
          type="cultivation"
        />
      )}
    </main>
  )
}
