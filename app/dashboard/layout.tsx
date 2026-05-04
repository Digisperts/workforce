"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { usePathname } from "next/navigation";
import OrgSidebar from "./components/OrgSidebar";
import OrgTopbar from "./components/OrgTopbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isOrg = pathname.startsWith("/dashboard/organization");
  const SidebarComponent = isOrg ? OrgSidebar : Sidebar;
  const TopbarComponent = isOrg ? OrgTopbar : Topbar;

  return (
    <div className="flex h-screen overflow-hidden">

      <SidebarComponent collapsed={collapsed} setCollapsed={setCollapsed} />


      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40">
          <SidebarComponent
            collapsed={false}
            setCollapsed={setCollapsed}
            isMobile
            close={() => setMobileOpen(false)}
          />
        </div>
      )}


      <div className="flex-1 flex flex-col bg-gray-50 min-h-screen overflow-y-auto">
        <TopbarComponent onMenuClick={() => setMobileOpen(true)} />
        <main className="p-4 md:p-6 flex-1 ">
          {children}
        </main>
      </div>
    </div>
  );
}