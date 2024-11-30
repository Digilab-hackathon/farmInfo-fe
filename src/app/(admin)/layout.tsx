export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ width: '100vw', height: '100%', backgroundColor: '#EFEEEB' }}>
      <div>{children}</div>
    </div>
  )
}
