"use client"

import { STATUS } from "@/constants/constants"
import useTabsStore from "@/store/useTabsStore"
import style from "./style.module.scss"

const Tab = () => {
  const activeTab = useTabsStore(state => state.activeTab)
  const setActiveTap = useTabsStore(state => state.setActiveTab)
  const handleTabClick = (tab: string) => setActiveTap(tab)

  return (
    <div className={style.tabWrapper}>
      {["PENDING", "APPROVED", "REJECTED"].map(tab => (
        <button
          className={`${style.btnDefault} ${tab === activeTab ? style.btnActive : ""}`}
          key={tab}
          onClick={() => handleTabClick(tab)}>
          {STATUS[tab]}
        </button>
      ))}
    </div>
  )
}

export default Tab
