"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md dark:bg-gray-800 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed left-0 top-0 z-40 bg-[#F8F9FA] dark:bg-gray-900 transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: '283px', height: '100vh' }}
      >
      {/* Sidebar Container - width: 246.5px, height: 1013.5px, top: 46px, left: 18px */}
      <div className="absolute left-[18px] top-[46px] h-[1013.5px] w-[246.5px]">
        
        {/* Logo - width: 133px, height: 21px, top: 46px (0 relatif), left: 76px (58px relatif) */}
        <div className="absolute left-[58px] top-0">
          <Link href="/dashboard" className="flex items-center gap-2">
            {/* <Image src="/icons/dexchangeicon.png" alt="DEXCHANGE" width={22} height={22} /> */}
            <span 
              className="block h-[21px] w-[133px]" 
              style={{ 
                fontFamily: 'Helvetica, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '150%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                color: '#2D3748'
              }}
            >
              DEXCHANGE SAAS
            </span>
          </Link>
        </div>

        {/* Menu Section - width: 219.5px, height: 408px, top: 117px, left: 31.5px */}
        <nav className="absolute left-[13.5px] top-[71px] h-[408px] w-[219.5px]">
          
          {/* Dashboard - width: 219.5px, height: 54px, top: 117px, left: 31.5px */}
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-0 top-0 flex h-[54px] w-[219.5px] items-center rounded-xl px-4 transition-colors",
              pathname === "/dashboard"
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className="flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-[#4FD1C5]"
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/dashboardmenu.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Dashboard</span>
          </Link>

          {/* Tables - width: 79.5px, height: 30px, top: 183px, left: 47.5px */}
          <Link
            href="/table"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-0 top-[66px] flex h-[54px] w-[219.5px] items-center rounded-xl px-4 transition-colors",
              pathname === "/table"
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className="flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-white dark:bg-gray-700"
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/table.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Tables</span>
          </Link>

          {/* Billing - width: 79px, height: 30px, top: 237px, left: 47.5px */}
          <Link
            href="/billing"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-[16px] top-[120px] flex h-[30px] w-[79px] items-center transition-colors",
              pathname === "/billing"
                ? "text-gray-900 dark:text-gray-100 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-xl transition-colors",
                pathname === "/billing"
                  ? "bg-[#4FD1C5]"
                  : "bg-white dark:bg-gray-700"
              )}
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/billing.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Billing</span>
          </Link>

          {/* RTL - width: 79px, height: 30px, top: 291px, left: 47.5px */}
          <Link
            href="/rtl"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-[16px] top-[174px] flex h-[30px] w-[79px] items-center transition-colors",
              pathname === "/rtl"
                ? "text-gray-900 dark:text-gray-100 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-xl transition-colors",
                pathname === "/rtl"
                  ? "bg-[#4FD1C5]"
                  : "bg-white dark:bg-gray-700"
              )}
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/rtl.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">RTL</span>
          </Link>

          {/* ACCOUNT PAGES Title - width: 105px, height: 18px, top: 345px, left: 47.5px */}
          <p 
            className="absolute left-[16px] top-[228px] h-[18px] w-[105px] text-gray-400"
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              textTransform: 'uppercase'
            }}
          >
            Account Pages
          </p>

          {/* Profile - width: 79.5px, height: 30px, top: 387px, left: 47.5px */}
          <Link
            href="/profile"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-[16px] top-[270px] flex h-[30px] w-[79.5px] items-center transition-colors",
              pathname === "/profile"
                ? "text-gray-900 dark:text-gray-100 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-xl transition-colors",
                pathname === "/profile"
                  ? "bg-[#4FD1C5]"
                  : "bg-white dark:bg-gray-700"
              )}
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/profile.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Profile</span>
          </Link>

          {/* Sign In - width: 82.5px, height: 30px, top: 441px, left: 47.5px */}
          <Link
            href="/auth"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-[16px] top-[324px] flex h-[30px] w-[82.5px] items-center transition-colors",
              pathname === "/auth"
                ? "text-gray-900 dark:text-gray-100 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-xl transition-colors",
                pathname === "/auth"
                  ? "bg-[#4FD1C5]"
                  : "bg-white dark:bg-gray-700"
              )}
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/in.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Sign In</span>
          </Link>

          {/* Sign Up - width: 87.5px, height: 30px, top: 495px, left: 47.5px */}
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute left-[16px] top-[378px] flex h-[30px] w-[87.5px] items-center transition-colors",
              pathname === "/signup"
                ? "text-gray-900 dark:text-gray-100 font-bold"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            )}
            style={{
              fontFamily: 'Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: '150%',
              letterSpacing: '0%',
              verticalAlign: 'middle'
            }}
          >
            <div 
              className={cn(
                "flex h-[30px] w-[30px] items-center justify-center rounded-xl transition-colors",
                pathname === "/signup"
                  ? "bg-[#4FD1C5]"
                  : "bg-white dark:bg-gray-700"
              )}
              style={{ boxShadow: '0px 3.5px 5.5px 0px #00000005' }}
            >
              <Image src="/icons/up.png" alt="" width={18} height={18} />
            </div>
            <span className="ml-3">Sign Up</span>
          </Link>
        </nav>

        {/* Need Help Block - width: 246.5px, height: 465px, repositionné avec plus d'espace */}
        <div className="absolute left-0 top-[520px] h-[465px] w-[246.5px]">
          
          {/* Green Card "Need Help" - width: 218px, height: 169.5px, centré horizontalement */}
          <div className="absolute left-[14px] top-0 h-[169.5px] w-[218px] rounded-xl border border-white bg-gradient-to-br from-[#3BD6C6] to-[#2FC1B1] p-4 text-white shadow-md">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
              <Image src="/icons/interro.png" alt="" width={16} height={16} />
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
    </>
  )
}
