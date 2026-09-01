"use client";
import { TemaBaralho } from "../app/page";

interface OpponentHandProps {
  posicao: "esquerda" | "frente" | "direita";
  quantidade: number;
  tema: TemaBaralho;
}

export default function OpponentHand({ posicao, quantidade, tema }: OpponentHandProps) {
  if (quantidade <= 0) return null;

  const renderCardBack = (i: number, extraStyles: React.CSSProperties = {}) => (
    <div 
      key={i} 
      className={`relative w-12 h-16 sm:w-16 sm:h-24 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-white/20 bg-cover bg-center overflow-hidden flex items-center justify-center ${tema?.cor || 'bg-zinc-800'}`}
      style={{ zIndex: i, ...extraStyles }}
    >
      {tema?.escudo ? (
        <img src={tema.escudo} alt={tema.sigla} className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-lg z-10 opacity-95" />
      ) : (
        <span className="font-serif text-xl font-bold text-white/50 z-10 drop-shadow-md">{tema?.sigla}</span>
      )}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-20"></div>
    </div>
  );

  if (posicao === "esquerda" || posicao === "direita") {
    return (
      <div className="flex flex-col -space-y-12 sm:-space-y-16 py-2">
        {Array.from({ length: quantidade }).map((_, i) => renderCardBack(i))}
      </div>
    );
  }

  return (
    <div className="flex -space-x-6 sm:-space-x-8 px-2">
      {Array.from({ length: quantidade }).map((_, i) => {
        const middle = (quantidade - 1) / 2;
        const offset = i - middle;
        const rotation = offset * 5;
        return renderCardBack(i, { transform: `rotate(${rotation}deg) translateY(${Math.abs(offset) * 2}px)` });
      })}
    </div>
  );
}