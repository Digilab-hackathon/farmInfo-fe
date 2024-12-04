"use client"

import Link from "next/link"
import style from "./style.module.scss"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link href="/admin">
          <Image
            src="/images/logo.png"
            alt="로고"
            width={76}
            height={27}
            priority
          />
        </Link>
      </div>
      <ul className={style.navLinks}>
        <li>
          <Link href="/admin/cultivated-area-report-management">
            재배면적 신고 관리
          </Link>
        </li>
        <li>
          <Link href="/admin/shipment-report-management">출하량 신고 관리</Link>
        </li>
        <li>
          <Link href="/admin/data-management">데이터 관리</Link>
        </li>
      </ul>
    </nav>
  )
}
