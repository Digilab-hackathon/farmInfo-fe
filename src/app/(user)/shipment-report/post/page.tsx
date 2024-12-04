"use client"

import { useShipmentStore } from "@/store/useShipmentStore"
import UserInfoForm from "./_components/UserInfoForm"
import ShipmentInfo from "./_components/ShipmentInfo."
import TermsOfUse from "./_components/TermsOfUse"
import { useEffect } from "react"
import style from "../style.module.scss"
import FormTab from "../../_compoents/FormTab/FormTab"

export default function AreaReport() {
  const currentPage = useShipmentStore(state => state.currentPage)
  const initCurrentPage = useShipmentStore(state => state.initCurrentPage)

  useEffect(() => {
    initCurrentPage()
  }, [])
  return (
    <main className={style.postReportWrapper}>
      <FormTab category="shipment" />
      {currentPage === 1 && <UserInfoForm />}
      {currentPage === 2 && <ShipmentInfo />}
      {currentPage === 3 && <TermsOfUse />}
    </main>
  )
}
