export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        maxWidth: "1160px"
      }}>
      {children}
    </div>
  )
}
