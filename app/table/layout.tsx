import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"

export default function TableLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-0 md:ml-60">
        <Navbar />
        <main className="px-6 py-6 pt-24 md:px-10 md:py-6">
          {children}
        </main>
      </div>
    </div>
  )
}
