'use client'

import UserInfoForm from './_component/UserInfoForm'
import CultivationInfo from './_component/CultivationInfo'
import TermsOfUse from './_component/TermsOfUse'
import { useCultivatedAreaStore } from '@/store/useCultivatedAreaStore'
import FormTab from '../../_compoents/FormTab'
import { useEffect } from 'react'
import style from '../style.module.scss'

export default function AreaReport() {
  const currentPage = useCultivatedAreaStore(state => state.currentPage)
  const initCurrentPage = useCultivatedAreaStore(state => state.initCurrentPage)

  useEffect(() => {
    initCurrentPage()
  }, [])

  return (
    <main className={style.postReportWrapper}>
      <FormTab category="cultivated" />
      {currentPage === 1 && <UserInfoForm />}
      {currentPage === 2 && <CultivationInfo />}
      {currentPage === 3 && <TermsOfUse />}
    </main>
  )
}
