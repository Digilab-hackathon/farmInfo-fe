'use client'

import { useCultivatedAreaStore } from '@/store/useCultivatedAreaStore'
import style from '@/styles/components/FormTab.module.scss'

const tabs = [
  { id: 1, label: '출하자 정보' },
  { id: 2, label: '송품장 작성' },
  { id: 3, label: '약관 동의' }
]

const FormTab = () => {
  const currentPage = useCultivatedAreaStore(state => state.currentPage)

  return (
    <div className={style.formTabWrapper}>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={style.eachTab}>
          <div
            className={`${style.circle} ${
              currentPage === tab.id ? style.circleGreen : style.circleGray
            }`}>
            {tab.id}
          </div>
          {index < tabs.length - 1 && <div className={style.line}></div>}
          <div className={currentPage === tab.id ? style.textGreen : ''}>
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FormTab
