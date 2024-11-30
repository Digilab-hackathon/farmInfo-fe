import {
  CultivatedAreaType,
  CultivatedAreaReportInfo,
  CultivatedAreaUserInfo
} from '@/types/CultivatedAreaInfoValues'
import { create } from 'zustand'

interface CultivatedAreaState {
  currentPage: number
  cultivatedAreaData: CultivatedAreaType
  initCurrentPage: () => void
  nextPage: () => void
  updateUserInfo: (member: CultivatedAreaUserInfo) => void
  updateReportInfo: (report: CultivatedAreaReportInfo) => void
}

export const useCultivatedAreaStore = create<CultivatedAreaState>(set => ({
  currentPage: 1,
  cultivatedAreaData: {
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    homePhoneNumber: '',
    crop: '',
    district: '',
    village: '',
    landCategory: '',
    totalArea: 0,
    cultivatedArea: 0,
    ownershipType: ''
  },
  initCurrentPage: () =>
    set(() => ({
      currentPage: 1
    })),
  nextPage: () =>
    set(state => ({
      currentPage: state.currentPage + 1
    })),
  updateUserInfo: memberInfo =>
    set(state => ({
      cultivatedAreaData: {
        ...state.cultivatedAreaData,
        ...memberInfo
      }
    })),
  updateReportInfo: reportInfo =>
    set(state => ({
      cultivatedAreaData: {
        ...state.cultivatedAreaData,
        ...reportInfo
      }
    }))
}))
