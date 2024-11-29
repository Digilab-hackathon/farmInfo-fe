import { CultivatedAreaReportInfo } from './CultivatedAreaInfoValues'

export type cultivationReport = CultivatedAreaReportInfo & {
  id: number
  memberId: number
  status: string
  createdAt: string
}
