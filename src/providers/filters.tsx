import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export interface FiltersState {
  vessel: number | null;
  fiscalYear: string;
  quarter: string;
  startDate: string;
  endDate: string;
}

interface FiltersContextType {
  filters: FiltersState;
  setFilters: (newFilters: Partial<FiltersState>) => void;
}

const defaultContext: FiltersContextType = {
  filters: {
    vessel: null,
    fiscalYear: '',
    quarter: '',
    startDate: '',
    endDate: '',
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
  const [filters, setFiltersState] = useState<FiltersState>({
    ...defaultContext.filters,
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilters = useCallback(
    (newFilters: Partial<FiltersState>) => {
      setFiltersState((prev) => {
        const updatedFilters = { ...prev, ...newFilters };

        const params = new URLSearchParams();
        if (updatedFilters.vessel)
          params.set('vessel', updatedFilters.vessel.toString());
        if (updatedFilters.fiscalYear)
          params.set('fiscalYear', updatedFilters.fiscalYear);
        if (updatedFilters.quarter)
          params.set('quarter', updatedFilters.quarter);
        if (updatedFilters.startDate)
          params.set('startDate', updatedFilters.startDate);
        if (updatedFilters.endDate)
          params.set('endDate', updatedFilters.endDate);

        const searchParamsString = params.toString();
        router.replace(`${pathname}?${searchParamsString}`);

        return updatedFilters;
      });
    },
    [router, pathname],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const storedFilters: Partial<FiltersState> = {};

    if (params.has('vessel'))
      storedFilters.vessel = parseInt(params.get('vessel')!, 10);
    if (params.has('fiscalYear'))
      storedFilters.fiscalYear = params.get('fiscalYear')!;
    if (params.has('quarter')) storedFilters.quarter = params.get('quarter')!;
    if (params.has('startDate'))
      storedFilters.startDate = params.get('startDate')!;
    if (params.has('endDate')) storedFilters.endDate = params.get('endDate')!;

    setFiltersState((prev) => ({ ...prev, ...storedFilters }));
  }, []);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
