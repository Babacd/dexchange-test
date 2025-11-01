"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const projects = [
  {
    name: "Chakra UI",
    logo: "C",
    members: 4,
    budget: "$14,000",
    completion: 60,
  },
  {
    name: "Material UI",
    logo: "M",
    members: 3,
    budget: "$12,500",
    completion: 80,
  },
  {
    name: "React Bootstrap",
    logo: "R",
    members: 5,
    budget: "$18,000",
    completion: 45,
  },
  {
    name: "Ant Design",
    logo: "A",
    members: 2,
    budget: "$9,500",
    completion: 90,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Pages / Dashboard</p>
        {/* Title - width: 43.5px, height: 19.5px */}
        <h1 
          className="dark:text-gray-100"
          style={{
            fontFamily: 'Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '140%',
            letterSpacing: '0%',
            color: '#2D3748'
          }}
        >
          Dashboard
        </h1>
      </div>

      {/* Analytics Cards - width: 1600px, height: 64.04px, top: 82.85px, left: 298px */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Today's Money */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 p-4 flex items-center justify-between"
          style={{
            height: '64.04px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Today&apos;s Money</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">$53,000</p>
            <p className="text-xs font-semibold text-green-500">+55%</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center bg-[#4FD1C5] overflow-hidden"
            style={{
              width: '45px',
              height: '36.023px',
              borderRadius: '12px',
              boxShadow: '0px 3.5px 5.5px 0px #00000005'
            }}
          >
            <Image src="/icons/money.png" alt="Money" width={45} height={36} className="scale-[2]" />
          </motion.div>
        </motion.div>

        {/* Today's Users */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 p-4 flex items-center justify-between"
          style={{
            height: '64.04px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Today&apos;s Users</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">2,300</p>
            <p className="text-xs font-semibold text-green-500">+5%</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center bg-[#4FD1C5] overflow-hidden"
            style={{
              width: '45px',
              height: '36.023px',
              borderRadius: '12px',
              boxShadow: '0px 3.5px 5.5px 0px #00000005'
            }}
          >
            <Image src="/icons/user.png" alt="Users" width={45} height={36} className="scale-[2]" />
          </motion.div>
        </motion.div>

        {/* New Clients */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 p-4 flex items-center justify-between"
          style={{
            height: '64.04px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">New Clients</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">+3,462</p>
            <p className="text-xs font-semibold text-red-500">-2%</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center bg-[#4FD1C5] overflow-hidden"
            style={{
              width: '45px',
              height: '36.023px',
              borderRadius: '12px',
              boxShadow: '0px 3.5px 5.5px 0px #00000005'
            }}
          >
            <Image src="/icons/client.png" alt="Clients" width={45} height={36} className="scale-[2]" />
          </motion.div>
        </motion.div>

        {/* Total Sales */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 p-4 flex items-center justify-between"
          style={{
            height: '64.04px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Sales</p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">$173,000</p>
            <p className="text-xs font-semibold text-green-500">+8%</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center bg-[#4FD1C5] overflow-hidden"
            style={{
              width: '45px',
              height: '36.023px',
              borderRadius: '12px',
              boxShadow: '0px 3.5px 5.5px 0px #00000005'
            }}
          >
            <Image src="/icons/sales.png" alt="Sales" width={45} height={36} className="scale-[2]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Big Cards Section - width: 1600px, height: 232.95px */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full lg:gap-6">
        {/* First Card - Welcome Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 p-4 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden sm:p-6 w-full lg:flex-[1.4]"
          style={{
            minHeight: '232.55px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          {/* Text Content */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <p 
              className="text-[#A0AEC0] dark:text-gray-400 mb-2"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '150%'
              }}
            >
              Lorem ipsum
            </p>
            <h3 
              className="text-[#2D3748] dark:text-gray-100 mb-2"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%'
              }}
            >
              Welcome Dashboard
            </h3>
            <p 
              className="text-[#A0AEC0] dark:text-gray-400"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Image Container */}
          <div 
            className="relative hidden sm:block"
            style={{
              width: '360px',
              height: '204.53px'
            }}
          >
            <div 
              className="absolute rounded-xl bg-[#4FD1C5]"
              style={{
                width: '360px',
                height: '204.53px',
                borderRadius: '12px'
              }}
            />
            <Image 
              src="/icons/og-image 1.png" 
              alt="Dashboard Welcome" 
              width={488}
              height={204.93}
              className="absolute"
              style={{
                left: '-64px',
                top: '0px'
              }}
            />
          </div>
        </motion.div>

        {/* Second Card - Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="rounded-[15px] bg-white dark:bg-gray-900 relative overflow-hidden w-full lg:flex-1"
          style={{
            minHeight: '232.55px',
            boxShadow: '0px 3.5px 5.5px 0px #00000005'
          }}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 rounded-[15px] overflow-hidden">
            <div 
              className="absolute rounded-xl hidden sm:block"
              style={{
                width: '100%',
                maxWidth: '619px',
                height: '204.53px',
                top: '14px',
                left: '17.5px',
                borderRadius: '12px',
                background: '#4FD1C5'
              }}
            />
            <Image 
              src="/icons/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png" 
              alt="Profile" 
              width={619}
              height={330.61}
              className="absolute object-cover hidden sm:block"
              style={{
                top: '-10px',
                left: '17.5px',
                height: '330.61px',
                maxWidth: '100%'
              }}
            />
            <div 
              className="absolute rounded-xl hidden sm:block"
              style={{
                width: '100%',
                maxWidth: '619px',
                height: '204.53px',
                top: '14px',
                left: '17.5px',
                borderRadius: '12px',
                background: 'linear-gradient(180deg, #4FD1C5 0%, rgba(79, 209, 197, 0.35) 100%)',
                mixBlendMode: 'normal'
              }}
            />
            <div 
              className="absolute rounded-xl"
              style={{
                width: '619px',
                height: '204.53px',
                top: '14px',
                left: '17.5px',
                borderRadius: '12px',
                background: 'linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'
              }}
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 p-8" style={{ paddingTop: '30px', paddingLeft: '39px' }}>
            <h3 
              className="text-white mb-2"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '140%'
              }}
            >
              Lorem Ipsum
            </h3>
            <p 
              className="text-white/90"
              style={{
                fontFamily: 'Helvetica',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                maxWidth: '384.5px'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            </p>
          </div>
        </motion.div>
      </div>

    

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column (2/3) */}
        <div className="space-y-6 lg:col-span-2">
          {/* Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            
          </motion.div>

          {/* Projects Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Projects</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-xs text-gray-500 dark:text-gray-400">
                    <tr>
                      <th className="pb-3 font-medium">COMPANIES</th>
                      <th className="pb-3 font-medium">MEMBERS</th>
                      <th className="pb-3 font-medium">BUDGET</th>
                      <th className="pb-3 font-medium">COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {projects.map((project) => (
                      <tr key={project.name} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3BD6C6] to-[#2FC1B1] text-sm font-semibold text-white">
                              {project.logo}
                            </div>
                            <span className="font-medium text-gray-900 dark:text-gray-100">{project.name}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex -space-x-2">
                            {Array.from({ length: project.members }).map((_, i) => (
                              <div
                                key={i}
                                className="h-7 w-7 rounded-full border-2 border-white dark:border-gray-900 bg-gray-300 dark:bg-gray-600"
                              ></div>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 text-left font-medium text-gray-900 dark:text-gray-100">{project.budget}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{project.completion}%</span>
                            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                              <div
                                className="h-full rounded-full bg-[#3BD6C6]"
                                style={{ width: `${project.completion}%` }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-6">
          {/* Orders Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
              <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">Orders Overview</h2>
              <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-green-600 dark:text-green-400">+30%</span> this month
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🔔", text: "Order #1234 received", time: "22 DEC 7:20 PM", color: "bg-green-500" },
                  { icon: "💰", text: "New payment received", time: "21 DEC 11:00 AM", color: "bg-red-500" },
                  { icon: "📦", text: "Order #5678 shipped", time: "20 DEC 2:30 PM", color: "bg-blue-500" },
                  { icon: "✅", text: "Order completed", time: "18 DEC 4:54 AM", color: "bg-green-500" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${item.color}`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{item.text}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
