"use client";

import { useAccount } from "wagmi";

export default function Home() {
   const { isConnected } = useAccount();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="min-h-screen px-8 py-0 pb-12 flex-1 flex flex-col items-center bg-white">
        <header className="w-full py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="hidden sm:inline text-xl font-bold">reown AppKit example app</div>
          </div>
          <div className="flex items-center">
            <w3m-button />
          </div>
        </header>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        </footer>
    </main>
  </div>
  );
}
