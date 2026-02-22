import { 
  MousePointer2, 
  Smartphone, 
  Verified, 
  FileText, 
  TrendingDown, 
  TrendingUp, 
  ArrowDown,
  Download,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function UXCRO() {
  return (
    <div className="space-y-8">
      {/* Top Section: Score & Summary Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* UX/CRO Score Radial */}
        <div className="xl:col-span-4 bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-bold mb-6 self-start dark:text-white">Overall Health</h3>
          <div className="relative flex items-center justify-center">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle className="text-slate-200 dark:text-slate-800" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="transition-all duration-1000" cx="96" cy="96" fill="transparent" r="80" stroke="#ec5b13" strokeDasharray="502.6" strokeDashoffset="211" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center transform">
              <span className="text-5xl font-black text-primary">58<span className="text-2xl text-slate-400">/100</span></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-1">Needs Work</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">Your score is <span className="text-primary font-semibold">12% lower</span> than industry average for your sector.</p>
        </div>
        {/* Summary Cards */}
        <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-6 hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <MousePointer2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase">Fair</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">CTA Strength</p>
            <h4 className="text-3xl font-black mt-1 dark:text-white">62%</h4>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-4">
              <div className="bg-primary h-full rounded-full" style={{ width: '62%' }}></div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-6 hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
                <Verified className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-primary italic uppercase">Critical</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Trust Signals</p>
            <h4 className="text-3xl font-black mt-1 dark:text-white">45%</h4>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-4">
              <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-6 hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-red-500 uppercase">High</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mobile Friction</p>
            <h4 className="text-3xl font-black mt-1 dark:text-white">High</h4>
            <div className="flex gap-1 mt-4">
              <div className="h-1.5 flex-1 bg-red-500 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-red-500 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-red-500 rounded-full"></div>
              <div className="h-1.5 flex-1 bg-slate-800 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-6 hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-green-500 uppercase">Good</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Form Efficiency</p>
            <h4 className="text-3xl font-black mt-1 dark:text-white">78%</h4>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-4">
              <div className="bg-green-500 h-full rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Funnel Visualization */}
      <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-8 dark:text-white">Conversion Funnel Visualization</h3>
        <div className="flex flex-col gap-6">
          {/* Awareness */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold uppercase tracking-tighter flex items-center gap-2 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-primary/40"></span> Awareness
              </span>
              <span className="text-sm font-mono font-bold dark:text-white">100% (24.5k users)</span>
            </div>
            <div className="h-10 bg-primary/40 rounded-lg w-full"></div>
          </div>
          {/* Interest */}
          <div className="relative flex flex-col items-center">
            <div className="text-xs font-bold text-primary mb-2 flex items-center gap-1">
              <ArrowDown className="w-3 h-3" /> 35% Drop-off
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold uppercase tracking-tighter flex items-center gap-2 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-primary/60"></span> Interest
                </span>
                <span className="text-sm font-mono font-bold dark:text-white">65% (15.9k users)</span>
              </div>
              <div className="h-10 bg-primary/60 rounded-lg mx-auto" style={{ width: '65%' }}></div>
            </div>
          </div>
          {/* Consideration */}
          <div className="relative flex flex-col items-center">
            <div className="text-xs font-bold text-primary mb-2 flex items-center gap-1">
              <ArrowDown className="w-3 h-3" /> 51% Drop-off
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold uppercase tracking-tighter flex items-center gap-2 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-primary/80"></span> Consideration
                </span>
                <span className="text-sm font-mono font-bold dark:text-white">32% (7.8k users)</span>
              </div>
              <div className="h-10 bg-primary/80 rounded-lg mx-auto" style={{ width: '32%' }}></div>
            </div>
          </div>
          {/* Conversion */}
          <div className="relative flex flex-col items-center">
            <div className="text-xs font-bold text-primary mb-2 flex items-center gap-1">
              <ArrowDown className="w-3 h-3" /> 92% Drop-off
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold uppercase tracking-tighter flex items-center gap-2 dark:text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Conversion
                </span>
                <span className="text-sm font-mono font-bold dark:text-white">2.4% (588 users)</span>
              </div>
              <div className="h-10 bg-primary rounded-lg mx-auto" style={{ width: '2.4%', minWidth: '40px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: UX Findings Table */}
      <div className="bg-white dark:bg-background-dark/80 border border-primary/10 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-primary/10 flex justify-between items-center">
          <h3 className="text-xl font-bold dark:text-white">Audit Findings & UX Roadmap</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">Active: 12</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold rounded-full border border-slate-700">Resolved: 45</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-xs font-black uppercase tracking-widest">
                <th className="px-6 py-4">Finding Name</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Impact Score</th>
                <th className="px-6 py-4">Consultant Recommendation</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {[
                { name: 'Weak Primary CTA contrast', sub: 'Homepage / Hero Section', sev: 'Critical', score: 9.8, rec: 'Implement #ec5b13 background with white text for better accessibility scores.' },
                { name: 'High Form Friction on Mobile', sub: 'Checkout / Contact Page', sev: 'High', score: 8.2, rec: 'Reduce form fields from 12 to 5. Implement social login options.' },
                { name: 'Lack of Proof/Trust Badges', sub: 'Global Footer / Cart', sev: 'Medium', score: 5.5, rec: 'Add G2/Trustpilot badges and SSL certificates above the fold.' },
                { name: 'Confusing Nav Architecture', sub: 'Main Menu', sev: 'High', score: 7.9, rec: 'Simplify top-level categories. Use "Mega Menu" for SaaS products.' },
              ].map((finding, i) => (
                <tr key={i} className="hover:bg-primary/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm dark:text-white">{finding.name}</span>
                      <span className="text-xs text-slate-500 mt-0.5">{finding.sub}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-tight border ${finding.sev === 'Critical' ? 'bg-primary/20 text-primary border-primary/30' : finding.sev === 'High' ? 'bg-orange-500/20 text-orange-500 border-orange-500/30' : 'bg-blue-500/20 text-blue-500 border-blue-500/30'}`}>
                      {finding.sev}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-slate-200 dark:bg-slate-800 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${finding.score * 10}%` }}></div>
                      </div>
                      <span className="font-mono text-xs font-bold dark:text-white">{finding.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">{finding.rec}</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-primary hover:underline text-xs font-bold">View Task</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
