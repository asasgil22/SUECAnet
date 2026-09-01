"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameBoard from "../components/GameBoard";

export type TemaBaralho = {
  id: string;
  nome: string;
  tipo: string;
  cor: string;
  destaque: string;
  escudo: string;
  sigla: string;
};

// CATÁLOGO COLOSSAL: MÉTRICAS EXATAS DO SEU FINDER (48 BARALHOS)
const BARALHOS: TemaBaralho[] = [
  // GENÉRICOS (4)
  {
    id: "gen-dark",
    nome: "Midnight Blue",
    tipo: "Clássico",
    cor: "bg-slate-900",
    destaque: "text-slate-400",
    escudo: "",
    sigla: "♠",
  },
  {
    id: "gen-red",
    nome: "Crimson Red",
    tipo: "Clássico",
    cor: "bg-red-900",
    destaque: "text-red-400",
    escudo: "",
    sigla: "♥",
  },
  {
    id: "gen-green",
    nome: "Casino Green",
    tipo: "Clássico",
    cor: "bg-emerald-900",
    destaque: "text-emerald-400",
    escudo: "",
    sigla: "♣",
  },
  {
    id: "gen-gold",
    nome: "Royal Gold",
    tipo: "Clássico",
    cor: "bg-amber-700",
    destaque: "text-amber-400",
    escudo: "",
    sigla: "♦",
  },

  // PORTUGAL (4)
  {
    id: "pt-scp",
    nome: "Sporting CP",
    tipo: "Portugal",
    cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/sporting-cp.8b32e971.png",
    sigla: "SCP",
  },
  {
    id: "pt-fcp",
    nome: "FC Porto",
    tipo: "Portugal",
    cor: "bg-[repeating-linear-gradient(90deg,#1e40af_0px,#1e40af_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/fc-porto.b58f31f6.png",
    sigla: "FCP",
  },
  {
    id: "pt-slb",
    nome: "Benfica",
    tipo: "Portugal",
    cor: "bg-red-700",
    destaque: "text-red-400",
    escudo: "/escudos/benfica.3e4d3034.png",
    sigla: "SLB",
  },
  {
    id: "pt-bra",
    nome: "SC Braga",
    tipo: "Portugal",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/sc-braga.07de49c7.png",
    sigla: "SCB",
  },

  // BRASILEIRÃO SÉRIE A (20)
  {
    id: "br-bfr",
    nome: "Botafogo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/botafogo.e439f7a4.png",
    sigla: "BFR",
  },
  {
    id: "br-fla",
    nome: "Flamengo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/flamengo.9c3055f2.png",
    sigla: "CRF",
  },
  {
    id: "br-flu",
    nome: "Fluminense",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_15px,#fff_15px,#fff_20px,#991b1b_20px,#991b1b_35px,#fff_35px,#fff_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/fluminense.118d8b5e.png",
    sigla: "FFC",
  },
  {
    id: "br-vas",
    nome: "Vasco da Gama",
    tipo: "Série A",
    cor: "bg-[linear-gradient(135deg,#111_40%,#fff_40%,#fff_50%,#111_50%)]",
    destaque: "text-gray-400",
    escudo: "/escudos/vasco-da-gama.74746cfd.png",
    sigla: "CRVG",
  },
  {
    id: "br-pal",
    nome: "Palmeiras",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#14532d_0px,#14532d_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/palmeiras.9ab1d558.png",
    sigla: "SEP",
  },
  {
    id: "br-cor",
    nome: "Corinthians",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(45deg,#111_0px,#111_15px,#fff_15px,#fff_30px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/corinthians.c51ae739.png",
    sigla: "SCCP",
  },
  {
    id: "br-spo",
    nome: "São Paulo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
    destaque: "text-red-600",
    escudo: "/escudos/sao-paulo.468eaeb3.png",
    sigla: "SPFC",
  },
  {
    id: "br-san",
    nome: "Santos",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/santos.5ea20e58.png",
    sigla: "SFC",
  },
  {
    id: "br-cam",
    nome: "Atlético-MG",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/atletico-mineiro.c5c81922.png",
    sigla: "CAM",
  },
  {
    id: "br-cru",
    nome: "Cruzeiro",
    tipo: "Série A",
    cor: "bg-blue-800",
    destaque: "text-blue-400",
    escudo: "/escudos/cruzeiro.6c188ab8.png",
    sigla: "CEC",
  },
  {
    id: "br-gre",
    nome: "Grêmio",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#111_15px,#111_30px,#fff_30px,#fff_35px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/gremio.d252cec9.png",
    sigla: "FBPA",
  },
  {
    id: "br-sci",
    nome: "Internacional",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/internacional.82f72a2f.png",
    sigla: "SCI",
  },
  {
    id: "br-cap",
    nome: "Athletico-PR",
    tipo: "Série A",
    cor: "bg-white",
    destaque: "text-red-600",
    escudo: "/escudos/athletico-paranaense.15469cc7.png",
    sigla: "CAP",
  },
  {
    id: "br-bah",
    nome: "Bahia",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/bahia.ac6d69f5.png",
    sigla: "ECB",
  },
  {
    id: "br-vit",
    nome: "Vitória",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/vitoria.227522d4.png",
    sigla: "ECV",
  },
  {
    id: "br-fec",
    nome: "Fortaleza",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/fortaleza.5f34e5ff.png",
    sigla: "FEC",
  },
  {
    id: "br-csc",
    nome: "Ceará",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/ceara.ea9d0cdd.png",
    sigla: "CSC",
  },
  {
    id: "br-juv",
    nome: "Juventude",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/juventude.fe8abf7c.png",
    sigla: "ECJ",
  },
  {
    id: "br-cri",
    nome: "Criciúma",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_15px,#111_15px,#111_30px,#fff_30px,#fff_45px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/criciuma.d06aa52e.png",
    sigla: "CRI",
  },
  {
    id: "br-ago",
    nome: "Atlético-GO",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/atletico-goianiense.4eadd950.png",
    sigla: "ACG",
  },

  // BRASILEIRÃO SÉRIE B (20)
  {
    id: "br-spo-b",
    nome: "Sport Recife",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/sport-recife.42103cc4.png",
    sigla: "SCR",
  },
  {
    id: "br-goi",
    nome: "Goiás",
    tipo: "Série B",
    cor: "bg-green-700",
    destaque: "text-white",
    escudo: "/escudos/goias.e5a0bc09.png",
    sigla: "GEC",
  },
  {
    id: "br-cfc",
    nome: "Coritiba",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/coritiba.6d282e13.png",
    sigla: "CFC",
  },
  {
    id: "br-ame",
    nome: "América-MG",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#111_20px,#111_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/america-mineiro.c851fba8.png",
    sigla: "AFC",
  },
  {
    id: "br-crb",
    nome: "CRB",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/crb.f44e564b.png",
    sigla: "CRB",
  },
  {
    id: "br-ava",
    nome: "Avaí",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#1e3a8a_0px,#1e3a8a_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/avai.cdb69a77.png",
    sigla: "AFC",
  },
  {
    id: "br-ope",
    nome: "Operário-PR",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/operario-ferroviario.9fc8aa8a.png",
    sigla: "OFEC",
  },
  {
    id: "br-mir",
    nome: "Mirassol",
    tipo: "Série B",
    cor: "bg-yellow-500",
    destaque: "text-green-800",
    escudo: "/escudos/mirassol.3da1a222.png",
    sigla: "MFC",
  },
  {
    id: "br-nov",
    nome: "Novorizontino",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_20px,#111_20px,#111_40px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/novorizontino.689cca10.png",
    sigla: "GFN",
  },
  {
    id: "br-vil",
    nome: "Vila Nova",
    tipo: "Série B",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/vila-nova.cbb31747.png",
    sigla: "VNFC",
  },
  {
    id: "br-cha",
    nome: "Chapecoense",
    tipo: "Série B",
    cor: "bg-green-600",
    destaque: "text-white",
    escudo: "/escudos/chapecoense.7256ba28.png",
    sigla: "ACF",
  },
  {
    id: "br-pon",
    nome: "Ponte Preta",
    tipo: "Série B",
    cor: "bg-[linear-gradient(135deg,#fff_40%,#111_40%,#111_60%,#fff_60%)]",
    destaque: "text-gray-400",
    escudo: "/escudos/ponte-preta.211c18b1.png",
    sigla: "AAPP",
  },
  {
    id: "br-gua",
    nome: "Guarani",
    tipo: "Série B",
    cor: "bg-green-600",
    destaque: "text-white",
    escudo: "/escudos/guarani.88642ff3.png",
    sigla: "GFC",
  },
  {
    id: "br-pay",
    nome: "Paysandu",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#3b82f6_0px,#3b82f6_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-400",
    escudo: "/escudos/paysandu.d4c75168.png",
    sigla: "PSC",
  },
  {
    id: "br-ama",
    nome: "Amazonas",
    tipo: "Série B",
    cor: "bg-yellow-500",
    destaque: "text-black",
    escudo: "/escudos/amazonas.c47d0b8c.png",
    sigla: "AMZ",
  },
  {
    id: "br-itu",
    nome: "Ituano",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/ituano.8c844d7e.png",
    sigla: "IFC",
  },
  {
    id: "br-bsp",
    nome: "Botafogo-SP",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
    destaque: "text-red-600",
    escudo: "/escudos/botafogo-sp.50f2da52.png",
    sigla: "BFC",
  },
  {
    id: "br-bru",
    nome: "Brusque",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#eab308_15px,#eab308_30px,#15803d_30px,#15803d_45px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/brusque.1c6f9af9.png",
    sigla: "BFC",
  },
  {
    id: "br-tom",
    nome: "Tombense",
    tipo: "Série B",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/tombense.daebec7f.png",
    sigla: "TFC",
  },
  {
    id: "br-nau",
    nome: "Náutico",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/nautico.c4fb9d71.png",
    sigla: "CNC",
  },
];

const validarCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  let soma = 0,
    resto;
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.substring(10, 11));
};

