'use client'

import UserInfoForm from './_component/UserInfoForm'
import CultivationInfo from './_component/CultivationInfo'
import TermsOfUse from './_component/TermsOfUse'
import { useCultivatedAreaStore } from '@/store/useCultivatedAreaStore'

export default function AreaReport() {
  const currentPage = useCultivatedAreaStore(state => state.currentPage)

  return (
    <main>
      {currentPage === 1 && <UserInfoForm />}
      {currentPage === 2 && <CultivationInfo />}
      {currentPage === 3 && <TermsOfUse />}
    </main>
  )
}
