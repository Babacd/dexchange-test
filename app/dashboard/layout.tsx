import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] dark:bg-gray-950">
      <Sidebar />
      <div 
        className="ml-0 md:ml-[283px] bg-[#F8F9FA] dark:bg-gray-950" 
        style={{ 
          minHeight: '1137px'
        }}
      >
        <Navbar />
        <main className="px-6 py-6 pt-24 md:px-10 md:py-6">
          {children}
        </main>
      </div>
    </div>
  )
}
