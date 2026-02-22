import { 
  Verified, 
  MousePointer2, 
  Target, 
  UserSearch, 
  MapPin, 
  Shield, 
  Zap, 
  TrendingUp, 
  Info, 
  ChevronRight,
  Search,
  Download,
  Bell,
  BarChart
} from 'lucide-react';

export default function MarketPositioning() {
  return (
    <div className="space-y-8">
      {/* Hero Section: Title & High-Level Stats */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight dark:text-white">Market Positioning Dashboard</h2>
          <p className="text-slate-500 mt-1">Strategic overview of positioning strength and market white space gaps.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-sm min-w-[200px]">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Verified className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">USP Strength</p>
              <p className="text-xl font-bold dark:text-white">78% <span className="text-xs text-green-500 font-normal">+2.4%</span></p>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl flex items-center gap-4 shadow-sm min-w-[200px]">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
              <MousePointer2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Audience Precision</p>
              <p className="text-xl font-bold dark:text-white">92% <span className="text-xs text-green-500 font-normal">+5.1%</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Positioning Strength Score */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
          <h3 className="text-lg font-semibold w-full text-left dark:text-white">Positioning Strength</h3>
          <div className="relative size-48">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3"></circle>
              <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="84, 100" strokeLinecap="round" strokeWidth="3"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold tracking-tighter dark:text-white">84%</span>
              <span className="text-xs text-slate-500 font-medium uppercase">Strong</span>
            </div>
          </div>
          <div className="w-full space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Market Relevance</span>
              <span className="font-semibold text-emerald-500">High</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Message Resonance</span>
              <span className="font-semibold dark:text-white">88/100</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">Industry Rank</span>
              <span className="font-semibold dark:text-white">Top 12%</span>
            </div>
          </div>
        </div>

        {/* Value Proposition Analysis */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold dark:text-white">Value Proposition Analysis</h3>
            <button className="text-primary text-xs font-semibold hover:underline">View AI Insights</button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium dark:text-slate-300">Clarity</label>
                <span className="text-sm font-bold dark:text-white">88%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">"Your core message is easily understood by 9/10 first-time visitors."</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium dark:text-slate-300">Relevance</label>
                <span className="text-sm font-bold dark:text-white">72%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed dark:text-slate-400">High alignment with enterprise pain points, moderate with mid-market.</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-sm font-medium dark:text-slate-300">Urgency</label>
                <span className="text-sm font-bold dark:text-white">65%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-slate-400 dark:bg-slate-600 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed italic">"Need more emphasis on the cost of inaction to drive conversion."</p>
            </div>
          </div>
        </div>

        {/* Competitor Gap Matrix */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold dark:text-white">Competitor Gap Matrix</h3>
              <p className="text-xs text-slate-500">Price vs. Feature Sophistication mapping</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="size-3 bg-primary rounded-full"></span>
                <span className="text-xs font-medium dark:text-slate-300">Your Brand</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 bg-slate-400 rounded-full"></span>
                <span className="text-xs font-medium dark:text-slate-300">Competitors</span>
              </div>
            </div>
          </div>
          <div className="p-8 h-[400px] relative" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Feature Sophistication
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Market Price Point
            </div>
            <div className="absolute inset-0 m-12 border-l border-b border-slate-200 dark:border-slate-700 pointer-events-none"></div>
            <div className="absolute inset-0 m-12">
              <div className="absolute top-[20%] left-[75%] group cursor-pointer">
                <div className="size-10 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center animate-pulse">
                  <div className="size-3 bg-primary rounded-full"></div>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                  Your Brand (High-End Leader)
                </div>
              </div>
              <div className="absolute top-[60%] left-[30%] group cursor-pointer">
                <div className="size-8 bg-slate-400/20 border-2 border-slate-400 rounded-full flex items-center justify-center hover:bg-slate-400/40 transition-colors">
                  <span className="text-[10px] font-bold text-slate-500">C1</span>
                </div>
              </div>
              <div className="absolute top-[10%] left-[15%] group cursor-pointer">
                <div className="size-8 bg-slate-400/20 border-2 border-slate-400 rounded-full flex items-center justify-center hover:bg-slate-400/40 transition-colors">
                  <span className="text-[10px] font-bold text-slate-500">C2</span>
                </div>
              </div>
              <div className="absolute top-[80%] left-[80%] group cursor-pointer">
                <div className="size-8 bg-slate-400/20 border-2 border-slate-400 rounded-full flex items-center justify-center hover:bg-slate-400/40 transition-colors">
                  <span className="text-[10px] font-bold text-slate-500">C3</span>
                </div>
              </div>
              <div className="absolute top-[20%] left-[20%] size-24 border-2 border-dashed border-emerald-500/30 rounded-full bg-emerald-500/5 flex items-center justify-center">
                <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-tight text-center px-4">Market Gap Opportunity</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Info className="text-primary w-4 h-4" />
              <span>Opportunity identified in <strong>Mid-Price / Enterprise Features</strong> segment.</span>
            </div>
            <button className="text-sm font-semibold text-primary flex items-center gap-1">
              Strategy Details <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Audience Targeting Precision */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 dark:text-white">Audience Targeting Precision</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium dark:text-slate-300">ICP Alignment</span>
                    <span className="text-sm font-bold dark:text-white">94%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <UserSearch className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium dark:text-slate-300">Interest Match</span>
                    <span className="text-sm font-bold dark:text-white">81%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium dark:text-slate-300">Geo-Relevance</span>
                    <span className="text-sm font-bold dark:text-white">67%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 dark:text-white">USP Market Strength</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Uniqueness', value: 'Excellent', icon: TrendingUp, sub: 'Top 5% in niche', color: 'text-primary' },
                { label: 'Defensibility', value: 'Strong', icon: Shield, sub: '2 Moats detected', color: 'text-slate-500' },
                { label: 'Scalability', value: 'High', icon: Zap, sub: 'Linear growth cost', color: 'text-slate-500' },
                { label: 'Market Fit', value: '9.2/10', icon: TrendingUp, sub: 'Rising demand', color: 'text-green-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-tight">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</p>
                  <p className={`text-xs ${stat.color} mt-2 flex items-center gap-1 font-medium`}>
                    <stat.icon className="w-3 h-3" /> {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
