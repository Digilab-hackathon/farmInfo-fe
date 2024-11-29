import DoughnutChart from '@/components/DoughnutChart'
import Header from '../_components/Header/Header'
import style from './style.module.scss'
import Image from 'next/image'

export default function Home() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }
  return (
    <div>
      <Header
        title="팜인포"
        type="main"
      />
      <div className={style.mainContentsContainer}>
        {/* 공지 */}
        <section className={style.noticeWrapper}>
          <Image
            src="/icons/notice.png"
            alt="공지"
            width={24}
            height={24}
          />
          <div>
            <span style={{ fontWeight: '700' }}>[공지] </span>
            <span>재배면적 신고기간 공지</span>
          </div>
          <Image
            src="/icons/new.png"
            alt="공지"
            width={18}
            height={18}
          />
        </section>

        <section className={style.cropDataContainer}>
          <div className={style.cropDataWrapper}>
            <label>나의 농작 데이터</label>
            <div className={style.mostCropWrapper}>
              <div className={style.contentsWrapper}>
                <div>
                  <div>내 재배지에</div>
                  <div>가장 많은 품목</div>
                </div>
                <div className={style.cropName}>
                  <div>당근</div>
                  <Image
                    src="/icons/carrot.png"
                    alt="당근"
                    width={26}
                    height={30}
                  />
                </div>
              </div>
              <DoughnutChart data={data} />
            </div>
          </div>
          <div className={style.myShipmentWrapper}>
            <label>나의 품목당 2024년 출하량</label>
            <DoughnutChart data={data} />
          </div>
        </section>

        <button className={style.buttonWrapper}>
          <Image
            src="/icons/download.png"
            alt="다운로드"
            width={28}
            height={28}
          />
          <div>나의 데이터 다운 받기</div>
        </button>
      </div>
    </div>
  )
}
