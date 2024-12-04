import Header from "@/app/(user)/_compoents/Header/Header"

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header title="재배면적 신고" />
      <div style={{ padding: "24px 0" }}>{children}</div>
    </div>
  )
}
