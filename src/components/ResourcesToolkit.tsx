import { 
  Download, 
  RefreshCw, 
  Share2, 
  FileText, 
  Table, 
  Presentation, 
  CheckSquare, 
  BookOpen, 
  Calendar, 
  Mail,
  ArrowRight,
  ExternalLink,
  Layers
} from 'lucide-react';

export default function ResourcesToolkit() {
  return (
    <div className="space-y-12 pb-12">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold dark:text-white tracking-tight">Resources & Implementation Toolkit</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Empowering your team with the right tools, data, and playbooks to execute your growth strategy.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 dark:border-border-dark text-slate-600 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share Toolkit
          </button>
          <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh Assets
          </button>
        </div>
      </div>

      {/* Download Center */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Download className="text-primary w-5 h-5" />
          <h3 className="text-xl font-bold dark:text-white">Download Center</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark group hover:border-primary/50 transition-all cursor-pointer">
            <div className="size-12 bg-rose-500/10 text-rose-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="dark:text-white font-bold text-base mb-1">Full Audit Report</h4>
            <p className="text-slate-500 text-xs mb-4">64 Pages • 12.4 MB • PDF</p>
            <div className="flex items-center text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
              DOWNLOAD PDF <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark group hover:border-primary/50 transition-all cursor-pointer">
            <div className="size-12 bg-emerald-500/10 text-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Table className="w-6 h-6" />
            </div>
            <h4 className="dark:text-white font-bold text-base mb-1">Raw Metrics Export</h4>
            <p className="text-slate-500 text-xs mb-4">All Datasets • 2.1 MB • CSV</p>
            <div className="flex items-center text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
              DOWNLOAD CSV <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark group hover:border-primary/50 transition-all cursor-pointer">
            <div className="size-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Presentation className="w-6 h-6" />
            </div>
            <h4 className="dark:text-white font-bold text-base mb-1">Strategic Roadmap</h4>
            <p className="text-slate-500 text-xs mb-4">Board Ready • 8.5 MB • PPTX</p>
            <div className="flex items-center text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
              DOWNLOAD PPTX <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark group hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-tighter">Live Tool</div>
            <div className="size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h4 className="dark:text-white font-bold text-base mb-1">Implementation Guide</h4>
            <p className="text-slate-500 text-xs mb-4">Interactive • Cloud-Synced</p>
            <div className="flex items-center text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
              OPEN CHECKLIST <ExternalLink className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Growth Stack */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Layers className="text-primary w-5 h-5" />
            <h3 className="text-xl font-bold dark:text-white">Recommended Growth Stack</h3>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 dark:bg-border-dark px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">Curated for your tech profile</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-blue-500"></span> Search Optimization
            </p>
            <div className="bg-slate-50/50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark border-l-4 border-l-blue-500">
              <h5 className="dark:text-white font-bold text-sm mb-2">Ahrefs Premium</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">"Essential for tracking the 14 high-intent keyword gaps identified in the Content Audit."</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-purple-500"></span> Conv. Optimization
            </p>
            <div className="bg-slate-50/50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark border-l-4 border-l-purple-500">
              <h5 className="dark:text-white font-bold text-sm mb-2">Hotjar Plus</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">"To validate the high drop-off rate on your pricing page via heatmaps."</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-500"></span> Advanced Analytics
            </p>
            <div className="bg-slate-50/50 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-border-dark border-l-4 border-l-emerald-500">
              <h5 className="dark:text-white font-bold text-sm mb-2">Segment.com</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">"To fix the fragmented event tracking issues mentioned in the Data Audit."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Hub */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="text-primary w-5 h-5" />
          <h3 className="text-xl font-bold dark:text-white">Learning Hub & Playbooks</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group cursor-pointer">
            <div className="aspect-video rounded-xl bg-slate-200 dark:bg-slate-800 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="px-2 py-1 bg-primary text-[10px] font-bold text-white rounded uppercase">Guide</span>
              </div>
            </div>
            <h4 className="dark:text-white font-bold mb-1 group-hover:text-primary transition-colors">Guide to Core Web Vitals</h4>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <Calendar className="w-3 h-3" /> 12 min read • Technical
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-video rounded-xl bg-slate-200 dark:bg-slate-800 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white rounded uppercase">Template</span>
              </div>
            </div>
            <h4 className="dark:text-white font-bold mb-1 group-hover:text-primary transition-colors">Content Pillar Strategy Template</h4>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <FileText className="w-3 h-3" /> Interactive Sheet • Content
            </p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-video rounded-xl bg-slate-200 dark:bg-slate-800 mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="px-2 py-1 bg-purple-600 text-[10px] font-bold text-white rounded uppercase">Framework</span>
              </div>
            </div>
            <h4 className="dark:text-white font-bold mb-1 group-hover:text-primary transition-colors">Conversion Copywriting Framework</h4>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <RefreshCw className="w-3 h-3" /> 8 min read • CRO
            </p>
          </div>
        </div>
      </section>

      {/* Support Footer */}
      <section className="bg-primary/5 rounded-3xl border border-primary/20 p-8 lg:p-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-black dark:text-white mb-3">Ready to implement?</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg">Our growth consultants are ready to walk through the implementation checklist with your engineering and content teams.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_30px_-5px_rgba(42,25,230,0.5)] transition-all flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule Strategy Call
            </button>
            <button className="px-8 py-4 bg-white/5 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
