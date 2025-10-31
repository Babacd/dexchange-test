"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const authors = [
  {
    name: "Michael Levi",
    email: "michael@example.com",
    function: "Manager",
    organization: "Organization",
    status: "online",
    employed: "23/04/18",
  },
  {
    name: "Alexa Liras",
    email: "alexa@example.com",
    function: "Developer",
    organization: "Developer",
    status: "offline",
    employed: "11/01/19",
  },
  {
    name: "Laurent Perrier",
    email: "laurent@example.com",
    function: "Executive",
    organization: "Projects",
    status: "online",
    employed: "19/09/17",
  },
  {
    name: "Miriam Eric",
    email: "miriam@example.com",
    function: "Marketing",
    organization: "Marketing",
    status: "online",
    employed: "24/12/08",
  },
  {
    name: "Richard Gran",
    email: "richard@example.com",
    function: "Manager",
    organization: "Organization",
    status: "offline",
    employed: "04/10/21",
  },
]

const projects = [
  {
    company: "Spotify",
    logo: "S",
    budget: "$2,500",
    status: "Working",
    completion: 60,
    color: "from-green-500 to-green-600",
  },
  {
    company: "Invision",
    logo: "I",
    budget: "$5,000",
    status: "Done",
    completion: 100,
    color: "from-pink-500 to-pink-600",
  },
  {
    company: "Jira",
    logo: "J",
    budget: "$3,400",
    status: "Canceled",
    completion: 30,
    color: "from-blue-500 to-blue-600",
  },
  {
    company: "Slack",
    logo: "S",
    budget: "$1,400",
    status: "Working",
    completion: 80,
    color: "from-purple-500 to-purple-600",
  },
  {
    company: "Webdev",
    logo: "W",
    budget: "$14,000",
    status: "Done",
    completion: 100,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    company: "Adobe XD",
    logo: "A",
    budget: "$2,300",
    status: "Canceled",
    completion: 25,
    color: "from-red-500 to-red-600",
  },
]

export default function TablePage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div>
        <p className="text-sm text-gray-500">Pages / Tables</p>
        <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">Tables</h1>
      </div>

      {/* Authors Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Authors Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs font-medium uppercase text-gray-500">
                <tr>
                  <th className="pb-3">Author</th>
                  <th className="pb-3">Function</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Employed</th>
                  <th className="pb-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {authors.map((author, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3BD6C6] to-[#2FC1B1] text-sm font-semibold text-white">
                          {author.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{author.name}</p>
                          <p className="text-xs text-gray-500">{author.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <div>
                        <p className="font-medium text-gray-900">{author.function}</p>
                        <p className="text-xs text-gray-500">{author.organization}</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <Badge
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                          author.status === "online"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {author.status === "online" ? "Online" : "Offline"}
                      </Badge>
                    </td>
                    <td className="py-3 text-gray-700">{author.employed}</td>
                    <td className="py-3">
                      <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.20)]">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Projects</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs font-medium uppercase text-gray-500">
                <tr>
                  <th className="pb-3">Companies</th>
                  <th className="pb-3">Budget</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Completion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.color} text-sm font-semibold text-white`}
                        >
                          {project.logo}
                        </div>
                        <span className="font-medium text-gray-900">{project.company}</span>
                      </div>
                    </td>
                    <td className="py-3 text-right font-medium text-gray-900">{project.budget}</td>
                    <td className="py-3">
                      <span
                        className={`text-sm font-medium ${
                          project.status === "Done"
                            ? "text-green-600"
                            : project.status === "Working"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-600">{project.completion}%</span>
                        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-200">
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
  )
}
