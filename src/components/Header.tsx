import { Search, Bell, ChevronRight } from 'lucide-react';

interface HeaderProps {
  title: string;
  breadcrumbs?: string[];
}

export default function Header({ title, breadcrumbs }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white/50 dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          {breadcrumbs && (
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-500 mb-0.5">
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {crumb}
                  {index < breadcrumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
                </span>
              ))}
            </div>
          )}
          <h2 className="text-lg font-bold dark:text-white">{title}</h2>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-primary transition-colors" />
          <input 
            className="block w-64 pl-10 pr-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder-slate-500 transition-all text-sm outline-none" 
            placeholder="Search analytics..." 
            type="text"
          />
        </div>
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
          <Bell className="w-5 h-5 text-slate-500" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold leading-tight dark:text-white">Alex Sterling</p>
            <p className="text-[10px] text-slate-400">Chief Consultant</p>
          </div>
          <div className="size-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyDjNc9RdyOcSP-AeP4nrMpy-aO5bJxv1EqkjN4bsMkkh0aiofMTPUi7eI7kcvrW5i4e79Cf4e5aM9zWONkKMUQ5lXToz-vP_Z4T-37oSKK3s_o1PJ5dL24VBcV4NGnJZypxGkU9zztzbFW_oomq3kGDkhIAhFhAHO1rsl6MdJAQNpH6-DX9-055LyMUD3dmEjp8pVmT9i4ciLyYP9Mgpyfg77AtZSb_YidzjFadKdg6zewOprUtBG1TgQmQaVPwWTkB6Fvou32Q" 
              alt="User profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
