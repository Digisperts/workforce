"use client";

import { CircleQuestionMark, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OrgSidebar({
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
        { name: "Dashboard", href: "/dashboard/organization", icon: "/images/sidebar/dashbaord.png" },
        { name: "Job Portal", href: "/dashboard/organization/jobs", icon: "/images/sidebar/filter.png" },
        { name: "Search Candidates", href: "/dashboard/organization/candidates", icon: "/images/sidebar/jobs.png" },
        { name: "Global Hiring Toolkit", href: "/dashboard/organization/toolkit", icon: "/images/sidebar/app.png" },
        { name: "Post a Job", href: "/dashboard/organization/post-job", icon: "/images/sidebar/alerts.png" },
    ];

    return (
        <aside
            className={`
        h-full bg-white flex flex-col justify-between shadow-sm
        transition-all duration-300
        ${collapsed ? "w-20" : "w-[260px]"}
        ${isMobile ? "fixed top-0 left-0 z-50" : "hidden md:flex"}`}
        >

            <div>

                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Image src="/images/homepage/workforce.png" alt="Logo" width={40} height={40} />
                        {!collapsed && (
                            <p className="text-sm font-semibold leading-tight">
                                Digisperts <br /> Workforce
                            </p>
                        )}
                    </div>

                    {!isMobile && (
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        >
                            {collapsed ? "›" : "‹"}
                        </button>
                    )}

                    {isMobile && (
                        <button onClick={close} className="text-xl">✕</button>
                    )}
                </div>

                <hr className="border-gray-200 mb-4" />

                {/* MENU */}
                <nav className="px-3 space-y-2">
                    {menus.map((item) => {

                        const active = item.href === "/dashboard/organization"
                                ? pathname === item.href
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={isMobile ? close : undefined}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${active
                                    ? "bg-[#F97316] text-white"       // orange for org
                                    : "text-gray-500 hover:bg-gray-100"}`}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width={20}
                                    height={20}
                                    className={`${active ? "brightness-0 invert" : ""}`}
                                />
                                {!collapsed && (
                                    <span className="text-sm font-medium">{item.name}</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>


            <div className="p-3">
                {!collapsed && (
                    <div className="bg-[#F97316] text-white rounded-xl p-4 mb-4 text-center">
                        <p className="font-semibold mb-2">Upgrade to Premium</p>
                        <p className="text-xs mb-3">
                            Get 1 month free trial and start building your dream team.
                        </p>
                        <button className="w-full bg-white text-[#F97316] py-2 rounded-md text-sm font-semibold">
                            Upgrade Now
                        </button>
                    </div>
                )}

                <hr className="border-gray-200 mb-4" />

                <div className="flex items-center gap-3 px-3 py-2 text-gray-500">
                    <CircleQuestionMark />


                    {!collapsed && <span className="text-sm">Help</span>}
                </div>

                <button className="flex items-center gap-3 px-3 py-3 mt-2 w-full bg-[#FDECEC] text-[#F04438] rounded-lg">
                    <LogOut />
                    {!collapsed && <span className="text-sm font-medium">Log out</span>}
                </button>
            </div>
        </aside>
    );
}