import { create } from "zustand"

interface AdminTabsState {
  activeTab: number
  setActiveTab: (tab: number) => void
}

const useAdminTabsStore = create<AdminTabsState>(set => ({
  activeTab: 1,
  setActiveTab: (tab: number) => set({ activeTab: tab })
}))

export default useAdminTabsStore
