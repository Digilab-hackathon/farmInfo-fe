import style from "./style.module.scss"

interface ContentsFormProps {
  label: string
  contents: string
}
const ContentsForm = ({ label, contents }: ContentsFormProps) => {
  return (
    <div className={style.contentsFormWrapper}>
      <label>{label}</label>
      <div className={style.contentsForm}>
        {contents}
        {label === "면적" ? "평" : ""}
      </div>
    </div>
  )
}

export default ContentsForm
