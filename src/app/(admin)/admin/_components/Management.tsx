import { cultivationReport } from '@/types/data'

type ManagementProps = {
  datas: cultivationReport[]
}

const ManagementList = ({ datas }: ManagementProps) => {
  return (
    <div>
      {datas.length > 0 &&
        datas.map((data, index) => <div key={index}>{data.crop}</div>)}
    </div>
  )
}

export default ManagementList
