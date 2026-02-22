import { 
  Target, 
  TrendingUp, 
  PieChart, 
  Network, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  Zap,
  Wand2,
  BarChart3,
  Search,
  Mail
} from 'lucide-react';

export default function ContentAuthority() {
  return (
    <div className="space-y-8">
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Authority Score</p>
            <CheckCircle2 className="text-primary w-5 h-5" />
          </div>
          <p className="text-3xl font-bold dark:text-white">81<span className="text-sm text-slate-400">/100</span></p>
          <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold">
            <TrendingUp className="w-3 h-3" />
            +12% vs last month
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Topical Coverage</p>
            <PieChart className="text-primary w-5 h-5" />
          </div>
          <p className="text-3xl font-bold dark:text-white">64%</p>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-1">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '64%' }}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Internal Link Depth</p>
            <Network className="text-primary w-5 h-5" />
          </div>
          <p className="text-3xl font-bold dark:text-white">3.2 <span className="text-sm font-normal text-slate-400">levels</span></p>
          <div className="flex items-center gap-1 text-orange-500 text-xs font-bold">
            <TrendingUp className="w-3 h-3 rotate-180" />
            -0.4 depth reduction
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Thin Content Risk</p>
            <CheckCircle2 className="text-emerald-500 w-5 h-5" />
          </div>
          <p className="text-3xl font-bold text-emerald-500">Low</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Stable across 1,240 pages</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Pillar Strategy Mapping */}
        <section className="xl:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Network className="text-primary w-5 h-5" />
              Pillar Strategy Mapping
            </h3>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Visualizing 12 Active Clusters</span>
          </div>
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-8 min-h-[400px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg fill="none" height="100%" viewBox="0 0 800 400" width="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="400" cy="200" r="150" stroke="currentColor" strokeDasharray="10 10" strokeWidth="1"></circle>
                <circle cx="400" cy="200" r="100" stroke="currentColor" strokeDasharray="5 5" strokeWidth="1"></circle>
                <path d="M400 200 L550 50 M400 200 L600 250 M400 200 L200 300 M400 200 L250 80" stroke="currentColor" strokeWidth="1"></path>
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center h-full gap-12 relative z-10">
              <div className="bg-primary/20 border-2 border-primary p-6 rounded-2xl shadow-xl shadow-primary/20 flex flex-col items-center max-w-[240px] text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Main Pillar</span>
                <h4 className="font-bold text-lg leading-tight dark:text-white">SaaS Marketing Automation</h4>
                <p className="text-xs text-slate-400 mt-2">42 Cluster Pages</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                  { label: 'Growth Hacking', pages: 12, icon: Zap },
                  { label: 'SEO Workflows', pages: 8, icon: Wand2 },
                  { label: 'Lead Scoring', pages: 15, icon: BarChart3 },
                  { label: 'Drip Campaigns', pages: 7, icon: Mail },
                ].map((node, i) => (
                  <div key={i} className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      <node.icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs font-bold dark:text-white leading-tight">{node.label}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{node.pages} Pages</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Authority Gaps */}
        <section className="xl:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <AlertTriangle className="text-primary w-5 h-5" />
              Authority Gaps
            </h3>
          </div>
          <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden flex flex-col h-[400px]">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Competitor Winning Keywords</p>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
              {[
                { kw: 'Enterprise AI Marketing', vol: '12.4k', comp: 'High', fill: 85 },
                { kw: 'Marketing Automation ROI', vol: '8.2k', comp: 'Med', fill: 60 },
                { kw: 'Customer Data Platforms', vol: '15.1k', comp: 'High', fill: 92 },
                { kw: 'CRM Integration Best Practices', vol: '4.5k', comp: 'Low', fill: 45 },
              ].map((gap, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium dark:text-white">{gap.kw}</span>
                    <span className="text-xs text-primary font-bold">Vol: {gap.vol}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40" style={{ width: `${gap.fill}%` }}></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Comp: {gap.comp}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-primary/5 border-t border-slate-200 dark:border-slate-800">
              <button className="w-full text-xs font-bold text-primary flex items-center justify-center gap-1">
                VIEW ALL 42 GAPS <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Audit Findings Table */}
      <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
          <h3 className="text-lg font-bold dark:text-white flex items-center gap-2">
            <CheckCircle2 className="text-primary w-5 h-5" />
            Audit Findings
          </h3>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase">2 Critical</span>
            <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase">4 Warning</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4">Issue Type</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Impact Score</th>
                <th className="px-6 py-4">Consultant Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                { type: 'Keyword Cannibalization', sev: 'Critical', score: 88, color: 'bg-rose-500', rec: 'Merge "SaaS Automation Tools" and "Best Marketing SaaS" pillars to consolidate link equity.' },
                { type: 'Internal Link Orphanage', sev: 'Warning', score: 42, color: 'bg-amber-500', rec: '12 case study pages have zero incoming internal links. Implement contextual hub linking.' },
                { type: 'Content Decay (Top Pages)', sev: 'Warning', score: 35, color: 'bg-amber-500', rec: 'Traffic dropped 15% on 5 core pillar pages. Refresh statistics and update external sources.' },
                { type: 'Thin Content Detection', sev: 'Minor', score: 12, color: 'bg-primary', rec: 'A group of blog tags generated low-value auto-pages. Set to noindex or expand content.' },
              ].map((finding, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold dark:text-white">{finding.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${finding.sev === 'Critical' ? 'bg-rose-500/10 text-rose-500' : finding.sev === 'Warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'}`}>
                      {finding.sev}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs dark:text-white">{finding.score}/100</span>
                      <div className="w-16 bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                        <div className={`${finding.color} h-full`} style={{ width: `${finding.score}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{finding.rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
