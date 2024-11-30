'use client'

import style from './style.module.scss'
import Link from 'next/link'

export default function ShipmentReport() {
  return (
    <main className={style.shipmentReportContainer}>
      <div className={style.explainWrapper}>
        <div>제주도 도매 시장의 표준 전자 송품장입니다.</div>
        <div>쉽고 빠르게 송품장을 등록하세요.</div>
      </div>

      <div className={style.postShipmentWrapper}>
        <div className={style.labelWrapper}>
          <label>전자 송품장 등록하기</label>
          <div>상시 가능</div>
        </div>
        <div className={style.linkWrapper}>
          <Link href="/shipment-report/post">등록하기</Link>
        </div>
      </div>
    </main>
  )
}
