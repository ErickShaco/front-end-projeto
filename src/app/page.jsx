"use client";

import Carrossel from "@/components/carrossel/page";
import Navbar from "@/components/navbar/page";
import Fundo from "@/components/fundo1/page";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />

        <Carrossel />
        <div className="flex justify-center items-center">
          <div>
            <img src="" alt="" />
          </div>
          <h1 className="text-8xl font-bold mt-10 mb-10 inline-block hover:scale-105 transition-all duration-300 cursor-pointer">
            氷 Animes
          </h1>
        </div>
        <Fundo />
      </main>
    </div>
  );
}
