'use client'

import Image from 'next/image'
import style from './style.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()
  const [selected, setSelected] = useState('/')

  const handleSelect = (page: string) => {
    setSelected(page)
    router.push(page)
  }
  return (
    <div className={style.footerContainer}>
      <section onClick={() => handleSelect('/')}>
        <Image
          src={
            selected === '/' ? '/icons/mydata-active.png' : '/icons/mydata.png'
          }
          alt="로고"
          width={24}
          height={24}
          priority
        />
        <div style={{ color: selected === '/' ? 'black' : '#989685' }}>
          마이데이터
        </div>
      </section>
      <section onClick={() => handleSelect('/shipment-report')}>
        <Image
          src={
            selected === '/shipment-report'
              ? '/icons/shipment-report-active.png'
              : '/icons/shipment-report.png'
          }
          alt="로고"
          width={24}
          height={24}
          priority
        />
        <div style={{ color: selected === '/shipment' ? 'black' : '#989685' }}>
          출하량 신고
        </div>
      </section>
      <section onClick={() => handleSelect('/area-report')}>
        <Image
          src={
            selected === '/area-report'
              ? '/icons/cultivated-report-active.png'
              : '/icons/cultivated-report.png'
          }
          alt="로고"
          width={24}
          height={24}
          priority
        />
        <div
          style={{
            color: selected === '/cultivated-report' ? 'black' : '#989685'
          }}>
          재배면적 신고
        </div>
      </section>
    </div>
  )
}

export default Footer
