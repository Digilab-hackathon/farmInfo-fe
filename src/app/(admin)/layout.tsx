import Navbar from "./_components/Navbar"

export default function AdminLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      <div style={{ width: "100vw", backgroundColor: "#efeeeb" }}>
        {children}
      </div>
    </div>
  )
}
