"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Table2, FileText, User, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Tables",
    href: "/table",
    icon: Table2,
  },
]

const accountPages = [
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Sign In",
    href: "/auth",
    icon: Lock,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-gray-200 bg-white md:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-gray-200 px-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3BD6C6]">
              <span className="text-sm font-bold text-white">D</span>
            </div>
            <span className="text-lg font-bold text-gray-900">DEXCHANGE</span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-1 p-4">
          <div className="mb-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>

          {/* Account Pages Section */}
          <div className="pt-4">
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Account Pages
            </p>
            {accountPages.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Documentation Card */}
        <div className="border-t border-gray-200 p-4">
          <div className="rounded-xl bg-gradient-to-br from-[#3BD6C6] to-[#2FC1B1] p-4 text-white">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <FileText className="h-4 w-4" />
            </div>
            <p className="mb-1 text-sm font-semibold">Need help?</p>
            <p className="mb-3 text-xs opacity-90">Please check our docs</p>
            <button className="w-full rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-900 transition-opacity hover:opacity-90">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
