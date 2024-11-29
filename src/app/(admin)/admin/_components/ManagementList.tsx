import { cultivationReport, shipmentReport } from '@/types/data'
import { useRouter } from 'next/navigation'

type ManagementProps = {
  datas: cultivationReport[] | shipmentReport[]
  type: string
}

const ManagementList = ({ datas, type }: ManagementProps) => {
  const route = useRouter()

  const handleClick = (id: number) => {
    if (type === 'shipment')
      route.push(`/admin/shipment-report-management/${id}`)
    route.push(`/admin/cultivated-area-report-management/${id}`)
  }

  return (
    <div>
      {datas.length > 0 &&
        datas.map((data, index) => (
          <div
            key={index}
            onClick={() => handleClick(data.id)}>
            {data.crop}
          </div>
        ))}
    </div>
  )
}

export default ManagementList
