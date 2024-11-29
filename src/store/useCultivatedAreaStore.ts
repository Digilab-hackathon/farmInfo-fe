import {
  CultivatedAreaReportInfo,
  CultivatedAreaUserInfo
} from '@/types/CultivatedAreaInfoValues'
import { create } from 'zustand'

type CultivatedArea = CultivatedAreaUserInfo & CultivatedAreaReportInfo

interface CultivatedAreaState {
  currentPage: number
  cultivatedAreaData: CultivatedArea
  nextPage: () => void
  updateUserInfo: (member: CultivatedAreaUserInfo) => void
  updateReportInfo: (report: CultivatedAreaReportInfo) => void
}

export const useCultivatedAreaStore = create<CultivatedAreaState>(set => ({
  currentPage: 1,
  cultivatedAreaData: {
    reporterName: '',
    birthday: '',
    address: '',
    phone: '',
    secondPhone: '',
    crop: '',
    district: '',
    village: '',
    landCategory: '',
    totalArea: 0,
    cultivatedArea: 0,
    isSelfCultivated: ''
  },
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
