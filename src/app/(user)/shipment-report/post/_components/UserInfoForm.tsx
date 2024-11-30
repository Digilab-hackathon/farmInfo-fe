import Button from '@/components/Button'
import InputForm from '@/components/InputForm'
import { useShipmentStore } from '@/store/useShipmentStore'
import { ShipmentUserInfo } from '@/types/ShipmentInfoValues'
import { useForm } from 'react-hook-form'
import style from '../../style.module.scss'

const UserInfoForm = () => {
  const updateUserInfo = useShipmentStore(state => state.updateUserInfo)
  const nextPage = useShipmentStore(state => state.nextPage)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      birthDate: '',
      address: '',
      phoneNumber: '',
      homePhoneNumber: ''
    }
  })

  const onSubmit = (data: ShipmentUserInfo) => {
    updateUserInfo(data)
    nextPage()
  }

  return (
    <main className={style.infoFormContainer}>
      <section className={style.formSection}>
        <InputForm
          name="name"
          label="성명"
          detailLabel="(법인명)"
          control={control}
          placeholder="홍길동"
          rules={{ required: true }}
        />
        <InputForm
          name="birthDate"
          label="생년월일"
          detailLabel="(법인 번호)"
          control={control}
          placeholder="1980.11.02"
          rules={{
            required: true,
            pattern: {
              value: /^\d{4}\.\d{2}\.\d{2}$/
            }
          }}
        />
        <InputForm
          name="address"
          label="주소"
          control={control}
          placeholder="덕현로11 123번지"
          rules={{ required: true }}
        />
        <InputForm
          name="phoneNumber"
          label="연락처"
          detailLabel="(핸드폰)"
          control={control}
          placeholder="010-1234-5678"
          rules={{
            required: true,
            pattern: {
              value: /^\d{3}\-\d{4}\-\d{4}$/
            }
          }}
        />
        <InputForm
          name="homePhoneNumber"
          label="연락처"
          detailLabel="(자택)"
          control={control}
          placeholder="010-1234-5678"
        />
      </section>
      <Button
        contents="다음으로"
        onClick={handleSubmit(onSubmit)}
      />
    </main>
  )
}

export default UserInfoForm
