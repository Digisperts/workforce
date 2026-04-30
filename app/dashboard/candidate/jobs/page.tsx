"use client";
import { Search, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";
import CandidateJobCard from "@/app/dashboard/components/CandidateJobCard";

const jobs = [
    {
        "company": "Amazon",
        "role": "ReactJS Developer",
        "location": "USA",
        "img": "/images/homepage/amazonlogo.png",
        "type": "Full time",
        "description": "We are looking for a skilled ReactJS Developer to join our dynamic team. ",
        "positions": "7 Positions"
    },
    {
        "company": "Amazon",
        "role": "ReactJS Developer",
        "location": "USA",
        "img": "/images/homepage/amazonlogo.png   ",
        "type": "Full time",
        "description": "We are looking for a skilled ReactJS Developer to join our dynamic team.",
        "positions": "7 Positions"
    },
    {
        "company": "Amazon",
        "role": "ReactJS Developer",
        "location": "USA",
        "img": "/images/homepage/amazonlogo.png",
        "type": "Full time",
        "description": "We are looking for a skilled ReactJS Developer to join our dynamic team.",
        "positions": "7 Positions"
    },
    {
        "company": "Amazon",
        "role": "ReactJS Developer",
        "location": "USA",
        "img": "/images/homepage/amazonlogo.png",
        "type": "Full time",
        "description": "We are looking for a skilled ReactJS Developer to join our dynamic team. As a ReactJS Developer, you will be responsible for building and maintaining high-performance web applications. ",
        "positions": "7 Positions"
    }
]
const Dropdownitems = [
    "Job type ",
    "Experience level",
    "Location",
    "Salary Range",
    "Company Type",
    "Date Posted",

];


export default function JobsPage() {
    return <div className="p-6 ">

        {/* ================= TEAL STRIP ================= */}
        <div className="bg-[#E6F2F2] w-full h-20 rounded-t-xl" />

        {/* ================= WHITE BACKGROUND WRAPPER ================= */}
        <div className="bg-white rounded-b-2xl p-6 space-y-6">
            {/* ================= Top section ================= */}
            <div>
                <div className="text-[#005B5B] text-2xl font-semibold ">Find a Job </div>
                <div className="flex justify-between bg-white border shadow-md border-gray-200 mt-5 border-transparent px-4 py-2 rounded-lg w-full">
                    <div className="flex gap-2 items-center flex-1">
                        <Search className="w-4 h-4 text-[#005B5B] font-bold" />
                        <input
                            type="text"
                            placeholder="What Job are You Looking for"
                            className="bg-transparent outline-none border-none w-full flex-1 text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-teal-700 flex items-center gap-2 text-white px-4 py-2 rounded-lg">
                            <Search className="w-4 h-4 text-white" />
                            Search
                        </button>
                        <button className="bg-white flex gap-2 items-center text-gray-800 border border-gray-100 px-4 py-2 rounded-lg">
                            <Sparkles className="w-4 h-4 text-orange-500" />
                            Search with Ai
                        </button>
                    </div>
                </div>
                {/* ================= Dropdown menu ================= */}
                <div className="flex gap-2">
                    {Dropdownitems.map((item, index) => (
                        <button key={index} className="border mt-5 text-gray-800 px-4 py-2 rounded-lg flex items-center">
                            {item}
                            <ChevronDown className="w-4 h-4 text-gray-800" />
                        </button>
                    ))}
                </div>
                {/* ========== Job Cards ======== */}
                <div className=" mt-5  text-[#005B5B] text-xl font-semibold">Popular Jobs</div>
                <div className="grid grid-cols-3 gap-5 md:grid-cols-3 sm:grid-cols-1">
                    {jobs.map((job, index) => (
                        <CandidateJobCard
                            key={index}
                            job={job}
                        />
                    )

                    )}

                </div>









            </div>{/* END WHITE WRAPPER */}
        </div>
    </div>;
}
