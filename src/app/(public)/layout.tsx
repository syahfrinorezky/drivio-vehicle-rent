import React from "react";
import PublicHeader from "@/components/layout/headers/PublicHeader";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-poppins">
      <PublicHeader />
      <main>{children}</main>
    </div>
  );
}

export default PublicLayout;
