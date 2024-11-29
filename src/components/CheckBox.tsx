import { useController, Control, FieldValues, Path } from 'react-hook-form'

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>
  label: string
  control: Control<T>
  rules?: object
  onChange?: (checked: boolean) => void
}

const Checkbox = <T extends FieldValues>({
  name,
  label,
  control,
  rules,
  onChange
}: CheckboxProps<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController<T>({
    name,
    control,
    rules
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    field.onChange(checked)
    if (onChange) {
      onChange(checked)
    }
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          {...field}
          onChange={handleChange}
          checked={field.value || false}
        />
        {label}
      </label>
      {error && <span>{error.message}</span>}
    </div>
  )
}

export default Checkbox
