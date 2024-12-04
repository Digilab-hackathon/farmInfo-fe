import Image from "next/image"
import style from "./style.module.scss"

interface HeaderProps {
  title: string
  type?: string
}

const Header = ({ title, type }: HeaderProps) => {
  const typeClass =
    type === "main" ? style.mainHeaderContainer : style.headerContainer

  return (
    <div className={`${style.commonHeaderContainer} ${typeClass}`}>
      {type === "main" ? (
        <Image
          src="/images/logo.png"
          alt="로고"
          width={76}
          height={27}
          priority
        />
      ) : (
        <div className={style.header}>{title}</div>
      )}
    </div>
  )
}

export default Header
