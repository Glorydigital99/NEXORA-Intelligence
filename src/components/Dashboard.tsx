import { 
  Brain, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  Settings2, 
  FileText, 
  MousePointer2, 
  ShieldCheck, 
  BarChart, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Timer,
  Link2Off,
  Verified,
  PieChart,
  Network,
  ShieldAlert,
  Search
} from 'lucide-react';
import { Page, ModuleSubPage } from '@/src/types';
import { useGrowthStore } from '../store/useGrowthStore'; // SUNTIKAN 1: Import Store

interface DashboardProps {
  setPage: (page: Page) => void;
  setModuleSubPage: (subPage: ModuleSubPage) => void;
}

export default function Dashboard({ setPage, setModuleSubPage }: DashboardProps) {
  // SUNTIKAN 2: Ambil data audit rill
  const auditResult = useGrowthStore((state) => state.auditResult);

  const handleModuleClick = (subPage: ModuleSubPage) => {
    setModuleSubPage(subPage);
    setPage(Page.ModuleAnalysis);
  };

  // Logika Data Rill vs Default
  const score = auditResult?.score ?? 0;
  const summary = auditResult?.summary ?? "Analyze your digital footprint to generate a growth intelligence report.";
  const obstacles = auditResult?.cons ?? [
    "Connect a URL above to identify critical obstacles.",
    "Perform a growth audit to unlock impact insights."
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* AI Executive Briefing */}
      <section className="rounded-2xl bg-surface-dark border border-primary/40 p-6 shadow-[0_0_40px_-10px_rgba(42,25,230,0.3)] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-5">
          <Brain className="w-40 h-40" /> {/* FIX Tailwind v4: w-40 h-40 */}
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            <Network className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white">AI Executive Briefing</h2>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">NEXORA Intelligence Summary</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-red-500 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Top Critical Obstacles
            </h3>
            <ul className="space-y-3">
              {obstacles.map((obstacle, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="text-slate-500 font-mono">0{i + 1}.</span>
                  <p className="text-slate-300">{obstacle}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-emerald-500 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Primary Growth Lever
            </h3>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                {summary} {/* Tampilkan ringkasan rill dari AI */}
              </p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400">Intelligence V3.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section: Overall Score */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark p-8 flex flex-col md:flex-row items-center gap-10 shadow-[0_0_40px_-10px_rgba(42,25,230,0.3)]">
          <div className="relative shrink-0"> {/* FIX Tailwind v4: shrink-0 */}
            {/* SUNTIKAN 3: Grafik Lingkaran Dinamis */}
            <div 
              className="size-48 rounded-full flex items-center justify-center transform -rotate-90" 
              style={{ background: `radial-gradient(closest-side, #121121 79%, transparent 80% 100%), conic-gradient(#2a19e6 ${score}%, #2d2c3d 0)` }}
            >
              <div className="bg-background-dark size-[85%] rounded-full flex items-center justify-center transform rotate-90">
                <div className="text-center">
                  <p className="text-4xl font-black text-white">{score}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">of 100</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-[10px] font-black text-white shadow-xl">
              {score > 70 ? 'STABLE' : 'IMPROVING'}
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black mb-2 dark:text-white">Overall Growth Score</h1>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-6">
              Your digital presence is currently performing at <span className="text-primary font-bold">{score}% Efficiency</span>. {score < 50 ? 'Immediate action required.' : 'Optimization paths available.'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
                <p className="text-[10px] font-bold uppercase">Risk Level</p>
                <p className="text-xl font-black leading-none">{score < 40 ? 'CRITICAL' : score < 70 ? 'HIGH' : 'LOW'}</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                <p className="text-[10px] font-bold uppercase">Status</p>
                <p className="text-xl font-black leading-none">{auditResult ? 'VERIFIED' : 'PENDING'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Impact Insight */}
        <div className="rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <DollarSign className="w-24 h-24" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-primary w-5 h-5" />
              <h3 className="font-bold text-lg dark:text-white">Impact Insight</h3>
            </div>
            <p className="text-sm leading-relaxed dark:text-slate-300">
              {auditResult ? `Gemini AI suggests: "${summary}"` : "Perform an audit to see predicted revenue impact insights."}
            </p>
          </div>
          <button 
            onClick={() => setPage(Page.RevenueRoadmap)}
            className="mt-6 w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform"
          >
            View Full Roadmap
          </button>
        </div>
      </div>
      
      {/* Module Performance Section - Lu bisa sambungkan skor modul di sini nanti */}
    </div>
  );
}