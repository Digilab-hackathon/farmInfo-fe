import { Control, useController, FieldValues, Path } from 'react-hook-form'

interface DropdownProps<T extends FieldValues> {
  name: Path<T>
  label: string
  control: Control<T>
  options: { label: string; value: string }[]
  rules?: object
}

const Dropdown = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  rules
}: DropdownProps<T>) => {
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
      <label>{label}</label>
      <select {...field}>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Dropdown
