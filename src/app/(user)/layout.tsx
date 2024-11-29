export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      style={{
        height: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#EFEEEB'
      }}>
      <div>{children}</div>
    </div>
  )
}
