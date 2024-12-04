import Header from "@/app/(user)/_compoents/Header/Header"

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header title="출하량 신고" />
      <div style={{ padding: "0 26px", marginTop: "28px" }}>{children}</div>
    </div>
  )
}
