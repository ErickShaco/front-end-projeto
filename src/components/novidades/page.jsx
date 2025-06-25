import React from 'react';
import Link from 'next/link';

const animes = [
  { id: 1, nome: "Jujutsu Kaisen", idioma: "Leg / Dub", capa: "/jujutsu-cover.jpg" },
  { id: 2, nome: "Demon Slayer", idioma: "Legendado", capa: "/demon-cover.jpg" },
  { id: 3, nome: "Attack on Titan", idioma: "Dublado", capa: "/aot-cover.jpg" },
  { id: 4, nome: "Naruto", idioma: "Dub / Leg", capa: "/naruto-cover.jpg" },
  { id: 5, nome: "One Piece", idioma: "Legendado", capa: "/onepiece-cover.jpg" }
];

export default function Novidades() {
  return (
    <section className="bg-slate-900 shadow-black shadow-lg  text-white py-10">
      <h2 className="text-3xl text-center mb-6">NOVIDADES</h2>
      <div className="flex justify-around gap-6 flex-wrap">
        {animes.map((anime) => (
          <Link
            href="/anime"
            key={anime.id}
            onClick={() => localStorage.setItem('animeSelecionado', JSON.stringify(anime))}
            className="w-[220px] h-[350px] bg-slate-700 rounded shadow-md flex flex-col justify-end cursor-pointer hover:bg-slate-600 transition overflow-hidden"
          >
            <div className="relative w-full h-full">
              <img
                src={anime.capa}
                alt={anime.nome}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
              />
              <div className="absolute bottom-0 left-0 w-full bg-slate-800 bg-opacity-90 p-2 text-center">
                <p className="text-xs">{anime.idioma}</p>
                <p className="text-sm font-semibold">{anime.nome}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}