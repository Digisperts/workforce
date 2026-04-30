"use client";
import { HeartIcon, BookmarkIcon } from "lucide-react";

type JobCardProps = {
    company: string
    role: string
    location: string
    img: string
    type: string
    description: string
    positions: string
}

export default function CandidateJobCard({ job }: { job: JobCardProps }) {
    return (
        <div className="border border-gray-100 shadow-md rounded-xl p-5  space-y-3 bg-white">

            {/* ── Top Row: Logo + Company/Location + Save/Heart ── */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={job.img} alt={job.company} className="w-10 h-10 object-contain" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-gray-800">{job.company}</span>
                        <span className="text-xs text-gray-400">{job.location}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    <BookmarkIcon className="w-4 h-4 cursor-pointer hover:text-teal-600" />
                    <HeartIcon className="w-4 h-4 cursor-pointer hover:text-red-400" />
                </div>
            </div>

            {/* ── Role ── */}
            <h2 className="font-bold text-base text-gray-800">{job.role}</h2>

            {/* ── Description ── */}
            <p className="text-xs text-gray-500 line-clamp-3">{job.description}</p>

            {/* ── Tags ── */}
            <div className="flex gap-2">
                <span className="bg-gray-100 border border-gray-100 text-[#004646] font-medium text-sm px-2 py-1">{job.positions}</span>
                <span className="bg-gray-100 border border-gray-100 text-[#004646] font-medium text-sm px-2 py-1 ">{job.type}</span>
            </div>

            {/* ── Buttons ── */}
            <div className="flex gap-2 w-full">
                <button className="bg-[#E6F2F2] flex-1 text-[#008080] text-xs px-4 py-2 rounded-lg font-medium hover:bg-teal-100">Apply</button>
                <button className="bg-white border flex-1 border-gray-200 text-gray-700 text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-50">View Details</button>
            </div>

        </div>
    )
}