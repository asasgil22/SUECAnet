import { Carta, Naipe } from "../types";

// A ordem exata de força na Sueca, do mais fraco ao mais forte
const hierarquia = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];

export function calcularVencedorVaza(mesa: Carta[], naipeTrunfo: Naipe): Carta {
  // A primeira carta jogada define o naipe que deve ser assistido
  const cartaPuxada = mesa[0];
  let cartaVencedora = cartaPuxada;

  for (let i = 1; i < mesa.length; i++) {
    const cartaAtual = mesa[i];
    
    const isTrunfoAtual = cartaAtual.naipe === naipeTrunfo;
    const isTrunfoVencedora = cartaVencedora.naipe === naipeTrunfo;
    const isMesmoNaipe = cartaAtual.naipe === cartaPuxada.naipe;

    const poderAtual = hierarquia.indexOf(cartaAtual.valor);
    const poderVencedora = hierarquia.indexOf(cartaVencedora.valor);

    if (isTrunfoAtual && !isTrunfoVencedora) {
      // Corte: Jogou trunfo sobre um naipe comum
      cartaVencedora = cartaAtual;
    } else if (isTrunfoAtual && isTrunfoVencedora) {
      // Disputa de Trunfos: Vence o trunfo mais alto
      if (poderAtual > poderVencedora) cartaVencedora = cartaAtual;
    } else if (isMesmoNaipe && !isTrunfoVencedora) {
      // Assistiu o naipe: Vence a carta mais alta do naipe original (se não houve corte)
      if (poderAtual > poderVencedora) cartaVencedora = cartaAtual;
    }
    // Descartes (naipes diferentes que não são trunfo) perdem automaticamente
  }

  return cartaVencedora;
}

export function calcularPontos(mesa: Carta[]): number {
  return mesa.reduce((total, carta) => total + carta.pontos, 0);
}