import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ポートフォリオ | coen エンジニアコミュニティ",
  description: "coen エンジニアコミュニティ ワークショップで作成したポートフォリオ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <h1 className="text-lg font-bold text-gray-700">My Portfolio</h1>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
        <footer className="border-t bg-white py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} coen エンジニアコミュニティ
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
