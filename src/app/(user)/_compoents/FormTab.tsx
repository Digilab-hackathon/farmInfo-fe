'use client'

import { useCultivatedAreaStore } from '@/store/useCultivatedAreaStore'
import style from '@/styles/components/FormTab.module.scss'
import Image from 'next/image'

interface FormTabProps {
  type?: string
  category?: 'cultivated' | 'shipment'
}
const tabs = [
  { id: 1, cultivatedLabel: '신고자 정보', shipmentLabel: '출하자 정보' },
  { id: 2, cultivatedLabel: '신고서 작성', shipmentLabel: '송품장 작성' },
  { id: 3, cultivatedLabel: '약관 동의', shipmentLabel: '약관 동의' }
]

const FormTab = ({ type, category }: FormTabProps) => {
  const currentPage = useCultivatedAreaStore(state => state.currentPage)

  return (
    <div className={style.formTabWrapper}>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={style.eachTab}>
          {type ? (
            <Image
              src={'/icons/radio-checked.png'}
              alt="체크"
              width={34}
              height={34}
              style={{ zIndex: 1 }}
            />
          ) : (
            <div
              className={`${style.circle} ${
                currentPage === tab.id ? style.circleGreen : style.circleGray
              }`}>
              {tab.id}
            </div>
          )}

          {index < tabs.length - 1 && <div className={style.line}></div>}
          {type ? (
            <div>
              {category === 'shipment'
                ? tab.shipmentLabel
                : tab.cultivatedLabel}
            </div>
          ) : (
            <div className={currentPage === tab.id ? style.textGreen : ''}>
              {category === 'shipment'
                ? tab.shipmentLabel
                : tab.cultivatedLabel}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FormTab
