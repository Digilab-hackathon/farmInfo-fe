'use client'

import { useController, Control, Path, FieldValues } from 'react-hook-form'

interface RadioOption {
  label: string
  value: string
}

interface RadioGroupProps<T extends FieldValues> {
  name: Path<T>
  label: string
  control: Control<T>
  options: RadioOption[]
  rules?: object
}

const RadioGroup = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules
}: RadioGroupProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController<T>({
    name,
    control,
    rules
  })

  return (
    <div>
      <label>
        <span>{label} </span>
        {rules && '*'}
      </label>
      <div>
        {options.map(option => (
          <label key={option.value}>
            <input
              type="radio"
              value={option.value}
              checked={field.value === option.value}
              onChange={field.onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default RadioGroup
