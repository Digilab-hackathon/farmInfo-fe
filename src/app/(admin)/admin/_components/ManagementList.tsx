import { cultivationReportResponse, shipmentReportResponse } from '@/types/data'
import { useRouter } from 'next/navigation'
import style from '@/styles/components/ManagementList.module.scss'
import { formatDate } from '@/utils/formatDate'

type ManagementProps = {
  datas: cultivationReportResponse[] | shipmentReportResponse[]
  type: 'cultivation' | 'shipment'
}

const ManagementList = ({ datas, type }: ManagementProps) => {
  const route = useRouter()

  const labels = ['상태', '접수번호', '신고자', '지역', '접수시간']

  const handleClick = (id: number) => {
    const path =
      type === 'shipment'
        ? `/admin/shipment-report-management/${id}`
        : `/admin/cultivated-area-report-management/${id}`
    route.push(path)
  }

  const isCultivationReport = (
    data: cultivationReportResponse | shipmentReportResponse
  ): data is cultivationReportResponse => 'cultivationReport' in data

  const renderRow = (
    id: number,
    name: string,
    phoneNumber: string,
    address: string,
    createdAt: string,
    status: string
  ) => (
    <div
      className={style.row}
      onClick={() => handleClick(id)}
      key={id}>
      <div className={style.column}>
        <div
          className={`${style.status} ${
            status === 'PENDING'
              ? style.pink
              : status === 'APPROVED'
                ? style.green
                : status === 'REJECTED'
                  ? style.red
                  : ''
          }`}>
          {status === 'PENDING'
            ? '열람완료'
            : status === 'APPROVED'
              ? '승인완료'
              : status === 'REJECTED'
                ? '거절'
                : 'ERROR'}
        </div>
      </div>
      <div className={`${style.column} ${style.bold}`}>{id}</div>
      <div className={style.column}>
        <div className={style.bold}>{name}</div>
        <div className={style.small}>{phoneNumber}</div>
      </div>
      <div className={style.column}>{address}</div>
      <div className={style.column}>{formatDate(createdAt)}</div>
    </div>
  )

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
      {datas.map(data =>
        isCultivationReport(data)
          ? renderRow(
              data.cultivationReport.id,
              data.memberInfo.name,
              data.memberInfo.phoneNumber,
              data.memberInfo.address,
              data.cultivationReport.createdAt,
              data.cultivationReport.status
            )
          : renderRow(
              data.shipmentReport.id,
              data.memberInfo.name,
              data.memberInfo.phoneNumber,
              data.memberInfo.address,
              data.shipmentReport.createdAt,
              data.shipmentReport.status
            )
      )}
    </div>
  )
}

export default ManagementList
