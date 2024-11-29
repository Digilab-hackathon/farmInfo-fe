export interface CultivatedAreaUserInfo {
  name: string
  birthDate: string
  address: string
  phoneNumber: string
  homePhoneNumber?: string
}

export interface CultivatedAreaReportInfo {
  crop: string
  district: string
  village: string
  landCategory: string
  totalArea: number
  cultivatedArea: number
  ownershipType: string
}

export type CultivatedAreaType = CultivatedAreaUserInfo &
  CultivatedAreaReportInfo
