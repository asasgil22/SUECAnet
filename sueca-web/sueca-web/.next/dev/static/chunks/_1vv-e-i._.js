(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GameBoard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BARALHOS = [
    {
        id: "gen-dark",
        nome: "Midnight Blue",
        tipo: "Clássico",
        cor: "bg-slate-900",
        destaque: "text-slate-400",
        escudo: "",
        sigla: "♠"
    },
    {
        id: "gen-red",
        nome: "Crimson Red",
        tipo: "Clássico",
        cor: "bg-red-900",
        destaque: "text-red-400",
        escudo: "",
        sigla: "♥"
    },
    {
        id: "gen-green",
        nome: "Casino Green",
        tipo: "Clássico",
        cor: "bg-emerald-900",
        destaque: "text-emerald-400",
        escudo: "",
        sigla: "♣"
    },
    {
        id: "gen-gold",
        nome: "Royal Gold",
        tipo: "Clássico",
        cor: "bg-amber-700",
        destaque: "text-amber-400",
        escudo: "",
        sigla: "♦"
    },
    {
        id: "pt-scp",
        nome: "Sporting CP",
        tipo: "Portugal",
        cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
        destaque: "text-green-500",
        escudo: "/escudos/sporting-cp.8b32e971.png",
        sigla: "SCP"
    },
    {
        id: "pt-fcp",
        nome: "FC Porto",
        tipo: "Portugal",
        cor: "bg-[repeating-linear-gradient(90deg,#1e40af_0px,#1e40af_20px,#fff_20px,#fff_40px)]",
        destaque: "text-blue-500",
        escudo: "/escudos/fc-porto.b58f31f6.png",
        sigla: "FCP"
    },
    {
        id: "pt-slb",
        nome: "Benfica",
        tipo: "Portugal",
        cor: "bg-red-700",
        destaque: "text-red-400",
        escudo: "/escudos/benfica.3e4d3034.png",
        sigla: "SLB"
    },
    {
        id: "pt-bra",
        nome: "SC Braga",
        tipo: "Portugal",
        cor: "bg-red-600",
        destaque: "text-white",
        escudo: "/escudos/sc-braga.07de49c7.png",
        sigla: "SCB"
    },
    {
        id: "br-bfr",
        nome: "Botafogo",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/botafogo.e439f7a4.png",
        sigla: "BFR"
    },
    {
        id: "br-fla",
        nome: "Flamengo",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(0deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/flamengo.9c3055f2.png",
        sigla: "CRF"
    },
    {
        id: "br-flu",
        nome: "Fluminense",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(0deg,#166534_0px,#166534_15px,#fff_15px,#fff_20px,#991b1b_20px,#991b1b_35px,#fff_35px,#fff_40px)]",
        destaque: "text-red-600",
        escudo: "/escudos/fluminense.118d8b5e.png",
        sigla: "FFC"
    },
    {
        id: "br-vas",
        nome: "Vasco da Gama",
        tipo: "Brasil",
        cor: "bg-[linear-gradient(135deg,#111_40%,#fff_40%,#fff_50%,#111_50%)]",
        destaque: "text-gray-400",
        escudo: "/escudos/vasco-da-gama.74746cfd.png",
        sigla: "CRVG"
    },
    {
        id: "br-pal",
        nome: "Palmeiras",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(0deg,#14532d_0px,#14532d_20px,#fff_20px,#fff_40px)]",
        destaque: "text-green-500",
        escudo: "/escudos/palmeiras.9ab1d558.png",
        sigla: "SEP"
    },
    {
        id: "br-cor",
        nome: "Corinthians",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(45deg,#111_0px,#111_15px,#fff_15px,#fff_30px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/corinthians.c51ae739.png",
        sigla: "SCCP"
    },
    {
        id: "br-spo",
        nome: "São Paulo",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
        destaque: "text-red-600",
        escudo: "/escudos/sao-paulo.468eaeb3.png",
        sigla: "SPFC"
    },
    {
        id: "br-san",
        nome: "Santos",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(0deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/santos.5ea20e58.png",
        sigla: "SFC"
    },
    {
        id: "br-cam",
        nome: "Atlético-MG",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/atletico-mineiro.c5c81922.png",
        sigla: "CAM"
    },
    {
        id: "br-cru",
        nome: "Cruzeiro",
        tipo: "Brasil",
        cor: "bg-blue-800",
        destaque: "text-blue-400",
        escudo: "/escudos/cruzeiro.6c188ab8.png",
        sigla: "CEC"
    },
    {
        id: "br-gre",
        nome: "Grêmio",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#111_15px,#111_30px,#fff_30px,#fff_35px)]",
        destaque: "text-blue-500",
        escudo: "/escudos/gremio.d252cec9.png",
        sigla: "FBPA"
    },
    {
        id: "br-sci",
        nome: "Internacional",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/internacional.82f72a2f.png",
        sigla: "SCI"
    },
    {
        id: "br-cap",
        nome: "Athletico-PR",
        tipo: "Brasil",
        cor: "bg-white",
        destaque: "text-red-600",
        escudo: "/escudos/athletico-paranaense.15469cc7.png",
        sigla: "CAP"
    },
    {
        id: "br-bah",
        nome: "Bahia",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
        destaque: "text-blue-500",
        escudo: "/escudos/bahia.ac6d69f5.png",
        sigla: "ECB"
    },
    {
        id: "br-vit",
        nome: "Vitória",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/vitoria.227522d4.png",
        sigla: "ECV"
    },
    {
        id: "br-fec",
        nome: "Fortaleza",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#1d4ed8_0px,#1d4ed8_15px,#fff_15px,#fff_30px,#dc2626_30px,#dc2626_45px)]",
        destaque: "text-blue-500",
        escudo: "/escudos/fortaleza.5f34e5ff.png",
        sigla: "FEC"
    },
    {
        id: "br-csc",
        nome: "Ceará",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/ceara.ea9d0cdd.png",
        sigla: "CSC"
    },
    {
        id: "br-juv",
        nome: "Juventude",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#fff_20px,#fff_40px)]",
        destaque: "text-green-500",
        escudo: "/escudos/juventude.fe8abf7c.png",
        sigla: "ECJ"
    },
    {
        id: "br-cri",
        nome: "Criciúma",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_15px,#111_15px,#111_30px,#fff_30px,#fff_45px)]",
        destaque: "text-yellow-500",
        escudo: "/escudos/criciuma.d06aa52e.png",
        sigla: "CRI"
    },
    {
        id: "br-ago",
        nome: "Atlético-GO",
        tipo: "Brasil",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/atletico-goianiense.4eadd950.png",
        sigla: "ACG"
    },
    {
        id: "br-spo-b",
        nome: "Sport Recife",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
        destaque: "text-red-600",
        escudo: "/escudos/sport-recife.42103cc4.png",
        sigla: "SCR"
    },
    {
        id: "br-goi",
        nome: "Goiás",
        tipo: "Série B",
        cor: "bg-green-700",
        destaque: "text-white",
        escudo: "/escudos/goias.e5a0bc09.png",
        sigla: "GEC"
    },
    {
        id: "br-cfc",
        nome: "Coritiba",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#166534_0px,#166534_20px,#fff_20px,#fff_40px)]",
        destaque: "text-green-500",
        escudo: "/escudos/coritiba.6d282e13.png",
        sigla: "CFC"
    },
    {
        id: "br-ame",
        nome: "América-MG",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#15803d_0px,#15803d_20px,#111_20px,#111_40px)]",
        destaque: "text-green-500",
        escudo: "/escudos/america-mineiro.c851fba8.png",
        sigla: "AFC"
    },
    {
        id: "br-crb",
        nome: "CRB",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#fff_20px,#fff_40px)]",
        destaque: "text-red-600",
        escudo: "/escudos/crb.f44e564b.png",
        sigla: "CRB"
    },
    {
        id: "br-ava",
        nome: "Avaí",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#1e3a8a_0px,#1e3a8a_20px,#fff_20px,#fff_40px)]",
        destaque: "text-blue-500",
        escudo: "/escudos/avai.cdb69a77.png",
        sigla: "AFC"
    },
    {
        id: "br-ope",
        nome: "Operário-PR",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#111_0px,#111_20px,#fff_20px,#fff_40px)]",
        destaque: "text-gray-400",
        escudo: "/escudos/operario-ferroviario.9fc8aa8a.png",
        sigla: "OFEC"
    },
    {
        id: "br-mir",
        nome: "Mirassol",
        tipo: "Série B",
        cor: "bg-yellow-500",
        destaque: "text-green-800",
        escudo: "/escudos/mirassol.3da1a222.png",
        sigla: "MFC"
    },
    {
        id: "br-nov",
        nome: "Novorizontino",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#eab308_0px,#eab308_20px,#111_20px,#111_40px)]",
        destaque: "text-yellow-500",
        escudo: "/escudos/novorizontino.689cca10.png",
        sigla: "GFN"
    },
    {
        id: "br-vil",
        nome: "Vila Nova",
        tipo: "Série B",
        cor: "bg-red-600",
        destaque: "text-white",
        escudo: "/escudos/vila-nova.cbb31747.png",
        sigla: "VNFC"
    },
    {
        id: "br-cha",
        nome: "Chapecoense",
        tipo: "Série B",
        cor: "bg-green-600",
        destaque: "text-white",
        escudo: "/escudos/chapecoense.7256ba28.png",
        sigla: "ACF"
    },
    {
        id: "br-pon",
        nome: "Ponte Preta",
        tipo: "Série B",
        cor: "bg-[linear-gradient(135deg,#fff_40%,#111_40%,#111_60%,#fff_60%)]",
        destaque: "text-gray-400",
        escudo: "/escudos/ponte-preta.211c18b1.png",
        sigla: "AAPP"
    },
    {
        id: "br-gua",
        nome: "Guarani",
        tipo: "Série B",
        cor: "bg-green-600",
        destaque: "text-white",
        escudo: "/escudos/guarani.88642ff3.png",
        sigla: "GFC"
    },
    {
        id: "br-pay",
        nome: "Paysandu",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#3b82f6_0px,#3b82f6_20px,#fff_20px,#fff_40px)]",
        destaque: "text-blue-400",
        escudo: "/escudos/paysandu.d4c75168.png",
        sigla: "PSC"
    },
    {
        id: "br-ama",
        nome: "Amazonas",
        tipo: "Série B",
        cor: "bg-yellow-500",
        destaque: "text-black",
        escudo: "/escudos/amazonas.c47d0b8c.png",
        sigla: "AMZ"
    },
    {
        id: "br-itu",
        nome: "Ituano",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_20px,#111_20px,#111_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/ituano.8c844d7e.png",
        sigla: "IFC"
    },
    {
        id: "br-bsp",
        nome: "Botafogo-SP",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#fff_15px,#fff_30px,#111_30px,#111_45px)]",
        destaque: "text-red-600",
        escudo: "/escudos/botafogo-sp.50f2da52.png",
        sigla: "BFC"
    },
    {
        id: "br-bru",
        nome: "Brusque",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(90deg,#b91c1c_0px,#b91c1c_15px,#eab308_15px,#eab308_30px,#15803d_30px,#15803d_45px)]",
        destaque: "text-yellow-500",
        escudo: "/escudos/brusque.1c6f9af9.png",
        sigla: "BFC"
    },
    {
        id: "br-tom",
        nome: "Tombense",
        tipo: "Série B",
        cor: "bg-red-600",
        destaque: "text-white",
        escudo: "/escudos/tombense.daebec7f.png",
        sigla: "TFC"
    },
    {
        id: "br-nau",
        nome: "Náutico",
        tipo: "Série B",
        cor: "bg-[repeating-linear-gradient(0deg,#dc2626_0px,#dc2626_20px,#fff_20px,#fff_40px)]",
        destaque: "text-red-500",
        escudo: "/escudos/nautico.c4fb9d71.png",
        sigla: "CNC"
    }
];
const CATEGORIAS_SALAS = [
    {
        id: "SALA-INICIANTE",
        nome: "Iniciante",
        buyIn: 25,
        icone: "🥉",
        pot: 100,
        cor: "from-amber-700 to-amber-900"
    },
    {
        id: "SALA-INTERMEDIARIO",
        nome: "Intermediário",
        buyIn: 50,
        icone: "🥈",
        pot: 200,
        cor: "from-slate-400 to-slate-600"
    },
    {
        id: "SALA-PRO",
        nome: "Profissional",
        buyIn: 100,
        icone: "🥇",
        pot: 400,
        cor: "from-yellow-400 to-amber-600"
    }
];
const validarCPF = (cpf)=>{
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    let soma = 0, resto;
    for(let i = 1; i <= 9; i++)soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = soma * 10 % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for(let i = 1; i <= 10; i++)soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = soma * 10 % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
};
const maskCPF = (value)=>value.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})/, "$1-$2").replace(/(-\d{2})\d+?$/, "$1");
const maskData = (value)=>value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{2})(\d)/, "$1/$2").replace(/(\d{4})\d+?$/, "$1");
function Home() {
    _s();
    const [usuarioLogado, setUsuarioLogado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [erroAuth, setErroAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bonusAlerta, setBonusAlerta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        cpf: "",
        dataNascimento: "",
        email: "",
        usuario: "",
        senha: ""
    });
    const [salaDaPartida, setSalaDaPartida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [buyInPartida, setBuyInPartida] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [temaIndex, setTemaIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [jogando, setJogando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const temaSelecionado = BARALHOS[temaIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const salvo = localStorage.getItem("@suecabet:user");
            if (salvo) setUsuarioLogado(JSON.parse(salvo));
        }
    }["Home.useEffect"], []);
    const handleAuth = async (e)=>{
        e.preventDefault();
        setErroAuth("");
        setLoading(true);
        if (!isLogin && !validarCPF(form.cpf)) {
            setErroAuth("CPF inválido. Verifique os números informados.");
            setLoading(false);
            return;
        }
        const endpoint = isLogin ? "/api/login" : "/api/register";
        try {
            const res = await fetch(`http://localhost:3001${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            localStorage.setItem("@suecabet:user", JSON.stringify(data.user));
            setUsuarioLogado(data.user);
            if (data.bonusRecebido) {
                setBonusAlerta(true);
                setTimeout(()=>setBonusAlerta(false), 5000);
            }
        } catch (err) {
            setErroAuth(err.message);
        }
        setLoading(false);
    };
    const resgatarEmergencia = async ()=>{
        try {
            const res = await fetch(`http://localhost:3001/api/resgate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: usuarioLogado?.id
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            const atualizado = {
                ...usuarioLogado,
                moedas: data.moedas
            };
            setUsuarioLogado(atualizado);
            localStorage.setItem("@suecabet:user", JSON.stringify(atualizado));
            alert("Resgate de 50 moedas efetuado com sucesso!");
        } catch (e) {
            alert(e.message);
        }
    };
    const logout = ()=>{
        localStorage.removeItem("@suecabet:user");
        setUsuarioLogado(null);
    };
    const nextTema = ()=>setTemaIndex((prev)=>(prev + 1) % BARALHOS.length);
    const prevTema = ()=>setTemaIndex((prev)=>(prev - 1 + BARALHOS.length) % BARALHOS.length);
    const iniciarJogo = (salaId, buyIn)=>{
        if (usuarioLogado && usuarioLogado.moedas < buyIn && salaId !== "TREINO-LOCAL") {
            alert(`Saldo insuficiente! Você precisa de ${buyIn} SuecaCoins para entrar na sala.`);
            return;
        }
        setSalaDaPartida(salaId);
        setBuyInPartida(buyIn);
        setJogando(true);
    };
    if (jogando && usuarioLogado) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-screen h-screen bg-[#0b1510] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                salaId: salaDaPartida,
                tema: temaSelecionado,
                nomeJogador: usuarioLogado.nome,
                userId: usuarioLogado.id,
                buyIn: buyInPartida
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050a07] text-white flex items-center justify-center relative overflow-hidden font-sans p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: bonusAlerta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: -50,
                        opacity: 0
                    },
                    animate: {
                        y: 20,
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed top-0 z-50 bg-emerald-500 text-black font-bold px-6 py-3 rounded-full shadow-lg",
                    children: "🎉 Bônus Diário Recebido: +25 SuecaCoins!"
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: !usuarioLogado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    className: "relative z-10 w-full max-w-md bg-gradient-to-br from-black/60 via-black/50 to-black/70 backdrop-blur-3xl border border-emerald-500/40 p-8 rounded-[2.5rem] shadow-2xl shadow-emerald-500/20 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)] transition-all duration-300 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6 text-6xl drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] animate-pulse relative z-10",
                            children: "♠️"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-black text-center text-white tracking-widest mb-2 relative group z-10",
                            children: [
                                "SUECA",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-600 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]",
                                    children: "bet"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 20
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-white/60 text-sm mb-8 font-medium tracking-wide",
                                    children: isLogin ? "Faça login para acessar as mesas." : "Cadastre-se no clube."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent mb-8"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAuth,
                            className: "flex flex-col gap-4 relative z-20",
                            children: [
                                !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Nome Completo",
                                            required: true,
                                            value: form.nome,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    nome: e.target.value
                                                }),
                                            className: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "CPF",
                                                    required: true,
                                                    value: form.cpf,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            cpf: maskCPF(e.target.value)
                                                        }),
                                                    className: "w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 bg-linear-to-br from-rose-500/15 to-rose-600/10 border border-rose-500/40 p-3 rounded-xl flex items-start gap-3 shadow-lg shadow-rose-500/10 group-hover:shadow-rose-500/20 transition-all duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg animate-pulse",
                                                            children: "🔞"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-rose-200/90 leading-relaxed font-semibold tracking-tight",
                                                            children: "Aviso Legal: Jogos de azar são estritamente proibidos para menores de 18 anos. O CPF é obrigatório."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Data de Nasc. (DD/MM/AAAA)",
                                            required: true,
                                            value: form.dataNascimento,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    dataNascimento: maskData(e.target.value)
                                                }),
                                            className: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "E-mail",
                                            required: true,
                                            value: form.email,
                                            onChange: (e)=>setForm({
                                                    ...form,
                                                    email: e.target.value
                                                }),
                                            className: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Usuário",
                                    required: true,
                                    value: form.usuario,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            usuario: e.target.value.toLowerCase()
                                        }),
                                    className: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    placeholder: "Senha",
                                    required: true,
                                    value: form.senha,
                                    onChange: (e)=>setForm({
                                            ...form,
                                            senha: e.target.value
                                        }),
                                    className: "bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:shadow-[0_0_20px_rgba(52,211,153,0.2)] focus:bg-black/50 transition-all duration-200 hover:border-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                erroAuth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-linear-to-r from-rose-500/20 to-red-500/20 border border-rose-500/50 p-3 rounded-lg text-rose-300 text-xs text-center font-bold shadow-lg shadow-rose-500/10 animate-pulse",
                                    children: [
                                        "❌ ",
                                        erroAuth
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "relative w-full bg-linear-to-r from-emerald-500 to-emerald-400 text-black font-black py-4 rounded-xl mt-4 hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-emerald-500/40 hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition-all duration-200 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-linear-to-r from-emerald-400/0 via-white/20 to-emerald-400/0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        loading ? "⏳ Processando..." : isLogin ? "🔓 ENTRAR NO CLUBE" : "✨ CRIAR CONTA VIP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setIsLogin(!isLogin);
                                        setErroAuth("");
                                    },
                                    className: "w-full text-center text-xs text-white/40 hover:text-emerald-300 font-bold transition-colors duration-200 uppercase tracking-wider hover:bg-white/5 py-2 rounded-lg border border-transparent hover:border-white/10",
                                    children: isLogin ? "🆕 Não tem conta? Cadastre-se" : "🔐 Já é membro? Faça login"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    ]
                }, "auth", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    className: "relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-15 right-0 flex items-center gap-4 group",
                            children: [
                                usuarioLogado.moedas === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: resgatarEmergencia,
                                    className: "animate-pulse bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(225,29,72,0.5)]",
                                    children: "🆘 Resgate 50 Moedas"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-500/40 rounded-full flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400 font-black text-lg drop-shadow-md",
                                            children: [
                                                "💰 ",
                                                Math.floor(usuarioLogado.moedas)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/60 text-xs font-medium uppercase tracking-widest hidden sm:inline",
                                            children: "SuecaCoins"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-2 bg-linear-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-emerald-500/20 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/60 text-sm font-medium",
                                        children: [
                                            "👤 Logado como ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-emerald-300 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]",
                                                children: usuarioLogado.nome.split(" ")[0]
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 84
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    className: "text-white/30 hover:text-rose-300 text-xs font-bold uppercase tracking-widest transition-all duration-200 border border-white/10 px-4 py-1.5 rounded-full hover:bg-rose-500/10 hover:border-rose-500/30 hover:shadow-lg hover:shadow-rose-500/10 active:scale-95",
                                    children: "🚺 Sair"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col items-start w-full group/main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-emerald-400 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] animate-pulse",
                                            children: "♠️ A mesa está pronta ♠️"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-px w-20 bg-linear-to-r from-emerald-500/50 to-transparent mt-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-6xl sm:text-7xl font-black text-white tracking-tighter mb-12 relative group/title",
                                    children: [
                                        "SUECA",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]",
                                            children: "bet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 22
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -inset-4 bg-linear-to-r from-emerald-500/10 to-blue-500/10 blur-3xl -z-10 opacity-0 group-hover/title:opacity-100 transition-opacity duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full",
                                    children: CATEGORIAS_SALAS.map((sala)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>iniciarJogo(sala.id, sala.buyIn),
                                            className: `relative group overflow-hidden bg-black/40 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 bg-gradient-to-b ${sala.cor} opacity-10 group-hover:opacity-30 transition-opacity duration-500`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl mb-3 relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-300",
                                                    children: sala.icone
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-black text-xl mb-1 relative z-10 uppercase tracking-wider",
                                                    children: sala.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full mb-4 relative z-10 border border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-white/50 uppercase tracking-widest font-bold",
                                                            children: "Buy-in:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-400 font-bold text-sm",
                                                            children: [
                                                                "💰 ",
                                                                sala.buyIn
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-emerald-400/80 text-xs font-bold uppercase tracking-widest relative z-10",
                                                    children: [
                                                        "Pote: ",
                                                        sala.pot,
                                                        " SC"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, sala.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>iniciarJogo("TREINO-LOCAL", 0),
                                    className: "mt-8 text-white/40 text-xs font-bold uppercase tracking-widest hover:text-emerald-400 transition-colors flex items-center gap-2 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "group-hover:scale-125 transition-transform",
                                            children: "🤖"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        " Treinar Offline (Grátis)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-[400px] flex flex-col items-center group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-linear-to-br from-[#0b1510]/90 to-black/80 backdrop-blur-3xl border border-emerald-500/20 p-8 rounded-[2.5rem] w-full flex flex-col items-center shadow-2xl shadow-emerald-500/10 group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 overflow-hidden relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] text-emerald-400/60 uppercase tracking-[0.4em] font-bold drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]",
                                            children: "✨ Design do Baralho"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            },
                                            className: `relative w-56 h-72 rounded-[1.5rem] shadow-2xl shadow-emerald-500/30 border-2 border-emerald-500/40 bg-cover bg-center overflow-hidden flex items-center justify-center group/card hover:shadow-emerald-500/50 transition-all duration-300 ${temaSelecionado.cor}`,
                                            children: [
                                                temaSelecionado.escudo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: temaSelecionado.escudo,
                                                    alt: temaSelecionado.sigla,
                                                    className: "w-28 h-28 object-contain drop-shadow-2xl z-10 opacity-95 group-hover/card:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-serif text-7xl font-black text-white/60 z-10 drop-shadow-lg group-hover/card:text-white/80 transition-colors duration-300",
                                                    children: temaSelecionado.sigla
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(52,211,153,0.1)] pointer-events-none z-30 group-hover/card:shadow-[inset_0_0_30px_rgba(52,211,153,0.2)] transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, temaSelecionado.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between w-full mt-10 px-2 relative z-10 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: prevTema,
                                                className: "w-12 h-12 rounded-full bg-linear-to-br from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/40 text-lg active:scale-90 hover:shadow-lg hover:shadow-emerald-500/20",
                                                children: "❮"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center px-4 w-48 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-white text-lg tracking-wide whitespace-nowrap text-ellipsis drop-shadow-[0_0_10px_rgba(52,211,153,0.2)]",
                                                    children: temaSelecionado.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 74
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: nextTema,
                                                className: "w-12 h-12 rounded-full bg-linear-to-br from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-emerald-500/10 flex items-center justify-center text-white/40 hover:text-emerald-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/40 text-lg active:scale-90 hover:shadow-lg hover:shadow-emerald-500/20",
                                                children: "❯"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this)
                    ]
                }, "lobby", true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(Home, "l6smTzF0bs396/qh91JpKWvTwHM=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Card({ carta, onClick, naMesa = false }) {
    const isVermelho = carta.naipe === "copas" || carta.naipe === "ouros";
    const isFigura = [
        "J",
        "Q",
        "K",
        "A"
    ].includes(carta.valor);
    const isAs = carta.valor === "A";
    // Cores ricas e profundas de cassino
    const corTexto = isVermelho ? "text-[#D92323]" : "text-[#1A1A1A]";
    const renderSimbolo = (naipe)=>{
        switch(naipe?.toLowerCase()){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: carta.jogavel && !naMesa ? {
            y: -20,
            scale: 1.05,
            rotateY: 5
        } : {},
        whileTap: carta.jogavel && !naMesa ? {
            scale: 0.95,
            y: -5
        } : {},
        onClick: carta.jogavel && !naMesa ? onClick : undefined,
        className: `relative w-20 h-32 sm:w-[110px] sm:h-[160px] rounded-xl sm:rounded-2xl select-none transition-all duration-300 overflow-hidden
        ${carta.jogavel && !naMesa ? "cursor-pointer hover:shadow-[0_15px_35px_rgba(52,211,153,0.4)]" : "cursor-default"}
      `,
        style: {
            // Gradiente sutil simulando iluminação no papel da carta
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 60%, #e2e8f0 100%)",
            // Borda cinza clara por fora + Borda branca por dentro (Efeito 3D de espessura)
            boxShadow: carta.jogavel && !naMesa ? "inset 0 0 0 1px rgba(255,255,255,1), 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(16,185,129,0.3)" : "inset 0 0 0 1px rgba(255,255,255,1), 0 8px 15px rgba(0,0,0,0.4)",
            border: "1px solid rgba(0,0,0,0.15)"
        },
        children: [
            isFigura && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[6px] sm:inset-[8px] border border-black/5 rounded-lg pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            isFigura && !isAs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center text-[8rem] sm:text-[12rem] opacity-[0.03] pointer-events-none ${corTexto} -translate-y-4`,
                children: renderSimbolo(carta.naipe)
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-col items-center leading-none ${corTexto}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl sm:text-[26px] font-black font-serif tracking-tighter drop-shadow-sm",
                        children: carta.valor
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm sm:text-lg -mt-0.5 drop-shadow-sm",
                        children: renderSimbolo(carta.naipe)
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center ${corTexto}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${isAs ? "text-7xl sm:text-[6.5rem] drop-shadow-md" : "text-5xl sm:text-[4.5rem] opacity-90"}`,
                    children: renderSimbolo(carta.naipe)
                }, void 0, false, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 flex flex-col items-center leading-none rotate-180 ${corTexto}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl sm:text-[26px] font-black font-serif tracking-tighter drop-shadow-sm",
                        children: carta.valor
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm sm:text-lg -mt-0.5 drop-shadow-sm",
                        children: renderSimbolo(carta.naipe)
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Card.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GameBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OpponentHand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OpponentHand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FRASES_ESPERA = [
    "Misturando os baralhos...",
    "Buscando oponentes na rede...",
    "Limpando a mesa VIP...",
    "Afiando as estratégias...",
    "Preparando as fichas...",
    "Quase lá..."
];
const DICAS_SUECA = [
    "O Ás é a carta mais valiosa do jogo, rendendo 11 pontos.",
    "A carta 7 (Manilha) é a segunda mais forte, valendo 10 pontos.",
    "Sempre acompanhe o naipe da primeira carta jogada na mesa.",
    "Se não tiver o naipe, use um Trunfo para roubar a vaza.",
    "Guarde seus Trunfos altos para capturar os Ases dos oponentes.",
    "Cartas numéricas de 2 a 6 não valem pontos, ótimas para descarte."
];
const EMOJIS_CLASH = [
    "🔥",
    "💪",
    "🎯",
    "😂",
    "🙏",
    "👏",
    "💀",
    "🤦",
    "⚡",
    "🎉"
];
function GameBoard({ salaId, tema, nomeJogador, userId, buyIn }) {
    _s();
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [meuId, setMeuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [conectado, setConectado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpectator, setIsSpectator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aguardandoInicio, setAguardandoInicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tempoEsperaModal, setTempoEsperaModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [fraseIndex, setFraseIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dicaIndex, setDicaIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [alertaJogada, setAlertaJogada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [emojisMensagens, setEmojisMensagens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mao, setMao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trunfo, setTrunfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mesa, setMesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [turnoAtual, setTurnoAtual] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pontosDupla1, setPontosDupla1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pontosDupla2, setPontosDupla2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [setDupla1, setSetDupla1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [setDupla2, setSetDupla2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mensagem, setMensagem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resultadoFim, setResultadoFim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tempoRestante, setTempoRestante] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [infoJogadores, setInfoJogadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [temasJogadores, setTemasJogadores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [ordemMesa, setOrdemMesa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cartaPendenteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vencedorVazaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const podeJogar = turnoAtual === meuId && mao.length > 0 && !resultadoFim && !aguardandoInicio && !isSpectator;
    const naipeRodada = mesa.length > 0 ? mesa[0].naipe : null;
    const minhaDupla = infoJogadores[meuId]?.dupla || 1;
    const meusPontos = minhaDupla === 1 ? pontosDupla1 : pontosDupla2;
    const pontosAdversario = minhaDupla === 1 ? pontosDupla2 : pontosDupla1;
    const meusSets = minhaDupla === 1 ? setDupla1 : setDupla2;
    const setsAdversario = minhaDupla === 1 ? setDupla2 : setDupla1;
    const isVencedorGlobal = meusSets >= 4;
    const luzAmbiente = meusPontos >= 61 ? "rgba(52, 211, 153, 0.08)" : pontosAdversario >= 61 ? "rgba(225, 29, 72, 0.08)" : "transparent";
    const playHaptic = (type)=>{
        if (typeof navigator === "undefined" || !navigator.vibrate) return;
        if (type === "vaza") navigator.vibrate([
            30,
            50,
            30
        ]);
        if (type === "vitoria") navigator.vibrate([
            100,
            50,
            100
        ]);
        if (type === "erro") navigator.vibrate([
            50,
            50,
            50
        ]);
        if (type === "vitoria-global") navigator.vibrate([
            100,
            100,
            200,
            100,
            400
        ]);
        if (type === "derrota-global") navigator.vibrate([
            400,
            200,
            400
        ]);
        if (type === "leve") navigator.vibrate(20);
    };
    const renderNaipeIcon = (naipe, isTrunfoCard = false)=>{
        switch(naipe?.toLowerCase()){
            case "copas":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isTrunfoCard ? "text-red-600" : "text-rose-500 drop-shadow-md",
                    children: "♥️"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this);
            case "espadas":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isTrunfoCard ? "text-black" : "text-zinc-200 drop-shadow-md",
                    children: "♠️"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this);
            case "ouros":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isTrunfoCard ? "text-red-600" : "text-rose-500 drop-shadow-md",
                    children: "♦️"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this);
            case "paus":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isTrunfoCard ? "text-black" : "text-zinc-200 drop-shadow-md",
                    children: "♣️"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    const ordenarMao = (cartasDesordenadas)=>{
        const ordemNaipes = [
            "copas",
            "espadas",
            "ouros",
            "paus"
        ];
        const pesoValor = {
            A: 10,
            "7": 9,
            K: 8,
            J: 7,
            Q: 6,
            "6": 5,
            "5": 4,
            "4": 3,
            "3": 2,
            "2": 1
        };
        return cartasDesordenadas.filter((c)=>c && c.naipe && c.valor).sort((a, b)=>{
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
    const getPosicaoCartaMesa = (jogadorId, indexFallback)=>{
        if (jogadorId === idAbaixo) return {
            y: "85px",
            x: "5px",
            rotate: -4,
            zIndex: 40
        };
        if (jogadorId === idFrente) return {
            y: "-85px",
            x: "-5px",
            rotate: 4,
            zIndex: 20
        };
        if (jogadorId === idEsquerda) return {
            x: "-120px",
            y: "15px",
            rotate: -22,
            zIndex: 10
        };
        if (jogadorId === idDireita) return {
            x: "120px",
            y: "-15px",
            rotate: 22,
            zIndex: 30
        };
        return {
            x: indexFallback * 15 - 20,
            y: indexFallback * 10 - 15,
            rotate: indexFallback * 8,
            zIndex: 15
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameBoard.useEffect": ()=>{
            if (aguardandoInicio && !isSpectator) {
                const intervaloFrases = setInterval({
                    "GameBoard.useEffect.intervaloFrases": ()=>setFraseIndex({
                            "GameBoard.useEffect.intervaloFrases": (prev)=>(prev + 1) % FRASES_ESPERA.length
                        }["GameBoard.useEffect.intervaloFrases"])
                }["GameBoard.useEffect.intervaloFrases"], 3500);
                const intervaloDicas = setInterval({
                    "GameBoard.useEffect.intervaloDicas": ()=>setDicaIndex({
                            "GameBoard.useEffect.intervaloDicas": (prev)=>(prev + 1) % DICAS_SUECA.length
                        }["GameBoard.useEffect.intervaloDicas"])
                }["GameBoard.useEffect.intervaloDicas"], 6500);
                return ({
                    "GameBoard.useEffect": ()=>{
                        clearInterval(intervaloFrases);
                        clearInterval(intervaloDicas);
                    }
                })["GameBoard.useEffect"];
            }
        }
    }["GameBoard.useEffect"], [
        aguardandoInicio,
        isSpectator
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameBoard.useEffect": ()=>{
            const novaConexao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:3001");
            setSocket(novaConexao);
            novaConexao.on("connect", {
                "GameBoard.useEffect": ()=>{
                    setConectado(true);
                    if (novaConexao.id) setMeuId(novaConexao.id);
                    novaConexao.emit("entrarSala", {
                        salaId,
                        tema,
                        nome: nomeJogador,
                        userId,
                        buyIn
                    });
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("atualizacaoMoedas", {
                "GameBoard.useEffect": (novoSaldo)=>{
                    const salvo = localStorage.getItem("@suecabet:user");
                    if (salvo) {
                        const localUser = JSON.parse(salvo);
                        localUser.moedas = novoSaldo;
                        localStorage.setItem("@suecabet:user", JSON.stringify(localUser));
                    }
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("statusEspera", {
                "GameBoard.useEffect": (dados)=>{
                    setAguardandoInicio(true);
                    setTempoEsperaModal(dados.tempo);
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("filaDeEspera", {
                "GameBoard.useEffect": ()=>{
                    setIsSpectator(true);
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("estadoInicial", {
                "GameBoard.useEffect": (estado)=>{
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
                    // GARANTE QUE O PLACAR SEJA RESTABELECIDO (Em caso de reconexão de F5)
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
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("sincronizarMesa", {
                "GameBoard.useEffect": (dados)=>{
                    if (dados.mesa.length === 1) vencedorVazaRef.current = null;
                    setMesa(dados.mesa);
                    setTurnoAtual(dados.turnoAtual);
                    if (dados.infoJogadores) setInfoJogadores(dados.infoJogadores);
                    if (dados.mesa.length >= 4) {
                        setTimeout({
                            "GameBoard.useEffect": ()=>setMesa({
                                    "GameBoard.useEffect": (prev)=>prev.length >= 4 ? [] : prev
                                }["GameBoard.useEffect"])
                        }["GameBoard.useEffect"], 3500);
                    }
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("resultadoVaza", {
                "GameBoard.useEffect": (resultado)=>{
                    setPontosDupla1(resultado.pontosDupla1);
                    setPontosDupla2(resultado.pontosDupla2);
                    vencedorVazaRef.current = resultado.turnoAtual;
                    setTurnoAtual(resultado.turnoAtual);
                    setMesa([]);
                    if (resultado.turnoAtual === novaConexao.id || resultado.turnoAtual === idFrente) playHaptic("vaza");
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("erroJogada", {
                "GameBoard.useEffect": (msgErro)=>{
                    setAlertaJogada(msgErro);
                    playHaptic("erro");
                    setTimeout({
                        "GameBoard.useEffect": ()=>setAlertaJogada(null)
                    }["GameBoard.useEffect"], 3000);
                    if (cartaPendenteRef.current) {
                        setMao({
                            "GameBoard.useEffect": (prev)=>ordenarMao([
                                    ...prev,
                                    cartaPendenteRef.current
                                ])
                        }["GameBoard.useEffect"]);
                        setTurnoAtual(meuId || novaConexao.id);
                        cartaPendenteRef.current = null;
                    }
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("fimDePartida", {
                "GameBoard.useEffect": (resultado)=>{
                    setSetDupla1(resultado.setDupla1);
                    setSetDupla2(resultado.setDupla2);
                    setPontosDupla1(resultado.pontosDupla1);
                    setPontosDupla2(resultado.pontosDupla2);
                    setResultadoFim(resultado);
                    if (resultado.fimDeJogoGlobal && !isSpectator) {
                        const d1Ganhou = resultado.setDupla1 >= 4;
                        const minhaVitoria = minhaDupla === 1 && d1Ganhou || minhaDupla === 2 && !d1Ganhou;
                        playHaptic(minhaVitoria ? "vitoria-global" : "derrota-global");
                    } else if (!isSpectator) {
                        playHaptic("vitoria");
                    }
                }
            }["GameBoard.useEffect"]);
            novaConexao.on("emojiRecebido", {
                "GameBoard.useEffect": (dados)=>{
                    const novoEmoji = {
                        id: `${dados.jogadorId}-${Date.now()}`,
                        emoji: dados.emoji,
                        jogadorId: dados.jogadorId,
                        timestamp: Date.now()
                    };
                    setEmojisMensagens({
                        "GameBoard.useEffect": (prev)=>[
                                ...prev,
                                novoEmoji
                            ]
                    }["GameBoard.useEffect"]);
                    setTimeout({
                        "GameBoard.useEffect": ()=>setEmojisMensagens({
                                "GameBoard.useEffect": (prev)=>prev.filter({
                                        "GameBoard.useEffect": (msg)=>msg.id !== novoEmoji.id
                                    }["GameBoard.useEffect"])
                            }["GameBoard.useEffect"])
                    }["GameBoard.useEffect"], 3000);
                }
            }["GameBoard.useEffect"]);
            return ({
                "GameBoard.useEffect": ()=>novaConexao.disconnect()
            })["GameBoard.useEffect"];
        }
    }["GameBoard.useEffect"], [
        salaId,
        tema.id,
        nomeJogador,
        userId,
        buyIn
    ]);
    const jogarCarta = (cartaJogada)=>{
        if (!socket || !podeJogar || mesa.length >= 4) return;
        const naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
        if (naipePuxado && cartaJogada.naipe !== naipePuxado) {
            if (mao.some((c)=>c.naipe === naipePuxado)) {
                playHaptic("erro");
                setAlertaJogada(`Você é obrigado a jogar ${naipePuxado.toUpperCase()}!`);
                setTimeout(()=>setAlertaJogada(null), 3500);
                return;
            }
        }
        cartaPendenteRef.current = cartaJogada;
        setMao((prev)=>prev.filter((c)=>c && c.id !== cartaJogada.id));
        setTurnoAtual("processando");
        socket.emit("jogarCarta", {
            salaId,
            carta: cartaJogada
        });
    };
    const enviarEmoji = (emoji)=>{
        if (!socket) return;
        socket.emit("enviarEmoji", {
            salaId,
            emoji
        });
        playHaptic("leve");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GameBoard.useEffect": ()=>{
            if (!podeJogar) {
                setTempoRestante(20);
                return;
            }
            if (tempoRestante <= 0) {
                let naipePuxado = mesa.length > 0 ? mesa[0].naipe : null;
                let cartasValidas = mao.filter(Boolean);
                if (naipePuxado) {
                    const doNaipe = cartasValidas.filter({
                        "GameBoard.useEffect.doNaipe": (c)=>c.naipe === naipePuxado
                    }["GameBoard.useEffect.doNaipe"]);
                    if (doNaipe.length > 0) cartasValidas = doNaipe;
                }
                if (cartasValidas.length > 0) jogarCarta(cartasValidas[Math.floor(Math.random() * cartasValidas.length)]);
                return;
            }
            const timer = setTimeout({
                "GameBoard.useEffect.timer": ()=>setTempoRestante({
                        "GameBoard.useEffect.timer": (prev)=>prev - 1
                    }["GameBoard.useEffect.timer"])
            }["GameBoard.useEffect.timer"], 1000);
            return ({
                "GameBoard.useEffect": ()=>clearTimeout(timer)
            })["GameBoard.useEffect"];
        }
    }["GameBoard.useEffect"], [
        podeJogar,
        tempoRestante,
        mesa,
        mao
    ]);
    const infoEsquerda = infoJogadores[idEsquerda] || {
        nome: "Aguardando...",
        isBot: true,
        cartas: 10,
        moedas: 0
    };
    const infoFrente = infoJogadores[idFrente] || {
        nome: "Aguardando...",
        isBot: true,
        cartas: 10,
        moedas: 0
    };
    const infoDireita = infoJogadores[idDireita] || {
        nome: "Aguardando...",
        isBot: true,
        cartas: 10,
        moedas: 0
    };
    const temaEsquerdaObj = temasJogadores[idEsquerda] || tema;
    const temaFrenteObj = temasJogadores[idFrente] || tema;
    const temaDireitaObj = temasJogadores[idDireita] || tema;
    const circumference = 2 * Math.PI * 70;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col justify-between relative p-4 sm:p-6 select-none font-sans overflow-hidden transition-colors duration-1000",
        style: {
            backgroundColor: luzAmbiente
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: emojisMensagens.filter((msg)=>msg.jogadorId === meuId).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.5,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.5,
                                    y: -20
                                },
                                className: "text-2xl sm:text-3xl",
                                children: msg.emoji
                            }, msg.id, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#0b1510]/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-2 sm:p-3 grid grid-cols-5 gap-1 sm:gap-2 shadow-[0_0_30px_rgba(16,185,129,0.2)]",
                        children: EMOJIS_CLASH.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>enviarEmoji(emoji),
                                className: "text-xl sm:text-2xl p-1 sm:p-2 hover:scale-125 active:scale-90 transition-transform cursor-pointer rounded hover:bg-emerald-500/10",
                                title: `Enviar ${emoji}`,
                                children: emoji
                            }, emoji, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    emojisMensagens.filter((msg)=>msg.jogadorId === idFrente).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0,
                                y: -20
                            },
                            className: "fixed top-1/4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl z-40 pointer-events-none",
                            children: msg.emoji
                        }, msg.id, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 514,
                            columnNumber: 13
                        }, this)),
                    emojisMensagens.filter((msg)=>msg.jogadorId === idEsquerda).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0,
                                x: 20
                            },
                            className: "fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl z-40 pointer-events-none",
                            children: msg.emoji
                        }, msg.id, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 527,
                            columnNumber: 13
                        }, this)),
                    emojisMensagens.filter((msg)=>msg.jogadorId === idDireita).map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0,
                                x: -20
                            },
                            className: "fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 text-3xl sm:text-4xl z-40 pointer-events-none",
                            children: msg.emoji
                        }, msg.id, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 540,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: alertaJogada && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -20,
                        scale: 0.9
                    },
                    transition: {
                        type: "spring",
                        damping: 20,
                        stiffness: 300
                    },
                    className: "absolute bottom-56 left-1/2 -translate-x-1/2 z-50 bg-rose-600/95 backdrop-blur-xl border border-rose-400 px-6 py-3 rounded-[2rem] shadow-[0_15px_40px_rgba(225,29,72,0.6)] flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xl animate-bounce",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-xs sm:text-sm font-black tracking-widest uppercase",
                            children: alertaJogada
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 554,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: aguardandoInicio && !isSpectator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "absolute inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        className: "bg-gradient-to-b from-[#0b1510] to-[#050a07] border border-emerald-500/30 p-8 sm:p-10 rounded-[3rem] text-center max-w-[28rem] w-full shadow-[0_0_100px_rgba(16,185,129,0.15)] flex flex-col items-center relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: [
                                            1,
                                            2.5
                                        ],
                                        opacity: [
                                            0.8,
                                            0
                                        ]
                                    },
                                    transition: {
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeOut"
                                    },
                                    className: "absolute w-40 h-40 rounded-full border border-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 583,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 582,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-2 relative z-10",
                                children: [
                                    "Sala de Espera: ",
                                    salaId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 594,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 relative z-10 drop-shadow-md",
                                children: "Procurando Oponentes"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 597,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 mb-8 relative z-10 w-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        className: "text-xs text-emerald-400/80 font-medium tracking-wide",
                                        children: FRASES_ESPERA[fraseIndex]
                                    }, fraseIndex, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 603,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 602,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 601,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-40 h-40 sm:w-44 sm:h-44 flex items-center justify-center mb-8 z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute inset-0 w-full h-full transform -rotate-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "50%",
                                                cy: "50%",
                                                r: "70",
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.05)",
                                                strokeWidth: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                cx: "50%",
                                                cy: "50%",
                                                r: "70",
                                                fill: "none",
                                                stroke: "#34d399",
                                                strokeWidth: "6",
                                                strokeLinecap: "round",
                                                strokeDasharray: circumference,
                                                initial: {
                                                    strokeDashoffset: circumference
                                                },
                                                animate: {
                                                    strokeDashoffset: circumference - circumference * tempoEsperaModal / 60
                                                },
                                                transition: {
                                                    ease: "linear",
                                                    duration: 1
                                                },
                                                className: "drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 626,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 617,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center bg-black/30 w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-white/5 backdrop-blur-md shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl sm:text-5xl font-black text-white font-mono tracking-tighter drop-shadow-md",
                                                children: tempoEsperaModal
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 645,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] sm:text-[9px] text-white/50 uppercase tracking-[0.2em] font-bold mt-1",
                                                children: "Segundos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 648,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 616,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-black/40 border border-white/10 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-inner flex flex-col items-center justify-center z-10 min-h-[5rem] sm:min-h-[6rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 655,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] sm:text-[9px] text-emerald-400/80 uppercase tracking-[0.25em] font-black mb-2 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                children: "💡"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this),
                                            " Dica da Mesa"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 656,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full relative flex items-center justify-center min-h-[2.5rem]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: -8
                                                },
                                                transition: {
                                                    duration: 0.4
                                                },
                                                className: "text-xs sm:text-sm text-white/90 text-center leading-relaxed font-medium italic",
                                                children: [
                                                    '"',
                                                    DICAS_SUECA[dicaIndex],
                                                    '"'
                                                ]
                                            }, dicaIndex, true, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 661,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/GameBoard.tsx",
                                            lineNumber: 660,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 654,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-white/30 font-medium mt-6 relative z-10",
                                children: "Se o tempo esgotar, robôs assumirão as vagas restantes."
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 674,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 577,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 571,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: resultadoFim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: `absolute inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl transition-colors duration-1000 ${resultadoFim.fimDeJogoGlobal ? isVencedorGlobal ? "bg-amber-950/80" : "bg-rose-950/90" : "bg-black/60"}`,
                    children: resultadoFim.fimDeJogoGlobal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            y: 30
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        transition: {
                            type: "spring",
                            damping: 25
                        },
                        className: `bg-[#050a07] border ${isVencedorGlobal ? "border-amber-500/40 shadow-[0_0_120px_rgba(251,191,36,0.3)]" : "border-rose-500/40 shadow-[0_0_120px_rgba(225,29,72,0.3)]"} p-8 sm:p-10 rounded-[3rem] text-center max-w-md w-full relative overflow-hidden`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-6 border ${isVencedorGlobal ? "bg-amber-500/10 border-amber-500/30 shadow-[inset_0_0_20px_rgba(251,191,36,0.5)]" : "bg-rose-500/10 border-rose-500/30 shadow-[inset_0_0_20px_rgba(225,29,72,0.5)]"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl sm:text-5xl drop-shadow-lg",
                                    children: isVencedorGlobal ? "🏆" : "💀"
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 700,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 697,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r mb-2 tracking-tight ${isVencedorGlobal ? "from-amber-200 to-yellow-500" : "from-rose-300 to-red-600"}`,
                                children: isVencedorGlobal ? "VITÓRIA GLORIOSA" : "FIM DA LINHA"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 704,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/60 mb-8 font-medium px-4",
                                children: isVencedorGlobal ? "Sua dupla dominou a mesa e conquistou os 4 sets!" : "Sua dupla foi derrotada sem piedade pelos adversários."
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 709,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-black/50 p-6 rounded-[2rem] mb-8 border border-white/5 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center w-1/3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${isVencedorGlobal ? "text-amber-400" : "text-white/40"}`,
                                                children: "Nós"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 716,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-5xl font-black tracking-tighter ${isVencedorGlobal ? "text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" : "text-white/40"}`,
                                                children: meusSets
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 721,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 715,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white/20 text-2xl font-light",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 727,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center w-1/3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${!isVencedorGlobal ? "text-rose-400" : "text-white/40"}`,
                                                children: "Eles"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 729,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-5xl font-black tracking-tighter ${!isVencedorGlobal ? "text-rose-400 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" : "text-white/40"}`,
                                                children: setsAdversario
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 734,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 728,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 714,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    !isSpectator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>socket?.emit("pedirNovaPartida", true),
                                        className: `w-full font-black tracking-wide py-4 rounded-[1.5rem] transition-all flex items-center justify-center gap-2 ${isVencedorGlobal ? "bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)]" : "bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "⚔️"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 747,
                                                columnNumber: 23
                                            }, this),
                                            " JOGAR REVANCHE"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 743,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-blue-500/20 text-blue-300 font-bold py-4 rounded-[1.5rem] border border-blue-500/30 animate-pulse",
                                        children: "Aguardando líderes da mesa..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 750,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.location.reload(),
                                        className: "w-full bg-transparent border border-white/10 text-white/50 hover:text-white/90 hover:bg-white/5 font-bold py-4 rounded-[1.5rem] transition-all flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🚪"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 758,
                                                columnNumber: 21
                                            }, this),
                                            " Sair para o Lobby"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 754,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 741,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 691,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.95,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        transition: {
                            type: "spring",
                            damping: 25
                        },
                        className: "bg-[#0b1510]/95 border border-emerald-500/30 p-10 rounded-[3rem] text-center max-w-sm w-full shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-600 mb-2",
                                children: "Fim do Set"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 769,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/70 mb-8",
                                children: resultadoFim.mensagem
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 772,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center bg-black/40 p-6 rounded-[2rem] mb-8 border border-white/5 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-bold mb-2",
                                                children: "Nós"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 777,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-5xl font-light text-white tracking-tighter",
                                                children: meusPontos
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 780,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 776,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 w-px bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 784,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-rose-400 uppercase tracking-[0.2em] font-bold mb-2",
                                                children: "Eles"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 786,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-5xl font-light text-white tracking-tighter",
                                                children: pontosAdversario
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 789,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 785,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 775,
                                columnNumber: 17
                            }, this),
                            !isSpectator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>socket?.emit("pedirNovaPartida", false),
                                className: "w-full bg-emerald-500 text-black shadow-[0_0_15px_rgba(52,211,153,0.4)] hover:bg-emerald-400 font-bold py-4 rounded-[1.5rem] transition-colors",
                                children: "Próximo Set"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 795,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full bg-blue-500/20 text-blue-300 font-bold py-4 rounded-[1.5rem] border border-blue-500/30 animate-pulse",
                                children: "Aguardando próximo set..."
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 802,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 763,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 684,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full relative z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            y: -30,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        className: "flex bg-[#0b1510]/90 backdrop-blur-3xl p-2 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-6 py-3 rounded-[2rem] flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] border-2 border-emerald-500/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-black",
                                                children: "Trunfo"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 820,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black text-2xl text-black leading-none",
                                                children: trunfo?.valor || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 823,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 819,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl flex items-center justify-center",
                                        children: renderNaipeIcon(trunfo?.naipe, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 827,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/40 px-5 py-2.5 rounded-[2rem] flex flex-col items-center border border-white/5 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] uppercase tracking-[0.2em] text-emerald-400 font-black mb-0.5",
                                        children: "Naipe da Rodada"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 832,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-7",
                                        children: naipeRodada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs uppercase tracking-wider text-zinc-300 font-bold",
                                                    children: naipeRodada
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GameBoard.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: renderNaipeIcon(naipeRodada)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GameBoard.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/GameBoard.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-white/30 uppercase tracking-widest font-bold",
                                            children: "Puxando..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/GameBoard.tsx",
                                            lineNumber: 846,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 835,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 831,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 flex flex-col items-center border-l border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] uppercase tracking-[0.2em] text-white/40 font-black mb-0.5",
                                        children: "Placar (Set)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 853,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 font-black text-base",
                                                children: meusPontos
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 857,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/20 font-light",
                                                children: "/"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 860,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-rose-400 font-black text-base",
                                                children: pontosAdversario
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 861,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 856,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 852,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-yellow-500/10 to-amber-500/5 px-4 py-2.5 rounded-[2rem] flex flex-col items-center border border-yellow-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] uppercase tracking-[0.2em] text-yellow-500 font-black mb-0.5",
                                        children: "Global (Sets)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 867,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 font-black text-sm",
                                                children: meusSets
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 871,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-500/30 font-light",
                                                children: "|"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 874,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-rose-400 font-black text-sm",
                                                children: setsAdversario
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 875,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 870,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 866,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 813,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#0b1510]/80 backdrop-blur-2xl px-4 py-2.5 rounded-2xl border border-white/5 flex items-center gap-2 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2.5 h-2.5 rounded-full ${conectado ? "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" : "bg-rose-500"}`
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 882,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black tracking-widest text-white/70 uppercase",
                                children: salaId
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 885,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 881,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 812,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center relative z-10 mt-4 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-1 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[9px] px-2 py-0.5 rounded-full font-extrabold uppercase ${infoFrente.isBot ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"}`,
                                        children: infoFrente.isBot ? "🤖 Robô" : "👤 Online"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 894,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-yellow-400 font-bold mt-0.5 tracking-widest",
                                        children: [
                                            "💰 ",
                                            infoFrente.moedas || 0
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 899,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 893,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs font-bold",
                                children: infoFrente.nome
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 903,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 892,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: turnoAtual === idFrente ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OpponentHand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            posicao: "frente",
                            quantidade: infoFrente.cartas !== undefined ? infoFrente.cartas : mao.length > 0 ? mao.length : 10,
                            tema: temaFrenteObj
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 914,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 907,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 891,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 w-full flex items-center justify-between relative z-10 px-0 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center z-20 ${turnoAtual === idEsquerda ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-2 bg-black/40 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[8px] px-1.5 py-0.5 rounded-full font-bold ${infoEsquerda.isBot ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"}`,
                                                children: infoEsquerda.isBot ? "🤖" : "👤"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 934,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-yellow-400 font-bold mt-0.5 tracking-widest",
                                                children: [
                                                    "💰 ",
                                                    infoEsquerda.moedas || 0
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 939,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 933,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-[10px] font-bold max-w-[80px] truncate",
                                        children: infoEsquerda.nome
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 943,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OpponentHand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                posicao: "esquerda",
                                quantidade: infoEsquerda.cartas !== undefined ? infoEsquerda.cartas : mao.length > 0 ? mao.length : 10,
                                tema: temaEsquerdaObj
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 929,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-72 h-72 sm:w-[32rem] sm:h-[32rem] flex items-center justify-center pointer-events-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 rounded-full border border-white/10 bg-black/20 backdrop-blur-md shadow-[inset_0_0_120px_rgba(0,0,0,0.8)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 962,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: mesa.map((carta, index)=>{
                                        if (!carta) return null;
                                        const pos = getPosicaoCartaMesa(carta.jogadorId, index);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 2,
                                                opacity: 0
                                            },
                                            animate: {
                                                scale: 1.35,
                                                opacity: 1,
                                                y: pos.y,
                                                x: pos.x,
                                                rotate: pos.rotate
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                type: "spring",
                                                damping: 14,
                                                stiffness: 100
                                            },
                                            className: "absolute",
                                            style: {
                                                zIndex: pos.zIndex
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                carta: carta,
                                                naMesa: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 983,
                                                columnNumber: 21
                                            }, this)
                                        }, carta.id, false, {
                                            fileName: "[project]/components/GameBoard.tsx",
                                            lineNumber: 968,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 963,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 961,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col items-center z-20 ${turnoAtual === idDireita ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mb-2 bg-black/40 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[8px] px-1.5 py-0.5 rounded-full font-bold ${infoDireita.isBot ? "bg-amber-500/20 text-amber-400" : "bg-blue-500/20 text-blue-400"}`,
                                                children: infoDireita.isBot ? "🤖" : "👤"
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 996,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] text-yellow-400 font-bold mt-0.5 tracking-widest",
                                                children: [
                                                    "💰 ",
                                                    infoDireita.moedas || 0
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 1001,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 995,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-[10px] font-bold max-w-[80px] truncate",
                                        children: infoDireita.nome
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1005,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 994,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OpponentHand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                posicao: "direita",
                                quantidade: infoDireita.cartas !== undefined ? infoDireita.cartas : mao.length > 0 ? mao.length : 10,
                                tema: temaDireitaObj
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1009,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 991,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 928,
                columnNumber: 7
            }, this),
            isSpectator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center justify-center relative z-30 mt-4 mb-2 h-36 sm:h-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    className: "bg-[#0b1510]/90 backdrop-blur-xl border border-blue-500/30 px-6 sm:px-8 py-5 rounded-[2rem] shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col items-center text-center max-w-sm relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1030,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-3xl mb-3 animate-pulse",
                            children: "👀"
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1031,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-blue-400 font-black text-sm sm:text-base uppercase tracking-widest mb-1.5 drop-shadow-md",
                            children: "Modo Espectador"
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1032,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-xs font-medium leading-relaxed",
                            children: [
                                "A partida já iniciou. Você está na",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-blue-300",
                                    children: "fila de espera"
                                }, void 0, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this),
                                " e assumirá uma vaga na mesa no início do próximo set."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1035,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 1025,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 1024,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center relative z-30 mt-4 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] px-2.5 py-0.5 rounded-full font-bold",
                                children: "Você"
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1045,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs font-bold",
                                children: nomeJogador
                            }, void 0, false, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1048,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 1044,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 h-8 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: turnoAtual === "calculando" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "flex items-center gap-2 bg-black/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/5 shadow-lg z-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full border-[2px] border-emerald-500/20 border-t-emerald-400 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-400 text-[10px] font-bold tracking-widest uppercase",
                                        children: "Avaliando Vaza..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1061,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, "calculando", true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1053,
                                columnNumber: 17
                            }, this) : podeJogar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 10
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9,
                                    y: -10
                                },
                                className: "flex flex-col items-center relative z-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#0b1510]/90 backdrop-blur-xl border border-emerald-500/30 px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 text-[10px] font-black tracking-widest uppercase drop-shadow-md",
                                                children: [
                                                    "Sua Vez (",
                                                    tempoRestante,
                                                    "s)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-1 bg-black/50 rounded-full mt-1.5 overflow-hidden border border-white/5 relative",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: `h-full ${tempoRestante <= 3 ? "bg-rose-500 shadow-[0_0_10px_rgba(243,24,64,0.8)]" : "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"}`,
                                                    initial: {
                                                        width: "100%"
                                                    },
                                                    animate: {
                                                        width: `${tempoRestante / 20 * 100}%`
                                                    },
                                                    transition: {
                                                        ease: "linear",
                                                        duration: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/GameBoard.tsx",
                                                    lineNumber: 1079,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/GameBoard.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, "sua-vez", true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1066,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                className: "flex items-center gap-2 bg-black/60 backdrop-blur-xl px-5 py-2 rounded-full border border-white/5 shadow-lg z-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-3 h-3 rounded-full border-[2px] border-white/10 border-t-white/80 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/50 text-[10px] font-bold tracking-widest uppercase",
                                        children: mao.length === 0 && !resultadoFim ? "Fim do Set..." : mensagem || "Aguardando Jogada..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1097,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, "aguardando", true, {
                                fileName: "[project]/components/GameBoard.tsx",
                                lineNumber: 1089,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1051,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 1050,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-center items-end h-36 sm:h-44 w-full max-w-3xl mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: mao.map((carta, index)=>{
                                if (!carta || !carta.id) return null;
                                const total = mao.length;
                                const offset = index - (total - 1) / 2;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        y: 150,
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        y: Math.pow(offset, 2) * 2.5,
                                        x: offset * 38,
                                        rotate: offset * 4,
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        y: -50,
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    transition: {
                                        type: "spring",
                                        damping: 22,
                                        stiffness: 120,
                                        delay: index * 0.03
                                    },
                                    style: {
                                        transformOrigin: "bottom center",
                                        zIndex: index
                                    },
                                    className: "absolute bottom-0 cursor-pointer hover:-translate-y-4 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        carta: {
                                            ...carta,
                                            jogavel: podeJogar
                                        },
                                        onClick: ()=>jogarCarta(carta)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameBoard.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 21
                                    }, this)
                                }, carta.id, false, {
                                    fileName: "[project]/components/GameBoard.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 1107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 1106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameBoard.tsx",
                lineNumber: 1043,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GameBoard.tsx",
        lineNumber: 473,
        columnNumber: 5
    }, this);
}
_s(GameBoard, "AnDamCB7wigstjiHdCpKY/9X2Yg=");
_c = GameBoard;
var _c;
__turbopack_context__.k.register(_c, "GameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OpponentHand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OpponentHand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function OpponentHand({ posicao, quantidade, tema }) {
    if (quantidade <= 0) return null;
    const renderCardBack = (i, extraStyles = {})=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-12 h-16 sm:w-16 sm:h-24 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-white/20 bg-cover bg-center overflow-hidden flex items-center justify-center ${tema?.cor || 'bg-zinc-800'}`,
            style: {
                zIndex: i,
                ...extraStyles
            },
            children: [
                tema?.escudo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: tema.escudo,
                    alt: tema.sigla,
                    className: "w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-lg z-10 opacity-95"
                }, void 0, false, {
                    fileName: "[project]/components/OpponentHand.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-serif text-xl font-bold text-white/50 z-10 drop-shadow-md",
                    children: tema?.sigla
                }, void 0, false, {
                    fileName: "[project]/components/OpponentHand.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/40 pointer-events-none z-20"
                }, void 0, false, {
                    fileName: "[project]/components/OpponentHand.tsx",
                    lineNumber: 24,
                    columnNumber: 7
                }, this)
            ]
        }, i, true, {
            fileName: "[project]/components/OpponentHand.tsx",
            lineNumber: 14,
            columnNumber: 5
        }, this);
    if (posicao === "esquerda" || posicao === "direita") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col -space-y-12 sm:-space-y-16 py-2",
            children: Array.from({
                length: quantidade
            }).map((_, i)=>renderCardBack(i))
        }, void 0, false, {
            fileName: "[project]/components/OpponentHand.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex -space-x-6 sm:-space-x-8 px-2",
        children: Array.from({
            length: quantidade
        }).map((_, i)=>{
            const middle = (quantidade - 1) / 2;
            const offset = i - middle;
            const rotation = offset * 5;
            return renderCardBack(i, {
                transform: `rotate(${rotation}deg) translateY(${Math.abs(offset) * 2}px)`
            });
        })
    }, void 0, false, {
        fileName: "[project]/components/OpponentHand.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = OpponentHand;
var _c;
__turbopack_context__.k.register(_c, "OpponentHand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1vv-e-i._.js.map