"use client"

import useTabsStore from "@/store/useTabsStore"
import Tab from "../../_components/Tab"
import ManagementList from "../_components/ManagementList"
import { useEffect, useState } from "react"
import { shipmentReportResponse } from "@/types/data"
import style from "./style.module.scss"

export default function ShipmentReportManagement() {
  const activeTab = useTabsStore(state => state.activeTab)
  const [datas, setDatas] = useState<shipmentReportResponse[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/status/${activeTab}`
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
    <div className={style.shipmentReportManagementContainer}>
      <div className={style.label}>
        <label>출하량 신고 관리</label>
      </div>
      <Tab />
      {activeTab && (
        <ManagementList
          datas={datas}
          type="shipment"
        />
      )}
    </div>
  )
}
