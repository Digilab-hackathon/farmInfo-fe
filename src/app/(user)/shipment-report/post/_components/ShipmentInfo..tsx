import RadioGroup from '@/components/RadioGroup'
import InputForm from '@/components/InputForm'

import { useForm } from 'react-hook-form'
import Dropdown from '@/components/Dropdown'
import { useShipmentStore } from '@/store/useShipmentStore'
import { ShipmentReportInfo } from '@/types/ShipmentInfoValues'
import {
  cropOptions,
  gradeOptions,
  packagingOptions,
  productionLocationOptions,
  tradeTypeOptions,
  tradingMethodOptions,
  wholesaleCompanyOptions
} from '@/constants/options'

const ShipmentInfo = () => {
  const updateReportInfo = useShipmentStore(state => state.updateReportInfo)
  const nextPage = useShipmentStore(state => state.nextPage)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      expectedShipDate: '',
      wholesaleCompany: '',
      tradeType: '',
      tradingMethod: '',
      producerName: '',
      productionLocation: '',
      crop: '',
      packaging: '',
      unit: 0,
      grade: ''
    }
  })

  const onSubmit = (data: ShipmentReportInfo) => {
    updateReportInfo(data)
    nextPage()
  }

  return (
    <main>
      <section>
        <InputForm
          name="expectedShipDate"
          label="출하예정일"
          control={control}
          placeholder="출하 예정일을 입력해 주세요."
          rules={{ required: true }}
        />
        <Dropdown
          name="wholesaleCompany"
          label="도매법인"
          control={control}
          options={wholesaleCompanyOptions}
          rules={{ required: true }}
        />
        <RadioGroup
          name="tradeType"
          label="거래 형태"
          control={control}
          options={tradeTypeOptions}
          rules={{ required: true }}
        />
        <RadioGroup
          name="tradingMethod"
          label="매매 구분"
          control={control}
          options={tradingMethodOptions}
          rules={{ required: true }}
        />
        <InputForm
          name="producerName"
          label="생산자 성명"
          detailLabel="(법인명)"
          control={control}
          placeholder="생산자 성명을 입력해 주세요."
          rules={{ required: true }}
        />
        <Dropdown
          name="productionLocation"
          label="산지"
          control={control}
          options={productionLocationOptions}
          rules={{ required: true }}
        />
        <Dropdown
          name="crop"
          label="품목"
          control={control}
          options={cropOptions}
          rules={{ required: true }}
        />
        <RadioGroup
          name="packaging"
          label="포장 유무"
          control={control}
          options={packagingOptions}
          rules={{ required: true }}
        />
        <InputForm
          name="unit"
          label="단위"
          detailLabel="(kg)"
          control={control}
          placeholder="kg 기준으로 작성해 주세요."
          rules={{ required: true }}
        />
        <Dropdown
          name="grade"
          label="실경작 면적"
          control={control}
          options={gradeOptions}
          rules={{ required: true }}
        />
      </section>
      <button onClick={handleSubmit(onSubmit)}>다음으로</button>
    </main>
  )
}

export default ShipmentInfo
