const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

// BANCOS DE DADOS LOCAIS E CACHE EM RAM
const USERS_FILE = path.join(__dirname, "users.json");
if (!fs.existsSync(USERS_FILE))
  fs.writeFileSync(USERS_FILE, JSON.stringify([]));

const SYSTEM_FILE = path.join(__dirname, "system.json");
if (!fs.existsSync(SYSTEM_FILE))
  fs.writeFileSync(
    SYSTEM_FILE,
    JSON.stringify({ lucroPlataforma: 0, logsDoacoes: [] }),
  );

let USERS_CACHE = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
let SYSTEM_CACHE = JSON.parse(fs.readFileSync(SYSTEM_FILE, "utf8"));

const salvarUsuariosDisk = () =>
  fs.writeFileSync(USERS_FILE, JSON.stringify(USERS_CACHE, null, 2));
const salvarSystemDisk = () =>
  fs.writeFileSync(SYSTEM_FILE, JSON.stringify(SYSTEM_CACHE, null, 2));

const UM_DIA_MS = 24 * 60 * 60 * 1000;

app.post("/api/register", (req, res) => {
  const { nome, cpf, dataNascimento, email, usuario, senha } = req.body;
  if (USERS_CACHE.find((u) => u.cpf === cpf))
    return res.status(400).json({ error: "CPF já cadastrado." });
  if (USERS_CACHE.find((u) => u.usuario === usuario))
    return res.status(400).json({ error: "Nome de usuário indisponível." });
  if (USERS_CACHE.find((u) => u.email === email))
    return res.status(400).json({ error: "E-mail já cadastrado." });

  const novoUsuario = {
    id: Date.now().toString(),
    nome,
    cpf,
    dataNascimento,
    email,
    usuario,
    senha,
    status: "ativo",
    criadoEm: new Date().toISOString(),
    moedas: 1000,
    ultimoBonusDiario: Date.now(),
    ultimoResgateEmergencia: null,
  };
  USERS_CACHE.push(novoUsuario);
  salvarUsuariosDisk();
  res.json({
    success: true,
    user: {
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      usuario: novoUsuario.usuario,
      moedas: novoUsuario.moedas,
    },
  });
});

app.post("/api/login", (req, res) => {
  const { usuario, senha } = req.body;
  const userIndex = USERS_CACHE.findIndex(
    (u) => u.usuario === usuario && u.senha === senha,
  );

  if (userIndex === -1)
    return res.status(401).json({ error: "Usuário ou senha incorretos." });
  if (USERS_CACHE[userIndex].status === "bloqueado")
    return res
      .status(403)
      .json({ error: "Conta suspensa. Contate o suporte VIP." });

  let bonusRecebido = false;
  if (
    !USERS_CACHE[userIndex].ultimoBonusDiario ||
    Date.now() - USERS_CACHE[userIndex].ultimoBonusDiario >= UM_DIA_MS
  ) {
    USERS_CACHE[userIndex].moedas = (USERS_CACHE[userIndex].moedas || 0) + 25;
    USERS_CACHE[userIndex].ultimoBonusDiario = Date.now();
    bonusRecebido = true;
    salvarUsuariosDisk();
  }

  res.json({
    success: true,
    bonusRecebido,
    user: {
      id: USERS_CACHE[userIndex].id,
      nome: USERS_CACHE[userIndex].nome,
      usuario: USERS_CACHE[userIndex].usuario,
      moedas: USERS_CACHE[userIndex].moedas || 0,
    },
  });
});

app.post("/api/resgate", (req, res) => {
  const { userId } = req.body;
  const userIndex = USERS_CACHE.findIndex((u) => u.id === userId);

  if (userIndex === -1)
    return res.status(404).json({ error: "Usuário não encontrado." });
  if (USERS_CACHE[userIndex].moedas > 0)
    return res
      .status(400)
      .json({
        error: "Resgate de emergência disponível apenas para saldo zero.",
      });

  if (
    USERS_CACHE[userIndex].ultimoResgateEmergencia &&
    Date.now() - USERS_CACHE[userIndex].ultimoResgateEmergencia < UM_DIA_MS
  ) {
    return res
      .status(400)
      .json({
        error: "O resgate de emergência só pode ser utilizado uma vez ao dia.",
      });
  }

  USERS_CACHE[userIndex].moedas += 50;
  USERS_CACHE[userIndex].ultimoResgateEmergencia = Date.now();
  salvarUsuariosDisk();

  res.json({ success: true, moedas: USERS_CACHE[userIndex].moedas });
});

app.post("/api/admin/login", (req, res) => {
  const { usuario, senha } = req.body;
  if (usuario === "admin" && senha === "admin") res.json({ success: true });
  else res.status(401).json({ error: "Credenciais inválidas." });
});

