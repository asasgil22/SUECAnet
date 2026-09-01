"use client";
import { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { motion, AnimatePresence } from "framer-motion";
import { Carta, Trunfo } from "../types";
import OpponentHand from "./OpponentHand";
import Card from "./Card";
import { TemaBaralho } from "../app/page";

interface GameBoardProps {
  salaId: string;
  tema: TemaBaralho;
  nomeJogador: string;
  userId: string;
  buyIn: number;
}

const FRASES_ESPERA = [
  "Misturando os baralhos...",
  "Buscando oponentes na rede...",
  "Limpando a mesa VIP...",
  "Afiando as estratégias...",
  "Preparando as fichas...",
  "Quase lá...",
];

const DICAS_SUECA = [
  "O Ás é a carta mais valiosa do jogo, rendendo 11 pontos.",
  "A carta 7 (Manilha) é a segunda mais forte, valendo 10 pontos.",
  "Sempre acompanhe o naipe da primeira carta jogada na mesa.",
  "Se não tiver o naipe, use um Trunfo para roubar a vaza.",
  "Guarde seus Trunfos altos para capturar os Ases dos oponentes.",
  "Cartas numéricas de 2 a 6 não valem pontos, ótimas para descarte.",
];

const EMOJIS_CLASH = ["🔥", "💪", "🎯", "😂", "🙏", "👏", "💀", "🤦", "⚡", "🎉"];

export default function GameBoard({ salaId, tema, nomeJogador, userId, buyIn }: GameBoardProps) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [meuId, setMeuId] = useState<string>("");
  const [conectado, setConectado] = useState(false);
  const [isSpectator, setIsSpectator] = useState(false);

  const [aguardandoInicio, setAguardandoInicio] = useState(true);
  const [tempoEsperaModal, setTempoEsperaModal] = useState(60);
  const [fraseIndex, setFraseIndex] = useState(0);
  const [dicaIndex, setDicaIndex] = useState(0);

  const [alertaJogada, setAlertaJogada] = useState<string | null>(null);
  const [emojisMensagens, setEmojisMensagens] = useState<
    Array<{ id: string; emoji: string; jogadorId: string; timestamp: number }>
  >([]);

  const [mao, setMao] = useState<Carta[]>([]);
  const [trunfo, setTrunfo] = useState<Trunfo | null>(null);
  const [mesa, setMesa] = useState<any[]>([]);
  const [turnoAtual, setTurnoAtual] = useState<string>("");
  const [pontosDupla1, setPontosDupla1] = useState(0);
  const [pontosDupla2, setPontosDupla2] = useState(0);
  const [setDupla1, setSetDupla1] = useState(0);
  const [setDupla2, setSetDupla2] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [resultadoFim, setResultadoFim] = useState<any>(null);
  const [tempoRestante, setTempoRestante] = useState(20);

  const [infoJogadores, setInfoJogadores] = useState<Record<string, { nome: string; isBot: boolean; dupla: number; cartas?: number; moedas?: number }>>({});
  const [temasJogadores, setTemasJogadores] = useState<Record<string, TemaBaralho>>({});
  const [ordemMesa, setOrdemMesa] = useState<string[]>([]);

  const cartaPendenteRef = useRef<Carta | null>(null);
  const vencedorVazaRef = useRef<string | null>(null);

  const podeJogar = turnoAtual === meuId && mao.length > 0 && !resultadoFim && !aguardandoInicio && !isSpectator;
  const naipeRodada = mesa.length > 0 ? mesa[0].naipe : null;

  const minhaDupla = infoJogadores[meuId]?.dupla || 1;
  const meusPontos = minhaDupla === 1 ? pontosDupla1 : pontosDupla2;
  const pontosAdversario = minhaDupla === 1 ? pontosDupla2 : pontosDupla1;
  const meusSets = minhaDupla === 1 ? setDupla1 : setDupla2;
  const setsAdversario = minhaDupla === 1 ? setDupla2 : setDupla1;
  const isVencedorGlobal = meusSets >= 4;

  const luzAmbiente = meusPontos >= 61 ? "rgba(52, 211, 153, 0.08)" : pontosAdversario >= 61 ? "rgba(225, 29, 72, 0.08)" : "transparent";

  const playHaptic = (type: "vaza" | "vitoria" | "erro" | "vitoria-global" | "derrota-global" | "leve") => {
    if (typeof navigator === "undefined" || !navigator.vibrate) return;
    if (type === "vaza") navigator.vibrate([30, 50, 30]);
    if (type === "vitoria") navigator.vibrate([100, 50, 100]);
    if (type === "erro") navigator.vibrate([50, 50, 50]);
    if (type === "vitoria-global") navigator.vibrate([100, 100, 200, 100, 400]);
    if (type === "derrota-global") navigator.vibrate([400, 200, 400]);
    if (type === "leve") navigator.vibrate(20);
  };

  const renderNaipeIcon = (naipe?: string, isTrunfoCard = false) => {
    switch (naipe?.toLowerCase()) {
      case "copas": return <span className={isTrunfoCard ? "text-red-600" : "text-rose-500 drop-shadow-md"}>♥️</span>;
      case "espadas": return <span className={isTrunfoCard ? "text-black" : "text-zinc-200 drop-shadow-md"}>♠️</span>;
      case "ouros": return <span className={isTrunfoCard ? "text-red-600" : "text-rose-500 drop-shadow-md"}>♦️</span>;
      case "paus": return <span className={isTrunfoCard ? "text-black" : "text-zinc-200 drop-shadow-md"}>♣️</span>;
      default: return null;
    }
  };

  const ordenarMao = (cartasDesordenadas: any[]) => {
    const ordemNaipes = ["copas", "espadas", "ouros", "paus"];
    const pesoValor: Record<string, number> = { A: 10, "7": 9, K: 8, J: 7, Q: 6, "6": 5, "5": 4, "4": 3, "3": 2, "2": 1 };
    return cartasDesordenadas.filter((c) => c && c.naipe && c.valor).sort((a, b) => {
      if (a.naipe !== b.naipe) return ordemNaipes.indexOf(a.naipe) - ordemNaipes.indexOf(b.naipe);
      return pesoValor[b.valor] - pesoValor[a.valor];
    });
  };

  const idsMesaSegura = ordemMesa.length === 4 ? ordemMesa : Object.keys(infoJogadores);
  const meuIndex = idsMesaSegura.indexOf(meuId);
  const baseIndex = meuIndex !== -1 ? meuIndex : 0; 
  const idAbaixo = idsMesaSegura[baseIndex];
  const idEsquerda = idsMesaSegura[(baseIndex + 1) % 4] || "bot-esquerda";
  const idFrente = idsMesaSegura[(baseIndex + 2) % 4] || "bot-frente";
  const idDireita = idsMesaSegura[(baseIndex + 3) % 4] || "bot-direita";

  const getPosicaoCartaMesa = (jogadorId: string, indexFallback: number) => {
    if (jogadorId === idAbaixo) return { y: "65px", x: "5px", rotate: -4, zIndex: 40 };
    if (jogadorId === idFrente) return { y: "-65px", x: "-5px", rotate: 4, zIndex: 20 };
    if (jogadorId === idEsquerda) return { x: "-95px", y: "10px", rotate: -22, zIndex: 10 };
    if (jogadorId === idDireita) return { x: "95px", y: "-10px", rotate: 22, zIndex: 30 };
    return { x: indexFallback * 15 - 20, y: indexFallback * 10 - 15, rotate: indexFallback * 8, zIndex: 15 };
  };

  useEffect(() => {
    if (aguardandoInicio && !isSpectator) {
      const intervaloFrases = setInterval(() => setFraseIndex((prev) => (prev + 1) % FRASES_ESPERA.length), 3500);
      const intervaloDicas = setInterval(() => setDicaIndex((prev) => (prev + 1) % DICAS_SUECA.length), 6500);
      return () => { clearInterval(intervaloFrases); clearInterval(intervaloDicas); };
    }
  }, [aguardandoInicio, isSpectator]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    const novaConexao = io(apiUrl);
    setSocket(novaConexao);

    novaConexao.on("connect", () => {
      setConectado(true);
      if (novaConexao.id) setMeuId(novaConexao.id);
      novaConexao.emit("entrarSala", { salaId, tema, nome: nomeJogador, userId, buyIn });
    });

    novaConexao.on("atualizacaoMoedas", (novoSaldo) => {
      const salvo = localStorage.getItem("@suecabet:user");
      if (salvo) {
        const localUser = JSON.parse(salvo);
        localUser.moedas = novoSaldo;
        localStorage.setItem("@suecabet:user", JSON.stringify(localUser));
      }
    });

    novaConexao.on("statusEspera", (dados) => {
      setAguardandoInicio(true);
      setTempoEsperaModal(dados.tempo);
    });

    novaConexao.on("filaDeEspera", () => {
      setIsSpectator(true);
    });

    novaConexao.on("estadoInicial", (estado) => {
      setAguardandoInicio(!estado.jogoIniciado);
      if (estado.ordem) setOrdemMesa(estado.ordem);

      if (estado.mao && estado.mao.length > 0) {
        setIsSpectator(false);
      }

      setTrunfo(estado.trunfo);
      setMao(ordenarMao(estado.mao || []));
      setMesa([]);
      setTurnoAtual(estado.turnoAtual);
      setSetDupla1(estado.setDupla1);
      setSetDupla2(estado.setDupla2);
      setPontosDupla1(estado.pontosDupla1 || 0);
      setPontosDupla2(estado.pontosDupla2 || 0);
      setTempoRestante(20);
      setResultadoFim(null);
      setMensagem("");
      setAlertaJogada(null);
      vencedorVazaRef.current = null;
      cartaPendenteRef.current = null;

      if (estado.infoJogadores) setInfoJogadores(estado.infoJogadores);
      if (estado.temasJogadores) setTemasJogadores(estado.temasJogadores);
    });

    novaConexao.on("sincronizarMesa", (dados) => {
      if (dados.mesa.length === 1) vencedorVazaRef.current = null;
      setMesa(dados.mesa);
      setTurnoAtual(dados.turnoAtual);
      if (dados.infoJogadores) setInfoJogadores(dados.infoJogadores);

      if (dados.mesa.length >= 4) {
        setTimeout(() => setMesa((prev) => (prev.length >= 4 ? [] : prev)), 3500);
      }
    });

    novaConexao.on("resultadoVaza", (resultado) => {
      setPontosDupla1(resultado.pontosDupla1);
      setPontosDupla2(resultado.pontosDupla2);
      vencedorVazaRef.current = resultado.turnoAtual;
      setTurnoAtual(resultado.turnoAtual);
      setMesa([]);

      if (resultado.turnoAtual === novaConexao.id || resultado.turnoAtual === idFrente) playHaptic("vaza");
    });

    novaConexao.on("erroJogada", (msgErro) => {
      setAlertaJogada(msgErro);
      playHaptic("erro");
      setTimeout(() => setAlertaJogada(null), 3000);

      if (cartaPendenteRef.current) {
        setMao((prev) => ordenarMao([...prev, cartaPendenteRef.current!]));
        setTurnoAtual(meuId || novaConexao.id!);
        cartaPendenteRef.current = null;
      }
    });

    novaConexao.on("fimDePartida", (resultado) => {
      setSetDupla1(resultado.setDupla1);
      setSetDupla2(resultado.setDupla2);
      setPontosDupla1(resultado.pontosDupla1);
      setPontosDupla2(resultado.pontosDupla2);
      setResultadoFim(resultado);

      if (resultado.fimDeJogoGlobal && !isSpectator) {
        const d1Ganhou = resultado.setDupla1 >= 4;
        const minhaVitoria = (minhaDupla === 1 && d1Ganhou) || (minhaDupla === 2 && !d1Ganhou);
        playHaptic(minhaVitoria ? "vitoria-global" : "derrota-global");
      } else if (!isSpectator) {
        playHaptic("vitoria");
      }
    });

    novaConexao.on("emojiRecebido", (dados: { emoji: string; jogadorId: string }) => {
      const novoEmoji = { id: `${dados.jogadorId}-${Date.now()}`, emoji: dados.emoji, jogadorId: dados.jogadorId, timestamp: Date.now() };
      setEmojisMensagens((prev) => [...prev, novoEmoji]);
      setTimeout(() => setEmojisMensagens((prev) => prev.filter((msg) => msg.id !== novoEmoji.id)), 3000);
    });

    return () => { novaConexao.disconnect(); };
  }, [salaId, tema.id, nomeJogador, userId, buyIn]);

  const jogarCarta = (cartaJogada: Carta) => {
    if (!socket || !podeJogar || mesa.length >= 4) return;
    const naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
    if (naipePuxado && cartaJogada.naipe !== naipePuxado) {
      if (mao.some((c) => c.naipe === naipePuxado)) {
        playHaptic("erro");
        setAlertaJogada(`Você é obrigado a jogar ${naipePuxado.toUpperCase()}!`);
        setTimeout(() => setAlertaJogada(null), 3500);
        return;
      }
    }
    cartaPendenteRef.current = cartaJogada;
    setMao((prev) => prev.filter((c) => c && c.id !== cartaJogada.id));
    setTurnoAtual("processando");
    socket.emit("jogarCarta", { salaId, carta: cartaJogada });
  };

  const enviarEmoji = (emoji: string) => {
    if (!socket) return;
    socket.emit("enviarEmoji", { salaId, emoji });
    playHaptic("leve");
  };

  useEffect(() => {
    if (!podeJogar) {
      setTempoRestante(20);
      return;
    }
    if (tempoRestante <= 0) {
      let naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
      let cartasValidas = mao.filter(Boolean);
      if (naipePuxado) {
        const doNaipe = cartasValidas.filter((c) => c.naipe === naipePuxado);
        if (doNaipe.length > 0) cartasValidas = doNaipe;
      }
      if (cartasValidas.length > 0) jogarCarta(cartasValidas[Math.floor(Math.random() * cartasValidas.length)]);
      return;
    }
    const timer = setTimeout(() => setTempoRestante((prev) => prev - 1), 1000);
    return () => { clearTimeout(timer); };
  }, [podeJogar, tempoRestante, mesa, mao]);

  const infoEsquerda = infoJogadores[idEsquerda] || { nome: "Aguardando...", isBot: true, cartas: 10, moedas: 0 };
  const infoFrente = infoJogadores[idFrente] || { nome: "Aguardando...", isBot: true, cartas: 10, moedas: 0 };
  const infoDireita = infoJogadores[idDireita] || { nome: "Aguardando...", isBot: true, cartas: 10, moedas: 0 };

  const circumference = 2 * Math.PI * 70;

  return (
    <div className="w-full h-full flex flex-col justify-between relative p-2 sm:p-6 pt-8 sm:pt-4 select-none font-sans overflow-hidden transition-colors duration-1000" style={{ backgroundColor: luzAmbiente }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      {/* Caixa de Emojis Remanejada para o TOPO DIREITO (Não atrapalha o "Sua Vez") e com scale reduzido no Mobile */}
      <div className="absolute top-24 sm:top-auto sm:bottom-6 right-2 sm:right-6 z-[80] flex flex-col gap-2 scale-[0.85] sm:scale-100 origin-top-right sm:origin-bottom-right">
        <AnimatePresence>
          {emojisMensagens.filter((msg) => msg.jogadorId === meuId).map((msg) => (
            <motion.div key={msg.id} initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.5, y: -20 }} className="text-2xl sm:text-3xl">
              {msg.emoji}
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="bg-[#0b1510]/95 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-2 grid grid-cols-5 gap-1 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          {EMOJIS_CLASH.map((emoji) => (
            <button key={emoji} onClick={() => enviarEmoji(emoji)} className="text-lg sm:text-2xl p-1 hover:scale-125 active:scale-90 transition-transform cursor-pointer rounded hover:bg-emerald-500/10" title={`Enviar ${emoji}`}>
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {emojisMensagens.filter((msg) => msg.jogadorId === idFrente).map((msg) => (
          <motion.div key={msg.id} initial={{ opacity: 0, scale: 0, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0, y: -20 }} className="fixed top-1/4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl z-40 pointer-events-none">
            {msg.emoji}
          </motion.div>
        ))}
        {emojisMensagens.filter((msg) => msg.jogadorId === idEsquerda).map((msg) => (
          <motion.div key={msg.id} initial={{ opacity: 0, scale: 0, x: -20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0, x: 20 }} className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl z-40 pointer-events-none">
            {msg.emoji}
          </motion.div>
        ))}
        {emojisMensagens.filter((msg) => msg.jogadorId === idDireita).map((msg) => (
          <motion.div key={msg.id} initial={{ opacity: 0, scale: 0, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0, x: -20 }} className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl z-40 pointer-events-none">
            {msg.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {alertaJogada && (
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.9 }} transition={{ type: "spring", damping: 20, stiffness: 300 }} className="absolute bottom-52 sm:bottom-56 left-1/2 -translate-x-1/2 z-[60] bg-rose-600/95 backdrop-blur-xl border border-rose-400 px-4 py-2 rounded-[2rem] shadow-[0_15px_40px_rgba(225,29,72,0.6)] flex items-center gap-2">
            <span className="text-lg animate-bounce">⚠️</span>
            <span className="text-white text-[11px] sm:text-sm font-black tracking-widest uppercase">{alertaJogada}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {aguardandoInicio && !isSpectator && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-gradient-to-b from-[#0b1510] to-[#050a07] border border-emerald-500/30 p-6 sm:p-10 rounded-[3rem] text-center max-w-[28rem] w-full shadow-[0_0_100px_rgba(16,185,129,0.15)] flex flex-col items-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mt-10">
                <motion.div animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }} className="absolute w-40 h-40 rounded-full border border-emerald-500"></motion.div>
              </div>
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
              <span className="text-emerald-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-2 relative z-10">Sala de Espera: {salaId}</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 relative z-10 drop-shadow-md">Procurando Oponentes</h2>

              <div className="h-5 mb-6 relative z-10 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p key={fraseIndex} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.3 }} className="text-xs text-emerald-400/80 font-medium tracking-wide">
                    {FRASES_ESPERA[fraseIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6 z-10">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="50%" cy="50%" r="65" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                  <motion.circle 
                    cx="50%" cy="50%" r="65" fill="none" stroke="#34d399" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} 
                    initial={{ strokeDashoffset: circumference }} 
                    animate={{ strokeDashoffset: circumference - (circumference * tempoEsperaModal) / 60 }} 
                    transition={{ ease: "linear", duration: 1 }} className="drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" 
                  />
                </svg>
                <div className="flex flex-col items-center justify-center bg-black/30 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
                  <span className="text-3xl sm:text-5xl font-black text-white font-mono tracking-tighter drop-shadow-md">{tempoEsperaModal}</span>
                  <span className="text-[8px] sm:text-[9px] text-white/50 uppercase tracking-[0.2em] font-bold mt-1">Segundos</span>
                </div>
              </div>

              <div className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 relative overflow-hidden shadow-inner flex flex-col items-center justify-center z-10 min-h-[5rem]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <span className="text-[8px] sm:text-[9px] text-emerald-400/80 uppercase tracking-[0.25em] font-black mb-2 flex items-center gap-1.5"><span className="text-[10px]">💡</span> Dica da Mesa</span>
                <div className="w-full relative flex items-center justify-center min-h-[2.5rem]">
                  <AnimatePresence mode="wait">
                    <motion.p key={dicaIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }} className="text-xs text-white/90 text-center leading-relaxed font-medium italic">
                      "{DICAS_SUECA[dicaIndex]}"
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {resultadoFim && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`absolute inset-0 z-[70] flex items-center justify-center p-4 backdrop-blur-3xl transition-colors duration-1000 ${resultadoFim.fimDeJogoGlobal ? (isVencedorGlobal ? "bg-amber-950/80" : "bg-rose-950/90") : "bg-black/60"}`}>
            {resultadoFim.fimDeJogoGlobal ? (
              <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 25 }} className={`bg-[#050a07] border ${isVencedorGlobal ? "border-amber-500/40 shadow-[0_0_120px_rgba(251,191,36,0.3)]" : "border-rose-500/40 shadow-[0_0_120px_rgba(225,29,72,0.3)]"} p-6 sm:p-10 rounded-[3rem] text-center max-w-md w-full relative overflow-hidden`}>
                <div className={`mx-auto w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-4 sm:mb-6 border ${isVencedorGlobal ? "bg-amber-500/10 border-amber-500/30" : "bg-rose-500/10 border-rose-500/30"}`}>
                  <span className="text-3xl sm:text-5xl drop-shadow-lg">{isVencedorGlobal ? "🏆" : "💀"}</span>
                </div>
                <h2 className={`text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r mb-2 tracking-tight ${isVencedorGlobal ? "from-amber-200 to-yellow-500" : "from-rose-300 to-red-600"}`}>
                  {isVencedorGlobal ? "VITÓRIA GLORIOSA" : "FIM DA LINHA"}
                </h2>
                <p className="text-xs sm:text-sm text-white/60 mb-6 font-medium px-2">{isVencedorGlobal ? "Sua dupla dominou a mesa e conquistou os 4 sets!" : "Sua dupla foi derrotada sem piedade pelos adversários."}</p>
                <div className="flex justify-between items-center bg-black/50 p-4 sm:p-6 rounded-[2rem] mb-6 border border-white/5 shadow-inner">
                  <div className="flex flex-col items-center w-1/3">
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-1 ${isVencedorGlobal ? "text-amber-400" : "text-white/40"}`}>Nós</span>
                    <span className={`text-3xl sm:text-5xl font-black tracking-tighter ${isVencedorGlobal ? "text-amber-400" : "text-white/40"}`}>{meusSets}</span>
                  </div>
                  <div className="text-white/20 text-xl font-light">X</div>
                  <div className="flex flex-col items-center w-1/3">
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-1 ${!isVencedorGlobal ? "text-rose-400" : "text-white/40"}`}>Eles</span>
                    <span className={`text-3xl sm:text-5xl font-black tracking-tighter ${!isVencedorGlobal ? "text-rose-400" : "text-white/40"}`}>{setsAdversario}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {!isSpectator ? (
                    <button onClick={() => socket?.emit("pedirNovaPartida", true)} className={`w-full font-black tracking-wide py-3 sm:py-4 rounded-[1.5rem] transition-all flex items-center justify-center gap-2 text-xs sm:text-base ${isVencedorGlobal ? "bg-amber-500 hover:bg-amber-400 text-black" : "bg-rose-600 hover:bg-rose-500 text-white"}`}>
                      <span>⚔️</span> JOGAR REVANCHE
                    </button>
                  ) : (
                    <div className="w-full bg-blue-500/25 text-blue-300 font-bold py-3 rounded-[1.5rem] border border-blue-500/30 text-xs">
                      Aguardando líderes da mesa...
                    </div>
                  )}
                  <button onClick={() => window.location.reload()} className="w-full bg-transparent border border-white/10 text-white/60 hover:text-white font-bold py-3 rounded-[1.5rem] text-xs transition-all">
                    🚪 Sair para o Lobby
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 25 }} className="bg-[#0b1510]/95 border border-emerald-500/30 p-8 rounded-[3rem] text-center max-w-sm w-full shadow-2xl">
                <h2 className="text-2xl font-extrabold text-emerald-400 mb-2">Fim do Set</h2>
                <p className="text-xs sm:text-sm text-white/70 mb-6">{resultadoFim.mensagem}</p>
                <div className="flex justify-between items-center bg-black/40 p-4 rounded-[2rem] mb-6 border border-white/5">
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] text-emerald-400 font-bold mb-1">Nós</span>
                    <span className="text-3xl font-light text-white">{meusPontos}</span>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] text-rose-400 font-bold mb-1">Eles</span>
                    <span className="text-3xl font-light text-white">{pontosAdversario}</span>
                  </div>
                </div>
                {!isSpectator ? (
                  <button onClick={() => socket?.emit("pedirNovaPartida", false)} className="w-full bg-emerald-500 text-black font-bold py-3 rounded-[1.5rem] text-xs uppercase tracking-wider">
                    Próximo Set
                  </button>
                ) : (
                  <div className="w-full bg-blue-500/25 text-blue-300 font-bold py-3 rounded-[1.5rem] text-xs">
                    Aguardando próximo set...
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap justify-between items-center w-full relative z-20 gap-2">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex flex-wrap bg-[#0b1510]/95 backdrop-blur-3xl p-1.5 sm:p-2 rounded-[2rem] border border-white/10 shadow-xl items-center gap-2">
          <div className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[1.5rem] flex items-center gap-2 border-2 border-emerald-500/50 shadow-md">
            <div className="flex flex-col">
              <span className="text-[7px] uppercase tracking-widest text-zinc-600 font-black">Trunfo</span>
              <span className="font-black text-lg sm:text-xl text-black leading-none">{trunfo?.valor || "-"}</span>
            </div>
            <div className="text-2xl flex items-center justify-center">{renderNaipeIcon(trunfo?.naipe, true)}</div>
          </div>
          
          <div className="bg-black/40 px-3 py-1.5 rounded-[1.5rem] flex flex-col items-center border border-white/5">
            <span className="text-[7px] uppercase tracking-widest text-emerald-400 font-black">Naipe</span>
            <div className="flex items-center justify-center h-5">
              {naipeRodada ? (
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-zinc-300 font-bold">{naipeRodada}</span>
                  <span className="text-base">{renderNaipeIcon(naipeRodada)}</span>
                </div>
              ) : (
                <span className="text-[9px] text-white/30">...</span>
              )}
            </div>
          </div>

          <div className="px-2.5 py-1 flex flex-col items-center border-l border-white/10">
            <span className="text-[7px] uppercase tracking-widest text-white/40 font-black">Set</span>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black">
              <span className="text-emerald-400">{meusPontos}</span>
              <span className="text-white/20">/</span>
              <span className="text-rose-400">{pontosAdversario}</span>
            </div>
          </div>

          <div className="bg-amber-500/10 px-3 py-1 rounded-[1.5rem] flex flex-col items-center border border-amber-500/20">
            <span className="text-[7px] uppercase tracking-widest text-amber-400 font-black">Global</span>
            <div className="flex items-center gap-1.5 text-xs font-black">
              <span className="text-emerald-400">{meusSets}</span>
              <span className="text-amber-500/40">|</span>
              <span className="text-rose-400">{setsAdversario}</span>
            </div>
          </div>
        </motion.div>

        <div className="bg-[#0b1510]/80 backdrop-blur-2xl px-3 py-1.5 rounded-xl border border-white/5 flex items-center gap-1.5 shadow-md">
          <span className={`w-2 h-2 rounded-full ${conectado ? "bg-emerald-400 animate-pulse" : "bg-rose-500"}`}></span>
          <span className="text-[9px] font-black tracking-wider text-white/70 uppercase">{salaId}</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center relative z-10 mt-1 mb-1">
        <div className="flex items-center gap-1.5 mb-1 bg-black/50 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
          <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${infoFrente.isBot ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"}`}>
            {infoFrente.isBot ? "🤖" : "👤"}
          </span>
          <span className="text-white text-[11px] font-bold">{infoFrente.nome}</span>
          <span className="text-[9px] text-yellow-400 font-bold">💰 {infoFrente.moedas || 0}</span>
        </div>
        <div className={turnoAtual === idFrente ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" : ""}>
          <OpponentHand posicao="frente" quantidade={infoFrente.cartas !== undefined ? infoFrente.cartas : (mao.length > 0 ? mao.length : 10)} tema={temaFrenteObj} />
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-between relative z-10 px-1 sm:px-6 my-1">
        <div className={`flex flex-col items-center z-20 ${turnoAtual === idEsquerda ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" : ""}`}>
          <div className="flex flex-col items-center mb-1 bg-black/50 px-2 py-1 rounded-xl border border-white/10 backdrop-blur-md max-w-[75px]">
            <span className="text-white text-[9px] font-bold truncate">{infoEsquerda.nome}</span>
            <span className="text-[8px] text-yellow-400 font-bold">💰 {infoEsquerda.moedas || 0}</span>
          </div>
          <OpponentHand posicao="esquerda" quantidade={infoEsquerda.cartas !== undefined ? infoEsquerda.cartas : (mao.length > 0 ? mao.length : 10)} tema={temaEsquerdaObj} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-56 h-56 sm:w-[28rem] sm:h-[28rem] flex items-center justify-center pointer-events-auto">
            <div className="absolute inset-0 rounded-full border border-white/10 bg-black/25 backdrop-blur-md shadow-inner"></div>
            <AnimatePresence>
              {mesa.map((carta, index) => {
                if (!carta) return null;
                const pos = getPosicaoCartaMesa(carta.jogadorId, index);
                return (
                  <motion.div key={carta.id} initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1.1, opacity: 1, y: pos.y, x: pos.x, rotate: pos.rotate }} exit={{ opacity: 0 }} transition={{ type: "spring", damping: 14, stiffness: 100 }} className="absolute" style={{ zIndex: pos.zIndex }}>
                    <Card carta={carta} naMesa={true} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        <div className={`flex flex-col items-center z-20 ${turnoAtual === idDireita ? "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" : ""}`}>
          <div className="flex flex-col items-center mb-1 bg-black/50 px-2 py-1 rounded-xl border border-white/10 backdrop-blur-md max-w-[75px]">
            <span className="text-white text-[9px] font-bold truncate">{infoDireita.nome}</span>
            <span className="text-[8px] text-yellow-400 font-bold">💰 {infoDireita.moedas || 0}</span>
          </div>
          <OpponentHand posicao="direita" quantidade={infoDireita.cartas !== undefined ? infoDireita.cartas : (mao.length > 0 ? mao.length : 10)} tema={temaDireitaObj} />
        </div>
      </div>

      {isSpectator ? (
        <div className="w-full flex flex-col items-center justify-center relative z-30 mb-2 h-28">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#0b1510]/95 backdrop-blur-xl border border-blue-500/30 px-6 py-4 rounded-2xl shadow-lg text-center max-w-xs">
            <span className="text-2xl mb-1 block animate-pulse">👀</span>
            <h3 className="text-blue-400 font-black text-xs uppercase tracking-widest mb-1">Modo Espectador</h3>
            <p className="text-white/60 text-[10px] leading-relaxed">Você está na fila de espera e entrará no próximo set.</p>
          </motion.div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center relative z-30 mb-1">
          
          <div className="mb-2 sm:mb-1 flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md z-50">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[8px] px-2 py-0.5 rounded-full font-bold">Você</span>
            <span className="text-white text-[11px] font-bold drop-shadow-md">{nomeJogador}</span>
          </div>
          
          <div className="mb-14 sm:mb-6 h-6 flex items-center justify-center relative z-50">
            <AnimatePresence mode="wait">
              {turnoAtual === "calculando" ? (
                <motion.div key="calculando" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 bg-black/70 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/5 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-emerald-500/20 border-t-emerald-400 animate-spin"></span>
                  <span className="text-emerald-400 text-[9px] font-bold tracking-widest uppercase">Avaliando Vaza...</span>
                </motion.div>
              ) : podeJogar ? (
                <motion.div key="sua-vez" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="flex flex-col items-center">
                  <div className="bg-[#0b1510]/95 backdrop-blur-xl border border-emerald-500/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] flex flex-col items-center">
                    <span className="text-emerald-400 text-[9px] font-black tracking-widest uppercase">Sua Vez ({tempoRestante}s)</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="aguardando" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/5 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-white/10 border-t-white/80 animate-spin"></span>
                  <span className="text-white/50 text-[9px] font-bold tracking-widest uppercase">{mao.length === 0 && !resultadoFim ? "Fim do Set..." : mensagem || "Aguardando Jogada..."}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative flex justify-center items-end h-28 sm:h-40 w-full max-w-xl mx-auto px-2 z-30">
            <AnimatePresence>
              {mao.map((carta, index) => {
                if (!carta || !carta.id) return null;
                const total = mao.length;
                const offset = index - (total - 1) / 2;
                return (
                  <motion.div key={carta.id} initial={{ y: 100, opacity: 0, scale: 0.8 }} animate={{ y: Math.pow(offset, 2) * 1.2, x: offset * 22, rotate: offset * 3, opacity: 1, scale: 1 }} exit={{ y: -40, opacity: 0, scale: 0.8 }} transition={{ type: "spring", damping: 22, stiffness: 120, delay: index * 0.02 }} style={{ transformOrigin: "bottom center", zIndex: index }} className="absolute bottom-0 cursor-pointer hover:-translate-y-4 sm:hover:-translate-y-6 transition-transform">
                    <Card carta={{ ...carta, jogavel: podeJogar }} onClick={() => jogarCarta(carta)} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
