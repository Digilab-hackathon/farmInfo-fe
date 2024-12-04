import style from "./style.module.scss"

interface CompleteContentsProps {
  category: string
}

const CompleteContents = ({ category }: CompleteContentsProps) => {
  return (
    <div className={style.completeContentsWrapper}>
      <label>{`${category} 신고가 접수 되었습니다.`}</label>
      <div>
        승인 현황은 알림 또는
        <br />
        {`${category} 신고 탭에서 확인 가능합니다.`}
      </div>
    </div>
  )
}

export default CompleteContents
