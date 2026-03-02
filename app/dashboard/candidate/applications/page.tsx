"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const allApplications = [
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Viewed" },
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Under Review" },
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Invited" },
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Unqualified" },
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Offer" },
  { company: "Digisperts LLC", title: "Product Design Associate", type: "Fully Remote", date: "1/09/2025", status: "Saved" },
];

const tabs = [
  "All",
  "Viewed",
  "Under Review",
  "Invited",
  "Unqualified",
  "Offer",
  "Saved",
];

const statusColors: Record<string, string> = {
  Viewed: "bg-blue-100 text-blue-600",
  "Under Review": "bg-yellow-100 text-yellow-600",
  Invited: "bg-orange-100 text-orange-600",
  Unqualified: "bg-red-100 text-red-600",
  Offer: "bg-teal-100 text-teal-600",
  Saved: "bg-green-100 text-green-600",
};

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredApplications =
    activeTab === "All"
      ? allApplications
      : allApplications.filter((app) => app.status === activeTab);

  return (
    <div className="p-6 space-y-6">

      {/* ================= TOP CARDS ================= */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* APPLICATION OVERVIEW */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <h3 className="font-semibold mb-4">Application Overview</h3>

          <div className="flex items-center gap-6">
            {/* Fake donut (UI match) */}
            <div className="w-32 h-32 rounded-full border-[10px] border-teal-700 relative flex items-center justify-center">
              <span className="text-center text-sm">
                Total<br />
                <strong className="text-lg">1,000</strong>
              </span>
            </div>

            {/* Stats */}
            <div className="space-y-2 text-sm">
              <p><span className="inline-block w-3 h-3 bg-teal-700 mr-2"></span>500 Under Review</p>
              <p><span className="inline-block w-3 h-3 bg-teal-500 mr-2"></span>200 Interview</p>
              <p><span className="inline-block w-3 h-3 bg-teal-300 mr-2"></span>200 Rejected</p>
              <p><span className="inline-block w-3 h-3 bg-teal-200 mr-2"></span>100 Saved</p>
            </div>
          </div>
        </div>

        {/* UPCOMING INTERVIEWS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Upcoming Interviews</h3>
            <span className="bg-gray-100 px-2 py-1 rounded text-sm">4</span>
          </div>

          <div className="space-y-4">
            {[
              { date: "6 Oct", company: "Digisperts LLC", role: "Product Design Associate", time: "9pm-10pm" },
              { date: "2 Oct", company: "Rise vest", role: "Product Design Lead", time: "12pm-1pm" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-3">
                <div className="flex gap-3">
                  <div className="bg-gray-100 px-3 py-2 rounded text-center text-sm">
                    {item.date}
                  </div>
                  <div>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
                <span className="bg-teal-100 text-teal-600 px-3 py-1 rounded text-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          <p className="text-right text-sm text-teal-600 mt-3 cursor-pointer">
            See More →
          </p>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-sm border">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold">Applications</h2>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="text-gray-500 text-left">
            <tr className="border-b">
              <th className="p-4">Company</th>
              <th className="p-4">Job Title</th>
              <th className="p-4">Job Type</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredApplications.map((app, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-4">{app.company}</td>
                <td className="p-4">{app.title}</td>
                <td className="p-4">{app.type}</td>
                <td className="p-4 text-yellow-400">★★★★☆</td>
                <td className="p-4">{app.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}