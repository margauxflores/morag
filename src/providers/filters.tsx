import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useCallback,
} from 'react';

interface FiltersState {
  vessel: number;
  fiscalYear: string;
  quarter: string;
}

interface FiltersContextType {
  filters: FiltersState;
  setFilters: (newFilters: Partial<FiltersState>) => void;
}

const defaultContext: FiltersContextType = {
  filters: {
    vessel: 1,
    fiscalYear: '',
    quarter: '',
  },
  setFilters: () => {}, // No-op function as a placeholder
};

const FiltersContext = createContext<FiltersContextType>(defaultContext);

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};

export const FiltersProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFiltersState] = useState({ ...defaultContext.filters });

  const setFilters = useCallback((newFilters: Partial<FiltersState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  }, []);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