const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const maskData = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
};

export default function Home() {
  const [usuarioLogado, setUsuarioLogado] = useState<{
    id: string;
    nome: string;
    usuario: string;
  } | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [erroAuth, setErroAuth] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    usuario: "",
    senha: "",
  });

  const [salaSelecionada, setSalaSelecionada] = useState("SALA-01");
  const [temaIndex, setTemaIndex] = useState(0);
  const [jogando, setJogando] = useState(false);

  const temaSelecionado = BARALHOS[temaIndex];

  useEffect(() => {
    const salvo = localStorage.getItem("@suecabet:user");
    if (salvo) setUsuarioLogado(JSON.parse(salvo));
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErroAuth("");
    setLoading(true);

    if (!isLogin && !validarCPF(form.cpf)) {
      setErroAuth("CPF inválido. Verifique os números informados.");
      setLoading(false);
      return;
    }

    const endpoint = isLogin ? "/api/login" : "/api/register";
    try {
      const res = await fetch(`http://localhost:3001${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      localStorage.setItem("@suecabet:user", JSON.stringify(data.user));
      setUsuarioLogado(data.user);
    } catch (err: any) {
      setErroAuth(err.message);
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("@suecabet:user");
    setUsuarioLogado(null);
  };

  const nextTema = () => setTemaIndex((prev) => (prev + 1) % BARALHOS.length);
  const prevTema = () =>
    setTemaIndex((prev) => (prev - 1 + BARALHOS.length) % BARALHOS.length);

  const iniciarJogo = (modo: "online" | "offline") => {
    setSalaSelecionada(modo === "online" ? "SALA-01" : "TREINO-LOCAL");
    setJogando(true);
  };

  if (jogando && usuarioLogado) {
    return (
      <div className="w-screen h-screen bg-[#0b1510] overflow-hidden">
        <GameBoard
          salaId={salaSelecionada}
          tema={temaSelecionado}
          nomeJogador={usuarioLogado.nome}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a07] text-white flex items-center justify-center relative overflow-hidden font-sans p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {!usuarioLogado ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-2xl border border-emerald-500/30 p-8 rounded-[2rem] shadow-[0_0_80px_rgba(16,185,129,0.15)]"
          >
            <div className="flex justify-center mb-6 text-5xl drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
              ♠️
            </div>

            <h1 className="text-4xl font-black text-center text-white tracking-tight mb-2">
              SUECA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                bet
              </span>
            </h1>
            <p className="text-center text-white/50 text-sm mb-8">
              {isLogin
                ? "Faça login para acessar as mesas."
                : "Cadastre-se no clube."}
            </p>

            <form onSubmit={handleAuth} className="flex flex-col gap-4">
              {!isLogin && (
                <>
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                  />

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="CPF"
                      required
                      value={form.cpf}
                      onChange={(e) =>
                        setForm({ ...form, cpf: maskCPF(e.target.value) })
                      }
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                    />
                    <div className="mt-2 bg-rose-500/10 border border-rose-500/30 p-3 rounded-lg flex items-start gap-3">
                      <span className="text-lg">🔞</span>
                      <p className="text-[10px] text-rose-200/80 leading-relaxed font-medium">
                        Aviso Legal: Jogos de azar são estritamente proibidos
                        para menores de 18 anos. O CPF é obrigatório.
                      </p>
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Data de Nasc. (DD/MM/AAAA)"
                    required
                    value={form.dataNascimento}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        dataNascimento: maskData(e.target.value),
                      })
                    }
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
                  />
                </>
              )}

              <input
                type="text"
                placeholder="Usuário"
                required
                value={form.usuario}
                onChange={(e) =>
                  setForm({ ...form, usuario: e.target.value.toLowerCase() })
                }
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
              />
              <input
                type="password"
                placeholder="Senha"
                required
                value={form.senha}
                onChange={(e) => setForm({ ...form, senha: e.target.value })}
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 transition-colors"
              />

              {erroAuth && (
                <p className="text-rose-400 text-xs text-center font-bold">
                  {erroAuth}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-black py-4 rounded-xl mt-4 hover:scale-[1.02] shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all"
              >
                {loading
                  ? "Processando..."
                  : isLogin
                    ? "ENTRAR NO CLUBE"
                    : "CRIAR CONTA VIP"}
              </button>
            </form>

            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErroAuth("");
              }}
              className="w-full text-center text-xs text-white/40 hover:text-emerald-400 font-bold mt-6 transition-colors"
            >
              {isLogin
                ? "Não tem conta? Cadastre-se"
                : "Já é membro? Faça login"}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="lobby"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6"
          >
            <div className="absolute top-[-60px] right-0 flex items-center gap-4">
              <span className="text-white/40 text-sm font-medium">
                Logado como{" "}
                <strong className="text-emerald-400">
                  {usuarioLogado.nome.split(" ")[0]}
                </strong>
              </span>
              <button
                onClick={logout}
                className="text-white/30 hover:text-rose-400 text-xs font-bold uppercase tracking-widest transition-colors border border-white/10 px-4 py-1.5 rounded-full hover:bg-white/5"
              >
                Sair
              </button>
            </div>

            <div className="flex-1 flex flex-col items-start w-full">
              <p className="text-emerald-500 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-3">
                A mesa está pronta
              </p>
              <h1 className="text-6xl sm:text-7xl font-black text-white tracking-tighter mb-12">
                SUECA
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  bet
                </span>
              </h1>

              <div className="flex flex-col gap-4 w-full max-w-sm">
                <button
                  onClick={() => iniciarJogo("offline")}
                  className="group w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] flex items-center gap-5 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl group-hover:scale-110 transition-transform">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">
                      Jogar com Robôs
                    </h3>
                    <p className="text-white/40 text-xs font-medium">
                      Treinamento Local Offline
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => iniciarJogo("online")}
                  className="group w-full bg-white/5 border border-white/10 p-5 rounded-[1.5rem] flex items-center gap-5 hover:bg-white/10 hover:border-emerald-500/40 transition-all text-left shadow-[0_0_0_rgba(52,211,153,0)] hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xl group-hover:scale-110 transition-transform">
                    🌐
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">
                      Jogar Online
                    </h3>
                    <p className="text-white/40 text-xs font-medium">
                      Multijogador em Tempo Real
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className="w-full md:w-[400px] flex flex-col items-center">
              <div className="bg-[#0b1510]/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] w-full flex flex-col items-center shadow-2xl">
                <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-bold mb-8">
                  Design do Baralho
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={temaSelecionado.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className={`relative w-40 h-56 rounded-[1.25rem] shadow-[0_20px_40px_rgba(0,0,0,0.6)] border border-white/20 bg-cover bg-center overflow-hidden flex items-center justify-center ${temaSelecionado.cor}`}
                  >
                    {temaSelecionado.escudo ? (
                      <img
                        src={temaSelecionado.escudo}
                        alt={temaSelecionado.sigla}
                        className="w-20 h-20 object-contain drop-shadow-2xl z-10 opacity-95"
                      />
                    ) : (
                      <span className="font-serif text-5xl font-bold text-white/50 z-10 drop-shadow-lg">
                        {temaSelecionado.sigla}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-black/20 pointer-events-none z-20"></div>
                    <div className="absolute inset-0 rounded-[1.25rem] shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] pointer-events-none z-30"></div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between w-full mt-10 px-2">
                  <button
                    onClick={prevTema}
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors border border-white/5 text-lg"
                  >
                    &lt;
                  </button>
                  <div className="text-center px-4 w-48 overflow-hidden">
                    <p className="font-bold text-white text-lg tracking-wide whitespace-nowrap overflow-ellipsis">
                      {temaSelecionado.nome}
                    </p>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold mt-1">
                      {temaSelecionado.tipo}
                    </p>
                  </div>
                  <button
                    onClick={nextTema}
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors border border-white/5 text-lg"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
