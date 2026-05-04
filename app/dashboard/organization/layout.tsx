"use client"
import { useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import OrgContext from "./OrgContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function OrganizationLayout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);



  const isPremium = true; //change into false to test



  return (
    <OrgContext.Provider value={{ isPremium }}>
      <div className="flex min-h-screen bg-gray-50">

        <div className="md:hidden bg-white p-3 flex items-start">
          <button onClick={() => setMobileOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="w-64 bg-white h-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Settings</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-3 text-sm">
                <a href="/dashboard/organization" className=" block text-[#8C462C] font-medium">
                  Account
                </a>
                <a href="/dashboard/organization/billing" className="block text-[#8C462C]  hover:underline">
                  Plan & Billing
                </a>
                <a
                  href="/dashboard/organization/team"
                  className="flex items-center justify-between text-[#8C462C]  hover:underline"
                >
                  <span>Team management</span>
                  {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
                </a>

                <a
                  href="/dashboard/organization/integrations"
                  className="flex items-center justify-between text-[#8C462C] hover:underline"
                >
                  <span>Integrations</span>
                  {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
                </a>
              </nav>
            </div>

            <div
              className="flex-1 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
          </div>
        )}

        <aside className="w-80 bg-white hidden md:block">
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-4">
              ← Dashboard / <span className="text-gray-800 font-medium">Settings</span>
            </div>

            <h2 className="text-lg font-semibold mb-6">Settings</h2>

            <nav className="space-y-3 mb-10 text-xl font-medium">
              <a href="/dashboard/organization" className="block text-[#8C462C] ">
                Account
              </a>
              <a href="/dashboard/organization/billing" className="block text-[#8C462C]  hover:underline">
                Plan & Billing
              </a>
              <a
                href="/dashboard/organization/team"
                className="flex items-center justify-between text-[#8C462C]  hover:underline"
              >
                <span>Team management</span>
                {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
              </a>

              <a
                href="/dashboard/organization/integrations"
                className="flex items-center justify-between text-[#8C462C] hover:underline"
              >
                <span>Integrations</span>
                {!isPremium && <Lock className="w-4 h-4 text-gray-400" />}
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8">
          {children}
        </main>
      </div>
    </OrgContext.Provider>
  );
}