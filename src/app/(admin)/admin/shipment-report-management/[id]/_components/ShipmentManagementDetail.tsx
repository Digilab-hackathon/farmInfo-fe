import style from "../../style.module.scss"
import { shipmentReportResponse } from "@/types/data"
import {
  cropOptions,
  gradeOptions,
  packagingOptions,
  productionLocationOptions,
  tradeTypeOptions,
  tradingMethodOptions,
  wholesaleCompanyOptions
} from "@/constants/options"
import ContentsForm from "@/app/(admin)/_components/ContentsForm/ContentsForm"

interface responseProps {
  data: shipmentReportResponse | undefined
}
const ShipmentAreaManagementDetail = ({ data }: responseProps) => {
  return (
    <>
      {data && (
        <div className={style.shipmentManagementDetailContainer}>
          <div className={style.formSection}>
            <div className={style.labelWrapper}>
              <div>1</div>
              <label>출하자 정보</label>
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
              <label>출하 정보</label>
            </div>
            <div className={style.row}>
              <ContentsForm
                label="출하 예정일"
                contents={data.shipmentReport.expectedShipDate}
              />
              <ContentsForm
                label="도매법인"
                contents={
                  wholesaleCompanyOptions.find(
                    option =>
                      option.value === data.shipmentReport.wholesaleCompany
                  )?.label || ""
                }
              />
              <ContentsForm
                label="거래 형태"
                contents={
                  tradeTypeOptions.find(
                    option => option.value === data.shipmentReport.tradeType
                  )?.label || ""
                }
              />
              <ContentsForm
                label="매매 구분"
                contents={
                  tradingMethodOptions.find(
                    option => option.value === data.shipmentReport.tradingMethod
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
                label="생산자 성명 (법인명)"
                contents={data.shipmentReport.producerName}
              />
              <ContentsForm
                label="산지"
                contents={
                  productionLocationOptions.find(
                    option =>
                      option.value === data.shipmentReport.productionLocation
                  )?.label || ""
                }
              />
              <ContentsForm
                label="품목"
                contents={
                  cropOptions.find(
                    option => option.value === data.shipmentReport.crop
                  )?.label || ""
                }
              />
              <ContentsForm
                label="포장 유무"
                contents={
                  packagingOptions.find(
                    option => option.value === data.shipmentReport.packaging
                  )?.label || ""
                }
              />
              <ContentsForm
                label="단위 (kg)"
                contents={`${data.shipmentReport.unit.toString()}kg`}
              />
              <ContentsForm
                label="등급"
                contents={
                  gradeOptions.find(
                    option => option.value === data.shipmentReport.grade
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

export default ShipmentAreaManagementDetail
