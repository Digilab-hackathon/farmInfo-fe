import Image from 'next/image'
import { useController, Control, FieldValues, Path } from 'react-hook-form'
import style from '@/styles/components/Checkbox.module.scss'

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
  const { field } = useController<T>({
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
    <div className={style.checkboxWrapper}>
      <label>
        <Image
          src={`${
            field.value
              ? '/icons/radio-checked.png'
              : '/icons/radio-default.png'
          }`}
          alt="기본 체크박스 버튼"
          width={20}
          height={20}
        />
        <input
          type="checkbox"
          {...field}
          onChange={handleChange}
          checked={field.value || false}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
