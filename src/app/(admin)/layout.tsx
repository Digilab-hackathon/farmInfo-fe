export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#efeeeb" }}>{children}</div>
  )
}
