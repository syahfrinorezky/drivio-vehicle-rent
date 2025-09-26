import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="font-poppins">{children}</div>;
}

export default AuthLayout;
