import { Carta, Trunfo } from "../types";

export const NAIPES = ["copas", "espadas", "ouros", "paus"];
export const VALORES = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];
export const PONTOS: Record<string, number> = { A: 11, "7": 10, K: 4, J: 3, Q: 2, "6": 0, "5": 0, "4": 0, "3": 0, "2": 0 };
export const HIERARQUIA: Record<string, number> = { A: 10, "7": 9, K: 8, J: 7, Q: 6, "6": 5, "5": 4, "4": 3, "3": 2, "2": 1 };

export function criarBaralho(): Carta[] {
  let baralho: Carta[] = [];
  let id = 0;
  for (let naipe of NAIPES) {
    for (let valor of VALORES) {
      baralho.push({
        id: `c_${id++}`,
        naipe,
        valor,
        ponto: PONTOS[valor],
        pontos: PONTOS[valor]
      });
    }
  }
  return baralho.sort(() => Math.random() - 0.5);
}

export function decidirJogadaBot(mao: Carta[], mesa: Carta[], trunfo: Trunfo): Carta | null {
  if (!mao || mao.length === 0) return null;
  const naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
  let validas = mao.filter((c) => c && c.naipe === naipePuxado);
  if (validas.length === 0) validas = mao.filter(Boolean);
  if (validas.length === 1) return validas[0];

  if (mesa.length === 0) {
    let ases = validas.filter((c) => c.valor === "A" && c.naipe !== trunfo.naipe);
    if (ases.length > 0) return ases[0];
    let lixo = validas.filter((c) => (c.ponto ?? c.pontos ?? 0) === 0 && c.naipe !== trunfo.naipe);
    if (lixo.length > 0) return lixo.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  }

  let pMax = -1; 
  let indexVencedor = -1;
  
  mesa.forEach((c, idx) => {
    let p = c.naipe === trunfo.naipe ? 1000 + HIERARQUIA[c.valor] : c.naipe === naipePuxado ? 100 + HIERARQUIA[c.valor] : 0;
    if (p > pMax) { pMax = p; indexVencedor = idx; }
  });

  if (indexVencedor === mesa.length - 2) {
    let pts = validas.filter((c) => (c.ponto ?? c.pontos ?? 0) > 0).sort((a, b) => (b.ponto ?? b.pontos ?? 0) - (a.ponto ?? a.pontos ?? 0));
    if (pts.length > 0) return pts[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  } else {
    let ganham = validas.filter((c) => {
      let p = c.naipe === trunfo.naipe ? 1000 + HIERARQUIA[c.valor] : c.naipe === naipePuxado ? 100 + HIERARQUIA[c.valor] : 0;
      return p > pMax;
    });
    if (ganham.length > 0) return ganham.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  }
}
