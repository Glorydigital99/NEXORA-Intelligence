import { 
  Plus, 
  MoreHorizontal,
  CheckCircle2,
  AlertTriangle,
  CloudCheck,
  Lock,
  Database,
  Search,
  Link
} from 'lucide-react';

export default function Integrations() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold dark:text-white">API & Data Integrations</h2>
          <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-primary/10 rounded-full">
            <span className="flex size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-primary">12/20 Connected</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input className="bg-slate-100 dark:bg-slate-800/50 border-none rounded-lg pl-9 pr-4 py-1.5 text-xs focus:ring-1 focus:ring-primary w-64 transition-all outline-none dark:text-white" placeholder="Search tools..." type="text"/>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-all">
            <Plus className="w-4 h-4" />
            Custom API
          </button>
        </div>
      </div>

      {/* Data Sync Health */}
      <div className="p-6 bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold dark:text-white">Growth Engine Data Feed</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-emerald-500"></span>
                System Operational
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest mb-1">Last Successful Sync</span>
              <span className="text-sm font-semibold dark:text-white">Today, 10:42 AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-widest mb-1">Data Points Processed</span>
              <span className="text-sm font-semibold dark:text-white">1,248,392</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors dark:text-white">
            View Detailed Logs
          </button>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Google Search Console', desc: 'Track site search performance and organic traffic.', status: 'Healthy', sync: '2m ago', icon: 'GSC' },
          { name: 'Ahrefs', desc: 'Access backlink profiles and keyword rankings.', status: 'Not Linked', sync: 'Setup required', icon: 'Ahrefs' },
          { name: 'SEMrush', desc: 'Token expired. Please re-authenticate.', status: 'Auth Error', sync: 'API key invalid', icon: 'SEMrush', error: true },
        ].map((tool, i) => (
          <div key={i} className={`bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark p-5 rounded-xl hover:border-primary/50 transition-all group flex flex-col justify-between ${tool.error ? 'bg-rose-50/20 dark:bg-rose-500/5 border-rose-500/20' : ''}`}>
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center p-2.5">
                  <div className="w-full h-full bg-slate-300 rounded"></div>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${tool.status === 'Healthy' ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : tool.status === 'Auth Error' ? 'bg-rose-100 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  {tool.status}
                </span>
              </div>
              <h3 className="font-bold text-base dark:text-white mb-1">{tool.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{tool.desc}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] ${tool.error ? 'text-rose-500' : 'text-slate-400 dark:text-slate-500'}`}>{tool.sync}</span>
              <button className={`text-xs font-bold px-4 py-2 rounded-lg ${tool.status === 'Not Linked' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white'}`}>
                {tool.status === 'Not Linked' ? 'Connect' : tool.status === 'Auth Error' ? 'Fix' : 'Manage'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Webhooks */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold dark:text-white">Custom Webhooks</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage incoming and outgoing data streams.</p>
          </div>
          <button className="text-xs font-bold px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 transition-colors flex items-center gap-2 dark:text-white">
            <Link className="w-4 h-4" />
            New Webhook
          </button>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 uppercase text-[10px] font-bold tracking-widest border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              <tr className="hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 font-semibold dark:text-white">Audit Finished Hook</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">OUTBOUND</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-medium dark:text-slate-300">Active</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
