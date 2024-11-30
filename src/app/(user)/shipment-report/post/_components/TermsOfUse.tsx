import Checkbox from '@/components/Checkbox'
import { useShipmentStore } from '@/store/useShipmentStore'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import style from '../../style.module.scss'
import Button from '@/components/Button'

const TermsOfUse = () => {
  const router = useRouter()
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      all: false,
      personal1: false,
      personal2: false
    }
  })

  const { personal1, personal2 } = useWatch({ control })

  // "전체 동의하기" 체크박스가 체크됐을 때
  const handleAllChange = (checked: boolean) => {
    setValue('all', checked)
    setValue('personal1', checked)
    setValue('personal2', checked)
  }

  // 개인 체크박스들이 모두 체크되었는지 확인하여 "전체 동의하기" 체크박스 동기화
  const syncAllCheckbox = () => {
    const allChecked = (personal1 && personal2) ?? false
    setValue('all', allChecked)
  }

  useEffect(() => {
    syncAllCheckbox()
  }, [personal1, personal2])

  const shipmentData = useShipmentStore(state => state.shipmentData)

  const onSubmit = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/shipment-reports`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shipmentData)
      }
    )

    if (!response.ok) {
      throw new Error('Error posting data')
    }

    router.push('/')
  }

  return (
    <main className={style.infoFormContainer}>
      <section className={style.formSection}>
        <Checkbox
          name="all"
          label="전체 동의하기"
          control={control}
          onChange={checked => handleAllChange(checked)}
        />
        <Checkbox
          name="personal1"
          label="[필수] 재배면적 출과 관련 성명, 생년월일, 주소, 연락처의 개인정보의 수집 이용에 동의합니다."
          control={control}
          rules={{ required: '필수 약관에 동의해주세요.' }}
        />
        <Checkbox
          name="personal2"
          label="[필수] 재배면적 산출과 관련 성명, 생년월일, 주소, 연락처의 개인 정보의 제공에 동의합니다."
          control={control}
          rules={{ required: '필수 약관에 동의해주세요.' }}
        />
      </section>

      <Button
        contents="완료"
        onClick={handleSubmit(onSubmit)}
      />
    </main>
  )
}

export default TermsOfUse
