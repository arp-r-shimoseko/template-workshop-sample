import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ポートフォリオ | coen エンジニアコミュニティ",
  description: "coen エンジニアコミュニティ ワークショップで作成したポートフォリオ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="polka-vivid">
        <header className="border-b border-gray-300 bg-gray-200 shadow-md shadow-gray-400/30 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl px-4 py-4">
            <h1 className="text-lg font-bold tracking-wide text-red-500">
              My Portfolio
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-10">
          <div className="rounded-2xl border border-red-600/25 bg-white/93 p-8 shadow-2xl shadow-gray-500/35 backdrop-blur-md sm:p-10">
            {children}
          </div>
        </main>
        <footer className="border-t border-gray-300 bg-gray-200 py-6 text-center text-sm text-gray-600 backdrop-blur-sm">
          &copy; {new Date().getFullYear()} coen エンジニアコミュニティ
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
