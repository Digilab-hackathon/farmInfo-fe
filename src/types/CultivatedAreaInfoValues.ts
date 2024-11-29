export interface CultivatedAreaUserInfo {
  reporterName: string
  birthday: string
  address: string
  phone: string
  secondPhone?: string
}

export interface CultivatedAreaReportInfo {
  crop: string
  district: string
  village: string
  landCategory: string
  totalArea: number
  cultivatedArea: number
  isSelfCultivated: string
}
