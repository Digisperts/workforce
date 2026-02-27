"use client";

import Image from "next/image";

export default function Topbar({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className="flex items-center justify-between bg-white px-4 md:px-6 py-3 shadow-sm">
      {/* LEFT */}
      <div className="flex items-center gap-3 w-full max-w-xl">
        {/* HAMBURGER (MOBILE ONLY) */}
        <button onClick={onMenuClick} className="md:hidden text-xl">
          ☰
        </button>

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Image src="/images/topbar/notification.png" alt="Bell" width={24} height={24} />

        <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
          <Image
            src="/images/topbar/avatar.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}