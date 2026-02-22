import { 
  FileText, 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  MoreVertical,
  MousePointer2,
  Layout,
  Type,
  Image as ImageIcon
} from 'lucide-react';

export default function OnPageSEO() {
  return (
    <div className="space-y-8 pb-12">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">On-Page Score</p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-black text-rose-500">42<span className="text-sm font-normal text-slate-400">/100</span></h4>
            <span className="text-[10px] text-rose-500 font-bold mb-1 uppercase">Critical</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Missing H1s</p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-black dark:text-white">18</h4>
            <span className="text-[10px] text-rose-500 font-bold mb-1 uppercase">High Risk</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Duplicate Titles</p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-black dark:text-white">42</h4>
            <span className="text-[10px] text-amber-500 font-bold mb-1 uppercase">Warning</span>
          </div>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Keyword Density</p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-black text-emerald-500">Optimal</h4>
            <span className="text-[10px] text-emerald-500 font-bold mb-1 uppercase">Good</span>
          </div>
        </div>
      </div>

      {/* Content Audit Table */}
      <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark flex items-center justify-between">
          <h3 className="text-lg font-bold dark:text-white">Content Quality Audit</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-border-dark rounded text-xs font-bold text-slate-600 dark:text-slate-400">All Pages</button>
            <button className="px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-border-dark rounded text-xs font-bold text-rose-500">Critical Issues</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-background-dark/50 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                <th className="px-6 py-4">Page URL</th>
                <th className="px-6 py-4">Title Tag</th>
                <th className="px-6 py-4">Meta Description</th>
                <th className="px-6 py-4">H1 Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-border-dark">
              {[
                { url: '/services/nexora-intelligence', title: 'NEXORA Intelligence', meta: 'Missing meta description', h1: 'Missing', status: 'Critical' },
                { url: '/blog/seo-trends-2024', title: 'SEO Trends 2024 (Duplicate)', meta: 'Learn about the latest SEO trends...', h1: 'Optimal', status: 'Warning' },
                { url: '/contact-us', title: 'Contact Us | Nexora', meta: 'Too short (42 chars)', h1: 'Optimal', status: 'Needs Work' },
              ].map((page, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-border-dark/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium dark:text-slate-300">{page.url}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs ${page.title.includes('Duplicate') ? 'text-amber-500 font-bold' : 'text-slate-500'}`}>{page.title}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs ${page.meta.includes('Missing') ? 'text-rose-500 font-bold' : 'text-slate-500'}`}>{page.meta}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${page.h1 === 'Missing' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                      {page.h1}
                    </span>
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
      </div>

      {/* Optimization Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-50/50 dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit mb-4">
            <Layout className="w-6 h-6" />
          </div>
          <h4 className="font-bold dark:text-white mb-2">Semantic Structure</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Ensure a logical heading hierarchy (H1 &rarr; H2 &rarr; H3). Only use one H1 per page and ensure it contains your primary keyword.
          </p>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500 w-fit mb-4">
            <Type className="w-6 h-6" />
          </div>
          <h4 className="font-bold dark:text-white mb-2">Keyword Optimization</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Avoid keyword stuffing. Aim for natural language that satisfies user intent while maintaining a 1-2% density for target terms.
          </p>
        </div>
        <div className="bg-slate-50/50 dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 w-fit mb-4">
            <ImageIcon className="w-6 h-6" />
          </div>
          <h4 className="font-bold dark:text-white mb-2">Image SEO</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Compress images and use descriptive filenames and alt text. This improves accessibility and helps with image search rankings.
          </p>
        </div>
      </div>
    </div>
  );
}
