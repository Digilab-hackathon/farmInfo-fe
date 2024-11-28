'use client'

import { useController, FieldValues, Path, Control } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  control: Control<T>
  placeholder?: string
  type?: string
  rules?: object
}

const InputForm = <T extends FieldValues>({
  name,
  label,
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
      <label>{label}</label>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
      />
      {error && <span>{error.message}</span>}
    </>
  )
}

export default InputForm
