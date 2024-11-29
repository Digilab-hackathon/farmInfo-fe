'use client'

import { useShipmentStore } from '@/store/useShipmentStore'
import UserInfoForm from './_components/UserInfoForm'
import ShipmentInfo from './_components/ShipmentInfo.'
import TermsOfUse from './_components/TermsOfUse'

export default function AreaReport() {
  const currentPage = useShipmentStore(state => state.currentPage)

  return (
    <main>
      {currentPage === 1 && <UserInfoForm />}
      {currentPage === 2 && <ShipmentInfo />}
      {currentPage === 3 && <TermsOfUse />}
    </main>
  )
}
