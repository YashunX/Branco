import type { Metadata } from "next";
import { DM_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import {
  BookOpen,
  Compass,
  FileText,
  LayoutDashboard,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "BranCo! 2026 — 応援をつくりなおす",
  description: "BranCo! の調査、ナレッジ、生成結果をつなぐチームワークスペース",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${serif.variable}`}>
        <div className="app-container">
          <aside className="sidebar">
            <Link href="/" className="brand">
              <Sparkles size={18} />
              <span>
                BranCo!<small>15TH / 2026</small>
              </span>
            </Link>
            <nav>
              <Link href="/">
                <LayoutDashboard size={17} /> Overview
              </Link>
              <Link href="/research">
                <Compass size={17} /> Research log
              </Link>
              <Link href="/docs">
                <BookOpen size={17} /> Knowledge
              </Link>
              <Link href="/reports">
                <FileText size={17} /> Final report
              </Link>
              <Link href="/harness">
                <Workflow size={17} /> Improvement loop
              </Link>
            </nav>
            <div className="sidebar-footer">
              <span>THEME</span>
              <strong>応援</strong>
              <p>
                Harness Loop
                <br />
                #003 · Active
              </p>
            </div>
          </aside>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
