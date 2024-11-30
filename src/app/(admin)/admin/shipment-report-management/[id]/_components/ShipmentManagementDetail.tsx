import ContentsForm from '@/app/(admin)/_components/ContentsForm'
import style from '../../style.module.scss'
import { shipmentReportResponse } from '@/types/data'
import {
  cropOptions,
  gradeOptions,
  packagingOptions
} from '@/constants/options'

interface responseProps {
  data: shipmentReportResponse | undefined
}
const ShipmentAreaManagementDetail = ({ data }: responseProps) => {
  return (
    <>
      {data && (
        <div className={style.shipmentAreaManagementDetailContainer}>
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
                contents={data.memberInfo.homePhoneNumber ?? ''}
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
                contents={data.shipmentReport.wholesaleCompany}
              />
              <ContentsForm
                label="거래 형태"
                contents={data.shipmentReport.tradingMethod}
              />
              <ContentsForm
                label="매매 구분"
                contents={data.shipmentReport.tradeType}
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
                contents={data.shipmentReport.productionLocation}
              />
              <ContentsForm
                label="품목"
                contents={
                  cropOptions.find(
                    option => option.value === data.shipmentReport.crop
                  )?.label || ''
                }
              />
              <ContentsForm
                label="포장 유무"
                contents={
                  packagingOptions.find(
                    option => option.value === data.shipmentReport.packaging
                  )?.label || ''
                }
              />
              <ContentsForm
                label="단위 (kg)"
                contents={data.shipmentReport.unit.toString()}
              />
              <ContentsForm
                label="등급"
                contents={
                  gradeOptions.find(
                    option => option.value === data.shipmentReport.grade
                  )?.label || ''
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
