import { 
  Clock, 
  Construction, 
  Bolt, 
  Rocket, 
  TrendingUp, 
  Wallet, 
  CalendarCheck, 
  List,
  Sliders,
  Play
} from 'lucide-react';

export default function RevenueRoadmap() {
  return (
    <div className="space-y-12 pb-12">
      {/* Page Title */}
      <div>
        <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-2">Revenue & Strategic Roadmap</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-medium">Final strategic growth plan and projected revenue impact over the next 6 months.</p>
      </div>

      {/* Strategic Timeline */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Clock className="text-primary w-6 h-6" />
          <h3 className="text-xl font-bold dark:text-white">6-Month Strategic Timeline</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Phase 1 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/50 dark:bg-surface-dark border-t-4 border-primary shadow-xl">
            <div className="flex items-center justify-between">
              <span className="bg-primary/20 text-primary text-[11px] font-black px-2 py-1 rounded uppercase tracking-wider">Phase 01</span>
              <span className="text-slate-500 text-sm font-bold italic">Months 1-2</span>
            </div>
            <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg shadow-primary/30">
              <Construction className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold dark:text-white">Foundation & Fixes</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Technical SEO, conversion tracking, and high-friction UX fixes to stabilize current traffic.</p>
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-500 w-4 h-4" />
              <span className="text-xs font-bold text-emerald-500">+12% Projected Lift</span>
            </div>
          </div>
          {/* Phase 2 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/50 dark:bg-surface-dark border-t-4 border-purple-500 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="bg-purple-500/20 text-purple-500 text-[11px] font-black px-2 py-1 rounded uppercase tracking-wider">Phase 02</span>
              <span className="text-slate-500 text-sm font-bold italic">Months 3-4</span>
            </div>
            <div className="size-12 rounded-full bg-purple-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-purple-500/30">
              <Bolt className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold dark:text-white">Optimization & Growth</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Aggressive A/B testing, landing page expansion, and marketing automation workflows.</p>
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-500 w-4 h-4" />
              <span className="text-xs font-bold text-emerald-500">+28% Projected Lift</span>
            </div>
          </div>
          {/* Phase 3 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50/50 dark:bg-surface-dark border-t-4 border-cyan-400 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="bg-cyan-400/20 text-cyan-400 text-[11px] font-black px-2 py-1 rounded uppercase tracking-wider">Phase 03</span>
              <span className="text-slate-500 text-sm font-bold italic">Months 5-6</span>
            </div>
            <div className="size-12 rounded-full bg-cyan-400 flex items-center justify-center text-white mb-2 shadow-lg shadow-cyan-400/30">
              <Rocket className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold dark:text-white">Authority & Scale</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Advanced personalization, strategic content moats, and partnership scaling for dominance.</p>
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-500 w-4 h-4" />
              <span className="text-xs font-bold text-emerald-500">+45% Projected Lift</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & ROI Visuals */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Chart Section */}
        <div className="xl:col-span-6 bg-slate-50/50 dark:bg-surface-dark rounded-xl p-8 flex flex-col gap-6 border border-slate-200 dark:border-border-dark">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold dark:text-white">Revenue Growth Forecast</h3>
              <p className="text-sm text-slate-400 font-medium">Projected monthly revenue lift over 12 months</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-lg">
              <div className="size-3 rounded-full bg-primary shadow-[0_0_8px_rgba(42,25,230,0.8)]"></div>
              <span className="text-xs font-bold dark:text-slate-300">Projected</span>
            </div>
          </div>
          <div className="h-64 relative mt-4">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
              <defs>
                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2a19e6" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#2a19e6" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,180 Q100,170 200,140 T400,100 T600,60 T800,20 V200 H0 Z" fill="url(#areaGradient)"></path>
              <path d="M0,180 Q100,170 200,140 T400,100 T600,60 T800,20" fill="none" stroke="#2a19e6" strokeLinecap="round" strokeWidth="4"></path>
              <circle cx="200" cy="140" fill="white" r="4" stroke="#2a19e6" strokeWidth="2"></circle>
              <circle cx="400" cy="100" fill="white" r="4" stroke="#2a19e6" strokeWidth="2"></circle>
              <circle cx="600" cy="60" fill="white" r="4" stroke="#2a19e6" strokeWidth="2"></circle>
            </svg>
            <div className="flex justify-between mt-4 text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
              <span>Month 1</span>
              <span>Month 3</span>
              <span>Month 6</span>
              <span>Month 9</span>
              <span>Month 12</span>
            </div>
          </div>
        </div>

        {/* Revenue Impact Modeler */}
        <div className="xl:col-span-3 bg-slate-50/50 dark:bg-surface-dark rounded-xl p-6 flex flex-col gap-6 border border-slate-200 dark:border-border-dark border-t-2 border-t-primary/30">
          <div className="flex items-center gap-2">
            <Sliders className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold uppercase tracking-wider dark:text-white">Impact Modeler</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-400">Traffic Growth %</label>
                <span className="text-xs font-bold text-primary">+25%</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="25"/>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-400">Conversion Rate Lift</label>
                <span className="text-xs font-bold text-purple-400">+1.2%</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-purple-500" max="5" min="0" step="0.1" type="range" defaultValue="1.2"/>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-400">Avg Order Value</label>
                <span className="text-xs font-bold text-cyan-400">+$15.00</span>
              </div>
              <input className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-400" max="100" min="0" type="range" defaultValue="15"/>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
            <p className="text-[10px] text-slate-500 font-medium italic">* Modeler uses real-time probabilistic forecasting based on audit data.</p>
          </div>
        </div>

        {/* ROI Widgets */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl p-5 border-l-4 border-primary border border-slate-200 dark:border-border-dark">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Potential Monthly Lift</p>
            <h2 className="text-3xl font-black dark:text-white">$12,500+</h2>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-emerald-500 text-xs font-bold">+18.4% growth</span>
              <TrendingUp className="text-primary w-4 h-4" />
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl p-5 border-l-4 border-purple-500 border border-slate-200 dark:border-border-dark">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Projected Annual ROI</p>
            <h2 className="text-3xl font-black dark:text-white">420%</h2>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-slate-400 text-xs font-medium">Estimated value</span>
              <Wallet className="text-purple-500 w-4 h-4" />
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl p-5 border-l-4 border-cyan-400 border border-slate-200 dark:border-border-dark">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">Payback Period</p>
            <h2 className="text-3xl font-black dark:text-white">3.5 Months</h2>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-slate-400 text-xs font-medium">Net-positive date</span>
              <CalendarCheck className="text-cyan-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Prioritized Action Items */}
      <section className="bg-slate-50/50 dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-border-dark shadow-2xl">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <List className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bold dark:text-white">Prioritized Task Matrix</h3>
          </div>
          <div className="flex gap-4">
            <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 focus:ring-primary outline-none px-3 py-1.5">
              <option>All Phases</option>
              <option>Phase 1</option>
              <option>Phase 2</option>
              <option>Phase 3</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-100 dark:bg-slate-900/50 text-[11px] uppercase tracking-widest text-slate-500 font-black">
              <tr>
                <th className="px-6 py-4">Task Name</th>
                <th className="px-6 py-4">Phase</th>
                <th className="px-6 py-4">Impact</th>
                <th className="px-6 py-4">Effort</th>
                <th className="px-6 py-4">Estimated Gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">Critical Technical SEO Patches</span>
                    <span className="text-slate-500 text-xs font-medium">Core Web Vitals & Indexing fixes</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-[10px] font-black bg-primary/20 text-primary border border-primary/30">FOUNDATION</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-rose-500">CRITICAL</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300">MEDIUM</td>
                <td className="px-6 py-4 text-sm font-black text-emerald-500">+$2,100/mo</td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-slate-100 font-bold text-sm">CRO/UX High-Friction Fixes</span>
                    <span className="text-slate-500 text-xs font-medium">Checkout flow & Header navigation</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-[10px] font-black bg-primary/20 text-primary border border-primary/30">FOUNDATION</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                      <div className="w-1.5 h-3 bg-rose-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-rose-500">HIGH</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-300">EASY</td>
                <td className="px-6 py-4 text-sm font-black text-emerald-500">+$4,500/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <div className="p-1 bg-gradient-to-r from-primary via-purple-500 to-cyan-400 rounded-2xl shadow-2xl">
        <div className="bg-white dark:bg-background-dark rounded-[0.9rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black dark:text-white mb-4 leading-tight">Ready to activate your <span className="text-primary italic">growth roadmap</span>?</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Implementation of Phase 1 can begin immediately with our technical team. Start capturing the identified $2.1k/mo leak within 14 days.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
              Talk to Strategist
            </button>
            <button className="px-8 py-4 rounded-xl bg-primary text-white font-black hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Start Implementation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
