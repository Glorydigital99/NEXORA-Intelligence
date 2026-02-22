import { 
  Mail, 
  MessageSquare, 
  Bell, 
  Activity, 
  Search, 
  Settings as SettingsIcon,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black tracking-tight dark:text-white">System Settings</h2>
          <p className="text-sm text-slate-500 font-medium">Manage your organization's general configurations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Discard</button>
          <button className="px-6 py-2 text-sm font-semibold bg-primary text-white rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">Save Changes</button>
        </div>
      </div>

      <div className="max-w-5xl space-y-8">
        {/* General Settings */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold dark:text-white">General Settings</h3>
            <p className="text-sm text-slate-500 mt-1">Basic information about your organization.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Organization Name</label>
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white" placeholder="Growth Intel Agency" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Primary Website URL</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">https://</span>
                  <input className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-16 pr-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white" placeholder="www.growthintel.io" type="text"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 dark:border-slate-800"/>

        {/* Audit Preferences */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold dark:text-white">Audit Preferences</h3>
            <p className="text-sm text-slate-500 mt-1">Configure scan intervals and alerts.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Automatic Scan Frequency</label>
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white">
                  <option>Daily (High Priority)</option>
                  <option defaultValue="weekly">Weekly (Standard)</option>
                  <option>Monthly (Legacy)</option>
                </select>
              </div>
              <div className="space-y-4 pt-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Notification Channels</label>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <Mail className="text-slate-400 w-5 h-5" />
                    <span className="text-sm font-medium dark:text-slate-300">Email Summaries</span>
                  </div>
                  <div className="w-11 h-6 bg-primary rounded-full relative">
                    <div className="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 dark:border-border-dark"/>

        {/* API & Integrations */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold dark:text-white">API & Integrations</h3>
            <p className="text-sm text-slate-500 mt-1">Connect your data sources for deep analysis.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-100 dark:bg-slate-800/50 border-b border-slate-200 dark:border-border-dark">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Provider</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-border-dark">
                  <tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-orange-500/10 flex items-center justify-center text-orange-500">
                          <Activity className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold dark:text-white">Ahrefs API</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-medium text-emerald-500">Connected</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-xs font-bold text-primary hover:underline">Manage</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="border-slate-200 dark:border-border-dark"/>

        {/* Billing */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold dark:text-white">Billing & Usage</h3>
            <p className="text-sm text-slate-500 mt-1">Review your plan and usage.</p>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-xl flex items-start justify-between">
              <div className="space-y-4 flex-1 pr-12">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold dark:text-white">Pro Enterprise</h4>
                    <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded uppercase">Active Plan</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Renews on Oct 12, 2024.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                    <span>Scan Usage</span>
                    <span>72% of 5,000</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-white dark:bg-slate-800 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-sm dark:text-white">View Invoices</button>
                <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 shadow-md shadow-primary/20">Upgrade Plan</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
