import {
  CultivatedAreaReportInfo,
  CultivatedAreaUserInfo
} from './CultivatedAreaInfoValues'
import { ShipmentReportInfo, ShipmentUserInfo } from './ShipmentInfoValues'

// 재배면적 신고 내역 조회 Response 타입
export type cultivationReportResponse = {
  cultivationReport: CultivatedAreaReportInfo & {
    id: number
    memberId: number
    status: string
    createdAt: string
  }
  memberInfo: CultivatedAreaUserInfo & { id: number }
}

// 출하량 신고 내역 조회 Response 타입
export type shipmentReportResponse = {
  shipmentReport: ShipmentReportInfo & {
    id: number
    memberId: number
    status: string
    createdAt: string
  }
  memberInfo: ShipmentUserInfo & { id: number }
}
