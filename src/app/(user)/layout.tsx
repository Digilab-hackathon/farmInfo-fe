import Footer from '../_components/Footer/Footer'

export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // height: '100%',
        paddingBottom: '83px',
        maxWidth: '500px',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#EFEEEB'
      }}>
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  )
}
