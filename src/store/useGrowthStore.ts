import { create } from 'zustand';

// Definisi struktur data hasil audit
interface AuditResult {
  score: number;
  summary: string;
  pros: string[];
  cons: string[];
}

interface GrowthState {
  auditResult: AuditResult | null;
  setAuditResult: (data: AuditResult) => void;
  resetAudit: () => void;
}

export const useGrowthStore = create<GrowthState>((set) => ({
  auditResult: null, // Data awal kosong
  setAuditResult: (data) => set({ auditResult: data }),
  resetAudit: () => set({ auditResult: null }),
}));