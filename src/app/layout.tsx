import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutDashboard, BookOpen, BarChart3, Settings, Zap } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BranCo! 2026 - Digital Detox Harness",
  description: "AI Improvement Harness & Strategy Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="app-container">
          <aside className="sidebar">
            <div className="sidebar-logo">
              <Zap size={28} color="var(--accent-primary)" />
              Harness
            </div>
            
            <nav className="nav-links">
              <Link href="/" className="nav-item active">
                <LayoutDashboard size={20} />
                Dashboard
              </Link>
              <Link href="/docs" className="nav-item">
                <BookOpen size={20} />
                Documents
              </Link>
              <Link href="/reports" className="nav-item">
                <BarChart3 size={20} />
                Reports
              </Link>
              <Link href="/settings" className="nav-item">
                <Settings size={20} />
                Settings
              </Link>
            </nav>
          </aside>
          
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
