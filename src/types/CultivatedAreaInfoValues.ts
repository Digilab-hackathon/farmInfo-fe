export interface CultivatedAreaUserInfo {
  reporterName: string
  birthday: string
  address: string
  phone: string
  secondPhone?: string
}

export interface CultivatedAreaReportInfo {
  productName: string
  region: string
  ri: string
  landCategory: string
  area: number
  detailedArea: number
  isSelfCultivated: string
}
