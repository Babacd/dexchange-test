"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingCart, Activity } from "lucide-react"

const metrics = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+5.2%",
    isPositive: true,
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Active Projects",
    value: "23",
    change: "-2.4%",
    isPositive: false,
    icon: ShoppingCart,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Pending Tasks",
    value: "12",
    change: "+3.1%",
    isPositive: true,
    icon: Activity,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

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
        <p className="text-sm text-gray-500">Pages / Dashboard</p>
        <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Dashboard</h1>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{metric.title}</p>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">{metric.value}</p>
                    <div className="mt-2 flex items-center gap-1">
                      {metric.isPositive ? (
                        <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5 text-red-600" />
                      )}
                      <span
                        className={`text-xs font-medium ${
                          metric.isPositive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </span>
                      <span className="text-xs text-gray-500">vs last month</span>
                    </div>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.iconBg}`}>
                    <Icon className={`h-6 w-6 ${metric.iconColor}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
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
            <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">Welcome back!</h2>
              <p className="mb-4 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="h-9 rounded-xl bg-[#3BD6C6] px-4 text-sm font-medium text-white hover:bg-[#2FC1B1]">
                Read more
              </Button>
            </Card>
          </motion.div>

          {/* Projects Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Projects</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-left text-xs text-gray-500">
                    <tr>
                      <th className="pb-3 font-medium">COMPANIES</th>
                      <th className="pb-3 font-medium">MEMBERS</th>
                      <th className="pb-3 font-medium">BUDGET</th>
                      <th className="pb-3 font-medium">COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {projects.map((project) => (
                      <tr key={project.name} className="hover:bg-gray-50">
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3BD6C6] to-[#2FC1B1] text-sm font-semibold text-white">
                              {project.logo}
                            </div>
                            <span className="font-medium text-gray-900">{project.name}</span>
                          </div>
                        </td>
                        <td className="py-3">
                          <div className="flex -space-x-2">
                            {Array.from({ length: project.members }).map((_, i) => (
                              <div
                                key={i}
                                className="h-7 w-7 rounded-full border-2 border-white bg-gray-300"
                              ></div>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 text-right font-medium text-gray-900">{project.budget}</td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-gray-600">{project.completion}%</span>
                            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-gray-200">
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
            <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">Orders Overview</h2>
              <p className="mb-6 text-sm text-gray-600">
                <span className="font-semibold text-green-600">+30%</span> this month
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
                      <p className="text-sm font-medium text-gray-900">{item.text}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
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
