"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GameBoard from "../components/GameBoard";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

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
      const res = await fetch(`${API_URL}${endpoint}`, {
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
    } catch (err: any) { setErroAuth(err.message || "Erro de conexão com o servidor."); }
    setLoading(false);
  };

  const resgatarEmergencia = async () => {
    try {
      const res = await fetch(`${API_URL}/api/resgate`, {
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
      <div className="w-screen h-[100dvh] bg-[#0b1510] overflow-hidden">
        <GameBoard salaId={salaDaPartida} tema={temaSelecionado} nomeJogador={usuarioLogado.nome} userId={usuarioLogado.id} buyIn={buyInPartida} />
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] w-full bg-[#050a07] text-white flex flex-col relative overflow-x-hidden overflow-y-auto font-sans">
      {/* Background elements (Fixed so they don't break scroll) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {bonusAlerta && (
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 20, opacity: 1 }} exit={{ opacity: 0 }} className="fixed top-4 z-50 bg-emerald-500 text-black font-bold px-6 py-3 rounded-full shadow-lg text-sm text-center left-1/2 -translate-x-1/2 w-max">
            🎉 Bônus Diário: +25 SuecaCoins!
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 w-full flex flex-col items-center justify-center min-h-max px-4 sm:px-6 py-12 relative z-10">
        <AnimatePresence mode="wait">
          {!usuarioLogado ? (
            <motion.div key="auth" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="w-full max-w-md bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-3xl border border-emerald-500/40 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 pointer-events-none"></div>
              <div className="flex justify-center mb-4 sm:mb-6 text-5xl sm:text-6xl drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-pulse relative z-10">♠️</div>

              <h1 className="text-3xl sm:text-4xl font-black text-center text-white tracking-widest mb-2 relative z-10">
                SUECA<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">bet</span>
              </h1>
              <div className="relative z-20">
                <p className="text-center text-white/60 text-xs sm:text-sm mb-6 sm:mb-8 font-medium tracking-wide">
                  {isLogin ? "Faça login para acessar as mesas." : "Cadastre-se no clube."}
                </p>
              </div>

              <form onSubmit={handleAuth} className="flex flex-col gap-3 sm:gap-4 relative z-20">
                {!isLogin && (
                  <>
                    <input type="text" placeholder="Nome Completo" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all w-full" />
                    <div className="relative w-full">
                      <input type="text" placeholder="CPF" required value={form.cpf} onChange={(e) => setForm({ ...form, cpf: maskCPF(e.target.value) })} className="text-base w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all" />
                      <div className="mt-2 bg-gradient-to-br from-rose-500/15 to-rose-600/10 border border-rose-500/40 p-2 sm:p-3 rounded-xl flex items-start gap-2 sm:gap-3 w-full">
                        <span className="text-base sm:text-lg animate-pulse">🔞</span>
                        <p className="text-[9px] sm:text-[10px] text-rose-200/90 leading-relaxed font-semibold tracking-tight">Jogos de azar são estritamente proibidos para menores de 18 anos. CPF obrigatório.</p>
                      </div>
                    </div>
                    <input type="text" placeholder="Data de Nasc. (DD/MM/AAAA)" required value={form.dataNascimento} onChange={(e) => setForm({ ...form, dataNascimento: maskData(e.target.value) })} className="text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all w-full" />
                    <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all w-full" />
                  </>
                )}
                <input type="text" placeholder="Usuário" required value={form.usuario} onChange={(e) => setForm({ ...form, usuario: e.target.value.toLowerCase() })} className="text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all w-full" />
                <input type="password" placeholder="Senha" required value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} className="text-base bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:bg-black/50 transition-all w-full" />

                {erroAuth && <div className="bg-gradient-to-r from-rose-500/20 to-red-500/20 border border-rose-500/50 p-3 rounded-lg text-rose-300 text-xs text-center font-bold animate-pulse mt-1">❌ {erroAuth}</div>}

                <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-black py-3 sm:py-4 rounded-xl mt-2 sm:mt-4 hover:opacity-90 active:scale-95 shadow-lg transition-all uppercase tracking-widest text-sm sm:text-base disabled:opacity-50 disabled:active:scale-100">
                  {loading ? "⏳ Processando..." : isLogin ? "🔓 Entrar no Clube" : "✨ Criar Conta VIP"}
                </button>
              </form>

              <div className="relative z-20">
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-5 sm:my-6"></div>
                <button onClick={() => { setIsLogin(!isLogin); setErroAuth(""); }} className="w-full text-center text-[10px] sm:text-xs text-white/40 hover:text-emerald-300 font-bold uppercase tracking-wider py-2 transition-colors">
                  {isLogin ? "🆕 Não tem conta? Cadastre-se" : "🔐 Já é membro? Faça login"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="lobby" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-6xl mx-auto flex flex-col items-center">
              
              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 bg-black/30 sm:bg-transparent p-4 sm:p-0 rounded-2xl border border-white/5 sm:border-none">
                <div className="hidden sm:block text-2xl drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse">♠️</div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto">
                  {usuarioLogado.moedas === 0 && (
                    <button onClick={resgatarEmergencia} className="animate-pulse bg-rose-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.5)]">
                      🆘 Resgate
                    </button>
                  )}
                  <div className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-500/40 rounded-full flex items-center gap-1.5">
                    <span className="text-yellow-400 font-black text-sm sm:text-lg">💰 {Math.floor(usuarioLogado.moedas)}</span>
                    <span className="text-white/60 text-[9px] sm:text-xs font-medium uppercase tracking-widest hidden sm:inline">SuecaCoins</span>
                  </div>
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                    <span className="text-white/60 text-[10px] sm:text-sm font-medium">👤 <strong className="text-emerald-300">{usuarioLogado.nome.split(" ")[0]}</strong></span>
                  </div>
                  <button onClick={logout} className="text-white/40 hover:text-rose-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded-full hover:bg-rose-500/10 hover:border-rose-500/30 active:scale-95 transition-all">Sair</button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center sm:items-start justify-between gap-10 lg:gap-16 w-full">
                {/* Coluna Esquerda: Salas */}
                <div className="flex-1 flex flex-col items-center lg:items-start w-full text-center lg:text-left">
                  <div className="mb-2">
                    <p className="text-emerald-400 text-[9px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(52,211,153,0.4)] animate-pulse">♠️ A mesa está pronta ♠️</p>
                  </div>
                  <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-8 sm:mb-12 relative">
                    SUECA<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600">bet</span>
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full px-2 sm:px-0">
                    {CATEGORIAS_SALAS.map(sala => (
                      <button key={sala.id} onClick={() => iniciarJogo(sala.id, sala.buyIn)} className={`relative group overflow-hidden bg-black/40 border border-white/10 p-5 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col items-center hover:-translate-y-1 transition-all duration-300 active:scale-95`}>
                        <div className={`absolute inset-0 bg-gradient-to-b ${sala.cor} opacity-10 sm:group-hover:opacity-30 transition-opacity duration-500`}></div>
                        <span className="text-4xl sm:text-5xl mb-2 sm:mb-3 relative z-10 drop-shadow-lg">{sala.icone}</span>
                        <h3 className="text-white font-black text-lg sm:text-xl mb-1 relative z-10 uppercase tracking-wider">{sala.nome}</h3>
                        <div className="flex items-center gap-1 bg-black/50 px-2 sm:px-3 py-1 rounded-full mb-3 sm:mb-4 relative z-10 border border-white/5">
                          <span className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest font-bold">Buy-in:</span>
                          <span className="text-yellow-400 font-bold text-xs sm:text-sm">💰 {sala.buyIn}</span>
                        </div>
                        <p className="text-emerald-400/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest relative z-10">Pote: {sala.pot} SC</p>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => iniciarJogo("TREINO-LOCAL", 0)} className="mt-6 sm:mt-8 text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-2 mx-auto lg:mx-0">
                    <span>🤖</span> Treinar Offline (Grátis)
                  </button>
                </div>

                {/* Coluna Direita: Baralho */}
                <div className="w-full sm:w-[350px] lg:w-[400px] flex flex-col items-center mt-6 lg:mt-0 px-2 sm:px-0">
                  <div className="bg-gradient-to-br from-[#0b1510]/90 to-black/80 backdrop-blur-2xl border border-emerald-500/20 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] w-full flex flex-col items-center shadow-xl">
                    <div className="mb-4 sm:mb-8 text-center">
                      <span className="text-[8px] sm:text-[9px] text-emerald-400/60 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">✨ Design do Baralho</span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div key={temaSelecionado.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className={`relative w-48 sm:w-56 h-64 sm:h-72 rounded-[1.2rem] sm:rounded-[1.5rem] shadow-2xl border-2 border-emerald-500/40 bg-cover bg-center overflow-hidden flex items-center justify-center ${temaSelecionado.cor}`}>
                        {temaSelecionado.escudo ? (
                          <img src={temaSelecionado.escudo} alt={temaSelecionado.sigla} className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-2xl z-10 opacity-95" />
                        ) : (
                          <span className="font-serif text-6xl sm:text-7xl font-black text-white/60 z-10 drop-shadow-lg">{temaSelecionado.sigla}</span>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-between w-full mt-6 sm:mt-10 relative z-10">
                      <button onClick={prevTema} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-colors border border-white/10 active:scale-90">❮</button>
                      <div className="text-center px-2 flex-1 overflow-hidden">
                        <p className="font-bold text-white text-sm sm:text-lg tracking-wide whitespace-nowrap text-ellipsis">{temaSelecionado.nome}</p>
                      </div>
                      <button onClick={nextTema} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-colors border border-white/10 active:scale-90">❯</button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
