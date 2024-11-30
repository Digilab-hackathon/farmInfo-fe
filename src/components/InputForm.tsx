'use client'

import { useController, FieldValues, Path, Control } from 'react-hook-form'
import style from '@/styles/components/InputForm.module.scss'

interface InputProps<T extends FieldValues> {
  name: Path<T>
  label: string
  detailLabel?: string
  control: Control<T>
  placeholder?: string
  type?: string
  rules?: object
}

const InputForm = <T extends FieldValues>({
  name,
  label,
  detailLabel,
  control,
  placeholder,
  type = 'text',
  rules
}: InputProps<T>) => {
  const { field } = useController<T>({
    name,
    control,
    rules
  })

  return (
    <div className={style.inputFormWrapper}>
      <label>
        <span>{label}</span>
        <span> {detailLabel}</span>
        {rules && <span>*</span>}
      </label>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        value={field.value || ''}
      />
    </div>
  )
}

export default InputForm
