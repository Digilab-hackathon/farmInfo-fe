import Header from '@/app/_components/Header/Header'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header title="출하량 신고" />
      <div style={{ padding: '0 26px' }}>{children}</div>
    </div>
  )
}
