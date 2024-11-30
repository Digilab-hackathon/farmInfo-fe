'use client'

import FormTab from '@/app/(user)/_compoents/FormTab'
import style from '../../style.module.scss'
import CompleteContents from '@/app/(user)/_compoents/CompleteContents'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Complete() {
  const route = useRouter()
  const handleClick = () => {
    route.push('/')
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
