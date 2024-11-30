export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div style={{ margin: 'auto', padding: '20px' }}>{children}</div>
    </div>
  )
}
