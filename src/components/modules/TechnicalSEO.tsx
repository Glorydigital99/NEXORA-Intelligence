import { 
  Settings2, 
  TrendingUp, 
  Globe, 
  CloudCheck, 
  Zap, 
  Download, 
  MoreVertical,
  ArrowLeft,
  ChevronRight,
  Search,
  DollarSign,
  Link2,
  AlertTriangle,
  FileCode,
  ShieldAlert,
  Smartphone,
  Gauge,
  Database,
  Lock
} from 'lucide-react';

export default function TechnicalSEO() {
  return (
    <div className="space-y-8 pb-12">
      {/* Top Section: Score & Key Metrics */}
      <div className="grid grid-cols-12 gap-6">
        {/* Score Card */}
        <div className="col-span-12 lg:col-span-4 bg-slate-50/50 dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm flex flex-col items-center justify-center text-center">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Technical Health Score</h3>
          <div className="relative flex items-center justify-center mb-6">
            <svg className="size-40 transform -rotate-90">
              <circle className="text-slate-100 dark:text-border-dark" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="114" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black dark:text-white">74<span className="text-xl font-normal text-slate-400">/100</span></span>
              <span className="text-xs font-bold text-amber-500 mt-1 uppercase">Needs Work</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Score is based on 48 technical parameters including crawlability, CWV, and indexation.</p>
        </div>
        {/* Metrics Grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-emerald-500">+1.2%</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Crawlability</p>
            <h4 className="text-2xl font-bold dark:text-white">92.4%</h4>
            <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <CloudCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-400">0%</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Indexability</p>
            <h4 className="text-2xl font-bold dark:text-white">88.1%</h4>
            <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-rose-500">-5.4%</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Core Web Vitals</p>
            <h4 className="text-2xl font-bold dark:text-white">Failed</h4>
            <div className="flex gap-1 mt-4">
              <div className="h-1.5 flex-1 bg-emerald-500 rounded-full" title="LCP: Pass"></div>
              <div className="h-1.5 flex-1 bg-amber-500 rounded-full" title="FID: Needs Improv."></div>
              <div className="h-1.5 flex-1 bg-rose-500 rounded-full" title="CLS: Fail"></div>
            </div>
          </div>
          {/* Mobile Speed Detail */}
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm col-span-1 md:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <h4 className="font-bold dark:text-white">Mobile Performance Insights</h4>
              </div>
              <span className="text-xs text-rose-500 font-bold uppercase">Action Required</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">LCP (Largest Contentful Paint)</span>
                  <span className="text-rose-500 font-bold">4.2s</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500" style={{ width: '85%' }}></div>
                </div>
                <p className="text-[10px] text-slate-500 italic">Suggestion: Optimize hero images and implement lazy loading.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">FID (First Input Delay)</span>
                  <span className="text-amber-500 font-bold">120ms</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '60%' }}></div>
                </div>
                <p className="text-[10px] text-slate-500 italic">Suggestion: Reduce main-thread work by deferring unused JS.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">CLS (Cumulative Layout Shift)</span>
                  <span className="text-rose-500 font-bold">0.28</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500" style={{ width: '75%' }}></div>
                </div>
                <p className="text-[10px] text-slate-500 italic">Suggestion: Set explicit dimensions for images and ad slots.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema Validation & Broken Links Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Schema Validation */}
        <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FileCode className="text-primary w-5 h-5" />
              <h3 className="text-lg font-bold dark:text-white">Schema Markup Validation</h3>
            </div>
            <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded uppercase">8 Warnings</span>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-bold dark:text-white">Product Schema</span>
                <span className="text-xs text-rose-500 font-bold">Missing Properties</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">Detected on 42 product pages. Missing "priceValidUntil" and "availability".</p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px] text-slate-500">JSON-LD</span>
                <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px] text-slate-500">eCommerce</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-bold dark:text-white">Organization Schema</span>
                <span className="text-xs text-amber-500 font-bold">Type Mismatch</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">"logo" property expects a URL or ImageObject, but received a string literal.</p>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px] text-slate-500">Global</span>
                <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-[10px] text-slate-500">Identity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Broken Links Check */}
        <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Link2 className="text-rose-500 w-5 h-5" />
              <h3 className="text-lg font-bold dark:text-white">Broken Links Audit</h3>
            </div>
            <div className="flex gap-2">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Internal</p>
                <p className="text-sm font-black text-rose-500">12</p>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-border-dark mx-2"></div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-500 uppercase">External</p>
                <p className="text-sm font-black text-amber-500">8</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-border-dark">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-background-dark/50 text-slate-500 font-bold">
                <tr>
                  <th className="px-4 py-2">Target URL</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-border-dark">
                <tr>
                  <td className="px-4 py-2 truncate max-w-[150px] dark:text-slate-300">/services/old-growth-plan</td>
                  <td className="px-4 py-2 font-bold text-rose-500">404</td>
                  <td className="px-4 py-2 text-slate-500">Internal</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 truncate max-w-[150px] dark:text-slate-300">partner-site.com/api/v1</td>
                  <td className="px-4 py-2 font-bold text-amber-500">503</td>
                  <td className="px-4 py-2 text-slate-500">External</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 truncate max-w-[150px] dark:text-slate-300">/blog/2023-trends-archive</td>
                  <td className="px-4 py-2 font-bold text-rose-500">410</td>
                  <td className="px-4 py-2 text-slate-500">Internal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="w-full mt-4 py-2 text-xs font-bold text-primary hover:underline">Export Full Link Report (.csv)</button>
        </div>
      </div>

      {/* Crawl Budget Optimization */}
      <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-6">
        <div className="flex items-center gap-2 mb-6">
          <Database className="text-primary w-5 h-5" />
          <h3 className="text-lg font-bold dark:text-white">Crawl Budget Optimization</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-bold dark:text-white flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary"></div>
              Redirect Management
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Eliminate redirect chains. Googlebot may stop following redirects after 5 hops, wasting crawl budget on non-existent final destinations.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold dark:text-white flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary"></div>
              Sitemap Efficiency
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ensure your XML sitemap only contains 200 OK URLs. Remove 404s, 301s, and non-canonical pages to guide bots to your most important content.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold dark:text-white flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary"></div>
              Large Site Handling
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              For sites with 50k+ pages, implement fragmented sitemaps and use the Indexing API for rapid discovery of new or updated high-value pages.
            </p>
          </div>
        </div>
      </div>

      {/* Security Audit Subsection */}
      <div className="bg-slate-900/5 dark:bg-background-dark/40 rounded-xl border border-slate-200 dark:border-border-dark p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ShieldAlert className="text-emerald-500 w-5 h-5" />
            <h3 className="text-lg font-bold dark:text-white">SEO Security Audit</h3>
          </div>
          <span className="text-xs font-bold text-emerald-500 uppercase">Secure</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark flex items-center gap-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold dark:text-white">Mixed Content</p>
              <p className="text-[10px] text-slate-500">0 Warnings detected</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark flex items-center gap-4">
            <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold dark:text-white">Insecure Cookies</p>
              <p className="text-[10px] text-rose-500">2 Flags missing (Secure)</p>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark flex items-center gap-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
              <CloudCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold dark:text-white">HSTS Status</p>
              <p className="text-[10px] text-emerald-500">Properly Implemented</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Findings Table */}
      <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
          <h3 className="text-lg font-bold dark:text-white">Technical Findings</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-border-dark rounded text-xs font-bold text-slate-600 dark:text-slate-400">All Issues</button>
            <button className="px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-border-dark rounded text-xs font-bold text-rose-500">Critical</button>
            <button className="px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-border-dark rounded text-xs font-bold text-amber-500">High</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-background-dark/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <th className="px-6 py-4">Finding Name</th>
                <th className="px-6 py-4">Severity</th>
                <th className="px-6 py-4">Impact Score</th>
                <th className="px-6 py-4">Consultant Recommendation</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-border-dark">
              {[
                { name: 'Broken Redirect Chains', sub: '42 URLs affected', sev: 'Critical', impact: 'High', color: 'bg-rose-500', rec: 'Flatten redirect chains to a single jump. These are leaking crawl budget and link equity.' },
                { name: 'Improper Canonical Tags', sub: '8 duplicate clusters', sev: 'High', impact: 'Med', color: 'bg-amber-500', rec: 'Ensure self-referencing canonicals are present and parameter-driven URLs point to root.' },
                { name: 'Missing Alt Text', sub: '112 Images', sev: 'Medium', impact: 'Low', color: 'bg-slate-500', rec: 'Batch update product gallery alt tags to improve accessibility and image SERP visibility.' },
              ].map((finding, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-border-dark/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold dark:text-white">{finding.name}</span>
                      <span className="text-xs text-slate-500">{finding.sub}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 ${finding.sev === 'Critical' ? 'bg-rose-500/10 text-rose-500' : finding.sev === 'High' ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-500/10 text-slate-500'} text-[10px] font-bold rounded uppercase`}>
                      {finding.sev}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium dark:text-white">{finding.impact}</span>
                      <div className="flex gap-0.5">
                        <div className="size-1 rounded-full bg-primary"></div>
                        <div className={`size-1 rounded-full ${finding.impact === 'Low' ? 'bg-slate-300 dark:bg-border-dark' : 'bg-primary'}`}></div>
                        <div className={`size-1 rounded-full ${finding.impact !== 'High' ? 'bg-slate-300 dark:bg-border-dark' : 'bg-primary'}`}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">{finding.rec}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50/50 dark:bg-background-dark/30 text-center">
          <button className="text-sm font-bold text-primary hover:underline">View All 18 Technical Findings</button>
        </div>
      </div>

      {/* Business Section: Revenue Impact */}
      <div className="bg-gradient-to-br from-primary to-indigo-900 rounded-xl p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <DollarSign className="w-32 h-32" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="bg-slate-50 text-primary rounded-full p-1 w-8 h-8" />
              Revenue Impact of Technical Issues
            </h3>
            <p className="text-slate-100/80 mb-6 max-w-2xl leading-relaxed">
              Resolving the <strong>Critical Redirect Chains</strong> and <strong>Indexability Errors</strong> is estimated to recapture approximately 15% of currently lost organic traffic. At current conversion rates, this represents a significant revenue lift.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary-200 opacity-70">Estimated Monthly Lift</p>
                <p className="text-2xl font-black text-white">$12,450 — $18,200</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
                <p className="text-[10px] uppercase font-bold tracking-widest text-primary-200 opacity-70">Projected Traffic Recapture</p>
                <p className="text-2xl font-black text-white">+22.4%</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button className="w-full py-3 bg-slate-50 text-primary font-bold rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all">Prioritize Fixes Now</button>
            <button className="w-full py-3 bg-white/20 text-white font-bold rounded-lg hover:bg-white/30 transition-all border border-white/30">View ROI Calculation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
