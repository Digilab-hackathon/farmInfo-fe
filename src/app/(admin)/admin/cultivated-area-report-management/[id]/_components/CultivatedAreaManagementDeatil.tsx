import style from "../../style.module.scss"
import { cultivationReportResponse } from "@/types/data"
import {
  cropOptions,
  landCategoryOptions,
  selfCultivatedOptions
} from "@/constants/options"
import ContentsForm from "@/app/(admin)/_components/ContentsForm/ContentsForm"
interface responseProps {
  data: cultivationReportResponse | undefined
}
const CultivatedAreaManagementDetail = ({ data }: responseProps) => {
  return (
    <>
      {data && (
        <div className={style.cultivatedAreaManagementDetailContainer}>
          <div className={style.formSection}>
            <div className={style.labelWrapper}>
              <div>1</div>
              <label>신고자 정보</label>
            </div>
            <div className={style.row}>
              <ContentsForm
                label="이름 (법인명)"
                contents={data.memberInfo.name}
              />
              <ContentsForm
                label="생년월일 (법인 번호)"
                contents={data.memberInfo.birthDate}
              />
              <ContentsForm
                label="주소"
                contents={data.memberInfo.address}
              />
              <ContentsForm
                label="연락처 (핸드폰)"
                contents={data.memberInfo.phoneNumber}
              />
              <ContentsForm
                label="연락처 (자택)"
                contents={data.memberInfo.homePhoneNumber ?? ""}
              />
            </div>
          </div>
          <div className={style.bar}></div>
          <div className={style.formSection}>
            <div className={style.labelWrapper}>
              <div>2</div>
              <label>품목명</label>
            </div>
            <div className={style.row}>
              <ContentsForm
                label="품목명"
                contents={
                  cropOptions.find(
                    option => option.value === data.cultivationReport.crop
                  )?.label || ""
                }
              />
            </div>
          </div>
          <div className={style.bar}></div>
          <div className={style.formSection}>
            <div className={style.labelWrapper}>
              <div>3</div>
              <label>농지 소재지 정보</label>
            </div>
            <div className={style.row}>
              <ContentsForm
                label="읍/면/동"
                contents={data.cultivationReport.district}
              />
              <ContentsForm
                label="리"
                contents={data.cultivationReport.village}
              />
              <ContentsForm
                label="지목"
                contents={
                  landCategoryOptions.find(
                    option =>
                      option.value === data.cultivationReport.landCategory
                  )?.label || ""
                }
              />
              <ContentsForm
                label="면적"
                contents={data.cultivationReport.totalArea.toString()}
              />
              <ContentsForm
                label="실경작 면적"
                contents={data.cultivationReport.cultivatedArea.toString()}
              />
              <ContentsForm
                label="자경 여부"
                contents={
                  selfCultivatedOptions.find(
                    option =>
                      option.value === data.cultivationReport.ownershipType
                  )?.label || ""
                }
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CultivatedAreaManagementDetail
