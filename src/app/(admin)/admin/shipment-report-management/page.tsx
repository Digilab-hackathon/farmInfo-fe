'use client'

import useTabsStore from '@/store/useTabsStore'
import Tab from '../../_components/Tab'
import ManagementList from '../_components/ManagementList'
import { useEffect, useState } from 'react'
import { shipmentReport } from '@/types/data'

export default function ShipmentReportManagement() {
  const activeTab = useTabsStore(state => state.activeTab)
  const [datas, setDatas] = useState<shipmentReport[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports/status/${activeTab}`
      )
      if (!response.ok) {
        throw new Error('데이터를 가져오는 데 실패했습니다.')
      }
      const result = await response.json()
      setDatas(result)
    }

    fetchData()
  }, [activeTab])

  return (
    <div>
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
