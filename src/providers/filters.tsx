import { PropsWithChildren, useState, createContext, useContext } from 'react';

interface FiltersState {
  vessel: string;
  fiscalYear: string;
  quarter: string;
}

interface FiltersContextType extends FiltersState {
  setFilters: (newFilters: Partial<FiltersState>) => void;
}

const defaultContext: FiltersContextType = {
  vessel: '',
  fiscalYear: '',
  quarter: '',
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

const FiltersProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<FiltersState>({
    vessel: '',
    fiscalYear: '',
    quarter: '',
  });

  const handleSetFilters = (newFilters: Partial<FiltersState>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <FiltersContext.Provider
      value={{ ...filters, setFilters: handleSetFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
