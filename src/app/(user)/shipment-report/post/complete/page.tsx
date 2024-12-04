"use client"

import FormTab from "@/app/(user)/_compoents/FormTab/FormTab"
import style from "../../style.module.scss"
import { useRouter } from "next/navigation"
import CompleteContents from "@/app/(user)/_compoents/CompleteCotents/CompleteContents"
import Button from "@/components/Button/Button"

export default function Complete() {
  const route = useRouter()
  const handleClick = () => {
    route.push("/")
  }
  return (
    <div className={style.completeContainer}>
      <FormTab type="complete" />
      <CompleteContents category="출하량" />
      <Button
        contents="홈으로"
        onClick={handleClick}
      />
    </div>
  )
}
