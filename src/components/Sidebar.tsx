import { Page, ModuleSubPage } from '@/src/types';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Wrench, 
  Users, 
  Layers, 
  Settings, 
  LogOut,
  ChevronRight,
  Shield,
  Gavel
} from 'lucide-react';

interface SidebarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  currentModuleSubPage?: ModuleSubPage;
  setModuleSubPage?: (subPage: ModuleSubPage) => void;
}

export default function Sidebar({ currentPage, setPage, currentModuleSubPage, setModuleSubPage }: SidebarProps) {
  const navItems = [
    { id: Page.Dashboard, label: 'Dashboard', icon: LayoutDashboard },
    { id: Page.ModuleAnalysis, label: 'Module Analysis', icon: BarChart3 },
    { id: Page.RevenueRoadmap, label: 'Revenue Roadmap', icon: TrendingUp },
    { id: Page.ResourcesToolkit, label: 'Resources & Toolkit', icon: Wrench },
    { id: Page.Reports, label: 'Reports', icon: FileText },
    { id: Page.TeamAccess, label: 'Team Access', icon: Users },
    { id: Page.Integrations, label: 'Integrations', icon: Layers },
    { id: Page.Settings, label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark fixed h-full z-50">
      <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => setPage(Page.Landing)}>
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <BarChart3 className="text-white w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold tracking-tight dark:text-white uppercase">NEXORA</span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Audit 3.0</span>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
              currentPage === item.id 
                ? 'bg-primary/10 text-primary font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <item.icon className={`w-5 h-5 ${currentPage === item.id ? 'text-primary' : 'group-hover:text-primary'}`} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
        
        <div className="pt-4 pb-2 px-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legal & Security</p>
        </div>
        <button
          onClick={() => setPage(Page.Security)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            currentPage === Page.Security 
              ? 'bg-primary/10 text-primary font-semibold' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Shield className="w-5 h-5" />
          <span className="text-sm font-medium">Security</span>
        </button>
        <button
          onClick={() => setPage(Page.Legal)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
            currentPage === Page.Legal 
              ? 'bg-primary/10 text-primary font-semibold' 
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Gavel className="w-5 h-5" />
          <span className="text-sm font-medium">Legal Hub</span>
        </button>
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
          <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOJMXRz6_oC_dfXPB8Dbk3waLu967YA3Jk4oXvOgltqLHT2EoVhjP_fGZHdfRhNCJcuPeOy100JzZhkY0OyFJqLoB5q6hvxrrH4rGmg0WSLmOEn1D4Lqz-FIBsL2FVCb3d2TuoBK8tJ-iI-xK12ucYp9F00RK7ATnb4ba_SHlcLeMQ3Vhnz_q4mvMtBSvZQcXqQsoHo45xAEQK05ZgYuhX-f5eP5gt9uCWT8aNhBWGYHVfO6oRS2unmuE6_puP3qI_Pq6dCDa_rA" 
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs font-semibold truncate dark:text-white">Alex Rivera</span>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Pro Plan</span>
          </div>
        </div>
        <button className="w-full mt-2 flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-950/20 hover:text-red-600 rounded-lg transition-colors group">
          <LogOut className="w-4 h-4 group-hover:text-red-600" />
          <span className="text-xs font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
