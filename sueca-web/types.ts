export type Naipe = "copas" | "espadas" | "ouros" | "paus" | string;

export type Carta = {
  id: string;
  naipe: string;
  valor: string;
  ponto?: number;
  pontos?: number;
  jogavel?: boolean;
  jogadorId?: string;
};

export type Trunfo = {
  id: string;
  naipe: string;
  valor: string;
  ponto?: number;
  pontos?: number;
};
