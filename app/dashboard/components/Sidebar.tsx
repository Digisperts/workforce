"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  collapsed,
  setCollapsed,
  isMobile,
  close,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  isMobile?: boolean;
  close?: () => void;
}) {
  const pathname = usePathname();

  const menus = [
    { name: "Dashboard", href: "/dashboard", icon: "/images/sidebar/dashboard.png" },
    { name: "My Profile", href: "/dashboard/profile", icon: "/images/sidebar/profile.png" },
    { name: "My Applications", href: "/dashboard/applications", icon: "/images/sidebar/applications.png" },
    { name: "Find Jobs", href: "/dashboard/jobs", icon: "/images/sidebar/jobs.png" },
    { name: "Job Alerts", href: "/dashboard/alerts", icon: "/images/sidebar/alerts.png" },
    { name: "Settings", href: "/dashboard/settings", icon: "/images/sidebar/settings.png" },
    { name: "Skill Test", href: "/dashboard/skill-test", icon: "/images/sidebar/skill.png" },
  ];

  return (
    <aside
      className={`
        h-full bg-white flex flex-col justify-between shadow-sm
        transition-all duration-300
        ${collapsed ? "w-20" : "w-[260px]"}
        ${isMobile ? "fixed top-0 left-0 z-50" : "hidden md:flex"}
      `}
    >
      {/* TOP */}
      <div>
        {/* LOGO + COLLAPSE */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Logo" width={40} height={40} />

            {!collapsed && (
              <p className="text-sm font-semibold leading-tight">
                Digisperts <br /> Workforce
              </p>
            )}
          </div>

          {/* DESKTOP COLLAPSE */}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
            >
              {collapsed ? "›" : "‹"}
            </button>
          )}

          {/* MOBILE CLOSE */}
          {isMobile && (
            <button onClick={close} className="text-xl">
              ✕
            </button>
          )}
        </div>

        {/* DIVIDER */}
        <hr className="border-gray-200 mb-4" />

        {/* MENU */}
        <nav className="px-3 space-y-2">
          {menus.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={isMobile ? close : undefined}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg transition
                  ${
                    active
                      ? "bg-[#0F766E] text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }
                `}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className={active ? "brightness-0 invert" : ""}
                />

                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="p-3">
        {/* UPGRADE */}
        {!collapsed && (
          <div className="bg-[#0F766E] text-white rounded-xl p-4 mb-4 text-center">
            <p className="font-semibold mb-2">Upgrade to Premium</p>
            <p className="text-xs mb-3">
              Get 1 month free trial and unlock your dream role
            </p>

            <button className="w-full bg-white text-[#0F766E] py-2 rounded-md text-sm font-semibold">
              Upgrade Now
            </button>
          </div>
        )}

        {/* DIVIDER */}
        <hr className="border-gray-200 mb-4" />

        {/* HELP */}
        <div className="flex items-center gap-3 px-3 py-2 text-gray-500">
          <Image src="/images/sidebar/help.png" alt="Help" width={20} height={20} />
          {!collapsed && <span className="text-sm">Help Center</span>}
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-3 px-3 py-3 mt-2 w-full bg-[#FDECEC] text-[#F04438] rounded-lg">
          <Image src="/images/sidebar/logout.png" alt="Logout" width={20} height={20} />
          {!collapsed && <span className="text-sm font-medium">Log out</span>}
        </button>
      </div>
    </aside>
  );
}