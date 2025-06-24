"use client";

import Carrossel from "@/components/carrossel/page";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-screen">
          <Carrossel />
        </div>
      </main>
    </div>
  );
}
