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
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(false)}
        className={`rounded-xs px-3 py-1 text-xs font-semibold transition-all duration-200 ${
          !enabled
            ? "bg-linear-to-b from-[#FF7F50] to-[#8C462C] text-white shadow-sm"
            : "text-[#a0857a] hover:text-[#e07a5f]"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}

export default function FreeCard({ isCurrent = false }: { isCurrent?: boolean }) {
  const [month, setMonth] = useState(true);
  return (
    <div className={`border rounded-lg p-5 ${isCurrent ? "border-orange-500 shadow-md" : "border-gray-200"}`}>
      <p className="text-sm text-orange-500 mb-2">
        {isCurrent ? "Current Plan" : "Other Plan"}
      </p>

      <h2 className="text-lg font-semibold">Free plan</h2>
      <p className="text-2xl font-bold">$0 <span className="text-sm font-normal">per month</span></p>
      <Toggle enabled={month} onChange={setMonth} />

      <div className="mt-4 space-y-2 text-sm">
        <Feature text="Basic company profile page" />
        <Feature text="Display of up to 3 job posts" />
        <Feature text="Access to standard company analytics (limited insights)" />
        <Feature text="No skills test for candidates" />
        <Feature text="No team management features" />
        <Feature text="No premium badge" />
        <Feature text="Candidate search is disabled" />
        <Feature text="Candidate search is disabled" />

      </div>

      {!isCurrent && (
        <button className="mt-6 w-full bg-gray-200 py-2 rounded-md text-sm">
          Use Free Plan
        </button>
      )}
    </div>
  );
}