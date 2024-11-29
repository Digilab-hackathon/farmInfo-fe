'use client'

import useTabsStore from '@/store/useTabsStore'
import Tab from '../../_components/Tab'
import AcceptManagement from '../_components/AcceptManagement'

export default function CultivatedAreaReportManagement() {
  const activeTab = useTabsStore(state => state.activeTab)

  return (
    <div>
      <Tab />
      {activeTab === 'accept' && <AcceptManagement />}
    </div>
  )
}
