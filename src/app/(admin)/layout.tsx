export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ width: '100vw' }}>
      <div>{children}</div>
    </div>
  )
}
