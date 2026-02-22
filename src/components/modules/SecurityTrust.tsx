import { 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Globe, 
  ShieldAlert,
  Verified,
  Server,
  Key,
  Eye
} from 'lucide-react';

export default function SecurityTrust() {
  return (
    <div className="space-y-8 pb-12">
      {/* Security Health Score */}
      <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-8 flex flex-col md:flex-row items-center gap-10">
        <div className="relative flex-shrink-0">
          <div className="size-40 rounded-full flex items-center justify-center transform -rotate-90" style={{ background: 'radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#10b981 94%, #f1f5f9 0)' }}>
            <div className="bg-slate-50/50 dark:bg-surface-dark size-[85%] rounded-full flex items-center justify-center transform rotate-90">
              <div className="text-center">
                <p className="text-3xl font-black dark:text-white">94</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">of 100</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-500 px-3 py-1 rounded-full text-[10px] font-black text-white shadow-xl">
            SECURE
          </div>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black mb-2 dark:text-white">Security & Trust Health</h2>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed mb-6">
            Your domain security is currently at <span className="text-emerald-500 font-bold">Tier 1 status</span>. Minor optimizations in cookie flags and HSTS headers can reach 100%.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <p className="text-[10px] font-bold uppercase">SSL Status</p>
              <p className="text-lg font-black leading-none">VALID</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
              <p className="text-[10px] font-bold uppercase">Malware Scan</p>
              <p className="text-lg font-black leading-none">CLEAN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SSL & Encryption */}
        <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="text-primary w-5 h-5" />
            <h3 className="text-lg font-bold dark:text-white">SSL & Encryption</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">Certificate Validity</span>
              </div>
              <span className="text-xs text-slate-500">Expires in 242 days</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">TLS 1.3 Support</span>
              </div>
              <span className="text-xs text-emerald-500 font-bold">Enabled</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <AlertTriangle className="text-amber-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">HSTS Header</span>
              </div>
              <span className="text-xs text-amber-500 font-bold">Missing "preload"</span>
            </div>
          </div>
        </div>

        {/* Domain Trust & Authority */}
        <div className="bg-slate-50/50 dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-sm p-6">
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-primary w-5 h-5" />
            <h3 className="text-lg font-bold dark:text-white">Domain Trust Signals</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <Verified className="text-emerald-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">Whois Privacy</span>
              </div>
              <span className="text-xs text-emerald-500 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <Globe className="text-emerald-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">Blacklist Check</span>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded">CLEAN</span>
              </div>
              <span className="text-xs text-slate-500">Checked 12 sources</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark">
              <div className="flex items-center gap-3">
                <Eye className="text-emerald-500 w-4 h-4" />
                <span className="text-sm font-medium dark:text-slate-300">Brand Mentions</span>
              </div>
              <span className="text-xs text-slate-500">1.2k Positive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Best Practices */}
      <div className="bg-slate-900 text-white rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldAlert className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-4">Security Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Server className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Implement CSP Headers</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Content Security Policy headers prevent XSS attacks and unauthorized script execution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Secure Cookie Flags</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Ensure all session cookies use the "Secure", "HttpOnly", and "SameSite=Strict" flags.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
