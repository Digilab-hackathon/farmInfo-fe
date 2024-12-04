"use client"

import useAdminTabsStore from "@/store/useAdminTabsStore"
import style from "./style.module.scss"
import { Controller, useForm } from "react-hook-form"
import { cropOptions } from "@/constants/options"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Dropdown from "@/components/Dropdown/Dropdown"
import Button from "@/components/Button/Button"

export default function DataManagement() {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      crop: "RADISH",
      value: 0
    }
  })
  const route = useRouter()
  const activeTab = useAdminTabsStore(state => state.activeTab)
  const setActiveTap = useAdminTabsStore(state => state.setActiveTab)
  const handleTabClick = (tab: number) => setActiveTap(tab)
  const tabs = ["데이터 열람", "적정 면적 입력하기"]
  const onSubmit = async (data: { crop: string; value: number }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cultivation-area`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    )

    if (!response.ok) {
      throw new Error("Error posting data")
    }

    route.push("/admin/cultivated-area-report-management")
  }

  const crop = watch("crop")

  return (
    <main className={style.mainContainer}>
      <section>
        <div className={style.tabWrapper}>
          {[1, 2].map(tab => (
            <button
              className={`${style.btnDefault} ${tab === activeTab ? style.btnActive : ""}`}
              key={tab}
              onClick={() => handleTabClick(tab)}>
              {tabs[tab - 1]}
            </button>
          ))}
        </div>
      </section>
      <section>
        {activeTab === 1 && (
          <Image
            src="/images/dumy.png"
            alt="데이터관리 더미"
            width={1085}
            height={603}
          />
        )}
      </section>
      <form>
        {activeTab === 2 && (
          <div className={style.approciateAreaInputWrapper}>
            <div className={style.formWrapper}>
              <div className={style.labelWrapper}>
                <div>1</div>
                <label>품목 선택</label>
              </div>
              <div className={style.dropdwonWrapper}>
                <Dropdown
                  name="crop"
                  control={control}
                  options={cropOptions.slice(1)}
                  rules={{ required: true }}
                  type="mini"
                />
              </div>
            </div>
            <div className={style.formWrapper}>
              <div className={style.labelWrapper}>
                <div>2</div>
                <label>적정 면적 설정</label>
              </div>
              <div className={style.inputWrapper}>
                <label>
                  {cropOptions.find(option => option.value === crop)?.label} 의
                  적정 면적
                </label>
                <Controller
                  name="value"
                  control={control}
                  rules={{ required: true, min: 1 }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="number"
                      value={field.value === 0 ? "" : field.value} // 0인 경우 빈 문자열로 표시
                      onChange={e =>
                        field.onChange(
                          e.target.value === "" ? 0 : Number(e.target.value)
                        )
                      }
                    />
                  )}
                />
              </div>
            </div>
            <div className={style.submitWrapper}>
              <Button
                contents="완료"
                onClick={handleSubmit(onSubmit)}
                width="30%"
              />
            </div>
          </div>
        )}
      </form>
    </main>
  )
}
