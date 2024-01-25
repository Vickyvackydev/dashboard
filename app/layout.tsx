import DashboardUI from "@/components/dashboardUI";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Providers } from "@/provider/themeprovider";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-text_black">
        <Providers>
          <DashboardUI>
            <main>{children}</main>
          </DashboardUI>
        </Providers>
      </body>
    </html>
  );
}
