import Image from 'next/image'
import style from '@/styles/components/DetailHeader.module.scss'
import { useRouter } from 'next/navigation'

interface DetailHeaderProps {
  id: string
  createdAt: string
}

const DetailHeader = ({ id, createdAt }: DetailHeaderProps) => {
  const route = useRouter()
  const handleBack = () => route.back()
  return (
    <div className={style.detailHeaderWrapper}>
      <button onClick={handleBack}>
        <Image
          src={'/icons/back.png'}
          alt="뒤로가기"
          width={12}
          height={24}
        />
      </button>
      <div className={style.infoWrapper}>
        <div className={style.idWrapper}>
          <div className={style.id}>{id}</div>
          <label>접수번호</label>
        </div>
        <div className={style.createdAt}>{createdAt}</div>
      </div>
    </div>
  )
}

export default DetailHeader
