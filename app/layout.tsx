import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ★ SEO対応 metadata
export const metadata: Metadata = {
  title: "にゃんこ大戦争 進化素材チェッカー｜獣石・獣結晶・マタタビ計算",
  description:
    "にゃんこ大戦争の進化素材（獣石・獣結晶・マタタビ・マタタビの種）をキャラ選択だけで自動計算。第4形態・謎のタマゴ・超獣討伐キャラにも対応した非公式ツールです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ★ lang を ja に変更（日本語サイトなので重要）
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
