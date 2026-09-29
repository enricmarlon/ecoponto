"use client";

import { useState } from "react";

interface Cooperativa {
  nome: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone?: string;
  plusCode?: string;
}

const cooperativas: Cooperativa[] = [
  {
    nome: "Ecoponto - Cachoeirinha RS",
    endereco: "R. Ary Rosa dos Santos, 397 - Distrito Industrial",
    cidade: "Cachoeirinha",
    estado: "RS",
    telefone: "(51) 3041-6218",
    plusCode: "3WQ5+V8",
  },
  {
    nome: "Ecoponto - Cachoeirinha RS",
    endereco: "R. Lindolfo Wagner, S/N - Vila Bom Principio",
    cidade: "Cachoeirinha",
    estado: "RS",
    telefone: "(51) 3041-6218",
    plusCode: "3W6C+MP",
  },
  {
    nome: "Biorecicle Alvorada",
    endereco: "R. Baronesa do Gravataí, 103 - Maria Regina",
    cidade: "Alvorada",
    estado: "RS",
    telefone: "(51) 98648-5515",
    plusCode: "2W6P+96",
  },
  {
    nome: "Ecoponto",
    endereco: "Jardim Krahe",
    cidade: "Viamão",
    estado: "RS",
    telefone: "(51) 3045-4780",
    plusCode: "WXC2+WC",
  },
  {
    nome: "S RECICLAGEM",
    endereco: "Av. Juca Batista, 2528 - Campo Novo",
    cidade: "Porto Alegre",
    estado: "RS",
    plusCode: "VQ2W+WC",
  },
  {
    nome: "Coleta Voluntaria",
    endereco: "R. Diretor Augusto Pestana, 2450 - Fátima",
    cidade: "Canoas",
    estado: "RS",
    telefone: "(51) 99643-5338",
    plusCode: "3Q2X+H2",
  },
  {
    nome: "Ecoponto Sudeste - Prefeitura de Canoas",
    endereco: "R. Paulo Fonteles (Lote João de Barro), 9 - Niterói",
    cidade: "Canoas",
    estado: "RS",
    plusCode: "2RVR+37",
  },
  {
    nome: "Ecoponto Rio Branco",
    endereco: "Rio Branco",
    cidade: "Canoas",
    estado: "RS",
    plusCode: "2RM4+6V",
  },
  {
    nome: "Coleta Seletiva Solidaria",
    endereco: "São Lucas",
    cidade: "Viamão",
    estado: "RS",
    plusCode: "WW5F+FC",
  },
  {
    nome: "COOPERTEC - Descarte de Lixo Eletrônico",
    endereco: "R. Primavera, 198 - Rio Branco",
    cidade: "Canoas",
    estado: "RS",
    telefone: "(51) 98416-9301",
    plusCode: "2RQC+HH",
  },
  {
    nome: "Reciclatudo Coleta Seletiva Ltda",
    endereco: "R. Gravataí, 1007 - Vila Imbui",
    cidade: "Cachoeirinha",
    estado: "RS",
    telefone: "(51) 3471-5544",
    plusCode: "2WR3+C8",
  },
  {
    nome: "UDC Cruzeiro do Sul (Ecoponto)",
    endereco: "R. Cruzeiro do Sul, 1445 - Santa Tereza",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3231-6064",
    plusCode: "WQGH+99",
  },
  {
    nome: "Associação de Reciclagem Ecológica Rubem Berta",
    endereco: "Estr. Antônio Severino, 1317 - Mário Quintana",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3366-9522",
    plusCode: "XWG2+RX",
  },
  {
    nome: "Ponto de coleta seletiva e vidro",
    endereco: "R. Americana, 563 - Americana",
    cidade: "Alvorada",
    estado: "RS",
    plusCode: "2W86+5V",
  },
  {
    nome: "Otser Gerenciamento De Resíduos Eletrônicos - Moinhos",
    endereco: "Moinhos de Vento",
    cidade: "Gravataí",
    estado: "RS",
    plusCode: "XQCX+H7",
  },
  {
    nome: "Otser Gerenciamento De Resíduos Eletrônicos - Jardim Lindoia",
    endereco: "Jardim Lindóia",
    cidade: "Porto Alegre",
    estado: "RS",
    plusCode: "XRRX+36",
  },
  {
    nome: "Coleta Seletiva | COOTRAVIPA",
    endereco: "R. Conselheiro Travassos - Floresta",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3231-6415",
    plusCode: "XQPR+7C",
  },
  {
    nome: "Coleta Fácil",
    endereco: "R. Santo Alfredo, 516 - São José",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 99721-4467",
    plusCode: "WRMM+CX",
  },
  {
    nome: "UDC Câncio Gomes (Ecoponto)",
    endereco: "Tv. Carmem, 111 - Moinhos de Vento",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3268-8330",
    plusCode: "XQJW+54",
  },
  {
    nome: "UDC Princesa Isabel (Unidade de Destino Certo - Ecoponto)",
    endereco: "Av. Ipiranga, 2765 - Santana",
    cidade: "Porto Alegre",
    estado: "RS",
    telefone: "(51) 3289-6821",
    plusCode: "XQ4X+9V",
  },
  {
    nome: "Ponto de Coleta Reciclus",
    endereco: "Passo d'Areia",
    cidade: "Porto Alegre",
    estado: "RS",
    plusCode: "XRPH+QJ",
  },
  {
    nome: "Descarte Eletrônico | Manasses Coleta Digital",
    endereco: "R. Periata, Qd 206 - lt 27 C-2 - Parque Amazonia",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "Sucata eletronica Tectudo",
    endereco: "Praça C-170, 41 - Jardim América",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "Ecoponto Lixo Eletrônico",
    endereco: "Rua CP 4 QD CP4, LT 3 - Res. Celina Park",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "COISAS & COISAS - INFORMÁTICA",
    endereco: "Esq - Rua 21, R. S, q62 - lt9 C4 - Vila Santa Helena",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "1° Ponto de Coleta de Resíduos",
    endereco: "Av. 28 de Junho - Goiânia Park Sul",
    cidade: "Aparecida de Goiânia",
    estado: "GO",
  },
  {
    nome: "Sucata Eletrônica Goiás",
    endereco: "Av. Brasil, Nº14 - Jardim Itaipú",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "CICLO VERDE - Gerenciamento de Resíduos",
    endereco: "Av. Gameleiras, 3620 - Parque Santa Maria",
    cidade: "Goiânia",
    estado: "GO",
  },
  {
    nome: "Descarte de lixos entulhos de obras e recicláveis",
    endereco: "R. JH-14, 185 - 1 - Jardim das Hortensias",
    cidade: "Goiânia",
    estado: "GO",
  },
];

