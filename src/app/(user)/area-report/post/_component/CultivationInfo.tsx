import RadioGroup from '@/components/RadioGroup'
import InputForm from '@/components/InputForm'
import { useCultivatedAreaStore } from '@/store/useCultivatedAreaStore'
import { CultivatedAreaReportInfo } from '@/types/CultivatedAreaInfoValues'
import { useForm } from 'react-hook-form'
import Dropdown from '@/components/Dropdown'
import {
  cropOptions,
  landCategoryOptions,
  selfCultivatedOptions
} from '@/constants/options'

const CultivationInfo = () => {
  const updateReportInfo = useCultivatedAreaStore(
    state => state.updateReportInfo
  )
  const nextPage = useCultivatedAreaStore(state => state.nextPage)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      crop: '',
      district: '',
      village: '',
      landCategory: '',
      totalArea: 0,
      cultivatedArea: 0,
      ownershipType: ''
    }
  })

  const onSubmit = (data: CultivatedAreaReportInfo) => {
    updateReportInfo(data)
    nextPage()
  }

  return (
    <main>
      <section>
        <Dropdown
          name="crop"
          label="품목명"
          control={control}
          options={cropOptions}
          rules={{ required: true }}
        />
        <InputForm
          name="district"
          label="읍면동"
          control={control}
          placeholder="'읍면동'을 작성해 주세요."
          rules={{ required: '필수 입력 값입니다.' }}
        />
        <InputForm
          name="village"
          label="리"
          control={control}
          placeholder="'리'를 작성해 주세요."
          rules={{ required: '필수 입력 값입니다.' }}
        />
        <Dropdown
          name="landCategory"
          label="지목"
          control={control}
          options={landCategoryOptions}
          rules={{ required: true }}
        />
        <InputForm
          name="totalArea"
          label="면적"
          control={control}
          placeholder="'면적'을 작성해 주세요."
          rules={{ required: '필수 입력 값입니다.' }}
        />
        <InputForm
          name="cultivatedArea"
          label="실경작 면적"
          control={control}
          placeholder="'실경작 면적'을 작성해 주세요."
          rules={{ required: '필수 입력 값입니다.' }}
        />
        <RadioGroup
          name="ownershipType"
          control={control}
          label="자경 여부"
          options={selfCultivatedOptions}
          rules={{ required: '필수 선택 값입니다.' }}
        />
      </section>
      <button onClick={handleSubmit(onSubmit)}>다음으로</button>
    </main>
  )
}

export default CultivationInfo
