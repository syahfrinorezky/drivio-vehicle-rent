import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import clsx from "clsx";
import "@/style/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Drivio - Rent Vehicles Easily",
  description:
    "Rent vehicles easily with Drivio. Choose from a wide range of vehicles and enjoy a seamless rental experience.",
  icons: {
    icon: "/logo/drivio-black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          poppins.variable,
          montserrat.variable,
          "font-sans antialiased"
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
