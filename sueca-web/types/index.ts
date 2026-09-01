export type Naipe = "copas" | "espadas" | "ouros" | "paus";

export interface Carta {
  id: string;
  naipe: Naipe;
  valor: string;
  pontos: number;
  jogavel: boolean;
}

export interface GameState {
  estadoPartida: string;
  rodadaAtual: number;
  trunfo: { naipe: Naipe; valor: string };
  mesa: Carta[];
  jogadorAtual: {
    id: string;
    nome: string;
    mao: Carta[];
  };
  oponentes: {
    id: string;
    posicao: "esquerda" | "frente" | "direita";
    cartasRestantes: number;
  }[];
}