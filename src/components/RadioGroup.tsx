'use client'

import { useController, Control, Path, FieldValues } from 'react-hook-form'
import style from '@/styles/components/RadioGroup.module.scss'
import Image from 'next/image'

interface RadioGroupProps<T extends FieldValues> {
  name: Path<T>
  label: string
  control: Control<T>
  options: { label: string; value: string }[]
  rules?: object
}

const RadioGroup = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules
}: RadioGroupProps<T>) => {
  const { field } = useController<T>({
    name,
    control,
    rules
  })

  return (
    <div className={style.radioGroupWrapper}>
      <label>
        <span>{label} </span>
        {rules && '*'}
      </label>
      <div className={style.radioGroup}>
        {options.map(option => (
          <label
            key={option.value}
            className={style.optionLabel}>
            <Image
              src={`${
                field.value === option.value
                  ? '/icons/radio-checked.png'
                  : '/icons/radio-default.png'
              }`}
              alt="기본 라디오 버튼"
              width={20}
              height={20}
            />
            <input
              type="radio"
              value={option.value}
              checked={field.value === option.value}
              onChange={field.onChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default RadioGroup
