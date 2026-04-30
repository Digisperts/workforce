"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Briefcase,
  CircleUserRound,
  Grid2x2,
  Headphones,
  LogOut,
  Search,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type MenuItem = {
  name: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

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

  // ===============================
  // 📌 SIDEBAR NAVIGATION ITEMS
  // Controls all main dashboard routes
  // ===============================
  const menus: MenuItem[] = [
    { name: "Dashboard", href: "/dashboard/candidate/home", icon: Grid2x2 },
    {
      name: "My Profile",
      href: "/dashboard/candidate/profile",
      icon: CircleUserRound,
    },
    {
      name: "My Applications",
      href: "/dashboard/candidate/applications",
      icon: Briefcase,
    },
    { name: "Find Jobs", href: "/find-jobs", icon: Search },
    { name: "Job Alerts", href: "/dashboard/candidate/home", icon: Bell },
    { name: "Settings", href: "/dashboard/candidate/home", icon: Settings },
    { name: "Skill Test", href: "/dashboard/candidate/home", icon: Sparkles },
  ];

  return (
    // ===============================
    // 📌 SIDEBAR WRAPPER
    // Handles:
    // - collapse width
    // - mobile vs desktop visibility
    // ===============================
    <aside
      className={`
        h-full bg-white flex flex-col justify-between border-r border-[#e6e6e6]
        transition-all duration-300
        ${collapsed ? "w-20" : "w-[260px]"}
        ${isMobile ? "fixed top-0 left-0 z-50" : "hidden md:flex"}
      `}
    >
      {/* ===============================
          📌 TOP SECTION (LOGO + NAV)
         =============================== */}
      <div>
        {/* LOGO + COLLAPSE TOGGLE */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/homepage/workforce.png"
              alt="Logo"
              width={42}
              height={42}
            />

            {/* Company name only visible when expanded */}
            {!collapsed && (
              <p className="text-sm font-semibold leading-tight text-[#2b2b2b]">
                Digisperts <br /> Workforce
              </p>
            )}
          </div>

          {/* Desktop collapse button */}
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2b3354] text-[#2b3354]"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </button>
          )}

          {/* Mobile close button */}
          {isMobile && (
            <button onClick={close} className="text-xl" aria-label="Close menu">
              ✕
            </button>
          )}
        </div>

        {/* Divider under header */}
        <hr className="border-[#ececec]" />

        {/* ===============================
            📌 NAVIGATION LINKS
            Active route highlighting logic
           =============================== */}
        <nav className="px-3 pb-4 pt-4 space-y-2">
          {menus.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={isMobile ? close : undefined}
                className={`
                  flex items-center gap-3 rounded-[10px] px-4 py-3 transition
                  ${
                    active
                      ? "bg-[#0a8b8c] text-white"
                      : "text-[#666] hover:bg-[#f4f4f4]"
                  }
                `}
              >
                <Icon
                  size={20}
                  className={active ? "text-white" : "text-[#6f6f6f]"}
                />

                {/* Hide labels when collapsed */}
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ===============================
          📌 BOTTOM SECTION
          (Promo + Help + Logout)
         =============================== */}
      <div className="p-3">
        {/* Promo card (only visible when expanded) */}
        {!collapsed && (
          <div className="mb-4 rounded-xl bg-gradient-to-b from-[#078f90] to-[#02484a] p-4 text-center text-white">
            <p className="text-2xl font-semibold leading-tight">
              Global Market
              <br />
              Trends
            </p>

            <p className="mt-2 text-xs leading-relaxed text-[#d8eeee]">
              Get exclusive access to
              <br />
              real time market
              <br />
              intelligence
            </p>

            <button className="mt-3 rounded-md bg-[#e6f6f6] px-3 py-2 text-xs font-semibold text-[#0a7f80]">
              Download Robust Data
            </button>
          </div>
        )}

        {/* Divider */}
        <hr className="mb-4 border-[#ececec]" />

        {/* Help Center */}
        <div className="flex items-center gap-3 px-3 py-2 text-[#777]">
          <Headphones size={20} />
          {!collapsed && <span className="text-sm">Help Center</span>}
        </div>

        {/* Logout button */}
        <button className="mt-3 flex w-full items-center gap-3 rounded-[10px] bg-[#fff1ed] px-4 py-3 text-[#f16731]">
          <LogOut size={20} />
          {!collapsed && (
            <span className="text-sm font-medium">Log out</span>
          )}
        </button>
      </div>
    </aside>
  );
}