import style from '@/styles/components/Button.module.scss'

interface ButtonProps {
  contents: string
  backgroundColor?: string
  color?: string
  width?: string
  border?: string
  onClick: () => void
}

const Button = ({
  contents,
  width = '100%',
  backgroundColor = '#039B72',
  color = '#fff',
  border,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={style.button}
      style={{ width, backgroundColor, color, border }}
      onClick={onClick}>
      {contents}
    </button>
  )
}

export default Button
