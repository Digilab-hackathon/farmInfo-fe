import { Control, useController, FieldValues, Path } from "react-hook-form"
import style from "./style.module.scss"
import { useState } from "react"
import Image from "next/image"

interface DropdownProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  control: Control<T>
  options: { label: string; value: string; default?: boolean }[]
  rules?: object
  type?: "mini" | "default"
}

const Dropdown = <T extends FieldValues>({
  name,
  label,
  control,
  options,
  rules,
  type
}: DropdownProps<T>) => {
  const { field } = useController<T>({
    name,
    control,
    rules
  })
  const [isOpen, setIsOpen] = useState(false)
  const notIncludeDefaultOptions = options.filter(option => !option.default)
  const [selectedLabel, setSelectedLabel] = useState(
    options.find(option => option.value === field.value)?.label
  )

  const handleSelect = (value: string, label: string) => {
    field.onChange(value)
    setSelectedLabel(label)
    setIsOpen(false)
  }

  return (
    <div className={style.dropDownContainer}>
      <label>
        {label} {type === "mini" ? "" : rules && "*"}
      </label>
      <div
        className={type === "mini" ? style.miniDropdown : style.dropdown}
        onClick={() => setIsOpen(prev => !prev)}>
        <div
          className={`${style.selectWrapper} ${field.value ? style.selected : style.placeholder}`}>
          <div>{selectedLabel}</div>
          <Image
            src={"/icons/dropdown-arrow.png"}
            alt="드롭다운 화살표"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isOpen && (
        <ul className={type === "mini" ? style.miniOptions : style.options}>
          {notIncludeDefaultOptions.map(option => (
            <li
              key={option.value}
              className={`${style.option} ${
                field.value === option.value ? style.active : ""
              }`}
              onClick={() => handleSelect(option.value, option.label)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
