import { Check } from "lucide-react";

export default function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <Check className="w-4 h-4 text-orange-500 rounded-full bg-[#FFD7C9] " />
      <span>{text}</span>
    </div>
  );
}