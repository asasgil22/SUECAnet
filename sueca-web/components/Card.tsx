"use client";
import { motion } from "framer-motion";
import { Carta } from "../types";

interface CardProps {
  carta: Carta;
  onClick?: () => void;
  naMesa?: boolean;
}

export default function Card({ carta, onClick, naMesa = false }: CardProps) {
  const isVermelho = carta.naipe === "copas" || carta.naipe === "ouros";
  const isFigura = ["J", "Q", "K", "A"].includes(carta.valor);
  const isAs = carta.valor === "A";

  // Cores ricas e profundas de cassino
  const corTexto = isVermelho ? "text-[#D92323]" : "text-[#1A1A1A]";

  const renderSimbolo = (naipe: string) => {
    switch (naipe?.toLowerCase()) {
      case "copas":
        return "♥️";
      case "espadas":
        return "♠️";
      case "ouros":
        return "♦️";
      case "paus":
        return "♣️";
      default:
        return "";
    }
  };

  return (
    <motion.div
      whileHover={
        carta.jogavel && !naMesa ? { y: -20, scale: 1.05, rotateY: 5 } : {}
      }
      whileTap={carta.jogavel && !naMesa ? { scale: 0.95, y: -5 } : {}}
      onClick={carta.jogavel && !naMesa ? onClick : undefined}
      className={`relative w-20 h-32 sm:w-[110px] sm:h-[160px] rounded-xl sm:rounded-2xl select-none transition-all duration-300 overflow-hidden
        ${carta.jogavel && !naMesa ? "cursor-pointer hover:shadow-[0_15px_35px_rgba(52,211,153,0.4)]" : "cursor-default"}
      `}
      style={{
        // Gradiente sutil simulando iluminação no papel da carta
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%)",
        // Borda cinza clara por fora + Borda branca por dentro (Efeito 3D de espessura)
        boxShadow:
          carta.jogavel && !naMesa
            ? "inset 0 0 0 1px rgba(255,255,255,1), 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(16,185,129,0.3)"
            : "inset 0 0 0 1px rgba(255,255,255,1), 0 8px 15px rgba(0,0,0,0.4)",
        border: "1px solid rgba(0,0,0,0.15)",
      }}
    >
      {/* MOLDURA INTERNA PARA CARTAS ESPECIAIS (Figuras e Ases) */}
      {isFigura && (
        <div className="absolute inset-[6px] sm:inset-[8px] border border-black/5 rounded-lg pointer-events-none"></div>
      )}

      {/* MARCA D'ÁGUA SUAVE PARA FIGURAS */}
      {isFigura && !isAs && (
        <div
          className={`absolute inset-0 flex items-center justify-center text-[8rem] sm:text-[12rem] opacity-[0.03] pointer-events-none ${corTexto} -translate-y-4`}
        >
          {renderSimbolo(carta.naipe)}
        </div>
      )}

      {/* CANTO SUPERIOR ESQUERDO */}
      <div
        className={`absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-col items-center leading-none ${corTexto}`}
      >
        <span className="text-xl sm:text-[26px] font-black font-serif tracking-tighter drop-shadow-sm">
          {carta.valor}
        </span>
        <span className="text-sm sm:text-lg -mt-0.5 drop-shadow-sm">
          {renderSimbolo(carta.naipe)}
        </span>
      </div>

      {/* SÍMBOLO CENTRAL (O Ás ganha um tamanho majestoso) */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${corTexto}`}
      >
        <span
          className={`${isAs ? "text-7xl sm:text-[6.5rem] drop-shadow-md" : "text-5xl sm:text-[4.5rem] opacity-90"}`}
        >
          {renderSimbolo(carta.naipe)}
        </span>
      </div>

      {/* CANTO INFERIOR DIREITO (Invertido) */}
      <div
        className={`absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 flex flex-col items-center leading-none rotate-180 ${corTexto}`}
      >
        <span className="text-xl sm:text-[26px] font-black font-serif tracking-tighter drop-shadow-sm">
          {carta.valor}
        </span>
        <span className="text-sm sm:text-lg -mt-0.5 drop-shadow-sm">
          {renderSimbolo(carta.naipe)}
        </span>
      </div>
    </motion.div>
  );
}
