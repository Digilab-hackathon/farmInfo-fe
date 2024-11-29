import { CultivatedAreaReportInfo } from './CultivatedAreaInfoValues'
import { ShipmentReportInfo } from './ShipmentInfoValues'

export type cultivationReport = CultivatedAreaReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}

export type shipmentReport = ShipmentReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}
