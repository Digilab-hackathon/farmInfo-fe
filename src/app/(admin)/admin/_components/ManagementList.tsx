import { cultivationReport } from '@/types/data'
import { useRouter } from 'next/navigation'

type ManagementProps = {
  datas: cultivationReport[]
}

const ManagementList = ({ datas }: ManagementProps) => {
  const route = useRouter()

  const handleClick = (id: number) => {
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
