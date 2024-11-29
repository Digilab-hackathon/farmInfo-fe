import Header from '@/app/_components/Header/Header'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header title="재배면적 신고" />
      <div style={{ flex: 1, padding: '24px 0' }}>{children}</div>
    </div>
  )
}
