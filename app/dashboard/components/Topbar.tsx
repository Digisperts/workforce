"use client";

import Image from "next/image";
import { Menu, Search } from "lucide-react";

export default function Topbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="flex items-center justify-between bg-white px-4 md:px-6 py-3 shadow-sm">
      
      {/* LEFT */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        
        {/* HAMBURGER */}
        <button onClick={onMenuClick} className="md:hidden text-xl">
          <Menu size={22} />
        </button>

        {/* SEARCH (from first design, resized to match second) */}
        <div className="flex items-center w-full h-[38px] gap-2 rounded-lg bg-[#f2f2f2] px-4">
          <Search size={16} className="text-[#0f8a8d]" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm text-[#8e8e8e] outline-none placeholder:text-[#a3a3a3]"
          />
        </div>
      </div>

      {/* RIGHT (from second design) */}
      <div className="flex items-center gap-4">
        
        {/* NOTIFICATION ICON */}
        <Image
          src="/images/sidebar/alerts.png"
          alt="Bell"
          width={20}
          height={24}
        />

        {/* PROFILE */}
        <div className="flex items-center gap-2 rounded-lg px-2 py-1">
          <Image
            src="/images/sidebar/profile.png"
            alt="User"
            width={20}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}