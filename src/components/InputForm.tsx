'use client'

import { useController, FieldValues, Path, Control } from 'react-hook-form'

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
  const {
    field,
    fieldState: { error }
  } = useController<T>({
    name,
    control,
    rules
  })

  return (
    <>
      <label>
        <span>{label}</span>
        <span> {detailLabel}</span>
        {rules && '*'}
      </label>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        value={field.value || ''}
      />
      {error && <span>{error.message}</span>}
    </>
  )
}

export default InputForm
