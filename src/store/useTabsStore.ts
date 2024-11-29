import { create } from 'zustand'

interface TabsState {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const useTabsStore = create<TabsState>(set => ({
  activeTab: 'accept',
  setActiveTab: (tab: string) => set({ activeTab: tab })
}))

export default useTabsStore
