"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Importação dinâmica do mapa desativando o SSR (Server-Side Rendering)
const MapaDinamico = dynamic(() => import("./Mapa"), { ssr: false });

interface Cooperativa {
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone?: string;
  lat: number;
  lng: number;
}

const cooperativas: Cooperativa[] = [
  {
    nome: "Ecoponto",
    endereco: "Jardim Krahe",
    cidade: "Viamão",
    estado: "RS",
    telefone: "(51) 3045-4780",
    lat: -30.0125,
    lng: -51.0255,
  },
  {
    nome: "Ecoponto - Cachoeirinha RS",
    endereco: "R. Lindolfo Wagner, S/N - Vila Bom Principio",
    cidade: "Cachoeirinha",
    estado: "RS",
    telefone: "(51) 3041-6218",
    lat: -29.9542,
    lng: -51.0945,
  },
  {
    nome: "Biorecicle Alvorada",
    endereco: "R. Baronesa do Gravataí, 103 - Maria Regina",
    cidade: "Alvorada",
    estado: "RS",
    telefone: "(51) 98648-5515",
    lat: -30.0021,
    lng: -51.0823,
  },
  {
    nome: "S RECICLAGEM",
    endereco: "Av. Juca Batista, 2528 - Campo Novo",
    cidade: "Porto Alegre",
    estado: "RS",
    lat: -30.1345,
    lng: -51.2291,
  },
  {
    nome: "Coleta Voluntaria",
    endereco: "R. Diretor Augusto Pestana, 2450 - Fátima",
    cidade: "Canoas",
    estado: "RS",
    telefone: "(51) 99643-5338",
    lat: -29.9181,
    lng: -51.1782,
  },
  {
    nome: "UDC Cruzeiro do Sul (Ecoponto)",
    endereco: "R. Cruzeiro do Sul, 1445 - Santa Tereza",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3231-6064",
    lat: -30.0534,
    lng: -51.2189,
  },
  {
    nome: "Descarte Eletrônico | Manasses Coleta Digital",
    endereco: "R. Periata, Qd 206 - lt 27 C-2 - Parque Amazonia",
    cidade: "Goiânia",
    estado: "GO",
    lat: -16.7334,
    lng: -49.2645,
  },
  {
    nome: "Sucata eletronica Tectudo",
    endereco: "Praça C-170, 41 - Jardim América",
    cidade: "Goiânia",
    estado: "GO",
    lat: -16.7189,
    lng: -49.2812,
  },
];

export default function CooperativasPage() {
  const [busca, setBusca] = useState("");

  const cooperativasFiltradas = cooperativas.filter((item) => {
    const termo = busca.toLowerCase();
    const cidadeMatch = item.cidade.toLowerCase().includes(termo);
    const estadoMatch = item.estado.toLowerCase().includes(termo);
    const nomeMatch = item.nome.toLowerCase().includes(termo);
    return cidadeMatch || estadoMatch || nomeMatch;
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Cabeçalho / Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 mb-4">
          Rede de Atendimento
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
          Cooperativas e <span className="text-emerald-700">Ecopontos</span> 📍
        </h1>
        <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
          Encontre locais de descarte e cooperativas parceiras para realizar o descarte correto dos seus resíduos com segurança.
        </p>

        {/* Caixa de Pesquisa */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Pesquise por cidade (ex: Porto Alegre), estado (ex: RS) ou nome..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 shadow-md transition-all"
          />
        </div>
      </div>

      {/* 🗺️ MAPA INTERATIVO ISOLADO */}
      <MapaDinamico cooperativas={cooperativasFiltradas} />

      {/* Resultados em Cards */}
      {cooperativasFiltradas.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 p-10 text-center bg-white shadow-sm">
          <p className="text-neutral-500">Nenhuma cooperativa encontrada para &quot;{busca}&quot;.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {cooperativasFiltradas.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-200 bg-white"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="font-bold text-lg text-neutral-900 leading-snug">{item.nome}</h2>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-100 shrink-0">
                    {item.cidade} - {item.estado}
                  </span>
                </div>
                
                <p className="text-sm text-neutral-600 flex items-start gap-2 mt-2">
                  <span className="text-emerald-600 font-semibold shrink-0">Endereço:</span> 
                  <span>{item.endereco}</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-sm">
                <span className="text-neutral-500 font-medium">Contato:</span>
                <span className={`font-semibold ${item.telefone ? "text-neutral-800" : "text-neutral-400 italic"}`}>
                  {item.telefone ? item.telefone : "Não informado"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}