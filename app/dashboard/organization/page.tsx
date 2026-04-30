"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface ToggleProps {
  enabled: boolean;
  onChange: (val: boolean) => void;
}

interface SocialField {
  prefix: string;
  key: "twitter" | "facebook" | "instagram" | "linkedin";
  placeholder: string;
}

function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-xs border border-[#e2d9d4] bg-[#f5f0ee] p-0.5 shrink-0">
      <button
        onClick={() => onChange(true)}
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
        }`}
      >
        On
      </button>
      <button
        onClick={() => onChange(false)}
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          !enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
        }`}
      >
        Off
      </button>
    </div>
  );
}

const SOCIAL_FIELDS: SocialField[] = [
  { prefix: "x.com/", key: "twitter", placeholder: "username" },
  { prefix: "facebook.com/", key: "facebook", placeholder: "username" },
  { prefix: "instagram.com/", key: "instagram", placeholder: "username" },
  { prefix: "linkedin.company.com/", key: "linkedin", placeholder: "company" },
];

export default function AccountInfo() {
  const [email, setEmail] = useState("telktech@gmail.com");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const [twoStep, setTwoStep] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);

  const [language, setLanguage] = useState("English");

  const [socials, setSocials] = useState({
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  const handleSocialSave = (key: SocialField["key"]) => {
    console.log(`Saving ${key}:`, socials[key]);
  };

  return (
    <div className="rounded-2xl bg-white shadow-sm border border-[#ece6e2] p-5 md:p-8 space-y-10">
      <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] tracking-tight">
        Account Info
      </h2>

      {/* ── Account Security ─────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-[#1a1a1a] shrink-0">
            Account Security
          </h3>
          <div className="flex-1 h-px bg-[#ece6e2]" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <label className="text-sm text-[#6b5e58] font-medium md:w-36 md:shrink-0">
            Email address
          </label>
          <input
            type="email"
            value={email}
            disabled={!editingEmail}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:flex-1 rounded-lg border border-[#ddd5d0] bg-[#faf8f7] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none focus:border-[#e07a5f] focus:ring-2 focus:ring-[#e07a5f]/20 disabled:cursor-not-allowed disabled:opacity-70 transition"
          />
          <button
            onClick={() => setEditingEmail((prev) => !prev)}
            className="self-end md:self-auto shrink-0 rounded-lg bg-[#FFD7C9] px-4 py-2.5 text-xs font-semibold text-[#8C462C] hover:bg-[#e07a5f] hover:text-white transition-all duration-150"
          >
            {editingEmail ? "Save" : "Update"}
          </button>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <label className="text-sm text-[#6b5e58] font-medium md:w-36 md:shrink-0">
            Password
          </label>
          <div className="relative w-full md:flex-1">
            <input
              type={showPassword && editingPassword ? "text" : "password"}
              value={password}
              disabled={!editingPassword}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#ddd5d0] bg-[#faf8f7] px-4 py-2.5 pr-10 text-sm text-[#1a1a1a] outline-none focus:border-[#e07a5f] focus:ring-2 focus:ring-[#e07a5f]/20 disabled:cursor-not-allowed disabled:opacity-70 transition"
            />
            {editingPassword && (
              
              <button
                onClick={() => setShowPassword((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0857a] hover:text-[#e07a5f] transition"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            )}
          </div>
          <button
            onClick={() => setEditingPassword((prev) => !prev)}
            className="self-end md:self-auto shrink-0 rounded-lg bg-[#FFD7C9] px-4 py-2.5 text-xs font-semibold text-[#8C462C] hover:bg-[#e07a5f] hover:text-white transition-all duration-150"
          >
            {editingPassword ? "Save" : "Update"}
          </button>
        </div>

        {/* 2-step Verification */}
        <div className="flex items-start md:items-center justify-between gap-4 rounded-xl bg-[#faf8f7] border border-[#ece6e2] px-5 py-4">
          <div>
            <p className="text-sm font-semibold text-[#1a1a1a]">
              2-step Verification
            </p>
            <p className="text-xs text-[#9e8880] mt-0.5">
              Add an additional layer of security to your account during login
            </p>
          </div>
          <Toggle enabled={twoStep} onChange={setTwoStep} />
        </div>
      </section>

      {/* ── Notification Preferences ──────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-[#1a1a1a] shrink-0">
            Notification Preferences
          </h3>
          <div className="flex-1 h-px bg-[#ece6e2]" />
        </div>

        <div className="space-y-3">
          <div className="flex items-start md:items-center justify-between gap-4 rounded-xl bg-[#faf8f7] border border-[#ece6e2] px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Email Notifications
              </p>
              <p className="text-xs text-[#9e8880] mt-0.5">
                Get emails to find out what is going on when you are not online
              </p>
            </div>
            <Toggle enabled={emailNotif} onChange={setEmailNotif} />
          </div>

          <div className="flex items-start md:items-center justify-between gap-4 rounded-xl bg-[#faf8f7] border border-[#ece6e2] px-5 py-4">
            <div>
              <p className="text-sm font-semibold text-[#1a1a1a]">
                Push Notifications
              </p>
              <p className="text-xs text-[#9e8880] mt-0.5">
                Get push notifications in-app to find out what is going on when
                you are online
              </p>
            </div>
            <Toggle enabled={pushNotif} onChange={setPushNotif} />
          </div>
        </div>
      </section>

      {/* ── Languages ─────────────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-[#1a1a1a] shrink-0">
            Languages
          </h3>
          <div className="flex-1 h-px bg-[#ece6e2]" />
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <label className="text-sm text-[#6b5e58] font-medium md:w-48 md:shrink-0">
            Set default portal language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full md:flex-1 rounded-lg border border-[#ddd5d0] bg-[#faf8f7] px-4 py-2.5 text-sm text-[#1a1a1a] outline-none focus:border-[#e07a5f] focus:ring-2 focus:ring-[#e07a5f]/20 transition appearance-none cursor-pointer"
          >
            {["English", "Bengali", "Arabic", "French", "Spanish", "German"].map(
              (lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              )
            )}
          </select>
          <button className="self-end md:self-auto shrink-0 rounded-lg bg-[#FFD7C9] px-4 py-2.5 text-xs font-semibold text-[#8C462C] hover:bg-[#e07a5f] hover:text-white transition-all duration-150">
            Save changes
          </button>
        </div>
      </section>

      {/* ── Socials ───────────────────────────────────────────────────── */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-[#1a1a1a] shrink-0">
            Socials
          </h3>
          <div className="flex-1 h-px bg-[#ece6e2]" />
        </div>

        <div className="space-y-3">
          {SOCIAL_FIELDS.map(({ prefix, key, placeholder }) => (
            <div
              key={key}
              className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3"
            >
              <div className="flex flex-1 overflow-hidden rounded-lg border border-[#ddd5d0] bg-[#faf8f7] focus-within:border-[#e07a5f] focus-within:ring-2 focus-within:ring-[#e07a5f]/20 transition">
                <span className="flex items-center bg-[#ece6e2] px-3 text-xs text-[#9e8880] font-medium whitespace-nowrap select-none border-r border-[#ddd5d0]">
                  {prefix}
                </span>
                <input
                  type="text"
                  placeholder={placeholder}
                  value={socials[key]}
                  onChange={(e) =>
                    setSocials((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#c4b5af]"
                />
              </div>
              <button
                onClick={() => handleSocialSave(key)}
                className="self-end md:self-auto shrink-0 rounded-lg bg-[#FFD7C9] px-4 py-2.5 text-xs font-semibold text-[#8C462C] hover:bg-[#e07a5f] hover:text-white transition-all duration-150"
              >
                Save changes
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}