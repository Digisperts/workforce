"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArchive, FiHeart } from "react-icons/fi";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
}

export default function JobCards({ id, title, company }: JobCardProps) {
  return (
    <div className="relative bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      
      {/* Top-right icons */}
      <div className="absolute top-4 right-4 flex gap-3">
        <FiArchive className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
        <FiHeart className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500" />
      </div>

      {/* Company info */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/images/find-jobs/right_main.png"
          alt={company}
          width={40}
          height={40}
          unoptimized
        />
        <div>
          <p className="font-semibold text-sm">{company}</p>
          <p className="text-xs text-gray-500">USA</p>
        </div>
      </div>

      {/* Job title */}
      <h3 className="font-semibold text-[#003636] mb-2">{title}</h3>

      <p className="text-sm text-gray-600 mb-4">
        We are actively looking for a front-end React JS developer...
      </p>

      {/* Tags */}
      <div className="flex gap-2 text-xs mb-4">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
          7 positions
        </span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
          Full time
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          href={`/apply/${id}`}
          className="px-4 py-2 bg-[#FF7A45] text-white rounded-md text-sm shadow-sm"
        >
          Apply
        </Link>

        <Link
          href={`/find-jobs/${id}`}
          className="px-4 py-2 border rounded-md text-sm shadow-sm"
        >
          View details
        </Link>
      </div>
    </div>
  );
}
