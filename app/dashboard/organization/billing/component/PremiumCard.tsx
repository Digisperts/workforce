import { useState } from "react";
import Feature from "./Feature";

interface ToggleProps {
  enabled: boolean;
  onChange: (val: boolean) => void;
}
function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-center gap-1 rounded-xs border border-[#e2d9d4] bg-[#f5f0ee] w-fit p-0.5 m-5 shrink-0">
      <button
        onClick={() => onChange(true)}
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
          }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(false)}
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${!enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
          }`}
      >
        Yearly
      </button>
    </div>
  );
}

export default function PremiumCard() {
  const [month, setMonth] = useState(true);


  return (
    <div className="border border-orange-500 rounded-lg p-5 shadow-md">
      <p className="text-sm text-orange-500 mb-2">Premium Plan</p>

      <h2 className="text-lg font-semibold">Premium plan</h2>
      <p className="text-2xl font-bold">$50 <span className="text-sm font-normal">per month</span></p>
      <Toggle enabled={month} onChange={setMonth} />

      <p className="text-[#8C462C] text-xs font-medium">Includes <span className="text-black"> Everything</span> in Free plan plus: </p>

      <div className="mt-4 space-y-2 text-sm">
        <Feature text="Premium Company Profile Page" />
        <Feature text="Unlimited job postings" />
        <Feature text="Advanced company analytics" />
        <Feature text="Skills tests for candidates" />
        <Feature text="Team management features" />
        <Feature text="Premium badge for credibility" />
        <Feature text="Search candidates without limits" />
        <Feature text="Unlimited access to global hiring toolkit" />
      </div>

      <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md text-sm">
        Upgrade to Premium
      </button>
    </div>
  );
}