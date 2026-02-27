"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* SIDEBAR DESKTOP */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* MOBILE SIDEBAR */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <Sidebar
            collapsed={false}
            setCollapsed={setCollapsed}
            isMobile
            close={() => setMobileOpen(false)}
          />
        </div>
      )}

      {/* MAIN */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="p-4 md:p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}