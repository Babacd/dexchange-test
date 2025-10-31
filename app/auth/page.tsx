"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white lg:h-[1153px] lg:w-[1920px] lg:border lg:border-[#E2E8F0]">
      {/* Main Dashboard Block - Background avec images */}
      <div className="relative mx-3 mt-3 h-[300px] overflow-hidden rounded-[20px] bg-[#4FD1C5] sm:mx-4 sm:mt-4 sm:h-[400px] md:h-[450px] lg:mx-6 lg:mt-6 lg:h-[520.5px]">
        {/* Background decorative images - Image 1 */}
        <div 
          className="pointer-events-none absolute z-0" 
          style={{ 
            left: '294.08px',
            top: '-203.49px',
            width: '1598px',
            height: '799px',
            transform: 'rotate(-163.69deg)',
            transformOrigin: 'center center',
            backgroundImage: 'url(/images/269ddd76462c42c51f8a480781f4ba1c4090e43d.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.8,
            filter: 'brightness(1.2) contrast(1.5) saturate(1.2)'
          }}
        />
        {/* Background decorative images - Image 2 */}
        <div 
          className="pointer-events-none absolute z-0" 
          style={{ 
            left: '-114.5px',
            top: '-463px',
            width: '1598px',
            height: '799px',
            transform: 'rotate(16.31deg)',
            transformOrigin: 'center center',
            backgroundImage: 'url(/images/269ddd76462c42c51f8a480781f4ba1c4090e43d.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 1,
            filter: 'brightness(1.2) contrast(1.5) saturate(1.2)'
          }}
        />

        {/* Navbar */}
        <nav className="relative z-[10] mx-auto flex h-[35px] w-full max-w-[939.5px] items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6 lg:px-0 lg:pt-[34.5px]">
          {/* Logo + Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-[18px] w-[18px] items-center justify-center sm:h-[22px] sm:w-[22px]">
              <Image src="/icons/dexchangeicon.png" alt="DEXCHANGE" width={22} height={22} className="h-full w-full" />
            </div>
            <span className="text-xs font-bold leading-[150%] text-white sm:text-sm" style={{ fontFamily: 'Helvetica, sans-serif' }}>
              DEXCHANGE SAAS
            </span>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-1 sm:gap-2 md:flex">
            <button className="flex h-[22.5px] items-center gap-1 rounded-xl px-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
              <Image src="/icons/dashboardicon.png" alt="" width={11} height={11} />
              DASHBOARD
            </button>
            <button className="flex h-[22.5px] items-center gap-1 rounded-xl px-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
              <Image src="/icons/profileicon.png" alt="" width={11} height={11} />
              PROFILE
            </button>
            <button className="flex h-[22.5px] items-center gap-1 rounded-xl px-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
              <Image src="/icons/signupicon.png" alt="" width={11} height={11} />
              SIGN UP
            </button>
            <button className="flex h-[22.5px] items-center gap-1 rounded-xl px-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
              <Image src="/icons/signinicon.png" alt="" width={11} height={11} />
              SIGN IN
            </button>
          </div>

          {/* CTA Button */}
          <button className="h-[30px] w-[120px] rounded-[34.5px] bg-white px-2 text-[10px] font-semibold text-gray-900 transition-opacity hover:opacity-90 sm:h-[35px] sm:w-[150px] sm:text-xs">
            Call to Action
          </button>
        </nav>

        {/* Welcome Title */}
        <div className="relative z-[10] mt-8 text-center sm:mt-12 lg:mt-[55px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]"
          >
            Welcome!
          </motion.h1>
        </div>
      </div>

      {/* Auth Card - Responsive positioning */}
      <div className="relative z-20 mx-auto mt-6 w-[calc(100%-2rem)] max-w-[452.5px] sm:mt-8 md:mt-12 lg:absolute lg:left-[733.5px] lg:top-[303px] lg:mx-0 lg:mt-0 lg:w-[452.5px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative min-h-[600px] w-full rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)] sm:p-8 lg:h-[713.5px]">
            
            {/* ===== SECTION: Social Login ===== */}
            
            {/* Register with text */}
            <div className="mb-4 w-full text-center lg:absolute lg:left-[99px] lg:top-[45.5px] lg:mb-0 lg:h-[167.5px] lg:w-[255px]">
              <p className="text-sm font-medium text-gray-600">
                Register with
              </p>
            </div>

            {/* Social buttons container */}
            <div className="mb-6 flex justify-center gap-3 sm:gap-4 lg:absolute lg:left-[99px] lg:top-[92.5px] lg:mb-0 lg:gap-[15px]">
              {/* Facebook button */}
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50 sm:h-[70px] sm:w-[70px] lg:h-[75px] lg:w-[75px]">
                <Image src="/icons/facebook.png" alt="Facebook" width={30} height={30} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]" />
              </button>

              {/* Apple button */}
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50 sm:h-[70px] sm:w-[70px] lg:h-[75px] lg:w-[75px]">
                <Image src="/icons/apple.png" alt="Apple" width={30} height={30} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]" />
              </button>

              {/* Google button */}
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-gray-200 bg-white transition-colors hover:bg-gray-50 sm:h-[70px] sm:w-[70px] lg:h-[75px] lg:w-[75px]">
                <Image src="/icons/google.png" alt="Google" width={30} height={30} className="h-6 w-6 sm:h-7 sm:w-7 lg:h-[30px] lg:w-[30px]" />
              </button>
            </div>

            {/* ===== SECTION: Divider ===== */}
            <div className="relative mb-6 lg:mt-[200px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-gray-400">or</span>
              </div>
            </div>

            {/* ===== SECTION: Form ===== */}
            <form className="space-y-4 sm:space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus-visible:border-[#4FD1C5] focus-visible:ring-2 focus-visible:ring-[#4FD1C5]/20 sm:h-11 sm:px-4"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus-visible:border-[#4FD1C5] focus-visible:ring-2 focus-visible:ring-[#4FD1C5]/20 sm:h-11 sm:px-4"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus-visible:border-[#4FD1C5] focus-visible:ring-2 focus-visible:ring-[#4FD1C5]/20 sm:h-11 sm:px-4"
                />
              </div>

              {/* Toggle Switch - Remember Me */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors sm:h-6 sm:w-11 ${
                    isLogin ? 'bg-[#4FD1C5]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform sm:h-4 sm:w-4 ${
                      isLogin ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <label className="text-xs font-medium text-gray-700 sm:text-sm">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <Link href="/dashboard" className="block pt-1 sm:pt-2">
                <button
                  type="button"
                  className="h-10 w-full rounded-xl bg-[#4FD1C5] text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#3BC1B5] sm:h-11 sm:text-sm"
                >
                  SIGN UP
                </button>
              </Link>
            </form>

            {/* Footer Link */}
            <p className="mt-6 text-center text-xs text-gray-600 sm:mt-8 sm:text-sm">
              Already have an account?{' '}
              <Link href="#" className="font-bold text-[#4FD1C5] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
