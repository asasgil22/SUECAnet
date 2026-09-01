export type Carta = {
  id: string;
  naipe: string;
  valor: string;
  ponto: number;
  jogavel?: boolean;
  jogadorId?: string;
};

export type Trunfo = {
  id: string;
  naipe: string;
  valor: string;
  ponto: number;
};
