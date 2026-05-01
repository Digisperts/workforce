"use client";

import { useOrg } from "../OrgContext";
// import { Check } from "lucide-react";
import FreeCard from "./component/FreeCard";
import PremiumCard from "./component/PremiumCard";



export default function BillingPage() {
  const { isPremium } = useOrg();

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h1 className="text-xl font-semibold mb-6">Plan & Billing</h1>

      <div className="grid md:grid-cols-2 gap-6 justify-between w-fit">

        {/* LEFT CARD */}
        {isPremium ? (
          <PremiumCard />
        ) : (
          <FreeCard isCurrent />
        )}

        {/* RIGHT CARD */}
        {isPremium ? (
          <FreeCard />
        ) : (
          <PremiumCard />
        )}

      </div>
    </div>
  );
}
