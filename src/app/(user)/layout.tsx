export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <div>{children}</div>
    </div>
  )
}
