import { CultivatedAreaReportInfo } from './CultivatedAreaInfoValues'
import { ShipmentReportInfo } from './ShipmentInfoValues'

export type cultivationReportResponse = CultivatedAreaReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}

export type shipmentReportResponse = ShipmentReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}
