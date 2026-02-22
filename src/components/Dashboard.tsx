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

interface DashboardProps {
  setPage: (page: Page) => void;
  setModuleSubPage: (subPage: ModuleSubPage) => void;
}

export default function Dashboard({ setPage, setModuleSubPage }: DashboardProps) {
  const handleModuleClick = (subPage: ModuleSubPage) => {
    setModuleSubPage(subPage);
    setPage(Page.ModuleAnalysis);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* AI Executive Briefing */}
      <section className="rounded-2xl bg-surface-dark border border-primary/40 p-6 shadow-[0_0_40px_-10px_rgba(42,25,230,0.3)] relative overflow-hidden">
        <div className="absolute -top-10 -right-10 opacity-5">
          <Brain className="w-[160px] h-[160px]" />
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
              <li className="flex gap-3 text-sm">
                <span className="text-slate-500 font-mono">01.</span>
                <p className="text-slate-300">Broken redirect chains are causing a <span className="text-white font-semibold">15% crawl budget loss</span>, severely hindering indexing speed.</p>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-slate-500 font-mono">02.</span>
                <p className="text-slate-300">LCP exceeds 4s on mobile; resolving this provides a predicted <span className="text-white font-semibold">8% conversion lift</span> immediately.</p>
              </li>
              <li className="flex gap-3 text-sm">
                <span className="text-slate-500 font-mono">03.</span>
                <p className="text-slate-300">Missing SSL chain links are triggering browser warnings for <span className="text-white font-semibold">4% of your legacy user base</span>.</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-emerald-500 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Primary Growth Lever
            </h3>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                The single largest opportunity lies in <span className="text-white font-bold">Checkout UX Optimization</span>. By streamlining the multi-step flow, our models project a recovery of <span className="text-emerald-400 font-black">$4,200/month</span> in currently leaking revenue from cart abandonment.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400">Tier 2 Efficiency</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400">V3.0 Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section: Overall Score */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-2xl bg-white dark:bg-surface-dark border border-border-dark p-8 flex flex-col md:flex-row items-center gap-10 shadow-[0_0_40px_-10px_rgba(42,25,230,0.3)]">
          <div className="relative flex-shrink-0">
            <div className="size-48 rounded-full flex items-center justify-center transform -rotate-90" style={{ background: 'radial-gradient(closest-side, #121121 79%, transparent 80% 100%), conic-gradient(#2a19e6 68%, #2d2c3d 0)' }}>
              <div className="bg-background-dark size-[85%] rounded-full flex items-center justify-center transform rotate-90">
                <div className="text-center">
                  <p className="text-4xl font-black text-white">68</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">of 100</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-[10px] font-black text-white shadow-xl">
              IMPROVING
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-black mb-2 dark:text-white">Overall Growth Score</h1>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed mb-6">
              Your current digital footprint is performing at <span className="text-primary font-bold">Tier 2 efficiency</span>. Significant opportunities exist in On-Page SEO and Market Positioning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500">
                <p className="text-[10px] font-bold uppercase">Risk Level</p>
                <p className="text-xl font-black leading-none">HIGH</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                <p className="text-[10px] font-bold uppercase">Revenue Gap</p>
                <p className="text-xl font-black leading-none">$12,400+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Impact Insight */}
        <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <DollarSign className="w-24 h-24" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-primary w-5 h-5" />
              <h3 className="font-bold text-lg dark:text-white">Impact Insight</h3>
            </div>
            <p className="text-sm leading-relaxed dark:text-slate-300">
              "Optimizing the <span className="font-bold underline decoration-primary">Checkout UX flow</span> could reclaim an estimated <span className="text-emerald-500 font-bold">$4.2k monthly</span> in currently abandoned cart revenue."
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

      {/* Module Performance */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black dark:text-white">Module Performance</h2>
          </div>
          <span className="text-xs text-slate-400 font-medium">Weighted results based on Industry Standard V3.0</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { label: 'Technical SEO', id: ModuleSubPage.TechnicalSEO, score: 74, weight: '20%', icon: Settings2, color: 'bg-emerald-500' },
            { label: 'On-Page SEO', id: ModuleSubPage.OnPageSEO, score: 42, weight: '15%', icon: FileText, color: 'bg-red-500' },
            { label: 'UX/CRO', id: ModuleSubPage.UXCRO, score: 58, weight: '20%', icon: MousePointer2, color: 'bg-amber-500' },
            { label: 'Content Authority', id: ModuleSubPage.ContentAuthority, score: 81, weight: '15%', icon: ShieldCheck, color: 'bg-emerald-500' },
            { label: 'Off-Page Authority', id: ModuleSubPage.OffPageAuthority, score: 35, weight: '10%', icon: Network, color: 'bg-red-500' },
            { label: 'Security & Trust', id: ModuleSubPage.SecurityTrust, score: 94, weight: '10%', icon: Lock, color: 'bg-emerald-500' },
            { label: 'Market Positioning', id: ModuleSubPage.MarketPositioning, score: 51, weight: '10%', icon: BarChart, color: 'bg-amber-500' },
          ].map((module, i) => (
            <div 
              key={i} 
              onClick={() => handleModuleClick(module.id)}
              className="rounded-xl bg-white dark:bg-surface-dark border border-border-dark p-5 hover:border-primary/50 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-background-dark text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                  <module.icon className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-black dark:text-white">{module.score}<span className="text-[10px] text-slate-500">/100</span></p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Weight {module.weight}</p>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-2 dark:text-white">{module.label}</h4>
              <div className="h-1.5 w-full bg-slate-100 dark:bg-background-dark rounded-full overflow-hidden">
                <div className={`h-full ${module.color}`} style={{ width: `${module.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Critical Fixes */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <AlertCircle className="text-red-500 w-5 h-5" />
          <h2 className="text-xl font-black dark:text-white">Top Critical Fixes</h2>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { title: 'Broken Redirect Chains', desc: 'Causing ~15% organic traffic loss due to search engine crawl budget exhaustion.', impact: 'SEVERE', icon: Link2Off },
            { title: 'LCP (Largest Contentful Paint) > 4s', desc: 'High mobile bounce rate detected. Potential 8% conversion lift with optimization.', impact: 'HIGH', icon: Timer },
            { title: 'Missing SSL Chain Links', desc: 'Security warnings appearing on older browsers, impacting ~4% of legacy users.', impact: 'MEDIUM', icon: AlertCircle },
          ].map((fix, i) => (
            <div key={i} className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-red-500/10 transition-colors">
              <div className="flex gap-4">
                <div className="bg-red-500/20 text-red-500 size-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <fix.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 mb-1">{fix.title}</h4>
                  <p className="text-sm text-slate-400">{fix.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-widest">Impact</p>
                  <p className="text-sm font-bold dark:text-white">{fix.impact}</p>
                </div>
                <button className="px-5 py-2 bg-slate-900 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-all">Fix Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
