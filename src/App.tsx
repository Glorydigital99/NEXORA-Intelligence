import { useState, useEffect } from 'react';
import { Page, ModuleSubPage } from '@/src/types';
import Sidebar from '@/src/components/Sidebar';
import Header from '@/src/components/Header';
import LandingPage from '@/src/components/LandingPage';
import Dashboard from '@/src/components/Dashboard';
import RevenueRoadmap from '@/src/components/RevenueRoadmap';
import ResourcesToolkit from '@/src/components/ResourcesToolkit';
import Reports from '@/src/components/Reports';
import TeamAccess from '@/src/components/TeamAccess';
import Integrations from '@/src/components/Integrations';
import Settings from '@/src/components/Settings';
import ContentAuthority from '@/src/components/modules/ContentAuthority';
import OnPageSEO from '@/src/components/modules/OnPageSEO';
import TechnicalSEO from '@/src/components/modules/TechnicalSEO';
import UXCRO from '@/src/components/modules/UXCRO';
import MarketPositioning from '@/src/components/modules/MarketPositioning';
import SecurityTrust from '@/src/components/modules/SecurityTrust';

// --- SUNTIKAN 1: IMPORT FORM AUDIT ---
import Auditform from '@/src/components/Auditform'; 

import { motion, AnimatePresence } from 'motion/react';
import { Settings2, Construction } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Landing);
  const [currentModuleSubPage, setCurrentModuleSubPage] = useState<ModuleSubPage>(ModuleSubPage.ContentAuthority);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, currentModuleSubPage]);

  if (currentPage === Page.Landing) {
    return <LandingPage setPage={setCurrentPage} />;
  }

  const renderModuleSubPage = () => {
    switch (currentModuleSubPage) {
      case ModuleSubPage.ContentAuthority: return <ContentAuthority />;
      case ModuleSubPage.OnPageSEO: return <OnPageSEO />;
      case ModuleSubPage.TechnicalSEO: return <TechnicalSEO />;
      case ModuleSubPage.UXCRO: return <UXCRO />;
      case ModuleSubPage.MarketPositioning: return <MarketPositioning />;
      case ModuleSubPage.SecurityTrust: return <SecurityTrust />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Construction className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">{currentModuleSubPage.replace('-', ' ').toUpperCase()} Under Construction</h3>
              <p className="text-slate-500 max-w-xs mx-auto mt-2">This module is currently being optimized for high-fidelity intelligence output.</p>
            </div>
          </div>
        );
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Dashboard:
        // --- SUNTIKAN 2: PASANG FORM DI ATAS DASHBOARD ---
        return (
          <div className="space-y-10">
            <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-black tracking-tight dark:text-white uppercase">Run AI Growth Audit</h3>
                <p className="text-xs text-slate-500">Analyze any website URL to generate real-time growth intelligence.</p>
              </div>
              <Auditform />
            </section>
            
            <Dashboard setPage={setCurrentPage} setModuleSubPage={setCurrentModuleSubPage} />
          </div>
        );
      case Page.RevenueRoadmap:
        return <RevenueRoadmap />;
      case Page.ResourcesToolkit:
        return <ResourcesToolkit />;
      case Page.Reports:
        return <Reports />;
      case Page.TeamAccess:
        return <TeamAccess />;
      case Page.Integrations:
        return <Integrations />;
      case Page.Settings:
        return <Settings />;
      case Page.ModuleAnalysis:
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { id: ModuleSubPage.ContentAuthority, label: 'Content Authority' },
                { id: ModuleSubPage.OnPageSEO, label: 'On-Page SEO' },
                { id: ModuleSubPage.TechnicalSEO, label: 'Technical SEO' },
                { id: ModuleSubPage.UXCRO, label: 'UX/CRO' },
                { id: ModuleSubPage.MarketPositioning, label: 'Market Positioning' },
                { id: ModuleSubPage.OffPageAuthority, label: 'Off-Page Authority' },
                { id: ModuleSubPage.SecurityTrust, label: 'Security & Trust' },
              ].map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setCurrentModuleSubPage(sub.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
                    currentModuleSubPage === sub.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
            {renderModuleSubPage()}
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Construction className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold dark:text-white">{currentPage.toUpperCase()} Page Under Construction</h3>
              <p className="text-slate-500 max-w-xs mx-auto mt-2">We are currently building this section to provide the best growth intelligence experience.</p>
            </div>
            <button 
              onClick={() => setCurrentPage(Page.Dashboard)}
              className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case Page.Dashboard: return 'Executive Summary';
      case Page.ModuleAnalysis: return currentModuleSubPage.replace('-', ' ').toUpperCase();
      case Page.RevenueRoadmap: return 'Revenue Roadmap';
      case Page.ResourcesToolkit: return 'Resources & Toolkit';
      case Page.Reports: return 'Reports';
      case Page.TeamAccess: return 'Team Access';
      case Page.Integrations: return 'Integrations';
      case Page.Settings: return 'Settings';
      case Page.Security: return 'Security & Trust';
      case Page.Legal: return 'Legal Hub';
      default: return 'NEXORA';
    }
  };

  const getBreadcrumbs = () => {
    const crumbs = ['NEXORA'];
    if (currentPage === Page.ModuleAnalysis) {
      crumbs.push('Module Analysis');
    }
    return crumbs;
  };

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        currentModuleSubPage={currentModuleSubPage}
        setModuleSubPage={setCurrentModuleSubPage}
      />
      <main className="flex-1 ml-64 flex flex-col min-w-0">
        <Header title={getPageTitle()} breadcrumbs={getBreadcrumbs()} />
        <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${currentModuleSubPage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}