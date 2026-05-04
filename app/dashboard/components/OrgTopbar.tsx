"use client";

import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

export default function OrgTopbar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <header className="flex items-center justify-between bg-white px-4 md:px-6 py-3 shadow-sm">

            <div className="flex items-center gap-3 w-full max-w-xl">
                <button onClick={onMenuClick} className="md:hidden text-xl">☰</button>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-full gap-2">
                    <Image src="/images/sidebar/jobs.png" alt="Search" width={16} height={16} />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="bg-transparent outline-none w-full text-sm text-gray-400"
                    />
                </div>
            </div>


            <div className="flex items-center gap-3 ml-4">

                <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200">
                    <Image src="/images/sidebar/alerts.png" alt="Bell" width={20} height={20} />
                </button>


                <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200">
                    <Globe color="#b8b7b7" />
                </button>


                <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-2 py-1">
                    <Image
                        src="/images/homepage/mercy.png"
                        alt="User"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700 hidden md:block">Jane Oope</span>
                    <ChevronDown color="#b8b7b7" />
                </button>
            </div>
        </header>
    );
}