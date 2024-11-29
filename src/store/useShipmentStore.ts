import {
  ShipmentReportInfo,
  ShipmentType,
  ShipmentUserInfo
} from '@/types/ShipmentInfoValues'
import { create } from 'zustand'

interface ShipmentState {
  currentPage: number
  shipmentData: ShipmentType
  nextPage: () => void
  updateUserInfo: (user: ShipmentUserInfo) => void
  updateReportInfo: (report: ShipmentReportInfo) => void
}

export const useCultivatedAreaStore = create<ShipmentState>(set => ({
  currentPage: 1,
  shipmentData: {
    name: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    homePhoneNumber: '',
    expectedShipDate: '',
    wholesaleCompany: '',
    tradeType: '',
    tradingMethod: '',
    producerName: '',
    productionLocation: '',
    crop: '',
    packaging: '',
    unit: 0,
    grade: ''
  },
  nextPage: () =>
    set(state => ({
      currentPage: state.currentPage + 1
    })),
  updateUserInfo: userInfo =>
    set(state => ({
      shipmentData: {
        ...state.shipmentData,
        ...userInfo
      }
    })),
  updateReportInfo: reportInfo =>
    set(state => ({
      shipmentData: {
        ...state.shipmentData,
        ...reportInfo
      }
    }))
}))