app.get("/api/admin/dashboard", (req, res) =>
  res.json({ users: USERS_CACHE, system: SYSTEM_CACHE }),
);

app.post("/api/admin/doacao", (req, res) => {
  const { identificador, valor } = req.body;
  const userIndex = USERS_CACHE.findIndex(
    (u) =>
      u.id === identificador ||
      u.usuario === identificador ||
      u.email === identificador,
  );
  if (userIndex === -1)
    return res.status(404).json({ error: "Usuário não localizado." });

  USERS_CACHE[userIndex].moedas =
    (USERS_CACHE[userIndex].moedas || 0) + Number(valor);
  SYSTEM_CACHE.logsDoacoes.unshift({
    data: new Date().toISOString(),
    usuario: USERS_CACHE[userIndex].usuario,
    valor: Number(valor),
    admin: "Admin Principal",
  });

  salvarUsuariosDisk();
  salvarSystemDisk();
  res.json({
    success: true,
    message: `Injeção de ${valor} moedas na conta de ${USERS_CACHE[userIndex].nome} realizada com sucesso.`,
  });
});

app.put("/api/admin/users/:id/status", (req, res) => {
  const userIndex = USERS_CACHE.findIndex((u) => u.id === req.params.id);
  if (userIndex > -1) {
    USERS_CACHE[userIndex].status =
      USERS_CACHE[userIndex].status === "ativo" ? "bloqueado" : "ativo";
    salvarUsuariosDisk();
    res.json({ success: true, status: USERS_CACHE[userIndex].status });
  } else res.status(404).json({ error: "Usuário não encontrado." });
});

const NAIPES = ["copas", "espadas", "ouros", "paus"];
const VALORES = ["2", "3", "4", "5", "6", "Q", "J", "K", "7", "A"];
const PONTOS = { A: 11, 7: 10, K: 4, J: 3, Q: 2, 6: 0, 5: 0, 4: 0, 3: 0, 2: 0 };
const HIERARQUIA = {
  A: 10,
  7: 9,
  K: 8,
  J: 7,
  Q: 6,
  6: 5,
  5: 4,
  4: 3,
  3: 2,
  2: 1,
};

