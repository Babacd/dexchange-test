"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, User, Settings } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed right-0 top-0 z-30 h-14 w-full bg-transparent md:w-[calc(100%-283px)]">
      <div className="flex h-full items-center justify-end gap-4 px-4 md:px-6">
        {/* Search Bar - width: 199px, height: 39.5px, border-radius: 15px */}
        <div 
          className="relative flex items-center rounded-[15px] bg-white dark:bg-gray-800 px-4 border-[0.5px] border-[#E2E8F0] dark:border-gray-700"
          style={{
            width: '199px',
            height: '39.5px'
          }}
        >
          <input
            type="text"
            placeholder="Type here..."
            className="w-full border-none bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          />
        </div>

        {/* Menu - width: 335px, height: 39.5px, top: 22.5px, left: 1537.5px */}
        <div 
          className="flex items-center gap-3 rounded-xl bg-white dark:bg-gray-800 px-4 border-[0.5px] border-[#E2E8F0] dark:border-gray-700"
          style={{
            width: '335px',
            height: '39.5px'
          }}
        >
          <Link
            href="/auth"
            className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-[#3BD6C6]"
          >
            Sign In
          </Link>
          
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
            <User className="h-[18px] w-[18px]" />
          </button>
          
          <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
            <Settings className="h-[18px] w-[18px]" />
          </button>
          
          <button className="relative flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100">
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
