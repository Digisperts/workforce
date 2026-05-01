"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, X, Sparkles, Crown } from "lucide-react";
import { useOrg } from "../OrgContext";
import Image from "next/image";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    avatar: string;
    status: "Active" | "Last active";
    lastActive?: string;
    accessLevel: "Owner" | "Editor" | "Viewer" | "Administrator" | "Recruiter";
}

const ACCESS_LEVELS = [
    "Owner",
    "Administrator",
    "Editor",
    "Recruiter",
    "Viewer",
];

const initialMembers: TeamMember[] = [
    {
        id: "1",
        name: "Jane Oope (You)",
        role: "Senior HR Manager",
        avatar: "/images/homepage/salami.png",
        status: "Active",
        accessLevel: "Owner",
    },
    {
        id: "2",
        name: "Green Fischer",
        role: "Product Manager",
        avatar: "/images/homepage/salami.png",
        status: "Last active",
        lastActive: "2 days ago",
        accessLevel: "Editor",
    },
    {
        id: "3",
        name: "Salami David",
        role: "Product Designer",
        avatar: "/images/homepage/salami.png",
        status: "Last active",
        lastActive: "2 days ago",
        accessLevel: "Viewer",
    },
    {
        id: "4",
        name: "Mercy Olanrewaju",
        role: "Product Designer",
        avatar: "/images/homepage/salami.png",
        status: "Last active",
        lastActive: "2 days ago",
        accessLevel: "Viewer",
    },
    {
        id: "5",
        name: "Daniel Doose",
        role: "HR Manager",
        avatar: "/images/homepage/salami.png",
        status: "Last active",
        lastActive: "2 days ago",
        accessLevel: "Administrator",
    },
];

export default function TeamManagement() {

    const [members, setMembers] = useState<TeamMember[]>(initialMembers);
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        jobTitle: "",
        accessLevel: "Viewer",
    });

    const filteredMembers = members.filter(
        (member) =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddMember = () => {
        if (formData.name.trim() && formData.jobTitle.trim()) {
            const newMember: TeamMember = {
                id: Date.now().toString(),
                name: formData.name,
                role: formData.jobTitle,
                avatar: formData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase(),
                status: "Active",
                accessLevel: formData.accessLevel as TeamMember["accessLevel"],
            };

            setMembers([...members, newMember]);
            setFormData({ name: "", jobTitle: "", accessLevel: "Viewer" });
            setIsModalOpen(false);
        }
    };

    const getAccessLevelColor = (level: string) => {
        switch (level) {
            case "Owner":
                return "text-amber-800";
            case "Administrator":
                return "text-amber-800";
            case "Editor":
                return "text-amber-800";
            case "Recruiter":
                return "text-amber-800";
            case "Viewer":
                return "text-amber-800";
            default:
                return "text-gray-700";
        }
    };

    const getAvatarColor = (name: string) => {
        const colors = [
            "bg-blue-400",
            "bg-purple-400",
            "bg-pink-400",
            "bg-orange-400",
            "bg-green-400",
        ];
        return colors[name.charCodeAt(0) % colors.length];
    };
    const { isPremium } = useOrg();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            {isPremium ? (
                <div>
                    <div className="max-w-6xl mx-auto">
                        {/* Header Section */}

                        <div className="mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Team management
                            </h1>
                            <p className="text-gray-600 text-sm md:text-base">
                                Manage your team and access levels here.
                            </p>
                        </div>

                        {/* Search & Add Button */}
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search team member by name or role..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                                />
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2.5 rounded-lg transition-colors duration-150 whitespace-nowrap w-full md:w-auto"
                            >
                                <Plus className="w-4 h-4" />
                                Add team member
                            </button>
                        </div>

                        {/* Team Members List */}
                        <div className="space-y-3 md:space-y-2">
                            {filteredMembers.length > 0 ? (
                                filteredMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 bg-teal-50 border border-teal-100 rounded-xl p-4 md:p-5 hover:shadow-sm transition-shadow"
                                    >
                                        {/* Avatar & Name Section */}
                                        <div className="flex items-center gap-3 flex-1">
    {member.avatar.startsWith('public/') || member.avatar.startsWith('/') || member.avatar.includes('.png') || member.avatar.includes('.jpg') ? (
        <Image
            src={member.avatar}
            alt={member.name}
             width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover shrink-0"
        />
    ) : (
        <div className={`w-12 h-12 rounded-full ${getAvatarColor(member.name)} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
            {member.avatar}
        </div>
    )}
    <div className="min-w-0">
        <p className="font-semibold text-gray-900 text-sm md:text-base truncate">
            {member.name}
        </p>
        <p className="text-gray-600 text-xs md:text-sm truncate">
            {member.role}
        </p>
    </div>
</div>

                                        {/* Status Section - Hidden on mobile, visible on md+ */}
                                        <div className="hidden md:flex md:flex-1 md:justify-center">
                                            <span className="text-gray-600 text-sm">
                                                {member.status === "Active" ? (
                                                    <span className="font-medium text-teal-700">Active</span>
                                                ) : (
                                                    <span className="text-gray-500 text-xs">
                                                        Last active {member.lastActive}
                                                    </span>
                                                )}
                                            </span>
                                        </div>

                                        {/* Access Level & Menu */}
                                        <div className="flex items-center justify-between md:justify-end gap-3">
                                            <span className={`font-semibold text-sm ${getAccessLevelColor(member.accessLevel)}`}>
                                                {member.accessLevel}
                                            </span>
                                            <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>No team members found</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Modal Backdrop */}
                    {isModalOpen && (
                        <div
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                        />
                    )}

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
                            <div
                                className="bg-white rounded-2xl shadow-lg max-w-md w-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header */}
                                <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-200">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <Plus className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        Add team member
                                    </h2>
                                </div>

                                {/* Modal Body */}
                                <div className="px-6 py-6 space-y-4">
                                    {/* Member's Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Member&rsquo;s Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                                        />
                                    </div>

                                    {/* Member's Job Title */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Member&lsquo;s Job title
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter job title"
                                            value={formData.jobTitle}
                                            onChange={(e) =>
                                                setFormData({ ...formData, jobTitle: e.target.value })
                                            }
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                                        />
                                    </div>

                                    {/* Member's Access Level */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Member&apos;s Access Level
                                        </label>
                                        {/* &apos &lsquo &#39 &rsquo */}
                                        <select
                                            value={formData.accessLevel}
                                            onChange={(e) =>
                                                setFormData({ ...formData, accessLevel: e.target.value })
                                            }
                                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none cursor-pointer"
                                        >
                                            {ACCESS_LEVELS.map((level) => (
                                                <option key={level} value={level}>
                                                    {level}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="flex gap-3 px-6 py-5 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleAddMember}
                                        className="flex-1 px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
               <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 max-w-md border border-orange-100 shadow-sm">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Unlock Team Management</h3>
            <p className="text-gray-600 mb-6">Get premium access to add, manage, and control team permissions.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-150 shadow-sm inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Upgrade Now
            </button>
        </div>
    </div>
            )
            }
        </div>
    );
}