export default function CooperativasPage() {
  const [busca, setBusca] = useState("");

  // Filtra as cooperativas com base no que foi digitado (pesquisa por cidade ou estado)
  const cooperativasFiltradas = cooperativas.filter((item) => {
    const termo = busca.toLowerCase();
    const cidadeMatch = item.cidade.toLowerCase().includes(termo);
    const estadoMatch = item.estado.toLowerCase().includes(termo);
    const nomeMatch = item.nome.toLowerCase().includes(termo);
    return cidadeMatch || estadoMatch || nomeMatch;
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Cooperativas e Ecopontos</h1>
        <p className="mt-2 text-neutral-600">
          Encontre locais de descarte e cooperativas parceiras para realizar o descarte correto dos seus resíduos.
        </p>

        {/* Caixa de Pesquisa */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Pesquise por cidade (ex: Porto Alegre) ou estado (ex: RS)..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 shadow-sm"
          />
        </div>
      </div>

      {/* Resultados */}
      {cooperativasFiltradas.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-300 p-8 text-center">
          <p className="text-neutral-500">Nenhuma cooperativa encontrada para &quot;{busca}&quot;.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {cooperativasFiltradas.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-xl border border-neutral-200 p-5 shadow-sm transition-shadow hover:shadow-md bg-white"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-lg text-emerald-700">{item.nome}</h2>
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
                    {item.cidade} - {item.estado}
                  </span>
                </div>
                
                <p className="mt-3 text-sm text-neutral-600">
                  <span className="font-medium text-neutral-800">Endereço:</span> {item.endereco}
                </p>

                {item.plusCode && (
                  <p className="mt-1 text-xs text-neutral-400 font-mono">
                    Plus Code: {item.plusCode}
                  </p>
                )}
              </div>

              {item.telefone && (
                <div className="mt-4 pt-3 border-t border-neutral-100 text-sm text-neutral-600">
                  <span className="font-medium text-neutral-800">Contato:</span> {item.telefone}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}