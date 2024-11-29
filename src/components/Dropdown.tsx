import { Control, useController, FieldValues, Path } from 'react-hook-form'
import style from '@/styles/components/Dropdown.module.scss'

interface DropdownProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  control: Control<T>
  options: { label: string; value: string }[]
  rules?: object
  type?: 'mini' | 'default'
}

const Dropdown = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  rules,
  type = 'default'
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
    <div className={style.dropDownContainer}>
      <label>{label}</label>
      <select
        className={type === 'mini' ? style.miniSelect : style.defaultSelect}
        {...field}>
        {options.map((option, index) => (
          <option
            className={style.customOption}
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
