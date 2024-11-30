import { cultivationReportResponse, shipmentReportResponse } from '@/types/data'
import { useRouter } from 'next/navigation'
import style from '@/styles/components/Management.module.scss'
type ManagementProps = {
  datas: cultivationReportResponse[] | shipmentReportResponse[]
  type: string
}

const ManagementList = ({ datas, type }: ManagementProps) => {
  const route = useRouter()
  const labels = ['상태', '접수번호', '신고자', '지역', '접수시간']

  const handleClick = (id: number) => {
    if (type === 'shipment')
      route.push(`/admin/shipment-report-management/${id}`)
    route.push(`/admin/cultivated-area-report-management/${id}`)
  }

  return (
    <div className={style.boardWrapper}>
      <div className={style.labelWrapper}>
        {labels.map((label, index) => (
          <div
            className={style.label}
            key={index}>
            {label}
          </div>
        ))}
      </div>
      {datas.length > 0 &&
        datas.map((data, index) => (
          <div
            className={style.row}
            key={index}
            onClick={() => handleClick(data.id)}>
            <div className={style.column}>
              <span>열람완료</span>
            </div>
            <div className={style.column}></div>
            <div className={style.column}>
              <div className={style.bold}>{data.memberId}</div>
              <div className={style.small}>{data.memberId}</div>
            </div>
            <div className={style.column}>gd</div>
            <div className={style.column}>{data.createdAt}</div>
          </div>
        ))}
    </div>
  )
}

export default ManagementList
