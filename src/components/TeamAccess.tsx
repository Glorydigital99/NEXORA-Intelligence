import { 
  UserPlus, 
  Search, 
  Users, 
  MoreVertical, 
  ShieldCheck, 
  BarChart3, 
  Eye, 
  History,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronRight,
  Bell
} from 'lucide-react';

export default function TeamAccess() {
  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight dark:text-white">Team Management</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Efficiently manage your audit team’s access levels and specific functional permissions across the intelligence suite.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20">
          <UserPlus className="w-4 h-4" />
          Invite New Member
        </button>
      </div>

      {/* Filters and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-slate-400 w-5 h-5" />
          </span>
          <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm dark:text-white" placeholder="Search members..." type="text"/>
        </div>
        <div className="relative">
          <select className="w-full appearance-none pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-sm text-slate-600 dark:text-slate-400">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Analyst</option>
            <option>Viewer</option>
          </select>
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown className="text-slate-400 w-5 h-5" />
          </span>
        </div>
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary">Active Members</span>
            <span className="text-xl font-black text-primary leading-none">12 / 20</span>
          </div>
          <Users className="text-primary/50 w-8 h-8" />
        </div>
      </div>

      {/* Member Table */}
      <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Team Member</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Access Level</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800/50">
              <tr className="hover:bg-slate-100 dark:hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">AR</div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm dark:text-white">Alex Rivera</span>
                      <span className="text-xs text-slate-500">alex@growthintel.com</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">Admin</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Active now</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors">
                    <MoreVertical className="text-slate-400 w-5 h-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Roles & Permissions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight dark:text-white">Roles & Permissions</h2>
          <button className="text-primary text-sm font-bold hover:underline">Customize Rules</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <ShieldCheck className="text-primary w-8 h-8" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">Full Control</span>
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Administrator</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Can manage billing, invite users, delete audits, and export sensitive reporting data.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs font-medium dark:text-slate-300"><CheckCircle className="text-emerald-500 w-4 h-4" /> Create & Delete Audits</li>
              <li className="flex items-center gap-2 text-xs font-medium dark:text-slate-300"><CheckCircle className="text-emerald-500 w-4 h-4" /> Manage Billing & API</li>
            </ul>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Analyst</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Can perform audits, create reports, and edit data. No administrative or billing access.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs font-medium dark:text-slate-300"><CheckCircle className="text-emerald-500 w-4 h-4" /> View & Edit Audits</li>
              <li className="flex items-center gap-2 text-xs font-medium text-slate-400"><XCircle className="text-slate-700 w-4 h-4" /> No Member Access</li>
            </ul>
          </div>
          <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Eye className="text-slate-400 w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2 dark:text-white">Viewer</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Read-only access to final reports and dashboard metrics. Ideal for clients or executives.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs font-medium dark:text-slate-300"><CheckCircle className="text-emerald-500 w-4 h-4" /> View Shared Reports</li>
              <li className="flex items-center gap-2 text-xs font-medium text-slate-400"><XCircle className="text-slate-700 w-4 h-4" /> No Editing Access</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-50/50 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <History className="text-primary w-5 h-5" />
          <h2 className="font-bold dark:text-white">Recent Access Changes</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm border-l-2 border-primary pl-4">
            <span className="font-bold dark:text-white">Alex Rivera</span>
            <span className="text-slate-500">changed role of</span>
            <span className="font-bold dark:text-white">Sarah Chen</span>
            <span className="text-slate-500">to</span>
            <span className="text-primary font-bold">Analyst</span>
            <span className="ml-auto text-xs text-slate-400 font-medium">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
