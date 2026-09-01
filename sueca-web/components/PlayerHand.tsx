"use client";
import { Carta } from "@/types";
import Card from "./Card";

export default function PlayerHand({ mao }: { mao: Carta[] }) {
  return (
    <div className="flex justify-center items-end -space-x-12 hover:-space-x-2 transition-all duration-300 ease-out p-8 h-48">
      {mao.map((carta, index) => {
        // Encontra o centro da mão para rotacionar as cartas das pontas
        const middle = (mao.length - 1) / 2;
        const rotation = (index - middle) * 6; // 6 graus de inclinação por carta
        const translateY = Math.abs(index - middle) * 4; // Baixa as cartas das pontas

        return (
          <div 
            key={carta.id} 
            style={{ 
              transform: `rotate(${rotation}deg) translateY(${translateY}px)`,
              transformOrigin: "bottom center",
              zIndex: index
            }}
            className="transition-transform duration-300"
          >
            <Card 
              carta={carta} 
              onClick={() => console.log(`Tentou jogar: ${carta.valor} de ${carta.naipe}`)} 
            />
          </div>
        );
      })}
    </div>
  );
}