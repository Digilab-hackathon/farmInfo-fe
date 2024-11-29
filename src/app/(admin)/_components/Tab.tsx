'use client'

import useTabsStore from '@/store/useTabsStore'

const Tab = () => {
  const setActiveTap = useTabsStore(state => state.setActiveTab)
  const handleTabClick = (tab: string) => setActiveTap(tab)

  return (
    <div>
      {['accept', 'approve', 'reject'].map(tab => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}>
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default Tab
