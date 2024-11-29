export interface ShipmentUserInfo {
  name: string
  birthDate: string
  address: string
  phoneNumber: string
  homePhoneNumber?: string
}

export interface ShipmentReportInfo {
  expectedShipDate: string
  wholesaleCompany: string
  tradeType: string
  tradingMethod: string
  producerName: string
  productionLocation: string
  crop: string
  packaging: string
  unit: number
  grade: string
}

export type ShipmentType = ShipmentUserInfo & ShipmentReportInfo
