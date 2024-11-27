'use client'

import { Field, Label, Input as HeadlessInput } from '@headlessui/react'
import { useController, FieldValues, Path, Control } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  control: Control<T>
  placeholder?: string
  type?: string
  rules?: object
}

const Input = <T extends FieldValues>({
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
    <Field className="mb-4">
      <Label className="block text-sm font-medium text-gray-700">{label}</Label>
      <HeadlessInput
        {...field}
        type={type}
        placeholder={placeholder}
      />
      {error && <span>{error.message}</span>}
    </Field>
  )
}

export default Input
