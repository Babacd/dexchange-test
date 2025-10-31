"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Search, User, Settings } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed right-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md md:w-[calc(100%-15rem)]">
      <div className="flex h-full items-center justify-between px-4 md:px-6">
        {/* Left: Search */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Type here..."
              className="h-9 w-64 rounded-full border border-gray-200 bg-white pl-9 pr-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-[#3BD6C6] focus:ring-2 focus:ring-[#3BD6C6]/20"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            href="/auth"
            className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-[#3BD6C6] md:block"
          >
            Sign In
          </Link>
          
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <User className="h-[18px] w-[18px]" />
          </button>
          
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <Settings className="h-[18px] w-[18px]" />
          </button>
          
          <button className="relative flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
