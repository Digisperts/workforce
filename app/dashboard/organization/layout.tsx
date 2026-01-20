import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function OrganizationLayout({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}