const BARALHOS_SISTEMA = [
  {
    id: "gen-dark",
    nome: "Midnight Blue",
    tipo: "Clássico",
    cor: "bg-slate-900",
    destaque: "text-slate-400",
    escudo: "",
    sigla: "♠",
  },
  {
    id: "gen-red",
    nome: "Crimson Red",
    tipo: "Clássico",
    cor: "bg-red-900",
    destaque: "text-red-400",
    escudo: "",
    sigla: "♥",
  },
  {
    id: "gen-green",
    nome: "Casino Green",
    tipo: "Clássico",
    cor: "bg-emerald-900",
    destaque: "text-emerald-400",
    escudo: "",
    sigla: "♣",
  },
  {
    id: "gen-gold",
    nome: "Royal Gold",
    tipo: "Clássico",
    cor: "bg-amber-700",
    destaque: "text-amber-400",
    escudo: "",
    sigla: "♦",
  },
  {
    id: "pt-scp",
    nome: "Sporting CP",
    tipo: "Portugal",
    cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/sporting-cp.8b32e971.png",
    sigla: "SCP",
  },
  {
    id: "pt-fcp",
    nome: "FC Porto",
    tipo: "Portugal",
    cor: "bg-[repeating-linear-gradient(90deg,#1e40af_0px,#1e40af_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/fc-porto.b58f31f6.png",
    sigla: "FCP",
  },
  {
    id: "pt-slb",
    nome: "Benfica",
    tipo: "Portugal",
    cor: "bg-red-700",
    destaque: "text-red-400",
    escudo: "/escudos/benfica.3e4d3034.png",
    sigla: "SLB",
  },
  {
    id: "pt-bra",
    nome: "SC Braga",
    tipo: "Portugal",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/sc-braga.07de49c7.png",
    sigla: "SCB",
  },
  {
    id: "br-bfr",
    nome: "Botafogo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/botafogo.e439f7a4.png",
    sigla: "BFR",
  },
  {
    id: "br-fla",
    nome: "Flamengo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/flamengo.9c3055f2.png",
    sigla: "CRF",
  },
  {
    id: "br-flu",
    nome: "Fluminense",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_15px,#fff_15px,#fff_20px,#991b1b_20px,#991b1b_35px,#fff_35px,#fff_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/fluminense.118d8b5e.png",
    sigla: "FFC",
  },
  {
    id: "br-vas",
    nome: "Vasco da Gama",
    tipo: "Série A",
    cor: "bg-[linear-gradient(135deg,#111_40%,#fff_40%,#fff_50%,#111_50%)]",
    destaque: "text-gray-400",
    escudo: "/escudos/vasco-da-gama.74746cfd.png",
    sigla: "CRVG",
  },
  {
    id: "br-pal",
    nome: "Palmeiras",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#14532d_0px,#14532d_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/palmeiras.9ab1d558.png",
    sigla: "SEP",
  },
  {
    id: "br-cor",
    nome: "Corinthians",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(45deg,#111_0px,#111_15px,#fff_15px,#fff_30px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/corinthians.c51ae739.png",
    sigla: "SCCP",
  },
  {
    id: "br-spo",
    nome: "São Paulo",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
    destaque: "text-red-600",
    escudo: "/escudos/sao-paulo.468eaeb3.png",
    sigla: "SPFC",
  },
  {
    id: "br-san",
    nome: "Santos",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/santos.5ea20e58.png",
    sigla: "SFC",
  },
  {
    id: "br-cam",
    nome: "Atlético-MG",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/atletico-mineiro.c5c81922.png",
    sigla: "CAM",
  },
  {
    id: "br-cru",
    nome: "Cruzeiro",
    tipo: "Série A",
    cor: "bg-blue-800",
    destaque: "text-blue-400",
    escudo: "/escudos/cruzeiro.6c188ab8.png",
    sigla: "CEC",
  },
  {
    id: "br-gre",
    nome: "Grêmio",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#111_15px,#111_30px,#fff_30px,#fff_35px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/gremio.d252cec9.png",
    sigla: "FBPA",
  },
  {
    id: "br-sci",
    nome: "Internacional",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/internacional.82f72a2f.png",
    sigla: "SCI",
  },
  {
    id: "br-cap",
    nome: "Athletico-PR",
    tipo: "Série A",
    cor: "bg-white",
    destaque: "text-red-600",
    escudo: "/escudos/athletico-paranaense.15469cc7.png",
    sigla: "CAP",
  },
  {
    id: "br-bah",
    nome: "Bahia",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/bahia.ac6d69f5.png",
    sigla: "ECB",
  },
  {
    id: "br-vit",
    nome: "Vitória",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/vitoria.227522d4.png",
    sigla: "ECV",
  },
  {
    id: "br-fec",
    nome: "Fortaleza",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/fortaleza.5f34e5ff.png",
    sigla: "FEC",
  },
  {
    id: "br-csc",
    nome: "Ceará",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/ceara.ea9d0cdd.png",
    sigla: "CSC",
  },
  {
    id: "br-juv",
    nome: "Juventude",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/juventude.fe8abf7c.png",
    sigla: "ECJ",
  },
  {
    id: "br-cri",
    nome: "Criciúma",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_15px,#111_15px,#111_30px,#fff_30px,#fff_45px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/criciuma.d06aa52e.png",
    sigla: "CRI",
  },
  {
    id: "br-ago",
    nome: "Atlético-GO",
    tipo: "Série A",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/atletico-goianiense.4eadd950.png",
    sigla: "ACG",
  },
  {
    id: "br-spo-b",
    nome: "Sport Recife",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/sport-recife.42103cc4.png",
    sigla: "SCR",
  },
  {
    id: "br-goi",
    nome: "Goiás",
    tipo: "Série B",
    cor: "bg-green-700",
    destaque: "text-white",
    escudo: "/escudos/goias.e5a0bc09.png",
    sigla: "GEC",
  },
  {
    id: "br-cfc",
    nome: "Coritiba",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/coritiba.6d282e13.png",
    sigla: "CFC",
  },
  {
    id: "br-ame",
    nome: "América-MG",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#111_20px,#111_40px)]",
    destaque: "text-green-500",
    escudo: "/escudos/america-mineiro.c851fba8.png",
    sigla: "AFC",
  },
  {
    id: "br-crb",
    nome: "CRB",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-600",
    escudo: "/escudos/crb.f44e564b.png",
    sigla: "CRB",
  },
  {
    id: "br-ava",
    nome: "Avaí",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#1e3a8a_0px,#1e3a8a_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-500",
    escudo: "/escudos/avai.cdb69a77.png",
    sigla: "AFC",
  },
  {
    id: "br-ope",
    nome: "Operário-PR",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
    destaque: "text-gray-400",
    escudo: "/escudos/operario-ferroviario.9fc8aa8a.png",
    sigla: "OFEC",
  },
  {
    id: "br-mir",
    nome: "Mirassol",
    tipo: "Série B",
    cor: "bg-yellow-500",
    destaque: "text-green-800",
    escudo: "/escudos/mirassol.3da1a222.png",
    sigla: "MFC",
  },
  {
    id: "br-nov",
    nome: "Novorizontino",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_20px,#111_20px,#111_40px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/novorizontino.689cca10.png",
    sigla: "GFN",
  },
  {
    id: "br-vil",
    nome: "Vila Nova",
    tipo: "Série B",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/vila-nova.cbb31747.png",
    sigla: "VNFC",
  },
  {
    id: "br-cha",
    nome: "Chapecoense",
    tipo: "Série B",
    cor: "bg-green-600",
    destaque: "text-white",
    escudo: "/escudos/chapecoense.7256ba28.png",
    sigla: "ACF",
  },
  {
    id: "br-pon",
    nome: "Ponte Preta",
    tipo: "Série B",
    cor: "bg-[linear-gradient(135deg,#fff_40%,#111_40%,#111_60%,#fff_60%)]",
    destaque: "text-gray-400",
    escudo: "/escudos/ponte-preta.211c18b1.png",
    sigla: "AAPP",
  },
  {
    id: "br-gua",
    nome: "Guarani",
    tipo: "Série B",
    cor: "bg-green-600",
    destaque: "text-white",
    escudo: "/escudos/guarani.88642ff3.png",
    sigla: "GFC",
  },
  {
    id: "br-pay",
    nome: "Paysandu",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#3b82f6_0px,#3b82f6_20px,#fff_20px,#fff_40px)]",
    destaque: "text-blue-400",
    escudo: "/escudos/paysandu.d4c75168.png",
    sigla: "PSC",
  },
  {
    id: "br-ama",
    nome: "Amazonas",
    tipo: "Série B",
    cor: "bg-yellow-500",
    destaque: "text-black",
    escudo: "/escudos/amazonas.c47d0b8c.png",
    sigla: "AMZ",
  },
  {
    id: "br-itu",
    nome: "Ituano",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/ituano.8c844d7e.png",
    sigla: "IFC",
  },
  {
    id: "br-bsp",
    nome: "Botafogo-SP",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
    destaque: "text-red-600",
    escudo: "/escudos/botafogo-sp.50f2da52.png",
    sigla: "BFC",
  },
  {
    id: "br-bru",
    nome: "Brusque",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#eab308_15px,#eab308_30px,#15803d_30px,#15803d_45px)]",
    destaque: "text-yellow-500",
    escudo: "/escudos/brusque.1c6f9af9.png",
    sigla: "BFC",
  },
  {
    id: "br-tom",
    nome: "Tombense",
    tipo: "Série B",
    cor: "bg-red-600",
    destaque: "text-white",
    escudo: "/escudos/tombense.daebec7f.png",
    sigla: "TFC",
  },
  {
    id: "br-nau",
    nome: "Náutico",
    tipo: "Série B",
    cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
    destaque: "text-red-500",
    escudo: "/escudos/nautico.c4fb9d71.png",
    sigla: "CNC",
  },
];

let salas = {};

function criarBaralho() {
  let baralho = [];
  let id = 0;
  for (let naipe of NAIPES)
    for (let valor of VALORES)
      baralho.push({ id: `c_${id++}`, naipe, valor, ponto: PONTOS[valor] });
  return baralho.sort(() => Math.random() - 0.5);
}

function decidirJogadaBot(mao, mesa, trunfo) {
  if (!mao || mao.length === 0) return null;
  const naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
  let validas = mao.filter((c) => c.naipe === naipePuxado);
  if (validas.length === 0) validas = mao;
  if (validas.length === 1) return validas[0];

  if (mesa.length === 0) {
    let ases = validas.filter(
      (c) => c.valor === "A" && c.naipe !== trunfo.naipe,
    );
    if (ases.length > 0) return ases[0];
    let lixo = validas.filter(
      (c) => PONTOS[c.valor] === 0 && c.naipe !== trunfo.naipe,
    );
    if (lixo.length > 0)
      return lixo.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  }

  let pMax = -1;
  let indexVencedor = -1;
  mesa.forEach((c, idx) => {
    let p =
      c.naipe === trunfo.naipe
        ? 1000 + HIERARQUIA[c.valor]
        : c.naipe === naipePuxado
          ? 100 + HIERARQUIA[c.valor]
          : 0;
    if (p > pMax) {
      pMax = p;
      indexVencedor = idx;
    }
  });

  if (indexVencedor === mesa.length - 2) {
    let pts = validas
      .filter((c) => PONTOS[c.valor] > 0)
      .sort((a, b) => PONTOS[b.valor] - PONTOS[a.valor]);
    if (pts.length > 0) return pts[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  } else {
    let ganham = validas.filter((c) => {
      let p =
        c.naipe === trunfo.naipe
          ? 1000 + HIERARQUIA[c.valor]
          : c.naipe === naipePuxado
            ? 100 + HIERARQUIA[c.valor]
            : 0;
      return p > pMax;
    });
    if (ganham.length > 0)
      return ganham.sort(
        (a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor],
      )[0];
    return validas.sort((a, b) => HIERARQUIA[a.valor] - HIERARQUIA[b.valor])[0];
  }
}

function obterInfoJogadores(sala) {
  let info = {};
  Object.keys(sala.jogadores).forEach((jId) => {
    let moedas = 0;
    if (!sala.jogadores[jId].isBot) {
      const uId = sala.socketToUser[jId];
      const u = USERS_CACHE.find((x) => x.id === uId);
      if (u) moedas = u.moedas || 0;
    } else {
      moedas = sala.buyIn * 10;
    }

    info[jId] = {
      nome: sala.jogadores[jId].nome,
      isBot: sala.jogadores[jId].isBot,
      dupla: sala.jogadores[jId].dupla,
      cartas: sala.jogadores[jId].mao.length,
      moedas: moedas,
    };
  });
  return info;
}

function iniciarRodada(salaId) {
  try {
    let sala = salas[salaId];
    if (!sala) return;

    if (sala.intervaloEspera) {
      clearInterval(sala.intervaloEspera);
      sala.intervaloEspera = null;
    }

    let baralho = criarBaralho();
    sala.trunfo = baralho[baralho.length - 1];
    sala.mesa = [];
    sala.pontos = { dupla1: 0, dupla2: 0 };

    let socketsNaSala = Array.from(io.sockets.adapter.rooms.get(salaId) || []);
    let realPlayers = [];
    let spectators = [];
    sala.espectadores = sala.espectadores || [];

    if (sala.sets.dupla1 === 0 && sala.sets.dupla2 === 0) {
      for (let sId of socketsNaSala) {
        let uId = sala.socketToUser[sId];
        let user = USERS_CACHE.find((u) => u.id === uId);

        if (sala.buyIn === 0 || (user && user.moedas >= sala.buyIn)) {
          if (realPlayers.length < 4) {
            realPlayers.push(sId);
            if (sala.buyIn > 0 && user) {
              user.moedas -= sala.buyIn;
              io.to(sId).emit("atualizacaoMoedas", user.moedas);
            }
          } else {
            spectators.push(sId);
          }
        } else {
          spectators.push(sId);
          io.to(sId).emit(
            "erroJogada",
            "Saldo insuficiente para o Buy-in! Você virou espectador.",
          );
        }
      }
      sala.espectadores = spectators;
    } else {
      realPlayers = socketsNaSala
        .filter((sId) => !sala.espectadores.includes(sId))
        .slice(0, 4);
      spectators = socketsNaSala.filter(
        (sId) => sala.espectadores.includes(sId) || !realPlayers.includes(sId),
      );
      sala.espectadores = spectators;
    }

    sala.jogadores = {};
    realPlayers.forEach((sId, index) => {
      sala.jogadores[sId] = {
        mao: baralho.splice(0, 10),
        dupla: index % 2 === 0 ? 1 : 2,
        isBot: false,
        nome: sala.nomesClientes[sId] || `Jogador ${index + 1}`,
      };
    });

    const nomesBots = ["Robô Alpha", "Robô Beta", "Robô Delta"];
    for (let i = realPlayers.length; i < 4; i++) {
      let botId = `bot-${i}`;
      if (!sala.temasClientes) sala.temasClientes = {};
      if (!sala.temasClientes[botId])
        sala.temasClientes[botId] =
          BARALHOS_SISTEMA[Math.floor(Math.random() * BARALHOS_SISTEMA.length)];

      sala.jogadores[botId] = {
        mao: baralho.splice(0, 10),
        dupla: i % 2 === 0 ? 1 : 2,
        isBot: true,
        nome: nomesBots[Math.max(0, i - 1)] || "Robô",
      };
    }

    sala.ordem = Object.keys(sala.jogadores);
    if (sala.turnoIndex === undefined) sala.turnoIndex = 0;
    else sala.turnoIndex = (sala.turnoIndex + 1) % 4;
    sala.turnoAtual = sala.ordem[sala.turnoIndex];

    const infoJ = obterInfoJogadores(sala);

    realPlayers.forEach((sId) => {
      io.to(sId).emit("estadoInicial", {
        jogoIniciado: true,
        trunfo: sala.trunfo,
        mao: sala.jogadores[sId].mao,
        turnoAtual: sala.turnoAtual,
        setDupla1: sala.sets.dupla1,
        setDupla2: sala.sets.dupla2,
        pontosDupla1: 0,
        pontosDupla2: 0,
        infoJogadores: infoJ,
        ordem: sala.ordem,
      });
    });

    spectators.forEach((sId) => {
      io.to(sId).emit("filaDeEspera");
      io.to(sId).emit("estadoInicial", {
        jogoIniciado: true,
        trunfo: sala.trunfo,
        mao: [],
        turnoAtual: sala.turnoAtual,
        setDupla1: sala.sets.dupla1,
        setDupla2: sala.sets.dupla2,
        pontosDupla1: 0,
        pontosDupla2: 0,
        infoJogadores: infoJ,
        ordem: sala.ordem,
      });
    });

    if (sala.jogadores[sala.turnoAtual].isBot)
      acionarBot(salaId, sala.turnoAtual);
  } catch (error) {
    console.error("ERRO GRAVE AO INICIAR RODADA:", error);
  }
}

function acionarBot(salaId, botId) {
  setTimeout(() => {
    let sala = salas[salaId];
    if (
      !sala ||
      sala.mesa.length >= 4 ||
      sala.turnoAtual !== botId ||
      sala.turnoAtual === "fim"
    )
      return;
    let cartaEscolhida = decidirJogadaBot(
      sala.jogadores[botId].mao,
      sala.mesa,
      sala.trunfo,
    );
    if (!cartaEscolhida) return;
    sala.jogadores[botId].mao = sala.jogadores[botId].mao.filter(
      (c) => c.id !== cartaEscolhida.id,
    );
    processarJogada(salaId, botId, cartaEscolhida);
  }, 1200);
}

function processarJogada(salaId, jogadorId, carta) {
  let sala = salas[salaId];
  carta.jogadorId = jogadorId;
  sala.mesa.push(carta);

  if (sala.mesa.length === 4) {
    sala.turnoAtual = "calculando";
    io.to(salaId).emit("sincronizarMesa", {
      mesa: sala.mesa,
      turnoAtual: "calculando",
      infoJogadores: obterInfoJogadores(sala),
    });
    setTimeout(() => avaliarVaza(salaId), 1800);
  } else {
    let proximoIndex = (sala.ordem.indexOf(jogadorId) + 1) % 4;
    sala.turnoIndex = proximoIndex;
    sala.turnoAtual = sala.ordem[proximoIndex];
    io.to(salaId).emit("sincronizarMesa", {
      mesa: sala.mesa,
      turnoAtual: sala.turnoAtual,
      infoJogadores: obterInfoJogadores(sala),
    });
    if (sala.jogadores[sala.turnoAtual].isBot)
      acionarBot(salaId, sala.turnoAtual);
  }
}

function avaliarVaza(salaId) {
  try {
    let sala = salas[salaId];
    if (!sala || sala.mesa.length !== 4) return;

    let puxado = sala.mesa[0].naipe;
    let trunfo = sala.trunfo.naipe;

    let vencedor = sala.mesa.reduce((maior, atual) => {
      let pAtual =
        atual.naipe === trunfo
          ? 1000 + HIERARQUIA[atual.valor]
          : atual.naipe === puxado
            ? 100 + HIERARQUIA[atual.valor]
            : 0;
      let pMaior =
        maior.naipe === trunfo
          ? 1000 + HIERARQUIA[maior.valor]
          : maior.naipe === puxado
            ? 100 + HIERARQUIA[maior.valor]
            : 0;
      return pAtual > pMaior ? atual : maior;
    });

    let pontosVaza = sala.mesa.reduce((acc, c) => acc + c.ponto, 0);
    let idVencedor = vencedor.jogadorId;
    if (sala.jogadores[idVencedor].dupla === 1)
      sala.pontos.dupla1 += pontosVaza;
    else sala.pontos.dupla2 += pontosVaza;

    sala.mesa = [];
    sala.turnoIndex = sala.ordem.indexOf(idVencedor);
    sala.turnoAtual = idVencedor;

    let fimDeSet = sala.ordem.every(
      (id) => sala.jogadores[id].mao.length === 0,
    );

    io.to(salaId).emit("resultadoVaza", {
      mensagem: `${sala.jogadores[idVencedor]?.nome || "Jogador"} levou a vaza!`,
      pontosDupla1: sala.pontos.dupla1,
      pontosDupla2: sala.pontos.dupla2,
      turnoAtual: idVencedor,
    });

    if (fimDeSet) {
      sala.turnoAtual = "fim";
      let msg = "";
      if (sala.pontos.dupla1 > 60) {
        sala.sets.dupla1++;
        msg = "Vitória da dupla 1!";
      } else if (sala.pontos.dupla2 > 60) {
        sala.sets.dupla2++;
        msg = "Vitória da dupla 2!";
      } else {
        msg = "Empate!";
      }

      const fimGlobal = sala.sets.dupla1 === 4 || sala.sets.dupla2 === 4;

      if (fimGlobal && sala.buyIn > 0) {
        const duplaVencedora = sala.sets.dupla1 === 4 ? 1 : 2;
        const poteTotal = Number(sala.buyIn) * 4;
        const rake = poteTotal * 0.1;
        const premioPorJogador = (poteTotal - rake) / 2;

        SYSTEM_CACHE.lucroPlataforma =
          (SYSTEM_CACHE.lucroPlataforma || 0) + rake;

        Object.keys(sala.jogadores).forEach((sId) => {
          if (
            !sala.jogadores[sId].isBot &&
            sala.jogadores[sId].dupla === duplaVencedora
          ) {
            const uId = sala.socketToUser[sId];
            const userIdx = USERS_CACHE.findIndex((u) => u.id === uId);
            if (userIdx > -1) {
              USERS_CACHE[userIdx].moedas += premioPorJogador;
              io.to(sId).emit("atualizacaoMoedas", USERS_CACHE[userIdx].moedas);
              io.to(sId).emit("chuvaDeMoedas", premioPorJogador);
            }
          }
        });
      }

      setTimeout(() => {
        io.to(salaId).emit("fimDePartida", {
          mensagem: msg,
          pontosDupla1: sala.pontos.dupla1,
          pontosDupla2: sala.pontos.dupla2,
          setDupla1: sala.sets.dupla1,
          setDupla2: sala.sets.dupla2,
          fimDeJogoGlobal: fimGlobal,
        });
      }, 1200);
    } else {
      if (sala.jogadores[idVencedor]?.isBot) acionarBot(salaId, idVencedor);
    }
  } catch (error) {
    console.error("Erro fatal em avaliarVaza:", error);
  }
}

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    for (let salaId in salas) {
      if (salas[salaId].espectadores) {
        salas[salaId].espectadores = salas[salaId].espectadores.filter(
          (id) => id !== socket.id,
        );
      }
    }
  });

  socket.on("entrarSala", (data) => {
    let { salaId, tema, nome, userId, buyIn } = data;

    socket.join(salaId);
    if (!salas[salaId]) {
      salas[salaId] = {
        sets: { dupla1: 0, dupla2: 0 },
        temasClientes: {},
        nomesClientes: {},
        socketToUser: {},
        jogoIniciado: false,
        intervaloEspera: null,
        tempoRestanteEspera: 60,
        mesa: [],
        jogadores: {},
        ordem: [],
        espectadores: [],
        buyIn: buyIn || 0,
      };
    }

    salas[salaId].temasClientes[socket.id] = tema;
    salas[salaId].nomesClientes[socket.id] = nome;
    if (userId) salas[salaId].socketToUser[socket.id] = userId;

    let socketsNaSala = Array.from(io.sockets.adapter.rooms.get(salaId) || []);

    if (salas[salaId].jogoIniciado) {
      let oldSocketId = Object.keys(salas[salaId].jogadores).find(
        (id) =>
          !salas[salaId].jogadores[id].isBot &&
          salas[salaId].socketToUser[id] === userId,
      );
      if (oldSocketId && oldSocketId !== socket.id) {
        salas[salaId].jogadores[socket.id] =
          salas[salaId].jogadores[oldSocketId];
        delete salas[salaId].jogadores[oldSocketId];
        salas[salaId].ordem = salas[salaId].ordem.map((id) =>
          id === oldSocketId ? socket.id : id,
        );
        if (salas[salaId].turnoAtual === oldSocketId)
          salas[salaId].turnoAtual = socket.id;
        salas[salaId].mesa.forEach((c) => {
          if (c.jogadorId === oldSocketId) c.jogadorId = socket.id;
        });
      } else if (!oldSocketId) {
        if (!salas[salaId].espectadores.includes(socket.id))
          salas[salaId].espectadores.push(socket.id);
        io.to(socket.id).emit("filaDeEspera");
        io.to(socket.id).emit("estadoInicial", {
          jogoIniciado: true,
          trunfo: salas[salaId].trunfo,
          mao: [],
          turnoAtual: salas[salaId].turnoAtual,
          setDupla1: salas[salaId].sets.dupla1,
          setDupla2: salas[salaId].sets.dupla2,
          pontosDupla1: salas[salaId].pontos.dupla1,
          pontosDupla2: salas[salaId].pontos.dupla2,
          infoJogadores: obterInfoJogadores(salas[salaId]),
          ordem: salas[salaId].ordem,
        });
        io.to(socket.id).emit("sincronizarMesa", {
          mesa: salas[salaId].mesa,
          turnoAtual: salas[salaId].turnoAtual,
          infoJogadores: obterInfoJogadores(salas[salaId]),
        });
        return;
      }

      // NOVO: Verifica se o usuário reconectou com o jogo já finalizado (fim de jogo global ou de set)
      const isFimGlobal =
        salas[salaId].sets.dupla1 === 4 || salas[salaId].sets.dupla2 === 4;
      const isFimDeSet = salas[salaId].turnoAtual === "fim";

      io.to(socket.id).emit("estadoInicial", {
        jogoIniciado: true,
        trunfo: salas[salaId].trunfo,
        mao: salas[salaId].jogadores[socket.id]?.mao || [],
        turnoAtual: salas[salaId].turnoAtual,
        setDupla1: salas[salaId].sets.dupla1,
        setDupla2: salas[salaId].sets.dupla2,
        pontosDupla1: salas[salaId].pontos.dupla1,
        pontosDupla2: salas[salaId].pontos.dupla2,
        infoJogadores: obterInfoJogadores(salas[salaId]),
        ordem: salas[salaId].ordem,
      });
      io.to(socket.id).emit("sincronizarMesa", {
        mesa: salas[salaId].mesa,
        turnoAtual: salas[salaId].turnoAtual,
        infoJogadores: obterInfoJogadores(salas[salaId]),
      });

      // Se reconectou no limbo, força o envio do modal de Fim de Partida
      if (isFimGlobal || isFimDeSet) {
        io.to(socket.id).emit("fimDePartida", {
          mensagem: isFimGlobal ? "Partida Finalizada" : "Fim do Set",
          pontosDupla1: salas[salaId].pontos.dupla1,
          pontosDupla2: salas[salaId].pontos.dupla2,
          setDupla1: salas[salaId].sets.dupla1,
          setDupla2: salas[salaId].sets.dupla2,
          fimDeJogoGlobal: isFimGlobal,
        });
      }
    } else {
      if (salaId === "TREINO-LOCAL" || socketsNaSala.length >= 4) {
        if (salas[salaId].intervaloEspera)
          clearInterval(salas[salaId].intervaloEspera);
        salas[salaId].jogoIniciado = true;
        iniciarRodada(salaId);
      } else {
        if (!salas[salaId].intervaloEspera) {
          salas[salaId].intervaloEspera = setInterval(() => {
            salas[salaId].tempoRestanteEspera -= 1;
            io.to(salaId).emit("statusEspera", {
              tempo: salas[salaId].tempoRestanteEspera,
            });
            if (salas[salaId].tempoRestanteEspera <= 0) {
              clearInterval(salas[salaId].intervaloEspera);
              salas[salaId].intervaloEspera = null;
              salas[salaId].jogoIniciado = true;
              iniciarRodada(salaId);
            }
          }, 1000);
        }
        io.to(salaId).emit("statusEspera", {
          tempo: salas[salaId].tempoRestanteEspera,
        });
      }
    }
  });

  socket.on("jogarCarta", (data) => {
    let { salaId, carta } = data;
    let sala = salas[salaId];
    if (
      !sala ||
      !sala.jogoIniciado ||
      sala.mesa.length >= 4 ||
      sala.turnoAtual !== socket.id
    )
      return;
    let cartaNaMao = sala.jogadores[socket.id]?.mao.find(
      (c) => c.id === carta.id,
    );
    if (!cartaNaMao) return;
    let puxado = sala.mesa.length > 0 ? sala.mesa[0].naipe : null;
    if (
      puxado &&
      carta.naipe !== puxado &&
      sala.jogadores[socket.id].mao.some((c) => c.naipe === puxado)
    ) {
      socket.emit("erroJogada", "Você deve seguir o naipe da mesa!");
      return;
    }
    sala.jogadores[socket.id].mao = sala.jogadores[socket.id].mao.filter(
      (c) => c.id !== carta.id,
    );
    processarJogada(salaId, socket.id, carta);
  });

  socket.on("pedirNovaPartida", (resetarSets) => {
    let salaId = Array.from(socket.rooms)[1];
    if (salas[salaId]) {
      if (resetarSets) salas[salaId].sets = { dupla1: 0, dupla2: 0 };
      iniciarRodada(salaId);
    }
  });

  socket.on("enviarEmoji", (data) => {
    if (!data.salaId || !data.emoji) return;
    io.to(data.salaId).emit("emojiRecebido", {
      emoji: data.emoji,
      jogadorId: socket.id,
    });
  });
});

server.listen(3001, () =>
  console.log("Servidor Blindado rodando na porta 3001! 🚀"),
);
