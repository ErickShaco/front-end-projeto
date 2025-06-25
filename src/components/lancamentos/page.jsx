
import React from 'react';



export default function Lancamentos() {
  return (
    <section className="bg-slate-700 py-10">
      <h2 className="text-3xl text-center text-white mb-6">LANÇAMENTOS RECENTES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="bg-slate-900 rounded overflow-hidden">
            <div className="bg-slate-500 h-32"></div>
            <div className="p-3">
              <p className="text-xs text-slate-400">Nome do anime</p>
              <p className="text-sm text-white">Título do Episódio</p>
              <p className="text-xs text-slate-400">Episódio 2x1</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}