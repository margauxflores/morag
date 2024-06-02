import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FiltersState {
  vessel: number | null;
  fiscalYear: string;
  quarter: string;
  startDate: string;
  endDate: string;
}

export interface FiltersStoreType {
  filters: FiltersState;
  setFilters: (newFilters: Partial<FiltersState>) => void;
}

const filterStore = (set: any, get: any) => ({
  filters: {
    vessel: null,
    fiscalYear: '',
    quarter: '',
    startDate: '',
    endDate: '',
  },

  setFilters: (state: FiltersState) => set({ filters: state }),
  getFilters: () => get().filters,
});

const useFilterStore = create(
  persist(filterStore, {
    name: 'filters',
  }),
);

export default useFilterStore;
