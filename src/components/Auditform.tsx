import React, { useState } from 'react';
import { getGrowthAudit } from '../services/gemini';
import { useGrowthStore } from '../store/useGrowthStore';

const AuditForm = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const setAuditResult = useGrowthStore((state) => state.setAuditResult);
  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    const data = await getGrowthAudit(url);
    
    if (data) {
      setResult(data); 
      setAuditResult(data); 
    }
    
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-8">
      {/* Input Section */}
      <form onSubmit={handleAudit} className="space-y-4">
        <div className="relative">
          <input 
            type="text"
            placeholder="Enter URL (e.g., zendigital.id)"
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-slate-100 outline-none focus:border-primary transition-all shadow-xl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-black font-black py-4 rounded-2xl uppercase tracking-[0.2em] transition-all disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Generate Intelligence'}
        </button>
      </form>

      {/* Result Section */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Growth Score</p>
            <h2 className="text-7xl font-black">{result.score}</h2>
            <div className="absolute -right-4 -bottom-4 opacity-5">
               <span className="material-symbols-outlined text-[120px]">analytics</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl">
              <h4 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">check_circle</span> Strengths
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                {result.pros.map((p: string, i: number) => <li key={i}>• {p}</li>)}
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 p-5 rounded-2xl">
              <h4 className="text-red-400 font-bold text-sm mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">warning</span> Critical Gaps
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                {result.cons.map((c: string, i: number) => <li key={i}>• {c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditForm;