import { 
  FileText, 
  Bolt, 
  Clock, 
  Users, 
  Activity, 
  Search, 
  CreditCard, 
  Target, 
  Eye, 
  Download, 
  Share2, 
  PlusCircle,
  Sparkles,
  RefreshCw,
  Calendar,
  ArrowRight
} from 'lucide-react';

export default function Reports() {
  return (
    <div className="space-y-10 pb-12">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black tracking-tight dark:text-white mb-1">Reports Management</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Search growth reports, clients, or audits...</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 whitespace-nowrap">
          <PlusCircle className="w-5 h-5" />
          Generate New Report
        </button>
      </div>

      {/* Analytics Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <FileText className="w-16 h-16" />
          </div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Total Reports Generated</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black dark:text-white">1,284</span>
            <span className="text-xs font-bold text-emerald-500">+12.4%</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-primary">
            <Bolt className="w-16 h-16" />
          </div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Most Requested Type</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold dark:text-white">SEO Deep-Dive</span>
            <span className="text-xs font-bold text-slate-400">(42%)</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Clock className="w-16 h-16" />
          </div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Scheduled Reports</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black dark:text-white">24</span>
            <span className="text-xs font-bold text-slate-400">Active</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-6 rounded-xl flex flex-col gap-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-purple-500">
            <Users className="w-16 h-16" />
          </div>
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Collaboration Rate</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black dark:text-white">88%</span>
            <span className="text-xs font-bold text-emerald-500">+4%</span>
          </div>
        </div>
      </section>

      {/* Report Templates */}
      <section>
        <h3 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-primary rounded-full"></span>
          Report Templates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Full Growth Audit', desc: 'Comprehensive analysis of all marketing channels.', icon: Activity, color: 'text-primary', bg: 'bg-primary/10' },
            { title: 'SEO Deep-Dive', desc: 'Technical SEO audit and keyword mapping.', icon: Search, color: 'text-purple-500', bg: 'bg-purple-500/10' },
            { title: 'Revenue Roadmap', desc: 'Projected growth curves and LTV/CAC modeling.', icon: CreditCard, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            { title: 'Competitive Analysis', desc: 'Market share teardown and benchmarking.', icon: Target, color: 'text-orange-500', bg: 'bg-orange-500/10' },
          ].map((template, i) => (
            <div key={i} className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-xl hover:shadow-lg transition-all cursor-pointer group">
              <div className={`h-12 w-12 ${template.bg} rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors`}>
                <template.icon className={`${template.color} group-hover:text-white w-6 h-6`} />
              </div>
              <h4 className="font-bold dark:text-white mb-1">{template.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{template.desc}</p>
              <button className="text-xs font-bold text-primary flex items-center gap-1 uppercase tracking-wider">
                Select Template <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
            <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
            Recent Activity
          </h3>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900/50 border-b border-slate-200 dark:border-border-dark">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Report Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Type</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold dark:text-white">Q3 Alpha Strategy Audit</span>
                    <span className="text-xs text-slate-400">Alpha Solutions Inc.</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">Full Audit</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 2023</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-emerald-500 font-bold text-xs uppercase">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Ready
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"><Eye className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"><Download className="w-4 h-4" /></button>
                    <button className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"><Share2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Automated Reporting */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
            Automated Reporting
          </h3>
          <div className="flex flex-col gap-4">
            <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-4 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold dark:text-white">Weekly Executive Summary</h4>
                  <p className="text-xs text-slate-500">Every Monday 08:00 AM</p>
                </div>
              </div>
              <div className="w-11 h-6 bg-primary rounded-full relative">
                <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
          <div className="h-16 w-16 bg-white dark:bg-white/10 rounded-full flex items-center justify-center mb-4">
            <Sparkles className="text-primary w-8 h-8" />
          </div>
          <h3 className="text-xl font-black dark:text-white mb-2">Power up with Nexora AI</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">Automate your entire auditing workflow with our new AI integration.</p>
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/30 hover:-translate-y-1 transition-transform">
            Upgrade to AI Assistant
          </button>
        </div>
      </section>
    </div>
  );
}
