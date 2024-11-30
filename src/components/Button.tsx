import style from '@/styles/components/Button.module.scss'

interface ButtonProps {
  contents: string
  backgroundColor?: string
  color?: string
  width?: string
  onClick?: () => void
}

const Button = ({
  contents,
  width = '100%',
  backgroundColor = '#039B72',
  color = '#fff',
  onClick
}: ButtonProps) => {
  return (
    <button
      className={style.button}
      style={{ width, backgroundColor, color }}
      onClick={onClick}>
      {contents}
    </button>
  )
}

export default Button
