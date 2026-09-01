"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [autenticado, setAutenticado] = useState(false);
  const [formLogin, setFormLogin] = useState({ usuario: "", senha: "" });
  
  const [dados, setDados] = useState<{users: any[], system: any}>({ users: [], system: { lucroPlataforma: 0, logsDoacoes: [] } });
  const [formDoacao, setFormDoacao] = useState({ identificador: "", valor: "" });

  const carregarDados = async () => {
    const res = await fetch("http://localhost:3001/api/admin/dashboard");
    const dt = await res.json();
    setDados(dt);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formLogin) });
    if (res.ok) { setAutenticado(true); carregarDados(); } else { alert("Acesso Negado"); }
  };

  const enviarDoacao = async (e: any) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/admin/doacao", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formDoacao) });
    const dt = await res.json();
    if(res.ok) { alert(dt.message); setFormDoacao({identificador: "", valor: ""}); carregarDados(); } else { alert(dt.error); }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-[#050a07] flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-black/50 p-8 rounded-2xl border border-white/10 flex flex-col gap-4">
           <h2 className="text-white text-2xl font-black mb-4">Acesso Restrito SUECAbet</h2>
           <input type="text" placeholder="Admin" onChange={e=>setFormLogin({...formLogin, usuario: e.target.value})} className="p-3 rounded bg-black border border-white/20 text-white" />
           <input type="password" placeholder="Senha" onChange={e=>setFormLogin({...formLogin, senha: e.target.value})} className="p-3 rounded bg-black border border-white/20 text-white" />
           <button type="submit" className="bg-emerald-500 p-3 rounded font-bold">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050a07] text-white p-8">
      <h1 className="text-4xl font-black mb-8 text-emerald-400">Painel de Controle ♠️</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card Lucro */}
        <div className="bg-gradient-to-br from-yellow-900/40 to-black border border-yellow-500/30 p-8 rounded-3xl">
           <h3 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Lucro da Plataforma (Rake 10%)</h3>
           <p className="text-6xl font-black text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]">
             💰 {dados.system.lucroPlataforma.toFixed(0)}
           </p>
           <p className="text-xs text-white/30 mt-4">Total de SuecaCoins retidos administrativamente pelas partidas jogadas.</p>
        </div>

        {/* Ferramenta de Doação */}
        <div className="bg-black/40 border border-white/10 p-8 rounded-3xl">
           <h3 className="text-white text-lg font-bold mb-4">Ferramenta de Doação Manual</h3>
           <form onSubmit={enviarDoacao} className="flex flex-col gap-4">
              <input type="text" required placeholder="Usuário, Email ou ID do Jogador" value={formDoacao.identificador} onChange={e=>setFormDoacao({...formDoacao, identificador: e.target.value})} className="bg-black border border-white/20 p-3 rounded text-white outline-none focus:border-emerald-500" />
              <input type="number" required placeholder="Valor em SuecaCoins (Ex: 500)" value={formDoacao.valor} onChange={e=>setFormDoacao({...formDoacao, valor: e.target.value})} className="bg-black border border-white/20 p-3 rounded text-white outline-none focus:border-emerald-500" />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-3 rounded transition-colors">Injetar Moedas</button>
           </form>
        </div>
      </div>

      {/* Tabela de Usuários */}
      <div className="mt-8 bg-black/40 border border-white/10 p-8 rounded-3xl">
         <h3 className="text-white text-lg font-bold mb-4">Jogadores Ativos</h3>
         <table className="w-full text-left">
           <thead>
             <tr className="text-white/40 text-xs uppercase border-b border-white/10">
               <th className="pb-3">Usuário</th>
               <th className="pb-3">Saldo (Coins)</th>
               <th className="pb-3">Status</th>
             </tr>
           </thead>
           <tbody>
             {dados.users.map(u => (
               <tr key={u.id} className="border-b border-white/5">
                 <td className="py-4 text-emerald-400 font-bold">{u.usuario}</td>
                 <td className="py-4 font-mono text-yellow-400">{u.moedas}</td>
                 <td className="py-4">{u.status === 'ativo' ? '🟢 Ativo' : '🔴 Bloqueado'}</td>
               </tr>
             ))}
           </tbody>
         </table>
      </div>
    </div>
  );
}