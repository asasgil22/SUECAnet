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

const BARALHOS: TemaBaralho[] = [
  { id: "gen-dark", nome: "Midnight Blue", tipo: "Clássico", cor: "bg-slate-900", destaque: "text-slate-400", escudo: "", sigla: "♠" },
  { id: "gen-red", nome: "Crimson Red", tipo: "Clássico", cor: "bg-red-900", destaque: "text-red-400", escudo: "", sigla: "♥" },
  { id: "gen-green", nome: "Casino Green", tipo: "Clássico", cor: "bg-emerald-900", destaque: "text-emerald-400", escudo: "", sigla: "♣" },
  { id: "gen-gold", nome: "Royal Gold", tipo: "Clássico", cor: "bg-amber-700", destaque: "text-amber-400", escudo: "", sigla: "♦" },
  { id: "pt-scp", nome: "Sporting CP", tipo: "Portugal", cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]", destaque: "text-green-500", escudo: "/escudos/sporting-cp.8b32e971.png", sigla: "SCP" },
  { id: "pt-fcp", nome: "FC Porto", tipo: "Portugal", cor: "bg-[repeating-linear-gradient(90deg,#1e40af_0px,#1e40af_20px,#fff_20px,#fff_40px)]", destaque: "text-blue-500", escudo: "/escudos/fc-porto.b58f31f6.png", sigla: "FCP" },
  { id: "pt-slb", nome: "Benfica", tipo: "Portugal", cor: "bg-red-700", destaque: "text-red-400", escudo: "/escudos/benfica.3e4d3034.png", sigla: "SLB" },
  { id: "pt-bra", nome: "SC Braga", tipo: "Portugal", cor: "bg-red-600", destaque: "text-white", escudo: "/escudos/sc-braga.07de49c7.png", sigla: "SCB" },
  { id: "br-bfr", nome: "Botafogo", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]", destaque: "text-gray-400", escudo: "/escudos/botafogo.e439f7a4.png", sigla: "BFR" },
  { id: "br-fla", nome: "Flamengo", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(0deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]", destaque: "text-red-500", escudo: "/escudos/flamengo.9c3055f2.png", sigla: "CRF" },
  { id: "br-flu", nome: "Fluminense", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_15px,#fff_15px,#fff_20px,#991b1b_20px,#991b1b_35px,#fff_35px,#fff_40px)]", destaque: "text-red-600", escudo: "/escudos/fluminense.118d8b5e.png", sigla: "FFC" },
  { id: "br-vas", nome: "Vasco da Gama", tipo: "Brasil", cor: "bg-[linear-gradient(135deg,#111_40%,#fff_40%,#fff_50%,#111_50%)]", destaque: "text-gray-400", escudo: "/escudos/vasco-da-gama.74746cfd.png", sigla: "CRVG" },
  { id: "br-pal", nome: "Palmeiras", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(0deg,#14532d_0px,#14532d_20px,#fff_20px,#fff_40px)]", destaque: "text-green-500", escudo: "/escudos/palmeiras.9ab1d558.png", sigla: "SEP" },
  { id: "br-cor", nome: "Corinthians", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(45deg,#111_0px,#111_15px,#fff_15px,#fff_30px)]", destaque: "text-gray-400", escudo: "/escudos/corinthians.c51ae739.png", sigla: "SCCP" },
  { id: "br-spo", nome: "São Paulo", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]", destaque: "text-red-600", escudo: "/escudos/sao-paulo.468eaeb3.png", sigla: "SPFC" },
  { id: "br-san", nome: "Santos", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(0deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]", destaque: "text-gray-400", escudo: "/escudos/santos.5ea20e58.png", sigla: "SFC" },
  { id: "br-cam", nome: "Atlético-MG", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]", destaque: "text-gray-400", escudo: "/escudos/atletico-mineiro.c5c81922.png", sigla: "CAM" },
  { id: "br-cru", nome: "Cruzeiro", tipo: "Brasil", cor: "bg-blue-800", destaque: "text-blue-400", escudo: "/escudos/cruzeiro.6c188ab8.png", sigla: "CEC" },
  { id: "br-gre", nome: "Grêmio", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#111_15px,#111_30px,#fff_30px,#fff_35px)]", destaque: "text-blue-500", escudo: "/escudos/gremio.d252cec9.png", sigla: "FBPA" },
  { id: "br-sci", nome: "Internacional", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]", destaque: "text-red-500", escudo: "/escudos/internacional.82f72a2f.png", sigla: "SCI" },
  { id: "br-cap", nome: "Athletico-PR", tipo: "Brasil", cor: "bg-white", destaque: "text-red-600", escudo: "/escudos/athletico-paranaense.15469cc7.png", sigla: "CAP" },
  { id: "br-bah", nome: "Bahia", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]", destaque: "text-blue-500", escudo: "/escudos/bahia.ac6d69f5.png", sigla: "ECB" },
  { id: "br-vit", nome: "Vitória", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]", destaque: "text-red-500", escudo: "/escudos/vitoria.227522d4.png", sigla: "ECV" },
  { id: "br-fec", nome: "Fortaleza", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]", destaque: "text-blue-500", escudo: "/escudos/fortaleza.5f34e5ff.png", sigla: "FEC" },
  { id: "br-csc", nome: "Ceará", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]", destaque: "text-gray-400", escudo: "/escudos/ceara.ea9d0cdd.png", sigla: "CSC" },
  { id: "br-juv", nome: "Juventude", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#fff_20px,#fff_40px)]", destaque: "text-green-500", escudo: "/escudos/juventude.fe8abf7c.png", sigla: "ECJ" },
  { id: "br-cri", nome: "Criciúma", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_15px,#111_15px,#111_30px,#fff_30px,#fff_45px)]", destaque: "text-yellow-500", escudo: "/escudos/criciuma.d06aa52e.png", sigla: "CRI" },
  { id: "br-ago", nome: "Atlético-GO", tipo: "Brasil", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]", destaque: "text-red-500", escudo: "/escudos/atletico-goianiense.4eadd950.png", sigla: "ACG" },
  { id: "br-spo-b", nome: "Sport Recife", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]", destaque: "text-red-600", escudo: "/escudos/sport-recife.42103cc4.png", sigla: "SCR" },
  { id: "br-goi", nome: "Goiás", tipo: "Série B", cor: "bg-green-700", destaque: "text-white", escudo: "/escudos/goias.e5a0bc09.png", sigla: "GEC" },
  { id: "br-cfc", nome: "Coritiba", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]", destaque: "text-green-500", escudo: "/escudos/coritiba.6d282e13.png", sigla: "CFC" },
  { id: "br-ame", nome: "América-MG", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#111_20px,#111_40px)]", destaque: "text-green-500", escudo: "/escudos/america-mineiro.c851fba8.png", sigla: "AFC" },
  { id: "br-crb", nome: "CRB", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#fff_20px,#fff_40px)]", destaque: "text-red-600", escudo: "/escudos/crb.f44e564b.png", sigla: "CRB" },
  { id: "br-ava", nome: "Avaí", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#1e3a8a_0px,#1e3a8a_20px,#fff_20px,#fff_40px)]", destaque: "text-blue-500", escudo: "/escudos/avai.cdb69a77.png", sigla: "AFC" },
  { id: "br-ope", nome: "Operário-PR", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]", destaque: "text-gray-400", escudo: "/escudos/operario-ferroviario.9fc8aa8a.png", sigla: "OFEC" },
  { id: "br-mir", nome: "Mirassol", tipo: "Série B", cor: "bg-yellow-500", destaque: "text-green-800", escudo: "/escudos/mirassol.3da1a222.png", sigla: "MFC" },
  { id: "br-nov", nome: "Novorizontino", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_20px,#111_20px,#111_40px)]", destaque: "text-yellow-500", escudo: "/escudos/novorizontino.689cca10.png", sigla: "GFN" },
  { id: "br-vil", nome: "Vila Nova", tipo: "Série B", cor: "bg-red-600", destaque: "text-white", escudo: "/escudos/vila-nova.cbb31747.png", sigla: "VNFC" },
  { id: "br-cha", nome: "Chapecoense", tipo: "Série B", cor: "bg-green-600", destaque: "text-white", escudo: "/escudos/chapecoense.7256ba28.png", sigla: "ACF" },
  { id: "br-pon", nome: "Ponte Preta", tipo: "Série B", cor: "bg-[linear-gradient(135deg,#fff_40%,#111_40%,#111_60%,#fff_60%)]", destaque: "text-gray-400", escudo: "/escudos/ponte-preta.211c18b1.png", sigla: "AAPP" },
  { id: "br-gua", nome: "Guarani", tipo: "Série B", cor: "bg-green-600", destaque: "text-white", escudo: "/escudos/guarani.88642ff3.png", sigla: "GFC" },
  { id: "br-pay", nome: "Paysandu", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#3b82f6_0px,#3b82f6_20px,#fff_20px,#fff_40px)]", destaque: "text-blue-400", escudo: "/escudos/paysandu.d4c75168.png", sigla: "PSC" },
  { id: "br-ama", nome: "Amazonas", tipo: "Série B", cor: "bg-yellow-500", destaque: "text-black", escudo: "/escudos/amazonas.c47d0b8c.png", sigla: "AMZ" },
  { id: "br-itu", nome: "Ituano", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]", destaque: "text-red-500", escudo: "/escudos/ituano.8c844d7e.png", sigla: "IFC" },
  { id: "br-bsp", nome: "Botafogo-SP", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]", destaque: "text-red-600", escudo: "/escudos/botafogo-sp.50f2da52.png", sigla: "BFC" },
  { id: "br-bru", nome: "Brusque", tipo: "Série B", cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#eab308_15px,#eab308_30px,#15803d_30px,#15803d_45px)]", destaque: "text-yellow-500", escudo: "/escudos/brusque.1c6f9af9.png", sigla: "BFC" },
  { id: "br-tom", nome: "Tombense", tipo: "Série B", cor: "bg-red-600", destaque: "text-white", escudo: "/escudos/tombense.daebec7f.png", sigla: "TFC" },
  { id: "br-nau", nome: "Náutico", tipo: "Série B", cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]", destaque: "text-red-500", escudo: "/escudos/nautico.c4fb9d71.png", sigla: "CNC" },
];

const CATEGORIAS_SALAS = [
  { id: "SALA-INICIANTE", nome: "Iniciante", buyIn: 25, icone: "🥉", pot: 100, cor: "from-amber-700 to-amber-900" },
  { id: "SALA-INTERMEDIARIO", nome: "Intermediário", buyIn: 50, icone: "🥈", pot: 200, cor: "from-slate-400 to-slate-600" },
  { id: "SALA-PRO", nome: "Profissional", buyIn: 100, icone: "🥇", pot: 400, cor: "from-yellow-400 to-amber-600" }
];

const validarCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  let soma = 0, resto;
  for (let i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10))) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === parseInt(cpf.substring(10, 11));
};

const maskCPF = (value: string) => value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
const maskData = (value: string) => value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{4})\d+?$/, "$1");

export default function Home() {
  const [usuarioLogado, setUsuarioLogado] = useState<{ id: string; nome: string; usuario: string; moedas: number } | null>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [erroAuth, setErroAuth] = useState("");
  const [loading, setLoading] = useState(false);
  const [bonusAlerta, setBonusAlerta] = useState(false);

  const [form, setForm] = useState({ nome: "", cpf: "", dataNascimento: "", email: "", usuario: "", senha: "" });

  const [salaDaPartida, setSalaDaPartida] = useState("");
  const [buyInPartida, setBuyInPartida] = useState(0);
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
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      localStorage.setItem("@suecabet:user", JSON.stringify(data.user));
      setUsuarioLogado(data.user);
      if (data.bonusRecebido) {
        setBonusAlerta(true);
        setTimeout(() => setBonusAlerta(false), 5000);
      }
    } catch (err: any) { setErroAuth(err.message); }
    setLoading(false);
  };

  const resgatarEmergencia = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/resgate`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: usuarioLogado?.id })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      const atualizado = { ...usuarioLogado!, moedas: data.moedas };
      setUsuarioLogado(atualizado);
      localStorage.setItem("@suecabet:user", JSON.stringify(atualizado));
      alert("Resgate de 50 moedas efetuado com sucesso!");
    } catch (e: any) { alert(e.message); }
  };

  const logout = () => {
    localStorage.removeItem("@suecabet:user");
    setUsuarioLogado(null);
  };

  const nextTema = () => setTemaIndex((prev) => (prev + 1) % BARALHOS.length);
  const prevTema = () => setTemaIndex((prev) => (prev - 1 + BARALHOS.length) % BARALHOS.length);

  const iniciarJogo = (salaId: string, buyIn: number) => {
    if (usuarioLogado && usuarioLogado.moedas < buyIn && salaId !== "TREINO-LOCAL") {
      alert(`Saldo insuficiente! Você precisa de ${buyIn} SuecaCoins para entrar na sala.`);
      return;
    }
    setSalaDaPartida(salaId);
    setBuyInPartida(buyIn);
    setJogando(true);
  };

  if (jogando && usuarioLogado) {
    return (
      <div className="w-screen h-screen bg-[#0b1510] overflow-hidden">
        <GameBoard salaId={salaDaPartida} tema={temaSelecionado} nomeJogador={usuarioLogado.nome} userId={usuarioLogado.id} buyIn={buyInPartida} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a07] text-white flex items-center justify-center relative overflow-hidden font-sans p-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {bonusAlerta && (
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-0 z-50 bg-emerald-500 text-black font-bold px-6 py-3 rounded-full shadow-lg">
            🎉 Bônus Diário Recebido: +25 SuecaCoins!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!usuarioLogado ? (
          <motion.div key="auth" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="relative z-10 w-full max-w-md bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-3xl border border-emerald-500/40 p-8 rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 pointer-events-none"></div>
            <div className="flex justify-center mb-6 text-6xl drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-pulse relative z-10">♠️</div>

            <h1 className="text-4xl font-black text-center text-white tracking-widest mb-2 relative group z-10">
              SUECA<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">bet</span>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </h1>
            <div className="relative z-20">
              <p className="text-center text-white/60 text-sm mb-8 font-medium tracking-wide">
                {isLogin ? "Faça login para acessar as mesas." : "Cadastre-se no clube."}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-8"></div>
            </div>

            <form onSubmit={handleAuth} className="flex flex-col gap-4 relative z-20">
              {!isLogin && (
                <>
                  <input type="text" placeholder="Nome Completo" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />
                  <div className="relative group">
                    <input type="text" placeholder="CPF" required value={form.cpf} onChange={(e) => setForm({ ...form, cpf: maskCPF(e.target.value) })} className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />
                    <div className="mt-2 bg-linear-to-br from-rose-500/15 to-rose-600/10 border border-rose-500/40 p-3 rounded-xl flex items-start gap-3 shadow-lg shadow-rose-500/10 group-hover:shadow-rose-500/20 transition-all duration-300">
                      <span className="text-lg animate-pulse">🔞</span>
                      <p className="text-[10px] text-rose-200/90 leading-relaxed font-semibold tracking-tight">Aviso Legal: Jogos de azar são estritamente proibidos para menores de 18 anos. O CPF é obrigatório.</p>
                    </div>
                  </div>
                  <input type="text" placeholder="Data de Nasc. (DD/MM/AAAA)" required value={form.dataNascimento} onChange={(e) => setForm({ ...form, dataNascimento: maskData(e.target.value) })} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />
                  <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />
                </>
              )}
              <input type="text" placeholder="Usuário" required value={form.usuario} onChange={(e) => setForm({ ...form, usuario: e.target.value.toLowerCase() })} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />
              <input type="password" placeholder="Senha" required value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20" />

              {erroAuth && <div className="bg-linear-to-r from-rose-500/20 to-red-500/20 border border-rose-500/50 p-3 rounded-lg text-rose-300 text-xs text-center font-bold shadow-lg shadow-rose-500/10 animate-pulse">❌ {erroAuth}</div>}

              <button type="submit" disabled={loading} className="relative w-full bg-linear-to-r from-emerald-500 to-emerald-400 text-black font-black py-4 rounded-xl mt-4 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-emerald-500/40 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition-all duration-200 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-400/0 via-white/20 to-emerald-400/0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                {loading ? "⏳ Processando..." : isLogin ? "🔓 ENTRAR NO CLUBE" : "✨ CRIAR CONTA VIP"}
              </button>
            </form>

            <div className="relative z-20">
              <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-6"></div>
              <button onClick={() => { setIsLogin(!isLogin); setErroAuth(""); }} className="w-full text-center text-xs text-white/40 hover:text-emerald-300 font-bold transition-colors duration-200 uppercase tracking-wider hover:bg-white/5 py-2 rounded-lg border border-transparent hover:border-white/10">
                {isLogin ? "🆕 Não tem conta? Cadastre-se" : "🔐 Já é membro? Faça login"}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="lobby" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
            
            <div className="absolute -top-15 right-0 flex items-center gap-4 group">
              {usuarioLogado.moedas === 0 && (
                <button onClick={resgatarEmergencia} className="animate-pulse bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                  🆘 Resgate 50 Moedas
                </button>
              )}
              <div className="px-5 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-500/40 rounded-full flex items-center gap-2">
                <span className="text-yellow-400 font-black text-lg drop-shadow-md">💰 {Math.floor(usuarioLogado.moedas)}</span>
                <span className="text-white/60 text-xs font-medium uppercase tracking-widest hidden sm:inline">SuecaCoins</span>
              </div>
              <div className="px-4 py-2 bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300">
                <span className="text-white/60 text-sm font-medium">👤 Logado como <strong className="text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">{usuarioLogado.nome.split(" ")[0]}</strong></span>
              </div>
              <button onClick={logout} className="text-white/30 hover:text-rose-300 text-xs font-bold uppercase tracking-widest transition-all duration-200 border border-white/10 px-4 py-1.5 rounded-full hover:bg-rose-500/10 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10 active:scale-95">🚺 Sair</button>
            </div>

            <div className="flex-1 flex flex-col items-start w-full group/main">
              <div className="relative z-10 mb-3">
                <p className="text-emerald-400 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-pulse">♠️ A mesa está pronta ♠️</p>
                <div className="h-px w-20 bg-linear-to-r from-emerald-500/50 to-transparent mt-2"></div>
              </div>
              <h1 className="text-6xl sm:text-7xl font-black text-white tracking-tighter mb-12 relative group/title">
                SUECA<span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">bet</span>
                <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/10 to-blue-500/10 blur-3xl -z-10 opacity-0 group-hover/title:opacity-100 transition-opacity duration-300"></div>
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {CATEGORIAS_SALAS.map(sala => (
                  <button key={sala.id} onClick={() => iniciarJogo(sala.id, sala.buyIn)} className={`relative group overflow-hidden bg-black/40 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                    <div className={`absolute inset-0 bg-gradient-to-b ${sala.cor} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <span className="text-5xl mb-3 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{sala.icone}</span>
                    <h3 className="text-white font-black text-xl mb-1 relative z-10 uppercase tracking-wider">{sala.nome}</h3>
                    <div className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full mb-4 relative z-10 border border-white/5">
                      <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Buy-in:</span>
                      <span className="text-yellow-400 font-bold text-sm">💰 {sala.buyIn}</span>
                    </div>
                    <p className="text-emerald-400/80 text-xs font-bold uppercase tracking-widest relative z-10">Pote: {sala.pot} SC</p>
                  </button>
                ))}
              </div>
              <button onClick={() => iniciarJogo("TREINO-LOCAL", 0)} className="mt-8 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                <span className="group-hover:scale-125 transition-transform">🤖</span> Treinar Offline (Grátis)
              </button>
            </div>

            <div className="w-full md:w-[400px] flex flex-col items-center group">
              <div className="bg-linear-to-br from-[#0b1510]/90 to-black/80 backdrop-blur-3xl border border-emerald-500/20 p-8 rounded-[2.5rem] w-full flex flex-col items-center shadow-2xl shadow-emerald-500/10 group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
                <div className="relative z-10 mb-8">
                  <span className="text-[9px] text-emerald-400/60 uppercase tracking-[0.4em] font-bold drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">✨ Design do Baralho</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div key={temaSelecionado.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, ease: "easeInOut" }} className={`relative w-56 h-72 rounded-[1.5rem] shadow-2xl shadow-emerald-500/30 border-2 border-emerald-500/40 bg-cover bg-center overflow-hidden flex items-center justify-center group/card hover:shadow-emerald-500/50 transition-all duration-300 ${temaSelecionado.cor}`}>
                    {temaSelecionado.escudo ? (
                      <img src={temaSelecionado.escudo} alt={temaSelecionado.sigla} className="w-28 h-28 object-contain drop-shadow-2xl z-10 opacity-95 group-hover/card:scale-110 transition-transform duration-300" />
                    ) : (
                      <span className="font-serif text-7xl font-black text-white/60 z-10 drop-shadow-lg group-hover/card:text-white/80 transition-colors duration-300">{temaSelecionado.sigla}</span>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(52,211,153,0.1)] pointer-events-none z-30 group-hover/card:shadow-[inset_0_0_30px_rgba(52,211,153,0.2)] transition-all duration-300"></div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between w-full mt-10 px-2 relative z-10 gap-3">
                  <button onClick={prevTema} className="w-12 h-12 rounded-full bg-linear-to-br from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/40 text-lg active:scale-90 hover:shadow-lg hover:shadow-emerald-500/20">❮</button>
                  <div className="text-center px-4 w-48 overflow-hidden"><p className="font-bold text-white text-lg tracking-wide whitespace-nowrap text-ellipsis drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]">{temaSelecionado.nome}</p></div>
                  <button onClick={nextTema} className="w-12 h-12 rounded-full bg-linear-to-br from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/40 text-lg active:scale-90 hover:shadow-lg hover:shadow-emerald-500/20">❯</button>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}